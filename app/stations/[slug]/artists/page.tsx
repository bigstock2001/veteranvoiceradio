import Link from "next/link";
import { STATIONS } from "@/lib/stations";
import { sanityFetch } from "@/lib/sanity";

type StationSlug = "semper-fi-country" | "ranger-rockwave";

type SanityArtist = {
  name?: string;
  slug?: { current?: string };
  // stations can come back in different shapes depending on schema history / Studio config
  stations?: unknown;
  bio?: string;
  featured?: boolean;
  socials?: {
    website?: string;
    spotify?: string;
    appleMusic?: string;
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
  imageUrl?: string;
};

type Artist = {
  name: string;
  slug: string;
  stationSlugs: StationSlug[];
  bio: string;
  featured: boolean;
  imageUrl: string;
  socials: {
    website: string;
    spotify: string;
    appleMusic: string;
    instagram: string;
    facebook: string;
    youtube: string;
  };
};

// Patriot “glass” divider (matches your Home page styling)
const PATRIOT_GLASS = {
  backgroundColor: "rgba(8,12,22,.78)",
  backgroundImage:
    "linear-gradient(90deg, rgba(220,38,38,.38), rgba(255,255,255,.16), rgba(37,99,235,.38))",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  border: "1px solid rgba(255,255,255,.18)",
  borderRadius: "14px",
  boxShadow: "0 10px 30px rgba(0,0,0,.35)",
} as const;

function toStationSlug(v: unknown): StationSlug | null {
  const s = String(v || "").trim();
  if (s === "semper-fi-country" || s === "ranger-rockwave") return s;
  return null;
}

function normalizeStations(raw: unknown): StationSlug[] {
  if (!raw) return [];

  if (Array.isArray(raw)) {
    const out: StationSlug[] = [];

    for (const item of raw) {
      const asString = toStationSlug(item);
      if (asString) {
        out.push(asString);
        continue;
      }

      if (item && typeof item === "object") {
        const anyItem = item as any;

        const v1 = toStationSlug(anyItem.value);
        if (v1) {
          out.push(v1);
          continue;
        }

        const v2 = toStationSlug(anyItem.slug?.current);
        if (v2) {
          out.push(v2);
          continue;
        }

        const v3 = toStationSlug(anyItem.stationSlug);
        if (v3) {
          out.push(v3);
          continue;
        }

        const v4 = toStationSlug(anyItem.current);
        if (v4) {
          out.push(v4);
          continue;
        }
      }
    }

    return Array.from(new Set(out));
  }

  const single = toStationSlug(raw);
  return single ? [single] : [];
}

function normalizeArtist(a: SanityArtist): Artist | null {
  const slug = a.slug?.current?.trim?.() || "";
  const name = (a.name || "").trim();
  if (!slug || !name) return null;

  const stationSlugs = normalizeStations(a.stations);

  return {
    name,
    slug,
    stationSlugs,
    bio: a.bio || "",
    featured: !!a.featured,
    imageUrl: a.imageUrl || "",
    socials: {
      website: a.socials?.website || "",
      spotify: a.socials?.spotify || "",
      appleMusic: a.socials?.appleMusic || "",
      instagram: a.socials?.instagram || "",
      facebook: a.socials?.facebook || "",
      youtube: a.socials?.youtube || "",
    },
  };
}

function lastNameKey(fullName: string) {
  const parts = fullName
    .trim()
    .replace(/\s+/g, " ")
    .split(" ")
    .filter(Boolean);

  if (!parts.length) return "";
  const last = parts[parts.length - 1].toLowerCase();
  const first = parts[0].toLowerCase();
  return `${last}|${first}|${fullName.toLowerCase()}`;
}

function alphaBucket(name: string) {
  const n = name.trim();
  if (!n) return "#";
  const ch = n[0].toUpperCase();
  return ch >= "A" && ch <= "Z" ? ch : "#";
}

function pickPrimaryLink(s: Artist["socials"]) {
  if (s.spotify) return { label: "Spotify", href: s.spotify };
  if (s.appleMusic) return { label: "Apple Music", href: s.appleMusic };
  if (s.website) return { label: "Website", href: s.website };
  if (s.instagram) return { label: "Instagram", href: s.instagram };
  return null;
}

function StationBadge({ stationSlug }: { stationSlug: StationSlug }) {
  const st = STATIONS.find((x) => x.slug === stationSlug);
  const label = st?.callLetters || (stationSlug === "semper-fi-country" ? "KVVS" : "KVVW");
  const name = st?.name || (stationSlug === "semper-fi-country" ? "Semper Fi Country" : "Ranger Rockwave");
  const accent = st?.theme?.accent || "#ffffff";
  const accent2 = st?.theme?.accent2 || "#999999";

  return (
    <div
      title={name}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "6px 10px",
        borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.14)",
        background: "rgba(255,255,255,0.06)",
        fontSize: 12,
        fontWeight: 800,
        letterSpacing: 0.4,
        color: "rgba(255,255,255,.92)",
      }}
    >
      <span
        aria-hidden
        style={{
          width: 10,
          height: 10,
          borderRadius: 999,
          background: `linear-gradient(135deg, ${accent}, ${accent2})`,
          boxShadow: "0 0 0 2px rgba(0,0,0,0.25) inset",
        }}
      />
      <span>{label}</span>
    </div>
  );
}

