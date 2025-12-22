import Link from "next/link";
import { STATIONS } from "@/lib/stations";

export default function HomePage() {
  const DONATE_HREF = "https://www.paypal.com/donate/?hosted_button_id=KG8935FEPSBQ6";
  const EIN = "EIN: 33-4046922";

  const MISSION =
    "We honor service through sound — helping veterans heal, reconnect, and rediscover purpose by amplifying the music and stories behind the uniform.";

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

          <div className="note">
            Your player stays with you. Pick a station and browse without losing audio.
          </div>

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
