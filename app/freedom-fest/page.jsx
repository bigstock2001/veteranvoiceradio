export const metadata = {
  title: "Freedom Fest 2026 | Veteran Voice Radio",
  description:
    "Freedom Fest 2026 at Hagood Mill Historic Site in Pickens, South Carolina. Event details, vendor registration, and booth-space payment.",
};

const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/aFa28s87v3fx13TaLOfbq01";

const GLASS_STYLE = {
  backgroundColor: "rgba(8,12,22,.84)",
  backgroundImage:
    "linear-gradient(105deg, rgba(185,28,28,.36), rgba(255,255,255,.08), rgba(29,78,216,.34))",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  border: "1px solid rgba(255,255,255,.16)",
  borderRadius: "18px",
};

function SectionTitle({ children }) {
  return (
    <div style={GLASS_STYLE} className="inline-block px-6 py-3 shadow-lg">
      <h2 className="text-2xl font-bold text-white sm:text-3xl">{children}</h2>
    </div>
  );
}

function InfoCard({ label, value, sub }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-black/45 p-5 text-center shadow-lg backdrop-blur">
      <div className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">
        {label}
      </div>
      <div className="mt-2 text-xl font-bold text-white sm:text-2xl">{value}</div>
      {sub ? <div className="mt-1 text-sm text-white/65">{sub}</div> : null}
    </div>
  );
}

const inputClass =
  "mt-2 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-red-400 focus:ring-2 focus:ring-red-500/25";

