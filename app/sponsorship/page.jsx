export const metadata = {
  title: "Sponsorship | Spring Freedom Fling — Veteran Voice Radio",
  description:
    "Partner with Veteran Voice Radio to support veterans through music, media, and community.",
};

export default function SponsorshipPage() {
  return (
    <main className="bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Spring Freedom Fling Sponsorship
        </h1>
        <p className="text-lg text-zinc-300 max-w-3xl mx-auto">
          Support veterans. Support community. Support music with a mission.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#sponsorship-levels"
            className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 transition font-semibold"
          >
            View Sponsorship Levels
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-zinc-600 hover:border-white transition"
          >
            Become a Partner
          </a>
        </div>
      </section>

      {/* CONTENT WRAPPER */}
      <section className="max-w-6xl mx-auto px-6 space-y-20 pb-24">
        {/* ABOUT */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">About the Event</h2>
            <p className="text-zinc-300">
              Spring Freedom Fling is a mission-driven music festival presented
              by Veteran Voice Radio, a nonprofit dedicated to amplifying veteran
              voices through music, media, and creative healing.
            </p>
            <p className="mt-4 text-zinc-400">
              📍 Easley, South Carolina <br />
              🗓 Date: To Be Announced
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              Why This Event Matters
            </h3>
            <ul className="space-y-2 text-zinc-300">
              <li>🎙️ Operating Veteran Voice Radio</li>
              <li>🎨 Launching Veteran Art Therapy Programs</li>
              <li>🏆 Creating the Veteran Voice Music Awards</li>
            </ul>
          </div>
        </div>

        {/* AUDIENCE */}
        <div>
          <h2 className="text-3xl font-semibold mb-6">
            Who Your Business Reaches
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Veterans & Military Families",
              "Local Community Leaders",
              "Live Music Fans",
              "Patriot-Supportive Consumers",
            ].map((item) => (
              <div
                key={item}
                className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-center"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* STATS */}
        <div>
          <h2 className="text-3xl font-semibold mb-6">Media Reach</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="stat-card">
              <h3>Radio Network</h3>
              <p>3,000+ listening sessions</p>
            </div>
            <div className="stat-card">
              <h3>Unique Listeners</h3>
              <p>180+ nationwide</p>
            </div>
            <div className="stat-card">
              <h3>Social Reach</h3>
              <p>15,000+ followers</p>
            </div>
          </div>
        </div>

        {/* SPONSORSHIP LEVELS */}
        <div id="sponsorship-levels">
          <h2 className="text-3xl font-semibold mb-8">
            Sponsorship Opportunities
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "🇺🇸 Freedom Partner",
                price: "$6,500",
                note: "Exclusive Presenting Sponsor",
                perks: [
                  "Main stage banner",
                  "Premium booth",
                  "Radio & podcast mentions",
                  "Social media features",
                  "VIP passes",
                  "Logo on official event T-shirts",
                ],
                highlight: true,
              },
              {
                title: "🥇 Gold Sponsor",
                price: "$4,500",
                perks: [
                  "Stage signage",
                  "Booth space",
                  "Radio & podcast mentions",
                  "VIP passes",
                  "Logo on event T-shirts",
                ],
              },
              {
                title: "🥈 Silver Sponsor",
                price: "$2,500",
                perks: [
                  "Shared signage",
                  "Radio mention",
                  "Social media thank-you",
                  "Logo on event T-shirts",
                ],
              },
              {
                title: "⭐ Patriot Sponsor",
                price: "$500",
                perks: [
                  "Sponsor board listing",
                  "Event-day recognition",
                  "Website listing",
                  "Logo on event T-shirts",
                ],
              },
            ].map((tier) => (
              <div
                key={tier.title}
                className={`rounded-xl p-6 border ${
                  tier.highlight
                    ? "border-red-600 bg-zinc-900"
                    : "border-zinc-800 bg-zinc-900"
                }`}
              >
                <h3 className="text-2xl font-bold">
                  {tier.title} — {tier.price}
                </h3>
                {tier.note && (
                  <p className="text-red-400 text-sm mt-1">{tier.note}</p>
                )}
                <ul className="mt-4 space-y-2 text-zinc-300">
                  {tier.perks.map((perk) => (
                    <li key={perk}>• {perk}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          id="contact"
          className="text-center bg-zinc-900 border border-zinc-800 rounded-xl p-10"
        >
          <h2 className="text-3xl font-semibold mb-4">Let’s Partner</h2>
          <p className="text-zinc-300 max-w-2xl mx-auto">
            Supporting Spring Freedom Fling means supporting veterans,
            creativity, and community.
          </p>
          <p className="mt-4 text-zinc-400">
            📧 Email: info@veteranvoiceradio.com <br />
            🌐 veteranvoiceradio.com
          </p>
        </div>
      </section>

      <style jsx>{`
        .stat-card {
          background: #111;
          border: 1px solid #27272a;
          border-radius: 0.75rem;
          padding: 1.5rem;
          text-align: center;
        }
        .stat-card h3 {
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .stat-card p {
          color: #d4d4d8;
          font-size: 1.1rem;
        }
      `}</style>
    </main>
  );
}
