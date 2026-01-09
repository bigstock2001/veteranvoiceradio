import Link from "next/link";
import { STATIONS } from "@/lib/stations";
import { sanityFetch } from "@/lib/sanity";

type StationSlug = "semper-fi-country" | "ranger-rockwave";

type Params = {
  params: { slug: string };
};

type SanityArtist = {
  name?: string;
  slug?: { current?: string };
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

function normalizeStations(raw: unknown): StationSlug[] {
  const arr = Array.isArray(raw) ? raw : [];
  return arr
    .map((s) => String(s || "").trim())
    .filter((s): s is StationSlug => s === "semper-fi-country" || s === "ranger-rockwave");
}

function normalizeArtist(a: SanityArtist): Artist | null {
  const slug = a.slug?.current?.trim?.() || "";
  const name = (a.name || "").trim();
  if (!slug || !name) return null;

  const stationSlugs = normalizeStations(a.stations);
  if (!stationSlugs.length) return null;

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

export default async function StationArtistsPage({ params }: Params) {
  const stationSlug = params.slug as StationSlug;

  if (stationSlug !== "semper-fi-country" && stationSlug !== "ranger-rockwave") {
    return (
      <div className="container pagePad">
        <section className="section">
          <div className="sectionTitle">Artists</div>
          <div className="note" style={{ marginTop: 12 }}>
            Station not found.
          </div>
          <div style={{ marginTop: 12 }}>
            <Link className="btn btnGhost" href="/artists">
              View All Artists
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const station = STATIONS.find((s) => s.slug === stationSlug);

  const groq = `*[_type=="artist" && $stationSlug in stations]{
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

  const res = await sanityFetch<SanityArtist[]>(groq, { stationSlug });
  const listRaw: Artist[] =
    res.ok && res.data ? (res.data.map(normalizeArtist).filter(Boolean) as Artist[]) : [];

  // Sort by LAST NAME (A–Z), then first name
  const list = [...listRaw].sort((a, b) => lastNameKey(a.name).localeCompare(lastNameKey(b.name)));

  // Group A–Z for jump bar + headings
  const groups = list.reduce<Record<string, Artist[]>>((acc, artist) => {
    const key = alphaBucket(artist.name);
    acc[key] = acc[key] || [];
    acc[key].push(artist);
    return acc;
  }, {});

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const available = letters.filter((l) => groups[l]?.length);
  if (groups["#"]?.length) available.push("#");

  return (
    <div className="container pagePad">
      <section className="section">
        <div className="sectionTitle">
          {station?.callLetters || ""} {station?.name ? `• ${station.name}` : ""} • Artists
        </div>
        <div className="subtle" style={{ marginTop: 8 }}>
          Artists featured on this station, sorted A–Z by last name.
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
          <Link className="btn btnPrimary" href={`/stations/${stationSlug}`}>
            Listen Live
          </Link>
          <Link className="btn btnGhost" href="/artists">
            Artist Hub
          </Link>
        </div>

        {!list.length ? (
          <div className="note" style={{ marginTop: 12 }}>
            {res.ok
              ? "No artists assigned to this station yet. In Sanity, open an Artist and select this station under Stations."
              : "Sanity isn’t returning data. Check your Sanity project/dataset env vars."}
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
                <a key={l} href={`#letter-${l}`} className="btn btnGhost" style={{ padding: "8px 10px" }}>
                  {l}
                </a>
              ))}
            </div>

            {/* Groups */}
            <div style={{ marginTop: 14 }}>
              {available.map((letter) => (
                <div key={letter} style={{ marginTop: 18 }}>
                  <div
                    id={`letter-${letter}`}
                    className="sectionTitle"
                    style={{ fontSize: 16, opacity: 0.95 }}
                  >
                    {letter === "#" ? "Other" : letter}
                  </div>

                  <div className="featureGrid" style={{ marginTop: 12 }}>
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
                                }}
                              >
                                {a.name?.[0]?.toUpperCase?.() || "A"}
                              </div>
                            )}

                            <div>
                              <div style={{ fontWeight: 900, fontSize: 16 }}>{a.name}</div>
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
