"use client";

import type { Station } from "@/lib/stations";
import { useRadioPlayer } from "@/components/RadioPlayerProvider";
import StationHeroPlayer from "@/components/StationHeroPlayer";

export default function StationSpeakerHero({ station }: { station: Station }) {
  const { isPlaying, isBuffering, station: activeStation, level, reactiveMode } = useRadioPlayer();

  const isActive = activeStation.slug === station.slug;
  const hasEnergy = isActive && (isPlaying || isBuffering);

  const base = hasEnergy ? 0.08 : 0;
  const raw = hasEnergy ? Math.max(level, 0.12) : 0;

  const tuned = reactiveMode === "fake" ? base + raw * 0.55 : base + raw * 0.75;
  const energy = Math.max(0, Math.min(1, tuned));

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "56px 0 72px",
        backgroundImage: `linear-gradient(135deg, rgba(0,0,0,.78), rgba(0,0,0,.60)), url(${station.theme.heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 25% 35%, rgba(255,255,255,.08), transparent 55%), radial-gradient(circle at 75% 40%, rgba(255,255,255,.06), transparent 55%)",
          pointerEvents: "none",
        }}
      />

      {/* Left speakers */}
      <div
        style={{
          position: "absolute",
          left: "-70px",
          top: "50%",
          transform: "translateY(-50%) rotate(-6deg)",
          width: 520,
          maxWidth: "42vw",
          opacity: 0.92,
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        <SpeakerWall energy={energy} accent={station.theme.accent} />
      </div>

      {/* Right speakers */}
      <div
        style={{
          position: "absolute",
          right: "-70px",
          top: "50%",
          transform: "translateY(-50%) rotate(6deg)",
          width: 520,
          maxWidth: "42vw",
          opacity: 0.92,
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        <SpeakerWall energy={energy} accent={station.theme.accent2} />
      </div>

      {/* Center content */}
      <div style={{ position: "relative", zIndex: 2, margin: "0 auto", maxWidth: 1150, padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 28, alignItems: "center" }}>
          <div style={{ color: "white" }}>
            {/* ✅ Station ID line (Call letters + Station name + status) */}
            <div style={{ fontSize: 14, opacity: 0.9, marginBottom: 10, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <span
                style={{
                  fontWeight: 900,
                  letterSpacing: ".8px",
                  padding: "5px 10px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,.10)",
                  border: "1px solid rgba(255,255,255,.16)",
                }}
              >
                {station.callLetters}
              </span>

              <span style={{ fontWeight: 800 }}>{station.name}</span>

              <span style={{ opacity: 0.85 }}>
                — {isActive ? (isPlaying ? "Playing" : isBuffering ? "Connecting…" : "Paused") : "Tap Play to listen"}
              </span>
            </div>

            <h1 style={{ fontSize: 52, lineHeight: 1.05, margin: 0, fontWeight: 800 }}>
              {station.tagline}
            </h1>

            <p style={{ marginTop: 14, fontSize: 18, opacity: 0.85, maxWidth: 680 }}>
              {station.description}
            </p>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
              <Pill text="Veteran Powered" />
              <Pill text="Twenty-Four Seven" />
              <Pill text="Music + Mission" />
            </div>
          </div>

          {/* Console */}
          <div
            style={{
              borderRadius: 26,
              padding: 10,
              background: `linear-gradient(135deg, ${station.theme.accent}66, ${station.theme.accent2}66)`,
              boxShadow: "0 28px 80px rgba(0,0,0,.55)",
            }}
          >
            <div
              style={{
                borderRadius: 22,
                padding: 14,
                background: "rgba(10,10,12,.78)",
                border: "1px solid rgba(255,255,255,.12)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <Dot color="rgba(255,80,80,.95)" energy={energy} />
                  <Dot color="rgba(255,200,80,.95)" energy={energy} />
                  <Dot color="rgba(120,255,160,.95)" energy={energy} />
                </div>

                {/* ✅ Console ID: callsign + LIVE */}
                <div style={{ fontSize: 12, color: "rgba(255,255,255,.72)", display: "flex", gap: 8, alignItems: "center" }}>
                  <span style={{ fontWeight: 900, letterSpacing: ".6px" }}>{station.callLetters}</span>
                  <span style={{ opacity: 0.85 }}>{isActive && (isPlaying || isBuffering) ? "LIVE" : "READY"}</span>
                </div>
              </div>

              <StationHeroPlayer station={station} />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 70,
          background: "linear-gradient(to top, rgba(0,0,0,.55), transparent)",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}

function Pill({ text }: { text: string }) {
  return (
    <span
      style={{
        fontSize: 13,
        padding: "7px 12px",
        borderRadius: 999,
        color: "rgba(255,255,255,.85)",
        background: "rgba(255,255,255,.08)",
        border: "1px solid rgba(255,255,255,.14)",
      }}
    >
      {text}
    </span>
  );
}

function Dot({ color, energy }: { color: string; energy: number }) {
  const glow = 8 + energy * 18;
  const alpha = 0.55 + energy * 0.35;
  const scale = 1 + energy * 0.14;

  return (
    <span
      style={{
        width: 10,
        height: 10,
        borderRadius: 999,
        display: "inline-block",
        background: color,
        boxShadow: `0 0 ${glow}px ${color}`,
        opacity: alpha,
        transform: `scale(${scale})`,
        transition: "opacity 140ms ease, box-shadow 140ms ease, transform 140ms ease",
      }}
    />
  );
}

function SpeakerWall({ energy, accent }: { energy: number; accent: string }) {
  return (
    <div
      style={{
        borderRadius: 28,
        padding: 18,
        background: "rgba(0,0,0,.48)",
        border: "1px solid rgba(255,255,255,.12)",
        boxShadow: "0 28px 90px rgba(0,0,0,.55)",
      }}
    >
      <div style={{ display: "grid", gap: 14 }}>
        <Speaker energy={energy} accent={accent} />
        <Speaker energy={energy} accent={accent} />
      </div>
    </div>
  );
}

function Speaker({ energy, accent }: { energy: number; accent: string }) {
  const coneScale = 1 + energy * 0.14;
  const capScale = 1 + energy * 0.10;
  const coneGlow = 18 + energy * 44;

  return (
    <div
      style={{
        borderRadius: 22,
        padding: 16,
        background: "rgba(8,8,10,.72)",
        border: "1px solid rgba(255,255,255,.10)",
      }}
    >
      <div style={{ display: "grid", placeItems: "center" }}>
        <div
          style={{
            width: 210,
            height: 210,
            maxWidth: "30vw",
            maxHeight: "30vw",
            borderRadius: 999,
            position: "relative",
            background:
              "radial-gradient(circle at 35% 35%, rgba(255,255,255,.10), rgba(0,0,0,.88) 58%)",
            border: "1px solid rgba(255,255,255,.10)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 14,
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,.10)",
              background:
                "radial-gradient(circle at 40% 40%, rgba(255,255,255,.06), rgba(0,0,0,.78) 60%)",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 44,
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,.10)",
              background: `radial-gradient(circle at 35% 35%, ${accent}66, rgba(0,0,0,.92) 72%)`,
              boxShadow: `0 0 ${coneGlow}px ${accent}55`,
              transform: `scale(${coneScale})`,
              transition: "transform 160ms ease-out, box-shadow 160ms ease-out",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: "42%",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,.12)",
              background:
                "radial-gradient(circle at 35% 35%, rgba(255,255,255,.22), rgba(0,0,0,.9) 60%)",
              transform: `scale(${capScale})`,
              transition: "transform 160ms ease-out",
            }}
          />
        </div>
      </div>
    </div>
  );
}
