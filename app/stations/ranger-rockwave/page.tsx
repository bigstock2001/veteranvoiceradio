import Link from "next/link";

export const metadata = {
  title: "Ranger Rockwave | Veteran Voice Radio",
  description: "Ranger Rockwave is temporarily offline while Veteran Voice Radio updates the station.",
};

export default function RangerRockwavePage() {
  return (
    <main className="container pagePad" style={{ minHeight: "70vh", display: "grid", placeItems: "center" }}>
      <section
        style={{
          width: "min(720px, 100%)",
          padding: "42px 28px",
          borderRadius: 20,
          textAlign: "center",
          background: "rgba(8,12,22,.88)",
          border: "1px solid rgba(255,255,255,.16)",
          boxShadow: "0 18px 45px rgba(0,0,0,.35)",
          color: "rgba(255,255,255,.92)",
        }}
      >
        <div style={{ fontSize: 13, fontWeight: 900, letterSpacing: ".16em", textTransform: "uppercase", color: "#93c5fd" }}>
          Veteran Voice Radio
        </div>
        <h1 style={{ margin: "12px 0 0", fontSize: "clamp(38px, 7vw, 64px)", color: "#fff" }}>
          Ranger Rockwave
        </h1>
        <p style={{ margin: "18px auto 0", maxWidth: 560, fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,.76)" }}>
          Ranger Rockwave is temporarily offline while we make changes to the station. It will be back.
        </p>
        <div style={{ marginTop: 26, display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
          <Link className="btn btnPrimary" href="/stations/semper-fi-country">
            Listen to Semper Fi Country
          </Link>
          <Link className="btn btnGhost" href="/">
            Back to Veteran Voice Radio
          </Link>
        </div>
      </section>
    </main>
  );
}
