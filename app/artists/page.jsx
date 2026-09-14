import Link from "next/link";
import { STATIONS } from "@/lib/stations";
import { sanityFetch } from "@/lib/sanity";

export const metadata = {
  title: "Artists | Veteran Voice Radio",
  description:
    "Meet the veteran and military-connected artists heard across Veteran Voice Radio, including Semper Fi Country and Ranger Rockwave.",
};

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

function normalizeStations(raw) {
  if (!raw) return [];

  const values = Array.isArray(raw) ? raw : [raw];
  const out = [];

  for (const item of values) {
    const candidates = [
      item,
      item?.value,
      item?.slug?.current,
      item?.stationSlug,
      item?.current,
    ];

    for (const candidate of candidates) {
      const value = String(candidate || "").trim();
      if (value === "semper-fi-country" || value === "ranger-rockwave") {
        out.push(value);
        break;
      }
    }
  }

  return Array.from(new Set(out));
}

function normalizeArtist(a) {
  const name = String(a?.name || "").trim();
  const slug = String(a?.slug?.current || "").trim();
  if (!name || !slug) return null;

  return {
    name,
    slug,
    bio: String(a?.bio || "").trim(),
    featured: Boolean(a?.featured),
    imageUrl: a?.imageUrl || "",
    stations: normalizeStations(a?.stations),
    socials: {
      website: a?.socials?.website || "",
      spotify: a?.socials?.spotify || "",
      appleMusic: a?.socials?.appleMusic || "",
      instagram: a?.socials?.instagram || "",
      facebook: a?.socials?.facebook || "",
      youtube: a?.socials?.youtube || "",
    },
  };
}

function lastNameKey(fullName) {
  const parts = String(fullName || "")
    .trim()
    .replace(/\s+/g, " ")
    .split(" ")
    .filter(Boolean);

  if (!parts.length) return "";
  const last = parts[parts.length - 1].toLowerCase();
  const first = parts[0].toLowerCase();
  return `${last}|${first}|${fullName.toLowerCase()}`;
}

function alphaBucket(name) {
  const first = String(name || "").trim().charAt(0).toUpperCase();
  return first >= "A" && first <= "Z" ? first : "#";
}

function pickPrimaryLink(socials) {
  if (socials?.website) return { label: "Website", href: socials.website };
  if (socials?.spotify) return { label: "Spotify", href: socials.spotify };
  if (socials?.appleMusic) return { label: "Apple Music", href: socials.appleMusic };
  if (socials?.facebook) return { label: "Facebook", href: socials.facebook };
  if (socials?.instagram) return { label: "Instagram", href: socials.instagram };
  if (socials?.youtube) return { label: "YouTube", href: socials.youtube };
  return null;
}