export default async function StationArtistsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const stationSlug = slug as StationSlug;

  if (stationSlug !== "semper-fi-country" && stationSlug !== "ranger-rockwave") {
    return (
      <div className="container pagePad" style={{ color: "rgba(255,255,255,.92)" }}>
        <section className="section">
          <div
            style={{
              ...PATRIOT_GLASS,
              color: "rgba(255,255,255,.94)",
              padding: "10px 16px",
              fontWeight: 900,
            }}
          >
            Artists
          </div>

          <div className="note" style={{ marginTop: 12 }}>
            Station not found.
          </div>

          <div style={{ marginTop: 12 }}>
            <Link className="btn btnGhost" href="/artists">
              Artist Hub
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const station = STATIONS.find((s) => s.slug === stationSlug);

  // Fetch ALL artists, then filter in JS.
  const groq = `*[_type=="artist"]{
    name,
    slug,
    stations,
    bio,
    featured,
    socials{
      website,
      spotify,
      appleMusic,
      instagram,
      facebook,
      youtube
    },
    "imageUrl": image.asset->url
  }`;

  const res = await sanityFetch<SanityArtist[]>(groq);
  const all = res.ok && res.data ? (res.data.map(normalizeArtist).filter(Boolean) as Artist[]) : [];

  const filtered = all.filter((a) => a.stationSlugs.includes(stationSlug));
  const list = [...filtered].sort((a, b) => lastNameKey(a.name).localeCompare(lastNameKey(b.name)));

  const groups = list.reduce<Record<string, Artist[]>>((acc, artist) => {
    const key = alphaBucket(artist.name);
    acc[key] = acc[key] || [];
    acc[key].push(artist);
    return acc;
  }, {});

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const available = letters.filter((l) => groups[l]?.length);
  if (groups["#"]?.length) available.push("#");

  const pageTitle = `${station?.callLetters || ""}${station?.name ? ` • ${station.name}` : ""} • Artists`;

  return (
    <div className="container pagePad" style={{ color: "rgba(255,255,255,.92)" }}>
      <section className="section">
        {/* Patriot Divider Header */}
        <div
          style={{
            ...PATRIOT_GLASS,
            color: "rgba(255,255,255,.94)",
            padding: "10px 16px",
            fontWeight: 900,
          }}
        >
          {pageTitle}
        </div>

        <div className="subtle" style={{ marginTop: 10 }}>
          Artists on this station — sorted A–Z by last name.
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
          <Link className="btn btnPrimary" href={`/stations/${stationSlug}`}>
            Listen Live
          </Link>
          <Link className="btn btnGhost" href="/artists">
            Artist Hub
          </Link>
        </div>

        <div className="note" style={{ marginTop: 12 }}>
          {res.ok
            ? `Sanity artists fetched: ${all.length}. Matching this station: ${list.length}.`
            : "Sanity fetch failed. Check your Sanity env vars and dataset visibility."}
        </div>

        {!list.length ? (
          <div className="note" style={{ marginTop: 12 }}>
            No artists are tagged to this station yet. In Sanity → open an Artist → set Stations to{" "}
            <strong>{stationSlug}</strong>.
          </div>
        ) : (
          <>
            {/* A–Z Jump */}
            <div
              style={{
                marginTop: 14,
                padding: 12,
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.05)",
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
              }}
            >
              {available.map((l) => (
                <a
                  key={l}
                  href={`#letter-${l}`}
                  className="btn btnGhost"
                  style={{ padding: "8px 10px", color: "rgba(255,255,255,.92)" }}
                >
                  {l}
                </a>
              ))}
            </div>

            {/* Groups */}
            <div style={{ marginTop: 14 }}>
              {available.map((letter) => (
                <div key={letter} style={{ marginTop: 22 }}>
                  {/* Patriot Divider for A/B/C group header (centered) */}
                  <div
                    id={`letter-${letter}`}
                    style={{
                      ...PATRIOT_GLASS,
                      color: "rgba(255,255,255,.96)",
                      borderRadius: 999,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      padding: "10px 18px",
                      fontSize: 18,
                      fontWeight: 900,
                      letterSpacing: "0.08em",
                      width: "100%",
                      maxWidth: 520,
                      margin: "0 auto",
                    }}
                  >
                    {letter === "#" ? "Other" : letter}
                  </div>

                  <div className="featureGrid" style={{ marginTop: 14 }}>
                    {(groups[letter] || []).map((a) => {
                      const primary = pickPrimaryLink(a.socials);

                      return (
                        <div key={a.slug} className="featureCard">
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                            <StationBadge stationSlug={stationSlug} />

                            {a.featured ? (
                              <div
                                style={{
                                  display: "inline-flex",
                                  padding: "6px 10px",
                                  borderRadius: 999,
                                  border: "1px solid rgba(255,255,255,0.14)",
                                  background: "rgba(220,38,38,0.18)",
                                  fontSize: 12,
                                  fontWeight: 900,
                                  color: "rgba(255,255,255,.92)",
                                }}
                              >
                                Featured
                              </div>
                            ) : null}
                          </div>

                          <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 12 }}>
                            {a.imageUrl ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img
                                src={a.imageUrl}
                                alt={a.name}
                                width={56}
                                height={56}
                                style={{
                                  width: 56,
                                  height: 56,
                                  borderRadius: 999,
                                  objectFit: "cover",
                                  border: "1px solid rgba(255,255,255,0.15)",
                                }}
                              />
                            ) : (
                              <div
                                style={{
                                  width: 56,
                                  height: 56,
                                  borderRadius: 999,
                                  background: "rgba(255,255,255,0.08)",
                                  border: "1px solid rgba(255,255,255,0.15)",
                                  display: "grid",
                                  placeItems: "center",
                                  fontWeight: 900,
                                  color: "rgba(255,255,255,.92)",
                                }}
                              >
                                {a.name?.[0]?.toUpperCase?.() || "A"}
                              </div>
                            )}

                            <div>
                              <div style={{ fontWeight: 900, fontSize: 16, color: "rgba(255,255,255,.96)" }}>
                                {a.name}
                              </div>
                              <div className="subtle" style={{ marginTop: 2 }}>
                                {station?.name || "Station Artist"}
                              </div>
                            </div>
                          </div>

                          {a.bio ? <div className="subtle" style={{ marginTop: 10 }}>{a.bio}</div> : null}

                          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
                            {primary ? (
                              <a className="btn btnGhost" href={primary.href} target="_blank" rel="noreferrer">
                                {primary.label}
                              </a>
                            ) : null}

                            <Link className="btn btnGhost" href={`/stations/${stationSlug}`}>
                              Listen
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}
