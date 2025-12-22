"use client";

import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import type { Station } from "@/lib/stations";
import { STATIONS } from "@/lib/stations";

type ReactiveMode = "off" | "real" | "fake";

export type NowPlaying = {
  title: string; // Often "Artist - Song" depending on playout metadata
  startTime?: string;
  artworkUrl?: string;
  artworkUrlLarge?: string;
};

type PlayerState = {
  station: Station;
  isPlaying: boolean;
  isBuffering: boolean;
  volume: number; // 0..1
  error?: string;

  level: number; // 0..1
  reactiveMode: ReactiveMode;

  // NEW: now playing for the ACTIVE station
  nowPlaying?: NowPlaying;
  // NEW: small history list for active station
  history: NowPlaying[];

  setStationBySlug: (slug: Station["slug"]) => void;
  toggleStation: () => void;

  togglePlay: () => void;
  play: () => void;
  pause: () => void;

  setVolume: (v: number) => void;
};

const PlayerContext = createContext<PlayerState | null>(null);

export function useRadioPlayer() {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error("useRadioPlayer must be used within RadioPlayerProvider");
  return ctx;
}

const STORAGE_KEYS = {
  slug: "vvr_station_slug",
  volume: "vvr_volume",
};

function getStationBySlug(slug: string): Station | undefined {
  return STATIONS.find((s) => s.slug === slug);
}

/**
 * Radio.co "stationId" is the "sXXXXXXXXX" segment used in stream URLs.
 * Example stream: https://s5.radio.co/s768575890/listen -> stationId = s768575890 :contentReference[oaicite:2]{index=2}
 */
function extractRadioCoStationId(streamUrl: string): string | null {
  const m = streamUrl.match(/\/(s[a-z0-9]+)\/listen/i);
  return m?.[1] ?? null;
}

type RadioCoStatusResponse = {
  status?: string;
  streaming_hostname?: string;
  current_track?: {
    title?: string;
    start_time?: string;
    artwork_url?: string;
    artwork_url_large?: string;
  };
  history?: Array<{
    title?: string;
    artwork_url?: string;
    artwork_url_large?: string;
  }>;
};

