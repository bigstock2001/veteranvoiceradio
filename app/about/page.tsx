import Link from "next/link";

export default function AboutPage() {
  const DONATE_HREF = "https://www.paypal.com/donate/?hosted_button_id=KG8935FEPSBQ6";
  const EIN = "33-4046922";

  const MISSION =
    "We honor service through sound — helping veterans heal, reconnect, and rediscover purpose by amplifying the music and stories behind the uniform.";

  return (
    <div className="container pagePad">
      {/* HERO */}
      <section className="section">
        <div className="glassBand">
          <div className="bandLeft">
            <div className="bandTitle">About Veteran Voice Radio</div>
            <div className="subtle" style={{ marginTop: 6 }}>
              {MISSION}
            </div>

            <div className="bandMeta" style={{ marginTop: 10 }}>
              Nonprofit EIN: {EIN}
            </div>
          </div>

          <div className="bandRight">
            <Link className="btn btnGhost" href="/">
              Back Home
            </Link>
            <a className="btn btnPrimary" href={DONATE_HREF} target="_blank" rel="noreferrer">
              Donate
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT COPY */}
      <section className="section">
        <div className="sectionTitle">Our Story</div>

        <div className="featureGrid">
          <div className="featureCard" style={{ gridColumn: "1 / -1" }}>
            <div className="subtle" style={{ fontSize: 15, lineHeight: 1.7 }}>
              <p style={{ marginTop: 0 }}>
                <strong>Veteran Voice Radio</strong> is a veteran-run radio station dedicated to using the power of music
                and storytelling as tools for healing, expression, and purpose. We spotlight music created by veterans
                and military family members, offering them not just a platform, but a path toward careers in the music
                and media industry.
              </p>

              <p>
                For many, music is more than just sound — it’s therapy. It’s a way to process trauma, reconnect with
                identity, and rediscover hope. At Veteran Voice Radio, we amplify these voices, broadcasting not just
                songs, but the stories and strength behind them.
              </p>

              <p>
                Our playlist is as diverse as the veterans we serve. From anthems of triumph to ballads of reflection,
                each track reflects the courage, resilience, and creativity born from service. Whether it’s rock,
                country, hip-hop, jazz, or blues, the music carries the soul of those who’ve answered the call of duty.
              </p>

              <p style={{ marginBottom: 0 }}>
                Join us as we honor service through sound — uplifting, inspiring, and uniting listeners with the
                harmonies of healing and purpose. <strong>Tune in, turn up, and support those who’ve served — one song at a time.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section">
        <div className="sectionTitle">What we do</div>

        <div className="featureGrid">
          <div className="featureCard">
            <div className="featureTitle">Veteran artist spotlight</div>
            <div className="subtle">
              We promote music created by veterans and military families, giving artists a real platform to grow.
            </div>
          </div>

          <div className="featureCard">
            <div className="featureTitle">Healing through sound</div>
            <div className="subtle">
              Music and storytelling can be a bridge back to identity, connection, and hope — we build that bridge daily.
            </div>
          </div>

          <div className="featureCard">
            <div className="featureTitle">Mission-driven community</div>
            <div className="subtle">
              We’re building a network that feels like home — powered by veterans, supported by listeners, open to all.
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO SUPPORT */}
      <section className="section">
        <div className="sectionTitle">How to support</div>

        <div className="supportGrid">
          <div className="supportCard">
            <div className="supportTitle">Donate</div>
            <div className="subtle">
              Your donation helps keep the stations on air, supports outreach, and expands opportunities for veteran
              creators.
            </div>
          </div>

          <div className="supportCard">
            <div className="supportTitle">Sponsor</div>
            <div className="subtle">
              Become a sponsor to support the mission while getting your brand in front of a loyal, values-driven
              community.
            </div>
          </div>

          <div className="supportCard">
            <div className="supportTitle">Share the stations</div>
            <div className="subtle">
              The simplest support: share the station links, invite friends, and help more people find the music.
            </div>
          </div>
        </div>

        <div className="ctaBar">
          <div>
            <div className="ctaBarTitle">Support Veteran Voice Radio</div>
            <div className="subtle">Every contribution helps us reach more veterans and amplify more voices.</div>
          </div>

          <div className="ctaBarActions">
            <a className="btn btnPrimary" href={DONATE_HREF} target="_blank" rel="noreferrer">
              Donate Now
            </a>
            <Link className="btn btnGhost" href="/sponsors">
              Become a Sponsor
            </Link>
            <Link className="btn btnGhost" href={`/stations/semper-fi-country`}>
              Listen Live
            </Link>
          </div>
        </div>
      </section>

      {/* TRANSPARENCY */}
      <section className="section">
        <div className="glassBand">
          <div className="bandLeft">
            <div className="bandTitle">Transparency</div>
            <div className="subtle">
              Veteran Voice Radio operates as a nonprofit initiative. We’re committed to transparency as we grow —
              including sponsor info, impact updates, and mission initiatives.
            </div>
            <div className="bandMeta">Nonprofit EIN: {EIN}</div>
          </div>

          <div className="bandRight">
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
