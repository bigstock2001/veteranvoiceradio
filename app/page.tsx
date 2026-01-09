import Link from "next/link";
import { STATIONS } from "@/lib/stations";
import { sanityFetch } from "@/lib/sanity";

export const revalidate = 86400; // 24 hours

type StationSlug = "semper-fi-country" | "ranger-rockwave";

type SanityArtist = {
  name?: string;
  slug?: { current?: string };
  stations?: string[];
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

function normalizeArtist(a: SanityArtist): Artist | null {
  const slug = a.slug?.current?.trim?.() || "";
  if (!slug) return null;

  const stations = Array.isArray(a.stations) ? a.stations : [];
  const stationSlugs = stations
    .map((s) => String(s || "").trim())
    .filter((s): s is StationSlug => s === "semper-fi-country" || s === "ranger-rockwave");

  if (!stationSlugs.length) return null;

  return {
    name: a.name || "Artist",
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

function stationLabel(stationSlugs: StationSlug[]) {
  const hasSemper = stationSlugs.includes("semper-fi-country");
  const hasRanger = stationSlugs.includes("ranger-rockwave");
  if (hasSemper && hasRanger) return "Featured on both stations";
  if (hasSemper) return "Semper Fi Country";
  return "Ranger Rockwave";
}

function pickPrimaryLink(socials: Artist["socials"]) {
  if (socials.spotify) return { label: "Spotify", href: socials.spotify };
  if (socials.appleMusic) return { label: "Apple Music", href: socials.appleMusic };
  if (socials.website) return { label: "Website", href: socials.website };
  if (socials.instagram) return { label: "Instagram", href: socials.instagram };
  return null;
}

/**
 * Picks a rotating index that changes at midnight in America/Chicago.
 * Uses only built-in Intl (no extra deps).
 */
function chicagoDayKey(d: Date) {
  // en-CA gives YYYY-MM-DD format reliably
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Chicago",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(d);
}

function dayNumberFromYYYYMMDD(key: string) {
  // key: "YYYY-MM-DD"
  const [y, m, d] = key.split("-").map((n) => parseInt(n, 10));
  // Simple stable day number; doesn’t need to match epoch exactly, just consistent:
  // Convert to a count using a Date in UTC at noon to avoid DST edge weirdness.
  const dt = new Date(Date.UTC(y, (m || 1) - 1, d || 1, 12, 0, 0));
  return Math.floor(dt.getTime() / 86400000);
}

function pickDailyFeatured(list: Artist[]) {
  if (!list.length) return null;
  const key = chicagoDayKey(new Date());
  const dayNum = dayNumberFromYYYYMMDD(key);
  const idx = Math.abs(dayNum) % list.length;
  return list[idx] || list[0];
}

export default async function HomePage() {
  const DONATE_HREF = "https://www.paypal.com/donate/?hosted_button_id=KG8935FEPSBQ6";
  const EIN = "EIN: 33-4046922";

  const MISSION =
    "We honor service through sound — helping veterans heal, reconnect, and rediscover purpose by amplifying the music and stories behind the uniform.";

  // Fetch featured artists (cap high enough so you can add plenty)
  const groqFeaturedArtists = `*[_type=="artist" && featured==true] | order(name asc)[0...200]{
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

  const resArtists = await sanityFetch<SanityArtist[]>(groqFeaturedArtists);
  const featuredList: Artist[] =
    resArtists.ok && resArtists.data
      ? (resArtists.data.map(normalizeArtist).filter(Boolean) as Artist[])
      : [];

  const featured = pickDailyFeatured(featuredList);

  return (
    <div className="container pagePad">
      {/* HERO */}
      <section className="homeHero">
        <div className="homeHeroLeft">
          <div className="homeEyebrow">
            <span className="homeEyebrowDot" aria-hidden />
            Nonprofit • Veteran-Run • Music + Storytelling
          </div>

          <h1 className="h1">Veteran Voice Radio</h1>

          <p className="lead">{MISSION}</p>

          <div className="ctaRow">
            <Link className="btn btnPrimary" href={`/stations/${STATIONS[0].slug}`}>
              Listen Live
            </Link>

            <a className="btn btnGhost" href={DONATE_HREF} target="_blank" rel="noreferrer">
              Donate
            </a>

            <Link className="btn btnGhost" href="/about">
              About Us
            </Link>
          </div>

          <div className="note">Your player stays with you. Pick a station and browse without losing audio.</div>

          <div className="trustRow">
            <div className="trustPill">Veteran-led</div>
            <div className="trustPill">Listener supported</div>
            <div className="trustPill">Artist spotlight</div>
            <div className="trustPill">Community impact</div>
          </div>
        </div>

        <div className="homeHeroRight">
          <div className="glassCard">
            <div className="cardTitle">Choose your station</div>

            <div className="stationGrid">
              {STATIONS.map((s) => (
                <Link key={s.slug} href={`/stations/${s.slug}`} className="stationCard">
                  <div className="stationCardTop">
                    <div className="stationCardNameRow">
                      <span className="callsign">{s.callLetters}</span>
                      <div className="stationCardName">{s.name}</div>
                    </div>

                    <div
                      className="accentChip"
                      style={{
                        background: `linear-gradient(135deg, ${s.theme.accent}, ${s.theme.accent2})`,
                      }}
                      aria-hidden
                    />
                  </div>

                  <div className="stationCardTag">{s.tagline}</div>
                  <div className="stationCardDesc">{s.description}</div>
                  <div className="stationCardAction">Open Station →</div>
                </Link>
              ))}
            </div>

            <div className="miniNote">Tip: on mobile, start audio first — then browse shows & mission.</div>
          </div>
        </div>
      </section>

      {/* FEATURED ARTIST (ONE, ROTATES DAILY) */}
      <section className="section">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <div className="sectionTitle">Featured Artist</div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link className="btn btnGhost" href="/artists">
              View Artists
            </Link>
            <Link className="btn btnGhost" href={`/stations/${STATIONS[0].slug}`}>
              Listen Live
            </Link>
          </div>
        </div>

        <div className="subtle" style={{ marginTop: 8 }}>
          Rotates daily at midnight (America/Chicago). Spotlighting veteran artists featured on Veteran Voice Radio.
        </div>

        {!featured ? (
          <div className="note" style={{ marginTop: 12 }}>
            {resArtists.ok
              ? "No featured artists yet — in Sanity, mark one or more artists as Featured."
              : "Featured artist will appear here once Sanity is connected (or env vars are set)."}
          </div>
        ) : (
          <div className="featureGrid" style={{ marginTop: 14 }}>
            <div className="featureCard">
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                {featured.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={featured.imageUrl}
                    alt={featured.name}
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
                    {featured.name?.[0]?.toUpperCase?.() || "A"}
                  </div>
                )}

                <div>
                  <div style={{ fontWeight: 900, fontSize: 15 }}>{featured.name}</div>
                  <div className="subtle" style={{ marginTop: 2 }}>
                    {stationLabel(featured.stationSlugs)}
                  </div>
                </div>
              </div>

              {featured.bio ? <div className="subtle" style={{ marginTop: 10 }}>{featured.bio}</div> : null}

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
                <Link className="btn btnGhost" href="/artists">
                  Artist Directory
                </Link>

                {(() => {
                  const primary = pickPrimaryLink(featured.socials);
                  return primary ? (
                    <a className="btn btnGhost" href={primary.href} target="_blank" rel="noreferrer">
                      {primary.label}
                    </a>
                  ) : null;
                })()}

                {featured.stationSlugs.length === 1 ? (
                  <Link className="btn btnGhost" href={`/stations/${featured.stationSlugs[0]}`}>
                    Listen
                  </Link>
                ) : (
                  <>
                    <Link className="btn btnGhost" href="/stations/semper-fi-country/artists">
                      Semper Artists
                    </Link>
                    <Link className="btn btnGhost" href="/stations/ranger-rockwave/artists">
                      Rockwave Artists
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* NONPROFIT: WHY WE EXIST */}
      <section className="section">
        <div className="sectionTitle">Why we exist</div>

        <div className="featureGrid">
          <div className="featureCard">
            <div className="featureTitle">Music as therapy</div>
            <div className="subtle">
              For many veterans, music is more than entertainment — it’s a way to process trauma, reconnect with
              identity, and rediscover hope.
            </div>
          </div>

          <div className="featureCard">
            <div className="featureTitle">A platform for veteran artists</div>
            <div className="subtle">
              We spotlight music created by veterans and military family members, giving them a real platform — and a
              path toward careers in music and media.
            </div>
          </div>

          <div className="featureCard">
            <div className="featureTitle">Stories behind the songs</div>
            <div className="subtle">
              We don’t just play tracks. We amplify the strength behind them — the courage, resilience, and creativity
              born from service.
            </div>
          </div>
        </div>
      </section>

      {/* WHERE SUPPORT GOES */}
      <section className="section">
        <div className="sectionTitle">Where your support goes</div>

        <div className="supportGrid">
          <div className="supportCard">
            <div className="supportTitle">Broadcast + Hosting</div>
            <div className="subtle">Streaming, licensing, distribution, and the tools that keep both stations on air.</div>
          </div>

          <div className="supportCard">
            <div className="supportTitle">Veteran Artist Spotlight</div>
            <div className="subtle">
              Promotion for veteran creators, interviews, and programming that puts their work in front of the world.
            </div>
          </div>

          <div className="supportCard">
            <div className="supportTitle">Community + Events</div>
            <div className="subtle">
              Projects that elevate veteran voices and strengthen connection through music, storytelling, and service.
            </div>
          </div>
        </div>

        <div className="ctaBar">
          <div>
            <div className="ctaBarTitle">Support the mission</div>
            <div className="subtle">Tune in, turn up, and support those who’ve served — one song at a time.</div>
          </div>

          <div className="ctaBarActions">
            <a className="btn btnPrimary" href={DONATE_HREF} target="_blank" rel="noreferrer">
              Donate Now
            </a>
            <Link className="btn btnGhost" href="/sponsors">
              Become a Sponsor
            </Link>
          </div>
        </div>
      </section>

      {/* TRANSPARENCY */}
      <section className="section">
        <div className="glassBand">
          <div className="bandLeft">
            <div className="bandTitle">Veteran Voice Radio is a nonprofit.</div>
            <div className="subtle">
              We’re veteran-run and listener supported. Donations help keep the network on air and expand opportunities
              for veteran artists.
            </div>
            <div className="bandMeta">{EIN}</div>
          </div>

          <div className="bandRight">
            <Link className="btn btnGhost" href="/about">
              Read our story
            </Link>
            <Link className="btn btnGhost" href="/contact">
              Contact
            </Link>
            <a className="btn btnGhost" href={DONATE_HREF} target="_blank" rel="noreferrer">
              Donate
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
