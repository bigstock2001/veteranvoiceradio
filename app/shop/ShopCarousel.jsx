"use client";

import { useEffect, useState } from "react";

export default function ShopCarousel({ image, designs, columns, rows, label, stageAspect }) {
  const [index, setIndex] = useState(0);
  const total = designs.length;
  const resolvedAspect = stageAspect || (columns === 4 && rows === 5 ? "5 / 6" : "1 / 1");

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, 10000);

    return () => window.clearInterval(timer);
  }, [total]);

  const [code, name] = designs[index];
  const col = index % columns;
  const row = Math.floor(index / columns);

  const previous = () => setIndex((current) => (current - 1 + total) % total);
  const next = () => setIndex((current) => (current + 1) % total);

  return (
    <div className="shopCarousel" aria-label={`${label} design carousel`}>
      <div className="shopCarouselTopline">
        <span>{label}</span>
        <span>{index + 1} of {total}</span>
      </div>

      <div className="shopCarouselStage" style={{ aspectRatio: resolvedAspect }}>
        <img
          className="shopCarouselSprite"
          src={image}
          alt={`${code} — ${name}`}
          draggable="false"
          style={{
            position: "absolute",
            display: "block",
            maxWidth: "none",
            width: `${columns * 100}%`,
            height: `${rows * 100}%`,
            left: `-${col * 100}%`,
            top: `-${row * 100}%`,
            objectFit: "fill",
            transition: "left .55s ease, top .55s ease",
            userSelect: "none",
          }}
        />

        <button type="button" className="shopCarouselArrow shopCarouselPrev" onClick={previous} aria-label="Previous design">
          ‹
        </button>
        <button type="button" className="shopCarouselArrow shopCarouselNext" onClick={next} aria-label="Next design">
          ›
        </button>
      </div>

      <div className="shopCarouselCaption">
        <strong>{code}</strong>
        <span>{name}</span>
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
