"use client";

import Link from "next/link";
import { useRadioPlayer } from "./RadioPlayerProvider";

export default function StickyPlayerBar() {
  const {
    station,
    isPlaying,
    isBuffering,
    volume,
    error,
    togglePlay,
    toggleStation,
    setVolume,
  } = useRadioPlayer();

  return (
    <div className="stickyBar">
      <div className="stickyInner">
        <div className="stickyLeft">
          <div className="liveDot" aria-hidden />
          <div className="stickyMeta">
            <div className="stickyTitle">
              <span className="badge">LIVE</span>
              <span className="stationName">{station.name}</span>
              {isBuffering ? <span className="subtle">Connecting…</span> : null}
            </div>
            <div className="stickyLinks">
              <Link className="miniLink" href={`/stations/${station.slug}`}>
                Station
              </Link>
              <span className="dotSep">•</span>
              <Link className="miniLink" href="/">
                Network
              </Link>
            </div>
          </div>
        </div>

        <div className="stickyControls">
          <button
            className="btn btnPrimary"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause" : "Play"}
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? "⏸" : "▶"} {isPlaying ? "Pause" : "Play"}
          </button>

          <button className="btn btnGhost" onClick={toggleStation} aria-label="Switch station">
            Switch Station
          </button>

          <div className="volWrap" aria-label="Volume">
            <span className="subtle">Vol</span>
            <input
              className="slider"
              type="range"
              min={0}
              max={100}
              value={Math.round(volume * 100)}
              onChange={(e) => setVolume(Number(e.target.value) / 100)}
            />
          </div>
        </div>
      </div>

      {error ? <div className="stickyError">{error}</div> : null}
    </div>
  );
}