export default function RadioPlayerProvider({ children }: { children: React.ReactNode }) {
  // One audio element per station
  const audioMapRef = useRef<Record<string, HTMLAudioElement>>({});
  const activeSlugRef = useRef<Station["slug"]>(STATIONS[0].slug);

  // WebAudio (real)
  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserMapRef = useRef<Record<string, AnalyserNode>>({});
  const audioReactiveReadyRef = useRef(false);

  // RAF loop
  const rafRef = useRef<number | null>(null);

  // Synthetic fallback state (fake)
  const fakePhaseRef = useRef(0);
  const fakeLevelRef = useRef(0);

  const [stationSlug, setStationSlug] = useState<Station["slug"]>(STATIONS[0].slug);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [volume, setVolumeState] = useState(0.85);
  const [error, setError] = useState<string | undefined>(undefined);

  const [level, setLevel] = useState(0);
  const [reactiveMode, setReactiveMode] = useState<ReactiveMode>("off");

  // NEW: now playing cache per station slug
  const [npBySlug, setNpBySlug] = useState<Record<string, { now?: NowPlaying; history: NowPlaying[] }>>({});

  const station = useMemo(() => getStationBySlug(stationSlug) ?? STATIONS[0], [stationSlug]);

  const nowPlaying = npBySlug[stationSlug]?.now;
  const history = npBySlug[stationSlug]?.history ?? [];

  useEffect(() => {
    activeSlugRef.current = stationSlug;
    localStorage.setItem(STORAGE_KEYS.slug, stationSlug);
  }, [stationSlug]);

  useEffect(() => {
    const savedSlug = localStorage.getItem(STORAGE_KEYS.slug);
    if (savedSlug) {
      const found = getStationBySlug(savedSlug);
      if (found) setStationSlug(found.slug);
    }

    const savedVol = Number(localStorage.getItem(STORAGE_KEYS.volume));
    if (!Number.isNaN(savedVol) && savedVol >= 0 && savedVol <= 1) {
      setVolumeState(savedVol);
    }
  }, []);

  // Build audio elements once
  useEffect(() => {
    const map: Record<string, HTMLAudioElement> = {};

    for (const s of STATIONS) {
      const a = document.createElement("audio");
      a.preload = "none";
      a.crossOrigin = "anonymous";
      a.playsInline = true;
      a.src = s.streamUrl;
      a.volume = volume;

      const isActive = () => activeSlugRef.current === s.slug;

      const onPlaying = () => {
        if (!isActive()) return;
        setIsBuffering(false);
        setIsPlaying(true);
        setError(undefined);
        startLevelLoop();
      };

      const onPause = () => {
        if (!isActive()) return;
        setIsPlaying(false);
        setIsBuffering(false);
        setLevel(0);
        setReactiveMode("off");
        stopLevelLoop();
      };

      const onWaiting = () => {
        if (!isActive()) return;
        setIsBuffering(true);
        startLevelLoop();
      };

      const onStalled = () => {
        if (!isActive()) return;
        setIsBuffering(true);
        startLevelLoop();
      };

      const onError = () => {
        if (!isActive()) return;
        setIsBuffering(false);
        setIsPlaying(false);
        setLevel(0);
        setReactiveMode("off");
        stopLevelLoop();
        setError("Stream error. Try again in a moment.");
      };

      a.addEventListener("playing", onPlaying);
      a.addEventListener("pause", onPause);
      a.addEventListener("waiting", onWaiting);
      a.addEventListener("stalled", onStalled);
      a.addEventListener("error", onError);

      (a as any).__cleanup = () => {
        a.removeEventListener("playing", onPlaying);
        a.removeEventListener("pause", onPause);
        a.removeEventListener("waiting", onWaiting);
        a.removeEventListener("stalled", onStalled);
        a.removeEventListener("error", onError);
      };

      map[s.slug] = a;
    }

    audioMapRef.current = map;

    return () => {
      stopLevelLoop();
      setLevel(0);
      setReactiveMode("off");

      for (const slug of Object.keys(audioMapRef.current)) {
        const a = audioMapRef.current[slug];
        try {
          a.pause();
          a.src = "";
          a.load();
        } catch {}
        try {
          (a as any).__cleanup?.();
        } catch {}
      }
      audioMapRef.current = {};

      try {
        audioCtxRef.current?.close();
      } catch {}
      audioCtxRef.current = null;
      analyserMapRef.current = {};
      audioReactiveReadyRef.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.volume, String(volume));
    const map = audioMapRef.current;
    for (const slug of Object.keys(map)) {
      map[slug].volume = volume;
    }
  }, [volume]);

  // ---------- REAL analyser setup ----------
  const ensureAudioReactive = () => {
    if (audioReactiveReadyRef.current) return;

    const AudioCtx = (window.AudioContext || (window as any).webkitAudioContext) as typeof AudioContext | undefined;
    if (!AudioCtx) return;

    const ctx = new AudioCtx();
    audioCtxRef.current = ctx;

    const map = audioMapRef.current;
    const analyserMap: Record<string, AnalyserNode> = {};

    try {
      for (const s of STATIONS) {
        const el = map[s.slug];
        if (!el) continue;

        const source = ctx.createMediaElementSource(el);
        const analyser = ctx.createAnalyser();
        analyser.fftSize = 256;
        analyser.smoothingTimeConstant = 0.78;

        source.connect(analyser);
        analyser.connect(ctx.destination);

        analyserMap[s.slug] = analyser;
      }

      analyserMapRef.current = analyserMap;
      audioReactiveReadyRef.current = true;
    } catch {
      try {
        ctx.close();
      } catch {}
      audioCtxRef.current = null;
      analyserMapRef.current = {};
      audioReactiveReadyRef.current = false;
    }
  };

  // ---------- LEVEL loop (real or fake) ----------
  const readRealLevel = (slug: string): number | null => {
    const analyser = analyserMapRef.current[slug];
    if (!analyser) return null;

    try {
      const data = new Uint8Array(analyser.fftSize);
      analyser.getByteTimeDomainData(data);

      let sum = 0;
      for (let i = 0; i < data.length; i++) {
        const v = (data[i] - 128) / 128;
        sum += v * v;
      }
      const rms = Math.sqrt(sum / data.length);
      return Math.max(0, Math.min(1, rms * 2.4));
    } catch {
      return null;
    }
  };

  const readFakeLevel = (): number => {
    const dt = 1 / 60;
    fakePhaseRef.current += dt;

    const t = fakePhaseRef.current;
    const slow = (Math.sin(t * 2.4) + 1) / 2;
    const fast = (Math.sin(t * 10.5) + 1) / 2;
    const jitter = Math.random() * 0.16;

    const raw = 0.16 + slow * 0.26 + fast * 0.20 + jitter;

    const prev = fakeLevelRef.current;
    const next = prev * 0.84 + raw * 0.16;
    fakeLevelRef.current = next;

    return Math.max(0, Math.min(1, next));
  };

  const startLevelLoop = () => {
    if (rafRef.current) return;

    const tick = () => {
      const slug = activeSlugRef.current;
      const activeEl = audioMapRef.current[slug];

      const shouldRun = !!activeEl && (!activeEl.paused || isBuffering);
      if (!shouldRun) {
        setLevel(0);
        setReactiveMode("off");
        rafRef.current = null;
        return;
      }

      let nextLevel: number | null = readRealLevel(slug);

      if (nextLevel !== null) {
        setReactiveMode("real");
      } else {
        nextLevel = readFakeLevel();
        setReactiveMode("fake");
      }

      setLevel(nextLevel);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
  };

  const stopLevelLoop = () => {
    if (!rafRef.current) return;
    cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
  };

  // ---------- NOW PLAYING (Radio.co public status API) ----------
  const fetchNowPlayingForStation = async (s: Station) => {
    const stationId = extractRadioCoStationId(s.streamUrl);
    if (!stationId) return;

    // Public status API pattern :contentReference[oaicite:3]{index=3}
    const url = `https://public.radio.co/stations/${stationId}/status`;

    try {
      const res = await fetch(url, { cache: "no-store" });
      if (!res.ok) return;

      const json = (await res.json()) as RadioCoStatusResponse;

      const title = json.current_track?.title?.trim();
      const now: NowPlaying | undefined = title
        ? {
            title,
            startTime: json.current_track?.start_time,
            artworkUrl: json.current_track?.artwork_url,
            artworkUrlLarge: json.current_track?.artwork_url_large,
          }
        : undefined;

      const hist: NowPlaying[] =
        json.history
          ?.map((h) => ({
            title: (h.title ?? "").trim(),
            artworkUrl: h.artwork_url,
            artworkUrlLarge: h.artwork_url_large,
          }))
          .filter((h) => !!h.title) ?? [];

      setNpBySlug((prev) => ({
        ...prev,
        [s.slug]: { now, history: hist },
      }));
    } catch {
      // ignore
    }
  };

  // Poll now-playing ONLY while active station is playing/buffering
  useEffect(() => {
    const active = station;
    if (!isPlaying && !isBuffering) return;

    // Immediately fetch once
    fetchNowPlayingForStation(active);

    const id = window.setInterval(() => {
      fetchNowPlayingForStation(active);
    }, 15000);

    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stationSlug, isPlaying, isBuffering]);

  // ---------- Player controls ----------
  const pauseAll = () => {
    const map = audioMapRef.current;
    for (const slug of Object.keys(map)) {
      try {
        map[slug].pause();
      } catch {}
    }
  };

  const playActive = () => {
    ensureAudioReactive();

    const ctx = audioCtxRef.current;
    if (ctx && ctx.state === "suspended") ctx.resume().catch(() => {});

    const map = audioMapRef.current;
    const a = map[stationSlug];
    if (!a) return;

    setError(undefined);
    setIsBuffering(true);

    for (const slug of Object.keys(map)) {
      if (slug !== stationSlug) {
        try {
          map[slug].pause();
        } catch {}
      }
    }

    try {
      a.pause();
      a.load();
    } catch {}

    a.play().catch(() => {
      setIsBuffering(false);
      setIsPlaying(false);
      setLevel(0);
      setReactiveMode("off");
      stopLevelLoop();
      setError("Playback blocked by browser. Press Play again.");
    });
  };

  const play = () => playActive();

  const pause = () => {
    const a = audioMapRef.current[stationSlug];
    if (!a) return;
    a.pause();
    setIsPlaying(false);
    setIsBuffering(false);
    setLevel(0);
    setReactiveMode("off");
    stopLevelLoop();
  };

  const togglePlay = () => {
    const a = audioMapRef.current[stationSlug];
    if (!a) return;
    if (!a.paused) pause();
    else play();
  };

  const setStationBySlug = (slug: Station["slug"]) => {
    const found = getStationBySlug(slug);
    if (!found) {
      setError(`Unknown station slug: "${slug}"`);
      return;
    }

    const current = audioMapRef.current[stationSlug];
    const next = audioMapRef.current[found.slug];
    const wasPlaying = current ? !current.paused : isPlaying;

    setError(undefined);
    setIsBuffering(false);
    setIsPlaying(false);
    setLevel(0);
    setReactiveMode("off");

    try {
      current?.pause();
    } catch {}

    setStationSlug(found.slug);

    if (wasPlaying) {
      setTimeout(() => {
        pauseAll();
        if (!next) return;

        setIsBuffering(true);
        ensureAudioReactive();

        const ctx = audioCtxRef.current;
        if (ctx && ctx.state === "suspended") ctx.resume().catch(() => {});

        try {
          next.pause();
          next.load();
        } catch {}

        next.play().catch(() => {
          setIsBuffering(false);
          setIsPlaying(false);
          setLevel(0);
          setReactiveMode("off");
          stopLevelLoop();
          setError("Playback blocked by browser. Press Play.");
        });
      }, 0);
    }
  };

  const toggleStation = () => {
    const idx = STATIONS.findIndex((s) => s.slug === stationSlug);
    const nextIdx = idx === 0 ? 1 : 0;
    setStationBySlug(STATIONS[nextIdx].slug);
  };

  const setVolume = (v: number) => {
    setVolumeState(Math.max(0, Math.min(1, v)));
  };

  const value: PlayerState = {
    station,
    isPlaying,
    isBuffering,
    volume,
    error,
    level,
    reactiveMode,

    nowPlaying,
    history,

    setStationBySlug,
    toggleStation,
    togglePlay,
    play,
    pause,
    setVolume,
  };

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
}