export default function FreedomFestPage() {
  return (
    <main className="min-h-screen text-white">
      <section className="container pagePad">
        <div
          className="overflow-hidden rounded-3xl border border-white/15 px-6 py-12 text-center shadow-2xl sm:px-10 sm:py-16"
          style={{
            background:
              "radial-gradient(circle at top left, rgba(220,38,38,.38), transparent 42%), radial-gradient(circle at top right, rgba(37,99,235,.42), transparent 44%), rgba(5,8,16,.90)",
          }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-red-300">
            Veteran Voice Radio Presents
          </p>
          <h1 className="mt-4 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Freedom Fest 2026
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/85 sm:text-xl">
            A community celebration built around veterans, music, storytelling,
            creative healing, local businesses, and the people who support those
            who served.
          </p>

          <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-3">
            <InfoCard label="Date" value="Saturday, Sept. 12" sub="2026" />
            <InfoCard label="Gates Open" value="4:00 PM" sub="Come early and explore" />
            <InfoCard
              label="Opening Ceremonies"
              value="5:45 PM"
              sub="Music and programming follow"
            />
          </div>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#vendor-signup"
              className="rounded-xl bg-white px-6 py-3 font-bold text-slate-950 transition hover:bg-white/90"
            >
              Sign Up as a Vendor
            </a>
            <a
              href={STRIPE_PAYMENT_LINK}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-red-600 px-7 py-3 font-bold text-white shadow-lg transition hover:bg-red-700"
            >
              Purchase Now
            </a>
          </div>
        </div>
      </section>

      <section className="container section">
        <SectionTitle>Freedom Fest at a Glance</SectionTitle>
        <div className="mt-7 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-2xl border border-white/15 bg-black/40 p-6 shadow-lg backdrop-blur sm:p-8">
            <h3 className="text-2xl font-bold">What Freedom Fest Is About</h3>
            <p className="mt-4 leading-relaxed text-white/80">
              Freedom Fest brings veterans, military families, supporters, artists,
              local businesses, and the community together for an evening with a
              purpose. Veteran Voice Radio uses music, media, art, and veteran stories
              to create connection, preserve voices that deserve to be heard, and
              support creative outlets that can help people heal.
            </p>
            <p className="mt-4 leading-relaxed text-white/80">
              Expect live music, veteran stories, community vendors, creative-healing
              activities, and an evening centered on service, sacrifice, family, and
              freedom.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-400/25 bg-blue-950/25 p-6 shadow-lg backdrop-blur sm:p-8">
            <h3 className="text-2xl font-bold">Location</h3>
            <p className="mt-4 text-lg font-semibold">Hagood Mill Historic Site</p>
            <p className="mt-1 text-white/80">138 Hagood Mill Rd</p>
            <p className="text-white/80">Pickens, SC 29671</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=138+Hagood+Mill+Rd+Pickens+SC+29671"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-semibold transition hover:bg-white/15"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <section className="container section">
        <SectionTitle>Event Schedule</SectionTitle>
        <div className="mt-7 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/15 bg-black/40 p-6">
            <div className="text-sm font-bold uppercase tracking-wider text-red-300">
              4:00 PM
            </div>
            <h3 className="mt-2 text-xl font-bold">Gates Open</h3>
            <p className="mt-2 text-white/70">
              Meet vendors, explore the grounds, connect with the community, and get
              settled before the program begins.
            </p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-black/40 p-6">
            <div className="text-sm font-bold uppercase tracking-wider text-blue-300">
              5:45 PM
            </div>
            <h3 className="mt-2 text-xl font-bold">Opening Ceremonies</h3>
            <p className="mt-2 text-white/70">
              Freedom Fest officially begins, followed by live music, stories, and
              the evening&apos;s featured programming.
            </p>
          </div>
        </div>
      </section>

      <section className="container section">
        <SectionTitle>Live Music & Community</SectionTitle>
        <div className="mt-7 rounded-2xl border border-white/15 bg-black/40 p-6 shadow-lg backdrop-blur sm:p-8">
          <p className="max-w-4xl leading-relaxed text-white/80">
            Freedom Fest features veteran-connected and independent artists who use
            music and personal stories to bring people together. The current lineup
            includes headliner <strong className="text-white">Scottie Fraser</strong>,
            along with <strong className="text-white">Mike Sandilla</strong> and
            <strong className="text-white"> James Holbert</strong>. Artist appearances
            and performance order are subject to change.
          </p>
        </div>
      </section>

      <section className="container section">
        <SectionTitle>Admission</SectionTitle>
        <div className="mt-7 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-white/15 bg-black/40 p-6 text-center">
            <div className="text-sm uppercase tracking-wider text-white/60">General Admission</div>
            <div className="mt-2 text-4xl font-black">$15</div>
            <div className="mt-2 text-white/65">At the gate</div>
          </div>
          <div className="rounded-2xl border border-red-400/30 bg-red-950/20 p-6 text-center">
            <div className="text-sm uppercase tracking-wider text-white/60">
              Veterans & First Responders
            </div>
            <div className="mt-2 text-4xl font-black">$10</div>
            <div className="mt-2 text-white/65">At the gate</div>
          </div>
        </div>
      </section>

      <section id="vendor-signup" className="container section scroll-mt-24">
        <SectionTitle>Vendor & Booth Registration</SectionTitle>

        <div className="mt-7 grid gap-7 lg:grid-cols-[.8fr_1.2fr]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-red-400/35 bg-red-950/25 p-6 shadow-lg">
              <h3 className="text-2xl font-bold">Booth Space — Please Read</h3>
              <p className="mt-4 text-lg leading-relaxed text-white/85">
                Your purchase is for <strong>the vendor spot only</strong>.
                <strong> Tables and electricity are not included.</strong>
              </p>
              <p className="mt-4 leading-relaxed text-white/70">
                Complete the registration form so we have your contact and vendor
                information, then use the Stripe button to purchase your space.
                Registration and payment are both required to complete your booth signup.
              </p>
              <a
                href={STRIPE_PAYMENT_LINK}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-red-600 px-6 py-4 text-lg font-black text-white shadow-lg transition hover:bg-red-700"
              >
                Purchase Now
              </a>
              <p className="mt-3 text-center text-xs text-white/55">
                Secure payment is completed on Stripe.
              </p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-black/40 p-6">
              <h3 className="text-xl font-bold">What to Have Ready</h3>
              <ul className="mt-4 space-y-3 text-white/75">
                <li>• Business, organization, or vendor name</li>
                <li>• Main contact information</li>
                <li>• What you plan to sell, display, or provide</li>
                <li>• Website or social link, if you have one</li>
                <li>• Any notes the Freedom Fest team should know</li>
              </ul>
            </div>
          </div>

          <form
            action="https://formsubmit.co/donald.l.dunn@gmail.com"
            method="POST"
            className="rounded-2xl border border-white/15 bg-black/45 p-6 shadow-xl backdrop-blur sm:p-8"
          >
            <input type="hidden" name="_cc" value="bcoopermarine@gmail.com" />
            <input type="hidden" name="_subject" value="New Freedom Fest Vendor Registration" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_next"
              value="https://www.veteranvoiceradio.com/freedom-fest/thank-you"
            />
            <input type="hidden" name="_captcha" value="true" />
            <input
              type="text"
              name="_honey"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div>
              <h3 className="text-2xl font-bold">Freedom Fest Vendor Signup Form</h3>
              <p className="mt-2 text-white/65">
                Submit your information below. A copy of the registration will be sent
                to the Freedom Fest team.
              </p>
            </div>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-white/85 sm:col-span-2">
                Business / Organization Name *
                <input
                  className={inputClass}
                  type="text"
                  name="Business / Organization"
                  required
                  autoComplete="organization"
                  placeholder="Your business or organization"
                />
              </label>

              <label className="text-sm font-semibold text-white/85">
                Contact Name *
                <input
                  className={inputClass}
                  type="text"
                  name="Contact Name"
                  required
                  autoComplete="name"
                  placeholder="First and last name"
                />
              </label>

              <label className="text-sm font-semibold text-white/85">
                Phone *
                <input
                  className={inputClass}
                  type="tel"
                  name="Phone"
                  required
                  autoComplete="tel"
                  placeholder="Best phone number"
                />
              </label>

              <label className="text-sm font-semibold text-white/85 sm:col-span-2">
                Email *
                <input
                  className={inputClass}
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                />
              </label>

              <label className="text-sm font-semibold text-white/85">
                Vendor Type *
                <select className={inputClass} name="Vendor Type" required defaultValue="">
                  <option value="" disabled className="bg-slate-950">
                    Select one
                  </option>
                  <option value="Food / Beverage" className="bg-slate-950">Food / Beverage</option>
                  <option value="Merchandise / Retail" className="bg-slate-950">Merchandise / Retail</option>
                  <option value="Nonprofit / Community Organization" className="bg-slate-950">
                    Nonprofit / Community Organization
                  </option>
                  <option value="Service Business" className="bg-slate-950">Service Business</option>
                  <option value="Artist / Maker" className="bg-slate-950">Artist / Maker</option>
                  <option value="Other" className="bg-slate-950">Other</option>
                </select>
              </label>

              <label className="text-sm font-semibold text-white/85">
                Number of Spots *
                <select className={inputClass} name="Number of Spots" required defaultValue="1">
                  <option value="1" className="bg-slate-950">1</option>
                  <option value="2" className="bg-slate-950">2</option>
                  <option value="3" className="bg-slate-950">3</option>
                  <option value="4+" className="bg-slate-950">4 or more</option>
                </select>
              </label>

              <label className="text-sm font-semibold text-white/85 sm:col-span-2">
                What will you sell, display, or provide? *
                <textarea
                  className={inputClass}
                  name="Products / Services"
                  rows={4}
                  required
                  placeholder="Tell us what visitors can expect at your booth."
                />
              </label>

              <label className="text-sm font-semibold text-white/85 sm:col-span-2">
                Website or Social Media
                <input
                  className={inputClass}
                  type="text"
                  name="Website / Social Media"
                  placeholder="Website, Facebook page, Instagram, etc."
                />
              </label>

              <label className="text-sm font-semibold text-white/85 sm:col-span-2">
                Notes or Questions
                <textarea
                  className={inputClass}
                  name="Notes / Questions"
                  rows={4}
                  placeholder="Anything else the Freedom Fest team should know?"
                />
              </label>
            </div>

            <div className="mt-6 space-y-4 rounded-xl border border-white/10 bg-white/5 p-5">
              <label className="flex items-start gap-3 text-sm leading-relaxed text-white/80">
                <input
                  type="checkbox"
                  name="Booth Terms Acknowledged"
                  value="Yes — space only; tables and electricity are not included"
                  required
                  className="mt-1 h-4 w-4"
                />
                <span>
                  I understand this purchase is for the vendor spot only. Tables and
                  electricity are not included. *
                </span>
              </label>

              <label className="flex items-start gap-3 text-sm leading-relaxed text-white/80">
                <input
                  type="checkbox"
                  name="Registration and Payment Required"
                  value="Yes"
                  required
                  className="mt-1 h-4 w-4"
                />
                <span>
                  I understand that I must submit this form and complete the Stripe
                  payment to finish my booth registration. *
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="mt-7 w-full rounded-xl bg-blue-600 px-6 py-4 text-lg font-black text-white shadow-lg transition hover:bg-blue-700"
            >
              Submit Vendor Registration
            </button>

            <p className="mt-4 text-center text-xs leading-relaxed text-white/50">
              Questions about vendor registration can be sent to
              donald.l.dunn@gmail.com.
            </p>
          </form>
        </div>
      </section>

      <section className="container section pb-16 text-center">
        <div className="rounded-2xl border border-white/15 bg-black/40 p-8 shadow-lg backdrop-blur">
          <h2 className="text-3xl font-black">Be Part of Freedom Fest</h2>
          <p className="mx-auto mt-4 max-w-3xl text-white/75">
            Whether you come to enjoy the event or bring your business or organization
            as a vendor, your participation helps create a stronger community around
            veterans, their families, and the voices Veteran Voice Radio exists to serve.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#vendor-signup"
              className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-bold transition hover:bg-white/15"
            >
              Vendor Signup Form
            </a>
            <a
              href={STRIPE_PAYMENT_LINK}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-red-600 px-7 py-3 font-bold transition hover:bg-red-700"
            >
              Purchase Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
