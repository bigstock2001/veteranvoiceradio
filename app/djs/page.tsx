import Link from "next/link";
import { STATIONS } from "@/lib/stations";
import { sanityFetch } from "@/lib/sanity";
import { FALLBACK_DJS, type DJ } from "@/lib/djs";

type SanityDJ = {
  name?: string;
  slug?: { current?: string };
  stationSlug?: string;
  showName?: string;
  scheduleText?: string;
  bio?: string;
};

function normalizeDJ(d: SanityDJ): DJ | null {
  const slug = d.slug?.current?.trim() || "";
  const stationSlug = (d.stationSlug || "").trim() as DJ["stationSlug"];
  if (!slug || (stationSlug !== "semper-fi-country" && stationSlug !== "ranger-rockwave")) return null;

  return {
    name: d.name || "DJ",
    slug,
    stationSlug,
    showName: d.showName || "Show",
    scheduleText: d.scheduleText || "Schedule: TBD",
    bio: d.bio || "",
  };
}

export default async function DJsPage() {
  const groq = `*[_type=="dj"]|order(stationSlug asc, showName asc){
    name,
    slug,
    stationSlug,
    showName,
    scheduleText,
    bio
  }`;

  const res = await sanityFetch<SanityDJ[]>(groq);
  const djs = (res.ok && res.data ? res.data.map(normalizeDJ).filter(Boolean) : null) as DJ[] | null;

  const list = djs && djs.length ? djs : FALLBACK_DJS;

  const kvvs = STATIONS.find((s) => s.slug === "semper-fi-country");
  const kvvw = STATIONS.find((s) => s.slug === "ranger-rockwave");

  const semper = list.filter((d) => d.stationSlug === "semper-fi-country");
  const ranger = list.filter((d) => d.stationSlug === "ranger-rockwave");

  return (
    <div className="container pagePad">
      <section className="section">
        <div className="sectionTitle">Meet the DJs</div>
        <div className="subtle" style={{ marginTop: 8 }}>
          The voices behind the stations — shows, personalities, and the community that keeps Veteran Voice Radio moving.
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
          <Link className="btn btnPrimary" href="/schedule">
            View Schedule
          </Link>
          <Link className="btn btnGhost" href={`/stations/${STATIONS[0].slug}`}>
            Listen Live
          </Link>
        </div>

        <div className="note" style={{ marginTop: 12 }}>
          {res.ok ? "Loaded from Sanity (or fallback if empty)." : "Using fallback roster (Sanity not configured yet)."}
        </div>
      </section>

      <section className="section">
        <div className="sectionTitle">
          {kvvs?.callLetters || "KVVS"} • {kvvs?.name || "Semper Fi Country"}
        </div>
        <div className="featureGrid" style={{ marginTop: 14 }}>
          {semper.map((d) => (
            <div key={d.slug} className="featureCard">
              <div style={{ fontWeight: 900, fontSize: 15 }}>{d.showName}</div>
              <div className="subtle" style={{ marginTop: 4 }}>
                <strong>{d.name}</strong> • {d.scheduleText}
              </div>
              <div className="subtle" style={{ marginTop: 10 }}>{d.bio}</div>
              <div style={{ marginTop: 12 }}>
                <Link className="btn btnGhost" href={`/stations/semper-fi-country`}>
                  Listen KVVS
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="sectionTitle">
          {kvvw?.callLetters || "KVVW"} • {kvvw?.name || "Ranger Rockwave"}
        </div>
        <div className="featureGrid" style={{ marginTop: 14 }}>
          {ranger.map((d) => (
            <div key={d.slug} className="featureCard">
              <div style={{ fontWeight: 900, fontSize: 15 }}>{d.showName}</div>
              <div className="subtle" style={{ marginTop: 4 }}>
                <strong>{d.name}</strong> • {d.scheduleText}
              </div>
              <div className="subtle" style={{ marginTop: 10 }}>{d.bio}</div>
              <div style={{ marginTop: 12 }}>
                <Link className="btn btnGhost" href={`/stations/ranger-rockwave`}>
                  Listen KVVW
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