function StationBadge({ stationSlug }) {
  const station = STATIONS.find((s) => s.slug === stationSlug);
  const name =
    station?.name ||
    (stationSlug === "semper-fi-country" ? "Semper Fi Country" : "Ranger Rockwave");
  const callLetters =
    station?.callLetters || (stationSlug === "semper-fi-country" ? "KVVS" : "KVVW");
  const accent = station?.theme?.accent || "#ffffff";
  const accent2 = station?.theme?.accent2 || "#999999";

  return (
    <Link
      href={`/stations/${stationSlug}`}
      title={`Music plays on ${name}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "6px 10px",
        borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.14)",
        background: "rgba(255,255,255,0.06)",
        textDecoration: "none",
        color: "rgba(255,255,255,.94)",
        fontSize: 12,
        fontWeight: 800,
      }}
    >
      <span
        aria-hidden
        style={{
          width: 10,
          height: 10,
          borderRadius: 999,
          background: `linear-gradient(135deg, ${accent}, ${accent2})`,
        }}
      />
      <span>{callLetters} • {name}</span>
    </Link>
  );
}

export default async function ArtistsPage() {
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

  const res = await sanityFetch(groq);
  const artists = res.ok && Array.isArray(res.data)
    ? res.data.map(normalizeArtist).filter(Boolean)
    : [];

  const list = [...artists].sort((a, b) =>
    lastNameKey(a.name).localeCompare(lastNameKey(b.name))
  );

  const groups = list.reduce((acc, artist) => {
    const key = alphaBucket(artist.name);
    acc[key] = acc[key] || [];
    acc[key].push(artist);
    return acc;
  }, {});

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const available = letters.filter((letter) => groups[letter]?.length);
  if (groups["#"]?.length) available.push("#");

  return (
    <div className="container pagePad" style={{ color: "rgba(255,255,255,.92)" }}>
      <section className="section">
        <div
          className="sectionTitle px-4 py-2"
          style={{ ...PATRIOT_GLASS, color: "rgba(255,255,255,.95)" }}
        >
          Veteran Voice Radio Artists
        </div>

        <div className="subtle" style={{ marginTop: 10, maxWidth: 850 }}>
          Meet the artists heard across Veteran Voice Radio. Each profile notes the station where
          their music plays. Some artists may be heard on more than one VVR station.
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
          {STATIONS.map((station) => (
            <Link key={station.slug} className="btn btnGhost" href={`/stations/${station.slug}`}>
              Listen to {station.name}
            </Link>
          ))}
        </div>

        {!res.ok ? (
          <div className="note" style={{ marginTop: 16 }}>
            Artist information is temporarily unavailable.
          </div>
        ) : !list.length ? (
          <div className="note" style={{ marginTop: 16 }}>
            No artist profiles have been published yet.
          </div>
        ) : (
          <>
            <div
              style={{
                marginTop: 16,
                padding: 12,
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.05)",
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
              }}
            >
              {available.map((letter) => (
                <a
                  key={letter}
                  href={`#letter-${letter}`}
                  className="btn btnGhost"
                  style={{ padding: "8px 10px", color: "rgba(255,255,255,.92)" }}
                >
                  {letter}
                </a>
              ))}
            </div>

            <div style={{ marginTop: 12 }}>
              {available.map((letter) => (
                <div key={letter} style={{ marginTop: 24 }}>
                  <div
                    id={`letter-${letter}`}
                    style={{
                      ...PATRIOT_GLASS,
                      color: "rgba(255,255,255,.96)",
                      borderRadius: 999,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "10px 18px",
                      fontSize: 18,
                      fontWeight: 900,
                      letterSpacing: "0.08em",
                      maxWidth: 520,
                      margin: "0 auto",
                    }}
                  >
                    {letter === "#" ? "Other" : letter}
                  </div>

                  <div className="featureGrid" style={{ marginTop: 14 }}>
                    {(groups[letter] || []).map((artist) => {
                      const primary = pickPrimaryLink(artist.socials);

                      return (
                        <article key={artist.slug} className="featureCard">
                          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                            {artist.imageUrl ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img
                                src={artist.imageUrl}
                                alt={artist.name}
                                width={76}
                                height={76}
                                style={{
                                  width: 76,
                                  height: 76,
                                  borderRadius: 14,
                                  objectFit: "cover",
                                  border: "1px solid rgba(255,255,255,0.15)",
                                  flexShrink: 0,
                                }}
                              />
                            ) : (
                              <div
                                style={{
                                  width: 76,
                                  height: 76,
                                  borderRadius: 14,
                                  background: "rgba(255,255,255,0.08)",
                                  border: "1px solid rgba(255,255,255,0.15)",
                                  display: "grid",
                                  placeItems: "center",
                                  fontWeight: 900,
                                  fontSize: 26,
                                  flexShrink: 0,
                                }}
                              >
                                {artist.name.charAt(0).toUpperCase()}
                              </div>
                            )}

                            <div>
                              <div
                                style={{
                                  fontWeight: 900,
                                  fontSize: 20,
                                  color: "rgba(255,255,255,.97)",
                                }}
                              >
                                {artist.name}
                              </div>

                              {artist.featured ? (
                                <div
                                  style={{
                                    marginTop: 6,
                                    display: "inline-flex",
                                    padding: "5px 9px",
                                    borderRadius: 999,
                                    background: "rgba(220,38,38,.18)",
                                    border: "1px solid rgba(255,255,255,.12)",
                                    fontSize: 11,
                                    fontWeight: 900,
                                  }}
                                >
                                  Veteran Artist Spotlight
                                </div>
                              ) : null}
                            </div>
                          </div>

                          {artist.bio ? (
                            <div className="subtle" style={{ marginTop: 12, lineHeight: 1.65 }}>
                              {artist.bio}
                            </div>
                          ) : (
                            <div className="subtle" style={{ marginTop: 12, fontStyle: "italic" }}>
                              Artist bio coming soon.
                            </div>
                          )}

                          <div style={{ marginTop: 14 }}>
                            <div
                              className="subtle"
                              style={{
                                marginBottom: 8,
                                fontSize: 12,
                                fontWeight: 800,
                                textTransform: "uppercase",
                                letterSpacing: ".06em",
                              }}
                            >
                              Heard on Veteran Voice Radio
                            </div>
                            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                              {artist.stations.length ? (
                                artist.stations.map((stationSlug) => (
                                  <StationBadge key={stationSlug} stationSlug={stationSlug} />
                                ))
                              ) : (
                                <span className="subtle">Station assignment coming soon.</span>
                              )}
                            </div>
                          </div>

                          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
                            {primary ? (
                              <a
                                className="btn btnGhost"
                                href={primary.href}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {primary.label}
                              </a>
                            ) : null}
                          </div>
                        </article>
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
