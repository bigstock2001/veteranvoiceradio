// app/donate/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
  title: "Donate | Veteran Voice Radio",
  description:
    "Support Veteran Voice Radio. No one at Veteran Voice Radio takes a salary; 100% of the funds we receive support the mission serving veterans through music, art, outreach, and community.",
};

const STRIPE_DONATE_URL = "https://donate.stripe.com/bJe7sM0F3eYf6odf24fbq0c";

const GLASS_STYLE: CSSProperties = {
  backgroundColor: "rgba(8,12,22,.78)",
  backgroundImage:
    "linear-gradient(90deg, rgba(220,38,38,.38), rgba(255,255,255,.16), rgba(37,99,235,.38))",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  border: "1px solid rgba(255,255,255,.18)",
  borderRadius: "14px",
  boxShadow: "0 10px 30px rgba(0,0,0,.35)",
};

const GLASS_STYLE_SMALL: CSSProperties = {
  ...GLASS_STYLE,
  borderRadius: "12px",
};

export default function DonatePage() {
  return (
    <div className="pagePad">
      <div className="container">
        <div className="kicker px-4 py-2" style={GLASS_STYLE}>
          Support the mission
        </div>

        <h1 className="h1" style={{ ...GLASS_STYLE, padding: "12px 16px", display: "inline-block" }}>
          Donate to Veteran Voice Radio
        </h1>

        <p className="lead">
          Veteran Voice Radio exists to honor service through sound, art, stories, and community — helping veterans
          reconnect, find purpose, and know that their voices still matter. Your support keeps that mission moving.
        </p>

        <div
          className="glassCard"
          style={{
            margin: "20px 0 24px",
            border: "1px solid rgba(250,204,21,.45)",
            background: "linear-gradient(135deg, rgba(120,53,15,.35), rgba(8,12,22,.9))",
          }}
        >
          <div className="cardTitle px-3 py-2" style={GLASS_STYLE_SMALL}>
            100% goes to the mission
          </div>
          <p className="lead" style={{ margin: "12px 0 6px", fontSize: "1.08rem" }}>
            No one at Veteran Voice Radio takes a salary. We are here to serve, not to profit from the mission.
          </p>
          <p className="subtle" style={{ marginBottom: 0 }}>
            100% of the funds Veteran Voice Radio receives are used to support the mission — keeping our veteran-focused
            programming running, creating music and art opportunities, supporting outreach and community events, and
            giving veterans a place to connect and be heard.
          </p>
        </div>

        <div className="ctaRow" style={{ marginBottom: 18 }}>
          <a
            className="btn btnPrimary btnBig"
            href={STRIPE_DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate Securely with Stripe
          </a>
          <Link className="btn btnGhost btnBig" href="/about">
            Learn More About Our Mission
          </Link>
        </div>

        <div className="featureGrid" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          <div className="featureCard">
            <div className="featureTitle px-3 py-2" style={GLASS_STYLE_SMALL}>
              Keep Veteran Voice Radio live
            </div>
            <div className="subtle">
              Donations help cover streaming, licensing, hosting, production tools, website services, and the technology
              needed to keep our veteran-focused programming available.
            </div>
          </div>

          <div className="featureCard">
            <div className="featureTitle px-3 py-2" style={GLASS_STYLE_SMALL}>
              Music, art & healing
            </div>
            <div className="subtle">
              Your support helps us create opportunities where veterans can use music, art, and storytelling to connect,
              express themselves, and share their experiences.
            </div>
          </div>

          <div className="featureCard">
            <div className="featureTitle px-3 py-2" style={GLASS_STYLE_SMALL}>
              Outreach & community
            </div>
            <div className="subtle">
              Donations help us bring veterans, first responders, families, artists, and communities together through
              outreach, events, and veteran-centered programs.
            </div>
          </div>
        </div>

        <div id="donate-options" className="section">
          <div className="sectionTitle px-4 py-2" style={GLASS_STYLE}>
            Make a donation
          </div>

          <div className="stationGrid" style={{ gridTemplateColumns: "minmax(0, 1fr)" }}>
            <div className="glassCard">
              <div className="cardTitle px-3 py-2" style={GLASS_STYLE_SMALL}>
                Choose the amount that works for you
              </div>
              <p className="subtle" style={{ marginTop: 0 }}>
                Every contribution matters. Our Stripe donation page lets you choose your own donation amount and pay
                securely by the payment methods Stripe makes available to you.
              </p>

              <div className="ctaRow">
                <a
                  className="btn btnPrimary btnBig"
                  href={STRIPE_DONATE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Donate Now with Stripe
                </a>
              </div>

              <p className="note">
                Payments are processed securely by Stripe. Veteran Voice Radio does not store your card information on
                this website.
              </p>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="sectionTitle px-4 py-2" style={GLASS_STYLE}>
            Where your support goes
          </div>

          <div className="featureGrid">
            <div className="featureCard">
              <div className="featureTitle px-3 py-2" style={GLASS_STYLE_SMALL}>
                Veteran programming
              </div>
              <div className="subtle">
                Keeping veteran voices, stories, music, interviews, and programming available to the community.
              </div>
            </div>

            <div className="featureCard">
              <div className="featureTitle px-3 py-2" style={GLASS_STYLE_SMALL}>
                Events & outreach
              </div>
              <div className="subtle">
                Helping cover the real costs of bringing veterans and communities together through events and outreach.
              </div>
            </div>

            <div className="featureCard">
              <div className="featureTitle px-3 py-2" style={GLASS_STYLE_SMALL}>
                Art & music opportunities
              </div>
              <div className="subtle">
                Supporting opportunities for veterans to connect, create, share their stories, and find community through
                art and music.
              </div>
            </div>
          </div>

          <div className="glassCard" style={{ marginTop: 14 }}>
            <div className="cardTitle px-3 py-2" style={GLASS_STYLE_SMALL}>
              Questions about donating?
            </div>
            <p className="subtle" style={{ marginTop: 0 }}>
              If you have questions about a donation, sponsorship, partnership, or another way to support the mission,
              contact Veteran Voice Radio directly.
            </p>

            <div className="ctaRow">
              <a className="btn btnPrimary" href="mailto:veteranvoiceradio@gmail.com">
                Email Veteran Voice Radio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
