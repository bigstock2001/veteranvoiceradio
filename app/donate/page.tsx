// app/donate/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Donate | Veteran Voice Radio",
  description:
    "Support Veteran Voice Radio. Your donation helps keep veteran-powered programming on the air and funds outreach to veterans.",
};

export default function DonatePage() {
  return (
    <div className="pagePad">
      <div className="container">
        <div className="kicker">Support the mission</div>
        <h1 className="h1">Donate</h1>
        <p className="lead">
          Veteran Voice Radio exists to honor service through sound — helping veterans heal,
          reconnect, and rediscover purpose by amplifying the music and stories behind the uniform.
          If you believe in that mission, your support keeps the stations running and growing.
        </p>

        <div className="ctaRow" style={{ marginBottom: 18 }}>
          <a className="btn btnPrimary btnBig" href="#donate-options">
            Give Now
          </a>
          <Link className="btn btnGhost btnBig" href="/about">
            Learn More
          </Link>
        </div>

        <div
          className="featureGrid"
          style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}
        >
          <div className="featureCard">
            <div className="featureTitle">Keep the stations live</div>
            <div className="subtle">
              Streaming, licensing, hosting, and production tools cost money every month. Your gift
              helps keep Veteran Voice Radio on the air.
            </div>
          </div>

          <div className="featureCard">
            <div className="featureTitle">Support veteran outreach</div>
            <div className="subtle">
              We build community through interviews, music, and stories that remind veterans they’re
              not alone.
            </div>
          </div>

          <div className="featureCard">
            <div className="featureTitle">Fuel growth</div>
            <div className="subtle">
              Donations help expand programming, improve production quality, and grow both Ranger
              Rockwave and Semper Fi Country.
            </div>
          </div>
        </div>

        <div id="donate-options" className="section">
          <div className="sectionTitle">Donation options</div>

          <div
            className="stationGrid"
            style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}
          >
            <div className="glassCard">
              <div className="cardTitle">One-time donation</div>
              <p className="subtle" style={{ marginTop: 0 }}>
                Make a single contribution to support the mission. Any amount helps.
              </p>

              <div className="ctaRow">
                {/* Replace these hrefs with your real donation links when ready */}
                <a className="btn btnPrimary" href="#" aria-disabled="true">
                  Donate (Coming Soon)
                </a>
                <a className="btn btnGhost" href="#" aria-disabled="true">
                  Donate via PayPal (Coming Soon)
                </a>
              </div>

              <p className="note">
                When you’re ready, tell me what payment method you want (PayPal, Stripe, Donorbox,
                Givebutter, etc.) and I’ll wire up the real links.
              </p>
            </div>

            <div className="glassCard">
              <div className="cardTitle">Monthly support</div>
              <p className="subtle" style={{ marginTop: 0 }}>
                Become a sustaining supporter. Monthly giving helps us plan and grow.
              </p>

              <div className="ctaRow">
                {/* Replace these hrefs with your real subscription/donation links when ready */}
                <a className="btn btnPrimary" href="#" aria-disabled="true">
                  Monthly (Coming Soon)
                </a>
                <a className="btn btnGhost" href="#" aria-disabled="true">
                  Sponsor a segment (Coming Soon)
                </a>
              </div>

              <p className="note">
                If you want tiers (e.g., $5 / $10 / $25 / $50), I can build the UI and connect it to
                Stripe in the next step.
              </p>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="sectionTitle">Other ways to help</div>

          <div className="featureGrid">
            <div className="featureCard">
              <div className="featureTitle">Share the stations</div>
              <div className="subtle">
                Tell a veteran friend. Post a link. Word of mouth matters more than anything.
              </div>
            </div>

            <div className="featureCard">
              <div className="featureTitle">Corporate support</div>
              <div className="subtle">
                Want a sponsor package for your business? We can build a tier that fits your goals.
              </div>
            </div>

            <div className="featureCard">
              <div className="featureTitle">Book a guest / partner</div>
              <div className="subtle">
                Know a veteran musician, author, or organization we should feature? Send them our
                way.
              </div>
            </div>
          </div>

          <div className="glassCard" style={{ marginTop: 14 }}>
            <div className="cardTitle">Need to get in touch?</div>
            <p className="subtle" style={{ marginTop: 0 }}>
              For sponsorships, partnerships, or questions about donating, contact us and we’ll
              respond quickly.
            </p>

            <div className="ctaRow">
              <a className="btn btnPrimary" href="mailto:ddunn@veteranvoiceradio.com">
                Email: ddunn@veteranvoiceradio.com
              </a>
              <a className="btn btnGhost" href="tel:3149442730">
                Call: 314-944-2730
              </a>
            </div>
          </div>
        </div>

        <div className="note" style={{ marginTop: 18 }}>
          Tip: once you decide your donation platform, I’ll update this page to use real checkout
          links and we can also add a “Donate” button inside the sticky player bar.
        </div>
      </div>
    </div>
  );
}
