import Link from "next/link";
import { STATIONS } from "@/lib/stations";
import { sanityFetch } from "@/lib/sanity";
import { FALLBACK_SHOWS, type ShowSlot } from "@/lib/djs";

type SanityShow = {
  title?: string;
  stationSlug?: string;
  hosts?: string;
  scheduleText?: string;
  description?: string;
};

function normalizeShow(s: SanityShow): ShowSlot | null {
  const stationSlug = (s.stationSlug || "").trim() as ShowSlot["stationSlug"];
  if (stationSlug !== "semper-fi-country" && stationSlug !== "ranger-rockwave") return null;

  return {
    title: s.title || "Show",
    stationSlug,
    hosts: s.hosts || "Host",
    scheduleText: s.scheduleText || "Schedule: TBD",
    description: s.description || "",
  };
}

export default async function SchedulePage() {
  const groq = `*[_type=="show"]|order(stationSlug asc, title asc){
    title,
    stationSlug,
    hosts,
    scheduleText,
    description
  }`;

  const res = await sanityFetch<SanityShow[]>(groq);
  const shows = (res.ok && res.data ? res.data.map(normalizeShow).filter(Boolean) : null) as ShowSlot[] | null;

  const list = shows && shows.length ? shows : FALLBACK_SHOWS;

  const kvvs = STATIONS.find((s) => s.slug === "semper-fi-country");
  const kvvw = STATIONS.find((s) => s.slug === "ranger-rockwave");

  const semper = list.filter((x) => x.stationSlug === "semper-fi-country");
  const ranger = list.filter((x) => x.stationSlug === "ranger-rockwave");

  return (
    <div className="container pagePad">
      <section className="section">
        <div className="sectionTitle">Schedule</div>
        <div className="subtle" style={{ marginTop: 8 }}>
          Show blocks for both stations. As we finalize times, we’ll replace “TBD” with exact slots.
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
          <Link className="btn btnPrimary" href="/djs">
            Meet the DJs
          </Link>
          <Link className="btn btnGhost" href={`/stations/${STATIONS[0].slug}`}>
            Listen Live
          </Link>
        </div>

        <div className="note" style={{ marginTop: 12 }}>
          {res.ok ? "Loaded from Sanity (or fallback if empty)." : "Using fallback schedule (Sanity not configured yet)."}
        </div>
      </section>

      <section className="section">
        <div className="sectionTitle">
          {kvvs?.callLetters || "KVVS"} • {kvvs?.name || "Semper Fi Country"}
        </div>

        <div className="featureGrid" style={{ marginTop: 14 }}>
          {semper.map((x, i) => (
            <div key={`${x.title}-${i}`} className="featureCard">
              <div style={{ fontWeight: 900, fontSize: 15 }}>{x.title}</div>
              <div className="subtle" style={{ marginTop: 4 }}>
                <strong>{x.hosts}</strong> • {x.scheduleText}
              </div>
              <div className="subtle" style={{ marginTop: 10 }}>{x.description}</div>
              <div style={{ marginTop: 12 }}>
                <Link className="btn btnGhost" href="/stations/semper-fi-country">
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
          {ranger.map((x, i) => (
            <div key={`${x.title}-${i}`} className="featureCard">
              <div style={{ fontWeight: 900, fontSize: 15 }}>{x.title}</div>
              <div className="subtle" style={{ marginTop: 4 }}>
                <strong>{x.hosts}</strong> • {x.scheduleText}
              </div>
              <div className="subtle" style={{ marginTop: 10 }}>{x.description}</div>
              <div style={{ marginTop: 12 }}>
                <Link className="btn btnGhost" href="/stations/ranger-rockwave">
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
