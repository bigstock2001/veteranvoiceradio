"use client";

import { useEffect, useState } from "react";

export default function ShopCarousel({ image, designs, columns, rows, label, stageAspect }) {
  const [index, setIndex] = useState(0);
  const total = designs.length;
  const isBandana = columns === 4 && rows === 5;
  const resolvedAspect = stageAspect || (isBandana ? "5 / 6" : "1 / 1");
  const maxStageWidth = isBandana ? 420 : 330;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, 10000);
    return () => window.clearInterval(timer);
  }, [total]);

  const [code, name] = designs[index];
  const designImage = isBandana
    ? `/shop/bandana/${code}.svg`
    : `/shop/wall/${code}.avif`;

  const previous = () => setIndex((current) => (current - 1 + total) % total);
  const next = () => setIndex((current) => (current + 1) % total);

  return (
    <div className="shopCarousel" aria-label={`${label} design carousel`}>
      <div className="shopCarouselTopline">
        <span>{label}</span>
        <span>{index + 1} of {total}</span>
      </div>

      <div
        aria-live="polite"
        style={{
          maxWidth: "560px",
          margin: "0 auto 16px",
          padding: "14px 18px",
          borderRadius: "14px",
          border: "1px solid rgba(255,255,255,.14)",
          background: "rgba(3,7,18,.72)",
          textAlign: "center",
          boxShadow: "0 10px 24px rgba(0,0,0,.22)",
        }}
      >
        <div style={{ color: isBandana ? "#93c5fd" : "#fca5a5", fontSize: "15px", fontWeight: 950, letterSpacing: ".12em" }}>
          DESIGN {code}
        </div>
        <div style={{ marginTop: "5px", color: "#fff", fontSize: "clamp(22px, 3vw, 28px)", lineHeight: 1.15, fontWeight: 950 }}>
          {name}
        </div>
      </div>

      <div
        className="shopCarouselStage"
        style={{
          position: "relative",
          overflow: "hidden",
          aspectRatio: resolvedAspect,
          width: "100%",
          maxWidth: `${maxStageWidth}px`,
          margin: "0 auto",
        }}
      >
        <img
          src={designImage}
          alt={`${code} — ${name}`}
          draggable="false"
          style={{
            position: "absolute",
            inset: 0,
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "contain",
            userSelect: "none",
          }}
        />

        <button type="button" className="shopCarouselArrow shopCarouselPrev" onClick={previous} aria-label="Previous design" style={{ width: 40, height: 52, fontSize: 34, zIndex: 2 }}>‹</button>
        <button type="button" className="shopCarouselArrow shopCarouselNext" onClick={next} aria-label="Next design" style={{ width: 40, height: 52, fontSize: 34, zIndex: 2 }}>›</button>
      </div>

      <div className="shopCarouselDots" aria-label="Choose a design slide">
        {designs.map(([dotCode], dotIndex) => (
          <button
            type="button"
            key={dotCode}
            className={`shopCarouselDot ${dotIndex === index ? "shopCarouselDotActive" : ""}`}
            onClick={() => setIndex(dotIndex)}
            aria-label={`Show ${dotCode}`}
            aria-current={dotIndex === index ? "true" : undefined}
          />
        ))}
      </div>

      <p className="shopCarouselTimer">Automatically advances every 10 seconds. Use the arrows or dots anytime.</p>
    </div>
  );
}