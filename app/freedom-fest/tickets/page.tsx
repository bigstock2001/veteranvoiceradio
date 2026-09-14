import Link from "next/link";

export const metadata = {
  title: "Freedom Fest 2026 Tickets Closed | Veteran Voice Radio",
  description: "Freedom Fest 2026 has ended and ticket sales are closed.",
};

export default function FreedomFestTicketsClosedPage() {
  return (
    <main style={{ minHeight: "70vh", display: "grid", placeItems: "center", padding: "48px 20px", color: "#fff" }}>
      <section
        style={{
          width: "min(760px, 100%)",
          padding: "42px 28px",
          borderRadius: 24,
          border: "1px solid rgba(255,255,255,.18)",
          background:
            "radial-gradient(circle at 10% 0%, rgba(220,38,38,.35), transparent 36%), radial-gradient(circle at 90% 0%, rgba(37,99,235,.35), transparent 38%), rgba(5,8,16,.94)",
          boxShadow: "0 22px 60px rgba(0,0,0,.45)",
          textAlign: "center",
        }}
      >
        <div style={{ color: "#fca5a5", fontSize: 13, fontWeight: 900, letterSpacing: ".18em", textTransform: "uppercase" }}>
          Veteran Voice Radio Presents
        </div>
        <h1 style={{ margin: "12px 0 0", fontSize: "clamp(38px,7vw,64px)", lineHeight: 1 }}>
          Freedom Fest 2026
        </h1>
        <p style={{ margin: "20px auto 0", maxWidth: 620, color: "rgba(255,255,255,.8)", fontSize: 18, lineHeight: 1.65 }}>
          Freedom Fest has ended. Online ticket sales are now closed. Thank you to everyone who attended, performed, volunteered, sponsored, and supported the event.
        </p>
        <div style={{ marginTop: 28, display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
          <Link className="btn btnPrimary" href="/freedom-fest">
            View Freedom Fest
          </Link>
          <Link className="btn btnGhost" href="/">
            Back to Veteran Voice Radio
          </Link>
        </div>
      </section>
    </main>
  );
}
