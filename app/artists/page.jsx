import Link from "next/link";
import { STATIONS } from "@/lib/stations";

export const metadata = {
  title: "Artists | Veteran Voice Radio",
  description: "Browse artists by station — Semper Fi Country and Ranger Rockwave.",
};

// Reuse the same Patriot “glass” divider look you have on app/page
const PATRIOT_GLASS = {
  backgroundColor: "rgba(8,12,22,.78)",
  backgroundImage:
    "linear-gradient(90deg, rgba(220,38,38,.38), rgba(255,255,255,.16), rgba(37,99,235,.38))",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  border: "1px solid rgba(255,255,255,.18)",
  borderRadius: "14px",
  boxShadow: "0 10px 30px rgba(0,0,0,.35)",
};

export default function ArtistsHubPage() {
  const semper = STATIONS.find((s) => s.slug === "semper-fi-country");
  const ranger = STATIONS.find((s) => s.slug === "ranger-rockwave");

  return (
    <div className="container pagePad" style={{ color: "rgba(255,255,255,.92)" }}>
      <section className="section">
        {/* Patriot Divider Header */}
        <div className="sectionTitle px-4 py-2" style={{ ...PATRIOT_GLASS, color: "rgba(255,255,255,.95)" }}>
          Artists
        </div>

        <div className="subtle" style={{ marginTop: 10 }}>
          Browse artists by station so you don’t have to scroll forever.
        </div>

        <div className="featureGrid" style={{ marginTop: 16 }}>
          <Link className="featureCard" href="/stations/semper-fi-country/artists">
            <div style={{ fontWeight: 900, fontSize: 16, color: "rgba(255,255,255,.95)" }}>
              {semper?.name || "Semper Fi Country"}
            </div>

            <div className="subtle" style={{ marginTop: 6 }}>
              {semper?.callLetters || "KVVS"} • Country station artists A–Z
            </div>

            <div className="subtle" style={{ marginTop: 10 }}>
              Open artists featured on Semper Fi Country.
            </div>

            <div style={{ marginTop: 12 }} className="btn btnGhost">
              View Artists →
            </div>
          </Link>

          <Link className="featureCard" href="/stations/ranger-rockwave/artists">
            <div style={{ fontWeight: 900, fontSize: 16, color: "rgba(255,255,255,.95)" }}>
              {ranger?.name || "Ranger Rockwave"}
            </div>

            <div className="subtle" style={{ marginTop: 6 }}>
              {ranger?.callLetters || "KVVW"} • Rock station artists A–Z
            </div>

            <div className="subtle" style={{ marginTop: 10 }}>
              Open artists featured on Ranger Rockwave.
            </div>

            <div style={{ marginTop: 12 }} className="btn btnGhost">
              View Artists →
            </div>
          </Link>
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
          <Link className="btn btnPrimary" href={`/stations/${STATIONS[0].slug}`}>
            Listen Live
          </Link>
          <Link className="btn btnGhost" href="/sponsors">
            Sponsor the Mission
          </Link>
        </div>
      </section>
    </div>
  );
}
