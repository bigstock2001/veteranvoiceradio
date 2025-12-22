"use client";

import { useEffect } from "react";
import type { Station } from "@/lib/stations";
import { useRadioPlayer } from "@/components/RadioPlayerProvider";

export default function StationHeroPlayer({ station }: { station: Station }) {
  const {
    station: active,
    isPlaying,
    isBuffering,
    error,
    volume,
    setVolume,
    setStationBySlug,
    play,
    pause,
    nowPlaying,
    history,
  } = useRadioPlayer();

  useEffect(() => {
    if (active.slug !== station.slug) {
      setStationBySlug(station.slug);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [station.slug]);

  const onPlayClick = () => {
    if (active.slug !== station.slug) {
      setStationBySlug(station.slug);
      setTimeout(() => play(), 0);
      return;
    }
    play();
  };

  const onPauseClick = () => {
    pause();
  };

  const artwork = nowPlaying?.artworkUrlLarge || nowPlaying?.artworkUrl;

  return (
    <div
      style={{
        borderRadius: 18,
        padding: 16,
        background: "rgba(255,255,255,.04)",
        border: "1px solid rgba(255,255,255,.10)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
        <div>
          <div style={{ color: "white", fontWeight: 800, fontSize: 18 }}>{station.name}</div>
          <div style={{ color: "rgba(255,255,255,.75)", fontSize: 13, marginTop: 2 }}>
            {station.tagline}
          </div>
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "flex-end" }}>
          <span
            style={{
              fontSize: 12,
              padding: "8px 10px",
              borderRadius: 999,
              color: "rgba(255,255,255,.8)",
              background: "rgba(255,255,255,.06)",
              border: "1px solid rgba(255,255,255,.12)",
              whiteSpace: "nowrap",
            }}
          >
            24/7 Stream
          </span>
          <span
            style={{
              fontSize: 12,
              padding: "8px 10px",
              borderRadius: 999,
              color: "rgba(255,255,255,.8)",
              background: "rgba(255,255,255,.06)",
              border: "1px solid rgba(255,255,255,.12)",
              whiteSpace: "nowrap",
            }}
          >
            Veteran Powered
          </span>
        </div>
      </div>

      {/* Now Playing */}
      <div
        style={{
          marginTop: 14,
          display: "grid",
          gridTemplateColumns: artwork ? "56px 1fr" : "1fr",
          gap: 12,
          alignItems: "center",
          padding: 12,
          borderRadius: 16,
          background: "rgba(0,0,0,.25)",
          border: "1px solid rgba(255,255,255,.08)",
        }}
      >
        {artwork ? (
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,.12)",
              background: "rgba(255,255,255,.06)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={artwork}
              alt="Now playing artwork"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        ) : null}

        <div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,.70)" }}>Now Playing</div>
          <div style={{ fontSize: 14, color: "white", fontWeight: 800, marginTop: 2 }}>
            {nowPlaying?.title
              ? nowPlaying.title
              : isBuffering
                ? "Connecting…"
                : "Live Radio"}
          </div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,.65)", marginTop: 2 }}>
            {isPlaying ? "On Air" : isBuffering ? "Tuning in…" : "Press play to listen"}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div style={{ marginTop: 14 }}>
        <button
          onClick={onPlayClick}
          style={{
            width: "100%",
            height: 54,
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,.14)",
            background: "linear-gradient(135deg, rgba(245,158,11,.95), rgba(99,102,241,.95))",
            color: "white",
            fontWeight: 900,
            cursor: "pointer",
            fontSize: 15,
            letterSpacing: ".2px",
          }}
        >
          {isPlaying && active.slug === station.slug ? "⏸ Playing" : "▶ Play Live"}
        </button>

        <button
          onClick={onPauseClick}
          style={{
            width: "100%",
            marginTop: 10,
            height: 44,
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,.14)",
            background: "rgba(255,255,255,.06)",
            color: "white",
            fontWeight: 800,
            cursor: "pointer",
            fontSize: 14,
          }}
        >
          Pause
        </button>

        <div
          style={{
            marginTop: 12,
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 12px",
            borderRadius: 14,
            background: "rgba(0,0,0,.25)",
            border: "1px solid rgba(255,255,255,.08)",
          }}
        >
          <div style={{ color: "rgba(255,255,255,.75)", fontSize: 13, minWidth: 60 }}>Volume</div>
          <input
            type="range"
            min={0}
            max={100}
            value={Math.round(volume * 100)}
            onChange={(e) => setVolume(Number(e.target.value) / 100)}
            style={{ width: "100%" }}
          />
        </div>

        {/* Recently played */}
        {history.length ? (
          <div style={{ marginTop: 12 }}>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,.65)", marginBottom: 6 }}>
              Recently Played
            </div>
            <div style={{ display: "grid", gap: 6 }}>
              {history.slice(0, 3).map((h, idx) => (
                <div
                  key={`${h.title}-${idx}`}
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,.85)",
                    padding: "8px 10px",
                    borderRadius: 12,
                    background: "rgba(255,255,255,.06)",
                    border: "1px solid rgba(255,255,255,.10)",
                  }}
                >
                  {h.title}
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {error ? (
          <div
            style={{
              marginTop: 10,
              padding: "10px 12px",
              borderRadius: 14,
              background: "rgba(255,80,80,.16)",
              border: "1px solid rgba(255,80,80,.25)",
              color: "white",
              fontSize: 13,
            }}
          >
            {error}
          </div>
        ) : null}
      </div>
    </div>
  );
}
