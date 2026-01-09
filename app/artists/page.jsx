import Link from "next/link";
import { STATIONS } from "@/lib/stations";

export const metadata = {
  title: "Artists | Veteran Voice Radio",
  description: "Browse artists by station — Semper Fi Country and Ranger Rockwave.",
};

export default function ArtistsHubPage() {
  const semper = STATIONS.find((s) => s.slug === "semper-fi-country");
  const ranger = STATIONS.find((s) => s.slug === "ranger-rockwave");

  return (
    <div className="container pagePad">
      <section className="section">
        <div className="sectionTitle">Artists</div>
        <div className="subtle" style={{ marginTop: 8 }}>
          Browse artists by station so you don’t have to scroll forever.
        </div>

        <div className="featureGrid" style={{ marginTop: 14 }}>
          <Link className="featureCard" href="/stations/semper-fi-country/artists">
            <div style={{ fontWeight: 900, fontSize: 16 }}>{semper?.name || "Semper Fi Country"}</div>
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
            <div style={{ fontWeight: 900, fontSize: 16 }}>{ranger?.name || "Ranger Rockwave"}</div>
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

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
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
