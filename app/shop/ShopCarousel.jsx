"use client";

import { useEffect, useState } from "react";

export default function ShopCarousel({ image, designs, columns, rows, label, stageAspect }) {
  const isBandana = columns === 4 && rows === 5;
  const visibleDesigns = designs;
  const total = visibleDesigns.length;
  const [index, setIndex] = useState(0);
  const resolvedAspect = stageAspect || (isBandana ? "4 / 5" : "1 / 1");
  const maxStageWidth = isBandana ? 420 : 330;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, 10000);
    return () => window.clearInterval(timer);
  }, [total]);

  const [code, name] = visibleDesigns[index];
  const designImage = isBandana
    ? `/images/dog/${code.toLowerCase()}.jpg`
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
          key={designImage}
          src={designImage}
          alt={isBandana ? `${code} — ${name}; dog wearing the bandanna` : `${code} — ${name}`}
          draggable="false"
          loading="eager"
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
        {visibleDesigns.map(([dotCode], dotIndex) => (
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

      <p className="shopCarouselTimer">
        {isBandana ? `${total} dog-photo previews from the uploaded product images. ` : ""}Automatically advances every 10 seconds. Use the arrows or dots anytime.
      </p>

      {isBandana && (
        <section
          aria-label="Custom order questions"
          style={{
            marginTop: "30px",
            padding: "24px",
            borderRadius: "18px",
            border: "1px solid rgba(147,197,253,.28)",
            background: "linear-gradient(145deg, rgba(30,58,138,.18), rgba(127,29,29,.12))",
          }}
        >
          <div style={{ color: "#93c5fd", fontSize: "12px", fontWeight: 900, letterSpacing: ".16em", textTransform: "uppercase" }}>
            Custom Orders & Questions
          </div>
          <h2 style={{ margin: "8px 0 0", color: "#fff", fontSize: "clamp(26px, 4vw, 36px)", lineHeight: 1.1 }}>
            Want something special or have questions?
          </h2>
          <p style={{ margin: "12px 0 20px", color: "rgba(255,255,255,.75)", lineHeight: 1.6 }}>
            Tell us what you have in mind. Custom ideas, personalization questions, special requests, and order questions are welcome.
          </p>

          <form action="https://formsubmit.co/veteranvoiceradio@gmail.com" method="POST">
            <input type="hidden" name="_subject" value="Veteran Voice Radio Shop Question / Custom Request" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
              <label style={{ display: "grid", gap: "6px", color: "#fff", fontWeight: 800 }}>
                Name
                <input required name="name" type="text" style={{ minHeight: "46px", borderRadius: "10px", border: "1px solid rgba(255,255,255,.18)", background: "rgba(2,6,23,.72)", color: "#fff", padding: "0 12px", fontSize: "16px" }} />
              </label>
              <label style={{ display: "grid", gap: "6px", color: "#fff", fontWeight: 800 }}>
                Email
                <input required name="email" type="email" style={{ minHeight: "46px", borderRadius: "10px", border: "1px solid rgba(255,255,255,.18)", background: "rgba(2,6,23,.72)", color: "#fff", padding: "0 12px", fontSize: "16px" }} />
              </label>
            </div>

            <label style={{ display: "grid", gap: "6px", marginTop: "12px", color: "#fff", fontWeight: 800 }}>
              What can we help with?
              <select name="request_type" defaultValue="Custom item" style={{ minHeight: "46px", borderRadius: "10px", border: "1px solid rgba(255,255,255,.18)", background: "#0f172a", color: "#fff", padding: "0 12px", fontSize: "16px" }}>
                <option>Custom item</option>
                <option>Wall decor question</option>
                <option>Dog bandana question</option>
                <option>Existing order question</option>
                <option>Other</option>
              </select>
            </label>

            <label style={{ display: "grid", gap: "6px", marginTop: "12px", color: "#fff", fontWeight: 800 }}>
              Message
              <textarea required name="message" rows={5} style={{ resize: "vertical", borderRadius: "10px", border: "1px solid rgba(255,255,255,.18)", background: "rgba(2,6,23,.72)", color: "#fff", padding: "12px", fontSize: "16px", lineHeight: 1.5 }} />
            </label>

            <button type="submit" style={{ width: "100%", minHeight: "52px", marginTop: "16px", border: 0, borderRadius: "12px", background: "linear-gradient(90deg, #dc2626, #2563eb)", color: "#fff", fontSize: "16px", fontWeight: 950, cursor: "pointer" }}>
              Send to Veteran Voice Radio
            </button>
            <p style={{ margin: "10px 0 0", textAlign: "center", color: "rgba(255,255,255,.52)", fontSize: "12px" }}>
              Messages are sent to veteranvoiceradio@gmail.com.
            </p>
          </form>
        </section>
      )}
    </div>
  );
}
