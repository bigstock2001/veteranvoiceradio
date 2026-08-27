export const metadata = {
  title: "Sponsorship | Spring Freedom Fling — Veteran Voice Radio",
  description:
    "Partner with Veteran Voice Radio to support veterans through music, media, and community.",
};

const GLASS_STYLE = {
  backgroundColor: "rgba(8,12,22,.82)",
  backgroundImage:
    "linear-gradient(90deg, rgba(220,38,38,.40), rgba(255,255,255,.18), rgba(37,99,235,.40))",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  border: "1px solid rgba(255,255,255,.18)",
  borderRadius: "16px",
};

const SPONSOR_BUTTON_STYLE = {
  display: "flex",
  width: "100%",
  minHeight: "58px",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "24px",
  padding: "14px 20px",
  border: "2px solid #ffffff",
  borderRadius: "14px",
  background: "linear-gradient(135deg, #dc2626, #b91c1c)",
  color: "#ffffff",
  fontSize: "18px",
  fontWeight: 900,
  letterSpacing: ".04em",
  textAlign: "center",
  textTransform: "uppercase",
  textDecoration: "none",
  boxShadow: "0 10px 28px rgba(220,38,38,.45)",
  cursor: "pointer",
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
      <div className="text-sm uppercase tracking-wider text-white/80">{title}</div>
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

function TierCard({ title, price, note, perks, highlight, paymentLink }) {
  return (
    <div
      style={{
        borderRadius: "18px",
        border: highlight ? "1px solid rgba(239,68,68,.65)" : "1px solid rgba(255,255,255,.15)",
        background: highlight ? "rgba(0,0,0,.52)" : "rgba(0,0,0,.42)",
        padding: "24px",
        boxShadow: "0 10px 30px rgba(0,0,0,.28)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px" }}>
        <div>
          <h3 style={{ margin: 0, fontSize: "24px", fontWeight: 800, color: "#fff" }}>{title}</h3>
          <p style={{ margin: "8px 0 0", color: "rgba(255,255,255,.72)" }}>
            {note || "Sponsorship Tier"}
          </p>
        </div>
        <div
          style={{
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,.15)",
            background: "rgba(0,0,0,.6)",
            padding: "9px 14px",
            fontSize: "18px",
            fontWeight: 700,
            color: "#fff",
            whiteSpace: "nowrap",
          }}
        >
          {price}
        </div>
      </div>

      <ul style={{ marginTop: "20px", color: "#fff", lineHeight: 1.5 }}>
        {perks.map((perk) => (
          <li key={perk}>{perk}</li>
        ))}
      </ul>

      <a
        href={paymentLink}
        target="_blank"
        rel="noopener noreferrer"
        role="button"
        aria-label={`Pay for ${title}`}
        className="btn btnBig"
        style={SPONSOR_BUTTON_STYLE}
      >
        Sponsor This Level — {price}
      </a>

      <p
        style={{
          margin: "10px 0 0",
          textAlign: "center",
          fontSize: "13px",
          fontWeight: 600,
          color: "rgba(255,255,255,.72)",
        }}
      >
        Secure payment powered by Stripe
      </p>
    </div>
  );
}

export default function SponsorshipPage() {
  return (
    <main className="min-h-screen text-white" style={{ color: "rgba(255,255,255,.92)" }}>
      <section className="container pagePad text-center">
        <SectionHeader>Sponsorship Opportunities</SectionHeader>

        <p className="mt-6 text-lg text-white/90 max-w-3xl mx-auto">
          Support veterans. Support community. Support music with a mission.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#sponsorship-levels" className="btn btnPrimary btnBig">
            View Sponsorship Levels
          </a>
          <a href="#contact" className="btn btnGhost btnBig">
            Become a Partner
          </a>
        </div>
      </section>

      <section className="container section">
        <SectionHeader>About the Event</SectionHeader>
        <p className="mt-6 text-white/90 leading-relaxed max-w-4xl">
          Spring Freedom Fling is a mission-driven community music festival
          presented by Veteran Voice Radio, a nonprofit dedicated to amplifying
          veteran voices through music, media, and creative healing.
        </p>
      </section>

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

      <section className="container section">
        <SectionHeader>Current Media Reach</SectionHeader>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <StatCard title="Radio Sessions" value="3,000+" />
          <StatCard title="Unique Listeners" value="180+" />
          <StatCard title="Social Followers" value="15,000+" />
        </div>
      </section>

      <section id="sponsorship-levels" className="container section">
        <SectionHeader>Sponsorship Levels</SectionHeader>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginTop: "32px",
          }}
        >
          <TierCard
            title="🇺🇸 Freedom Partner"
            price="$6,500"
            paymentLink="https://buy.stripe.com/eVq4gAfzX3fx9Apg68fbq0d"
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
            paymentLink="https://buy.stripe.com/7sY4gAcnL03lcMB07afbq0e"
            perks={["Stage signage", "Booth space", "Radio mentions", "VIP passes"]}
          />

          <TierCard
            title="🥈 Silver Sponsor"
            price="$2,500"
            paymentLink="https://buy.stripe.com/3cIfZigE19DV5k9cTWfbq0f"
            perks={["Shared signage", "Radio mention", "Social media thank-you"]}
          />

          <TierCard
            title="⭐ Patriot Sponsor"
            price="$500"
            paymentLink="https://buy.stripe.com/dRm3cw9bz8zRdQF1befbq0g"
            perks={["Sponsor board listing", "Event recognition", "Website sponsor listing"]}
          />
        </div>
      </section>

      <section id="contact" className="container section text-center">
        <SectionHeader>Let’s Partner</SectionHeader>
        <p className="mt-6 text-white/90 max-w-2xl mx-auto">
          Supporting Spring Freedom Fling means supporting veterans, creative
          healing, and a mission-driven community.
        </p>
        <div className="mt-8">
          <a href="mailto:info@veteranvoiceradio.com" className="btn btnPrimary btnBig">
            Email Us About Sponsorship info@veteranvoiceradio.com or donald.l.dunn@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
}
