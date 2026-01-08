import Link from "next/link";
import { STATIONS } from "@/lib/stations";
import { sanityFetch } from "@/lib/sanity";
import { FALLBACK_ARTISTS } from "@/lib/artists";

function normalizeArtist(a) {
  const slug = a?.slug?.current?.trim?.() || "";
  if (!slug) return null;

  const stations = Array.isArray(a?.stations) ? a.stations : [];
  const stationSlugs = stations
    .map((s) => String(s || "").trim())
    .filter((s) => s === "semper-fi-country" || s === "ranger-rockwave");

  if (!stationSlugs.length) return null;

  return {
    name: a?.name || "Artist",
    slug,
    stationSlugs, // array
    bio: a?.bio || "",
    featured: !!a?.featured,
    imageUrl: a?.imageUrl || "",
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

function SocialLinks({ socials }) {
  const links = [
    socials.website ? { label: "Website", href: socials.website } : null,
    socials.spotify ? { label: "Spotify", href: socials.spotify } : null,
    socials.appleMusic ? { label: "Apple Music", href: socials.appleMusic } : null,
    socials.instagram ? { label: "Instagram", href: socials.instagram } : null,
    socials.facebook ? { label: "Facebook", href: socials.facebook } : null,
    socials.youtube ? { label: "YouTube", href: socials.youtube } : null,
  ].filter(Boolean);

  if (!links.length) return null;

  return (
    <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 10 }}>
      {links.map((l) => (
        <a
          key={l.href}
          className="btn btnGhost"
          href={l.href}
          target="_blank"
          rel="noreferrer"
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}

export default async function ArtistsPage() {
  const groq = `*[_type=="artist"] | order(featured desc, name asc){
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
  const artists =
    res.ok && res.data ? res.data.map(normalizeArtist).filter(Boolean) : null;

  // Fallback must match our normalized shape; if you haven't updated FALLBACK_ARTISTS yet,
  // this keeps the page alive but you may want to replace fallback with empty list.
  const list = artists && artists.length ? artists : (FALLBACK_ARTISTS || []);

  const kvvs = STATIONS.find((s) => s.slug === "semper-fi-country");
  const kvvw = STATIONS.find((s) => s.slug === "ranger-rockwave");

  // Because artists can appear on BOTH stations (array field), we include them in both lists.
  const semper = list.filter((a) => a.stationSlugs?.includes?.("semper-fi-country"));
  const ranger = list.filter((a) => a.stationSlugs?.includes?.("ranger-rockwave"));

  return (
    <div className="container pagePad">
      <section className="section">
        <div className="sectionTitle">Artists</div>
        <div className="subtle" style={{ marginTop: 8 }}>
          Veteran artists featured on our stations. Discover their stories, their music,
          and follow them across platforms.
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

      {/* Semper Fi Country */}
      <section className="section">
        <div className="sectionTitle">
          {kvvs?.callLetters || "KVVS"} • {kvvs?.name || "Semper Fi Country"}
        </div>

        <div className="featureGrid" style={{ marginTop: 14 }}>
          {semper.map((a) => (
            <div key={`semper-${a.slug}`} className="featureCard">
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
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
                  <div style={{ fontWeight: 900, fontSize: 15 }}>
                    {a.name} {a.featured ? <span className="note">• Featured</span> : null}
                  </div>
                  <div className="subtle" style={{ marginTop: 2 }}>
                    Semper Fi Country
                  </div>
                </div>
              </div>

              {a.bio ? <div className="subtle" style={{ marginTop: 10 }}>{a.bio}</div> : null}

              <SocialLinks socials={a.socials} />

              <div style={{ marginTop: 12 }}>
                <Link className="btn btnGhost" href={`/stations/semper-fi-country`}>
                  Listen KVVS
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ranger Rockwave */}
      <section className="section">
        <div className="sectionTitle">
          {kvvw?.callLetters || "KVVW"} • {kvvw?.name || "Ranger Rockwave"}
        </div>

        <div className="featureGrid" style={{ marginTop: 14 }}>
          {ranger.map((a) => (
            <div key={`ranger-${a.slug}`} className="featureCard">
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
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
                  <div style={{ fontWeight: 900, fontSize: 15 }}>
                    {a.name} {a.featured ? <span className="note">• Featured</span> : null}
                  </div>
                  <div className="subtle" style={{ marginTop: 2 }}>
                    Ranger Rockwave
                  </div>
                </div>
              </div>

              {a.bio ? <div className="subtle" style={{ marginTop: 10 }}>{a.bio}</div> : null}

              <SocialLinks socials={a.socials} />

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
