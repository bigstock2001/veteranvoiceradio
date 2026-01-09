export const metadata = {
  title: "Sponsorship | Spring Freedom Fling — Veteran Voice Radio",
  description:
    "Partner with Veteran Voice Radio to support veterans through music, media, and community.",
};

/* Shared red/white/blue glass style */
const GLASS_STYLE = {
  backgroundColor: "rgba(8,12,22,.82)",
  backgroundImage:
    "linear-gradient(90deg, rgba(220,38,38,.40), rgba(255,255,255,.18), rgba(37,99,235,.40))",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  border: "1px solid rgba(255,255,255,.18)",
  borderRadius: "16px",
};

function SectionHeader({ children }) {
  return (
    <div style={GLASS_STYLE} className="px-6 py-3 inline-block">
      <h2 className="text-3xl font-bold text-white">{children}</h2>
    </div>
  );
}

function StatCard({ title, value, sub }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-black/40 p-6 text-center shadow-sm backdrop-blur">
      <div className="text-sm uppercase tracking-wider text-white/80">
        {title}
      </div>
      <div className="mt-2 text-3xl font-bold text-white">{value}</div>
      {sub && <div className="mt-2 text-sm text-white/70">{sub}</div>}
    </div>
  );
}

function AudiencePill({ text }) {
  return (
    <div className="rounded-xl border border-white/15 bg-black/40 px-4 py-4 text-center text-sm text-white shadow-sm">
      {text}
    </div>
  );
}

function TierCard({ title, price, note, perks, highlight }) {
  return (
    <div
      className={[
        "rounded-2xl border p-6 shadow-sm backdrop-blur",
        highlight
          ? "border-red-500/60 bg-black/50"
          : "border-white/15 bg-black/40",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <p className="mt-1 text-sm text-white/70">
            {note || "Sponsorship Tier"}
          </p>
        </div>
        <div className="rounded-xl border border-white/15 bg-black/60 px-4 py-2 text-lg font-semibold text-white">
          {price}
        </div>
      </div>

      <ul className="mt-5 space-y-2 text-white">
        {perks.map((perk) => (
          <li key={perk} className="flex gap-2">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-red-400" />
            <span>{perk}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SponsorshipPage() {
  return (
<main
  className="min-h-screen text-white"
  style={{ color: "rgba(255,255,255,.92)" }}
>
      {/* HERO */}
      <section className="container pagePad text-center">
        <SectionHeader>Sponsorship Opportunities</SectionHeader>

        <p className="mt-6 text-lg text-white/90 max-w-3xl mx-auto">
          Support veterans. Support community. Support music with a mission.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#sponsorship-levels"
            className="rounded-xl bg-red-600 px-6 py-3 font-semibold shadow hover:bg-red-700 transition"
          >
            View Sponsorship Levels
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-white/20 bg-black/40 px-6 py-3 font-semibold hover:bg-black/60 transition"
          >
            Become a Partner
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="container section">
        <SectionHeader>About the Event</SectionHeader>

        <p className="mt-6 text-white/90 leading-relaxed max-w-4xl">
          Spring Freedom Fling is a mission-driven community music festival
          presented by Veteran Voice Radio, a nonprofit dedicated to amplifying
          veteran voices through music, media, and creative healing.
        </p>
      </section>

      {/* AUDIENCE */}
      <section className="container section">
        <SectionHeader>Who Your Business Reaches</SectionHeader>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "Veterans & Military Families",
            "Local Families & Community Leaders",
            "Live Music Fans",
            "Patriot-Supportive Consumers",
          ].map((t) => (
            <AudiencePill key={t} text={t} />
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="container section">
        <SectionHeader>Current Media Reach</SectionHeader>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <StatCard title="Radio Sessions" value="3,000+" />
          <StatCard title="Unique Listeners" value="180+" />
          <StatCard title="Social Followers" value="15,000+" />
        </div>
      </section>

      {/* TIERS */}
      <section id="sponsorship-levels" className="container section">
        <SectionHeader>Sponsorship Levels</SectionHeader>

        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          <TierCard
            title="🇺🇸 Freedom Partner"
            price="$6,500"
            highlight
            perks={[
              "Main stage banner placement",
              "Premium booth",
              "Radio & podcast mentions",
              "Social media promotions",
              "VIP passes",
              "Logo on event shirts",
            ]}
          />

          <TierCard
            title="🥇 Gold Sponsor"
            price="$4,500"
            perks={[
              "Stage signage",
              "Booth space",
              "Radio mentions",
              "VIP passes",
            ]}
          />

          <TierCard
            title="🥈 Silver Sponsor"
            price="$2,500"
            perks={[
              "Shared signage",
              "Radio mention",
              "Social media thank-you",
            ]}
          />

          <TierCard
            title="⭐ Patriot Sponsor"
            price="$500"
            perks={[
              "Sponsor board listing",
              "Event recognition",
              "Website sponsor listing",
            ]}
          />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="container section text-center">
        <SectionHeader>Let’s Partner</SectionHeader>

        <p className="mt-6 text-white/90 max-w-2xl mx-auto">
          Supporting Spring Freedom Fling means supporting veterans, creative
          healing, and a mission-driven community.
        </p>

        <div className="mt-8">
          <a
            href="mailto:info@veteranvoiceradio.com"
            className="rounded-xl bg-red-600 px-6 py-3 font-semibold hover:bg-red-700 transition"
          >
            Email Us About Sponsorship
          </a>
        </div>
      </section>
    </main>
  );
}
