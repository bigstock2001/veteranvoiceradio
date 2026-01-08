export const metadata = {
  title: "Sponsorship | Spring Freedom Fling — Veteran Voice Radio",
  description:
    "Partner with Veteran Voice Radio to support veterans through music, media, and community.",
};

function StatCard({ title, value, sub }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-sm backdrop-blur">
      <div className="text-sm uppercase tracking-wider text-white/70">
        {title}
      </div>
      <div className="mt-2 text-3xl font-bold">{value}</div>
      {sub ? <div className="mt-2 text-sm text-white/70">{sub}</div> : null}
    </div>
  );
}

function AudiencePill({ text }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-center text-sm text-white/90 shadow-sm">
      {text}
    </div>
  );
}

function TierCard({ title, price, note, perks, highlight }) {
  return (
    <div
      className={[
        "rounded-2xl border p-6 shadow-sm",
        highlight
          ? "border-red-500/60 bg-gradient-to-b from-white/10 to-white/5"
          : "border-white/10 bg-white/5",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold">{title}</h3>
          {note ? (
            <p className="mt-1 text-sm text-red-300">{note}</p>
          ) : (
            <p className="mt-1 text-sm text-white/60">Sponsorship Tier</p>
          )}
        </div>
        <div className="rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-lg font-semibold">
          {price}
        </div>
      </div>

      <ul className="mt-5 space-y-2 text-white/85">
        {perks.map((perk) => (
          <li key={perk} className="flex gap-2">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-red-400/80" />
            <span>{perk}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SponsorshipPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 opacity-40">
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.35),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.06),transparent_55%)]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
            Veteran Voice Radio • Spring Freedom Fling
          </p>

          <h1 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight">
            Sponsorship Opportunities
          </h1>

          <p className="mt-5 text-lg text-white/75 max-w-3xl mx-auto">
            Support veterans. Support community. Support music with a mission.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#sponsorship-levels"
              className="w-full sm:w-auto rounded-xl bg-red-600 px-6 py-3 font-semibold shadow hover:bg-red-700 transition"
            >
              View Sponsorship Levels
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white/90 hover:border-white/30 hover:bg-white/10 transition"
            >
              Become a Partner
            </a>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 pb-24 space-y-20">
        {/* About + Mission */}
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-sm">
            <h2 className="text-3xl font-bold">About the Event</h2>
            <p className="mt-4 text-white/75 leading-relaxed">
              Spring Freedom Fling is a mission-driven community music festival
              presented by Veteran Voice Radio, a nonprofit dedicated to
              amplifying veteran voices through music, media, and creative
              healing.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                <div className="text-sm text-white/60">Location</div>
                <div className="mt-1 font-semibold">Easley, South Carolina</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                <div className="text-sm text-white/60">Date</div>
                <div className="mt-1 font-semibold">To Be Announced</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-sm">
            <h2 className="text-3xl font-bold">Why This Matters</h2>
            <p className="mt-4 text-white/75 leading-relaxed">
              Every sponsorship helps expand veteran-focused initiatives through
              media, music, and creative healing.
            </p>

            <ul className="mt-6 space-y-3 text-white/85">
              {[
                "Operating and expanding Veteran Voice Radio",
                "Launching a Veteran Art Therapy Program",
                "Creating the Veteran Voice Music Awards (VVMA)",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Audience */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Who Your Business Reaches</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Veterans & Military Families",
              "Local Families & Community Leaders",
              "Live Music Fans",
              "Patriot-Supportive Consumers",
            ].map((t) => (
              <AudiencePill key={t} text={t} />
            ))}
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/75">
            Sponsor exposure includes on-site visibility, on-air radio promotion,
            podcast mentions, social media promotion, and official event
            merchandise placement.
          </div>
        </div>

        {/* Stats */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Current Media Reach</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <StatCard
              title="Radio Listening Sessions"
              value="3,000+"
              sub="Across two licensed stations"
            />
            <StatCard
              title="Unique Radio Listeners"
              value="180+"
              sub="Verified platform tracking"
            />
            <StatCard
              title="Social Followers"
              value="15,000+"
              sub="Facebook + Instagram"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Semper Fi Country</h3>
              <p className="mt-2 text-white/75">
                Strong listener loyalty and extended sessions.
              </p>
              <ul className="mt-4 space-y-2 text-white/85">
                <li>• 1,800+ listening sessions</li>
                <li>• 110+ unique listeners</li>
                <li>• 13+ minute average listening time</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Ranger Rockwave</h3>
              <p className="mt-2 text-white/75">
                Consistent reach into a rock-focused audience.
              </p>
              <ul className="mt-4 space-y-2 text-white/85">
                <li>• 1,600+ listening sessions</li>
                <li>• 90+ unique listeners</li>
                <li>• 2+ minute average listening time</li>
              </ul>
            </div>
          </div>

          <p className="text-sm text-white/60">
            *All listener data reflects verified streaming sessions and unique
            listeners tracked through the station’s licensed platform.
          </p>
        </div>

        {/* Sponsorship Levels */}
        <div id="sponsorship-levels" className="space-y-8">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2 className="text-3xl font-bold">Sponsorship Levels</h2>
            <p className="text-white/60 max-w-xl">
              Choose the tier that fits your brand. Every level supports
              veteran-focused programming and creative healing initiatives.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <TierCard
              title="🇺🇸 Freedom Partner"
              price="$6,500"
              note="Exclusive Presenting Sponsor (1 available)"
              highlight
              perks={[
                "Main stage banner placement",
                "Premium booth",
                "Radio & podcast mentions",
                "Social media feature promotions",
                "VIP passes",
                "Logo on Official 2026 Spring Freedom Fling T-Shirts",
              ]}
            />

            <TierCard
              title="🥇 Gold Sponsor"
              price="$4,500"
              perks={[
                "Stage signage",
                "Booth space",
                "Radio & podcast mentions",
                "VIP passes",
                "Logo placement on event T-shirts",
              ]}
            />

            <TierCard
              title="🥈 Silver Sponsor"
              price="$2,500"
              perks={[
                "Shared signage",
                "Radio mention",
                "Social media thank-you post",
                "Logo placement on event T-shirts",
              ]}
            />

            <TierCard
              title="⭐ Patriot Sponsor"
              price="$500"
              perks={[
                "Sponsor board listing",
                "Event-day recognition",
                "Website sponsor listing",
                "Logo placement on event T-shirts",
              ]}
            />
          </div>
        </div>

        {/* CTA */}
        <div
          id="contact"
          className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-10 text-center shadow-sm"
        >
          <h2 className="text-3xl font-bold">Let’s Partner</h2>
          <p className="mt-4 text-white/75 max-w-2xl mx-auto">
            Supporting Spring Freedom Fling means supporting veterans, creative
            healing, and a mission-driven community.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:info@veteranvoiceradio.com?subject=Spring%20Freedom%20Fling%20Sponsorship"
              className="w-full sm:w-auto rounded-xl bg-red-600 px-6 py-3 font-semibold shadow hover:bg-red-700 transition"
            >
              Email Us About Sponsorship
            </a>
            <a
              href="/"
              className="w-full sm:w-auto rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white/90 hover:border-white/30 hover:bg-white/10 transition"
            >
              
            </a>
          </div>

          <div className="mt-6 text-sm text-white/60">
             <span className="text-white/80">info@veteranvoiceradio.com</span>
          </div>
        </div>
      </section>
    </main>
  );
}
