import Link from "next/link";
import { sanityFetch } from "@/lib/sanity";

function normalizeArtist(a) {
  const slug = a?.slug?.current?.trim?.() || "";
  const stationSlug = (a?.stationSlug || "").trim();

  if (!slug) return null;
  if (stationSlug !== "semper-fi-country" && stationSlug !== "ranger-rockwave")
    return null;

  return {
    name: a?.name || "Artist",
    slug,
    stationSlug,
    bio: a?.bio || "",
    photoUrl: a?.photoUrl || "",
    spotifyUrl: a?.spotifyUrl || "",
    website: a?.website || "",
    instagram: a?.instagram || "",
  };
}

export default async function FeaturedArtists() {
  const groq = `*[_type=="artist" && featured==true] | order(stationSlug asc, name asc){
    name,
    slug,
    stationSlug,
    featured,
    bio,
    spotifyUrl,
    website,
    instagram,
    "photoUrl": photo.asset->url
  }`;

  const res = await sanityFetch(groq);
  const featured =
    res.ok && res.data ? res.data.map(normalizeArtist).filter(Boolean) : [];

  if (!featured.length) return null;

  return (
    <section className="section">
      <div className="sectionTitle">Featured Artists</div>
      <div className="subtle" style={{ marginTop: 8 }}>
        Spotlighting veteran artists featured on Veteran Voice Radio.
      </div>

      <div className="featureGrid" style={{ marginTop: 14 }}>
        {featured.map((a) => (
          <div key={a.slug} className="featureCard">
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              {a.photoUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={a.photoUrl}
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
                <div style={{ fontWeight: 900, fontSize: 15 }}>{a.name}</div>
                <div className="subtle" style={{ marginTop: 2 }}>
                  {a.stationSlug === "semper-fi-country"
                    ? "Semper Fi Country"
                    : "Ranger Rockwave"}
                </div>
              </div>
            </div>

            {a.bio ? <div className="subtle" style={{ marginTop: 10 }}>{a.bio}</div> : null}

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 10 }}>
              <Link className="btn btnGhost" href="/artists">
                View All Artists
              </Link>
              {a.spotifyUrl ? (
                <a className="btn btnGhost" href={a.spotifyUrl} target="_blank" rel="noreferrer">
                  Spotify
                </a>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
