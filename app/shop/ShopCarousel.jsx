"use client";

import { useEffect, useMemo, useState } from "react";

export default function ShopCarousel({ image, designs, columns, rows, label }) {
  const [index, setIndex] = useState(0);
  const total = designs.length;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, 10000);

    return () => window.clearInterval(timer);
  }, [total]);

  const [code, name] = designs[index];

  const position = useMemo(() => {
    const col = index % columns;
    const row = Math.floor(index / columns);
    const x = columns === 1 ? 0 : (col / (columns - 1)) * 100;
    const y = rows === 1 ? 0 : (row / (rows - 1)) * 100;
    return `${x}% ${y}%`;
  }, [index, columns, rows]);

  const previous = () => setIndex((current) => (current - 1 + total) % total);
  const next = () => setIndex((current) => (current + 1) % total);

  return (
    <div className="shopCarousel" aria-label={`${label} design carousel`}>
      <div className="shopCarouselTopline">
        <span>{label}</span>
        <span>{index + 1} of {total}</span>
      </div>

      <div className="shopCarouselStage">
        <div
          className="shopCarouselSprite"
          role="img"
          aria-label={`${code} — ${name}`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: `${columns * 100}% ${rows * 100}%`,
            backgroundPosition: position,
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
