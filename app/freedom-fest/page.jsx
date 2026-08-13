export const metadata = {
  title: "Freedom Fest 2026 | Veteran Voice Radio",
  description:
    "Freedom Fest 2026 at Hagood Mill Historic Site in Pickens, South Carolina. Event details, vendor registration, and booth-space payment.",
};

const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/aFa28s87v3fx13TaLOfbq01";

function SectionTitle({ children }) {
  return <h2 className="ffSectionTitle">{children}</h2>;
}

function InfoCard({ label, value, sub }) {
  return (
    <div className="ffInfoCard">
      <div className="ffInfoLabel">{label}</div>
      <div className="ffInfoValue">{value}</div>
      {sub ? <div className="ffInfoSub">{sub}</div> : null}
    </div>
  );
}

export default function FreedomFestPage() {
  return (
    <main className="ffPage">
      <style>{`
        .ffPage {
          color: #f8fafc;
          min-height: 100vh;
          padding-bottom: 48px;
        }

        .ffPage *, .ffPage *::before, .ffPage *::after {
          box-sizing: border-box;
        }

        .ffWrap {
          width: min(1120px, calc(100% - 40px));
          margin: 0 auto;
        }

        .ffHero {
          margin-top: 36px;
          padding: 54px 34px;
          border-radius: 26px;
          border: 1px solid rgba(255,255,255,.18);
          background:
            radial-gradient(circle at 12% 5%, rgba(220,38,38,.46), transparent 38%),
            radial-gradient(circle at 90% 0%, rgba(37,99,235,.48), transparent 42%),
            linear-gradient(135deg, rgba(7,10,20,.98), rgba(10,20,48,.96));
          box-shadow: 0 22px 55px rgba(0,0,0,.5);
          text-align: center;
          overflow: hidden;
        }

        .ffEyebrow {
          margin: 0;
          color: #fca5a5;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: .22em;
          text-transform: uppercase;
        }

        .ffHero h1 {
          margin: 12px 0 0;
          color: #ffffff;
          font-size: clamp(42px, 7vw, 76px);
          line-height: 1;
          letter-spacing: -.035em;
        }

        .ffHeroLead {
          max-width: 780px;
          margin: 22px auto 0;
          color: rgba(255,255,255,.86);
          font-size: clamp(17px, 2vw, 21px);
          line-height: 1.65;
        }

        .ffInfoGrid {
          max-width: 900px;
          margin: 30px auto 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .ffInfoCard {
          padding: 20px 16px;
          border-radius: 17px;
          border: 1px solid rgba(255,255,255,.17);
          background: rgba(0,0,0,.42);
          box-shadow: 0 10px 24px rgba(0,0,0,.26);
        }

        .ffInfoLabel {
          color: #fca5a5;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: .17em;
          text-transform: uppercase;
        }

        .ffInfoValue {
          margin-top: 8px;
          color: #fff;
          font-size: 23px;
          line-height: 1.2;
          font-weight: 900;
        }

        .ffInfoSub {
          margin-top: 6px;
          color: rgba(255,255,255,.66);
          font-size: 13px;
        }

        .ffHeroActions, .ffBottomActions {
          margin-top: 28px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .ffButton {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 0 22px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 900;
          text-decoration: none;
          border: 1px solid transparent;
          cursor: pointer;
          transition: transform .15s ease, filter .15s ease, background .15s ease;
        }

        .ffButton:hover { transform: translateY(-1px); filter: brightness(1.08); }
        .ffButtonWhite { background: #fff; color: #111827; }
        .ffButtonRed { background: #dc2626; color: #fff; box-shadow: 0 10px 26px rgba(220,38,38,.25); }
        .ffButtonBlue { background: #2563eb; color: #fff; box-shadow: 0 10px 26px rgba(37,99,235,.25); }
        .ffButtonGhost { background: rgba(255,255,255,.08); color: #fff; border-color: rgba(255,255,255,.2); }
        .ffButtonFull { width: 100%; min-height: 54px; font-size: 17px; }

        .ffSection {
          margin-top: 46px;
        }

        .ffSectionTitle {
          display: inline-block;
          margin: 0 0 22px;
          padding: 12px 18px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,.2);
          background:
            linear-gradient(90deg, rgba(185,28,28,.42), rgba(255,255,255,.09), rgba(29,78,216,.42)),
            rgba(8,12,22,.92);
          box-shadow: 0 12px 30px rgba(0,0,0,.34);
          color: #fff;
          font-size: clamp(24px, 3vw, 34px);
          line-height: 1.2;
        }

        .ffGrid2 {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        .ffCard {
          padding: 26px;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,.16);
          background: rgba(7,10,18,.86);
          box-shadow: 0 14px 34px rgba(0,0,0,.34);
          color: #f8fafc;
        }

        .ffCardBlue { background: linear-gradient(145deg, rgba(10,25,60,.92), rgba(7,10,18,.88)); }
        .ffCardRed { background: linear-gradient(145deg, rgba(75,12,19,.78), rgba(7,10,18,.9)); border-color: rgba(248,113,113,.32); }

        .ffCard h3 {
          margin: 0;
          color: #fff;
          font-size: 23px;
          line-height: 1.25;
        }

        .ffCard p, .ffCard li {
          color: rgba(255,255,255,.79);
          font-size: 16px;
          line-height: 1.65;
        }

        .ffCard p { margin: 14px 0 0; }
        .ffCard strong { color: #fff; }

        .ffTime {
          color: #fca5a5;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .ffTimeBlue { color: #93c5fd; }

        .ffPriceCard {
          padding: 28px;
          text-align: center;
        }

        .ffPriceLabel {
          color: rgba(255,255,255,.67);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .ffPrice {
          margin-top: 8px;
          color: #fff;
          font-size: 42px;
          font-weight: 950;
        }

        .ffPriceSub { margin-top: 5px; color: rgba(255,255,255,.62); }

        .ffVendorGrid {
          display: grid;
          grid-template-columns: .82fr 1.18fr;
          gap: 24px;
          align-items: start;
        }

        .ffStack { display: grid; gap: 18px; }

        .ffList {
          margin: 16px 0 0;
          padding-left: 20px;
        }

        .ffList li { margin: 8px 0; }

        .ffForm {
          padding: 28px;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,.18);
          background: rgba(5,8,15,.94);
          box-shadow: 0 18px 45px rgba(0,0,0,.42);
          color: #fff;
        }

        .ffForm h3 { margin: 0; color: #fff; font-size: 26px; }
        .ffFormIntro { margin: 8px 0 0; color: rgba(255,255,255,.67); line-height: 1.55; }

        .ffFields {
          margin-top: 24px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 18px;
        }

        .ffFieldFull { grid-column: 1 / -1; }

        .ffLabel {
          display: block;
          color: rgba(255,255,255,.9);
          font-size: 14px;
          font-weight: 800;
        }

        .ffInput {
          display: block;
          width: 100%;
          margin-top: 8px;
          padding: 12px 13px;
          min-height: 46px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,.24);
          background: #111827;
          color: #fff;
          font: inherit;
          outline: none;
        }

        textarea.ffInput { min-height: 110px; resize: vertical; }
        select.ffInput { appearance: auto; }
        .ffInput::placeholder { color: rgba(255,255,255,.42); }
        .ffInput:focus { border-color: #60a5fa; box-shadow: 0 0 0 3px rgba(59,130,246,.2); }
        .ffInput option { background: #111827; color: #fff; }

        .ffChecks {
          margin-top: 22px;
          padding: 16px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,.13);
          background: rgba(255,255,255,.045);
          display: grid;
          gap: 14px;
        }

        .ffCheck {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          color: rgba(255,255,255,.82);
          font-size: 14px;
          line-height: 1.5;
        }

        .ffCheck input { margin-top: 3px; width: 17px; height: 17px; flex: 0 0 auto; }
        .ffHidden { position: absolute !important; left: -10000px !important; width: 1px !important; height: 1px !important; overflow: hidden !important; }

        .ffFormNote {
          margin: 12px 0 0;
          color: rgba(255,255,255,.52);
          font-size: 12px;
          line-height: 1.5;
          text-align: center;
        }

        .ffBottom {
          margin-top: 46px;
          padding: 34px;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,.16);
          background: rgba(7,10,18,.88);
          text-align: center;
        }

        .ffBottom h2 { margin: 0; color: #fff; font-size: 32px; }
        .ffBottom p { max-width: 780px; margin: 14px auto 0; color: rgba(255,255,255,.72); line-height: 1.65; }

        @media (max-width: 800px) {
          .ffInfoGrid, .ffGrid2, .ffVendorGrid, .ffFields { grid-template-columns: 1fr; }
          .ffFieldFull { grid-column: auto; }
          .ffHero { padding: 40px 20px; }
          .ffWrap { width: min(100% - 24px, 1120px); }
          .ffHeroActions .ffButton, .ffBottomActions .ffButton { width: 100%; }
          .ffCard, .ffForm { padding: 20px; }
        }
      `}</style>

      <section className="ffWrap ffHero">
        <p className="ffEyebrow">Veteran Voice Radio Presents</p>
        <h1>Freedom Fest 2026</h1>
        <p className="ffHeroLead">
          A community celebration built around veterans, music, storytelling,
          creative healing, local businesses, and the people who support those who served.
        </p>

        <div className="ffInfoGrid">
          <InfoCard label="Date" value="Saturday, Sept. 12" sub="2026" />
          <InfoCard label="Gates Open" value="4:00 PM" sub="Come early and explore" />
          <InfoCard label="Opening Ceremonies" value="5:45 PM" sub="Music and programming follow" />
        </div>

        <div className="ffHeroActions">
          <a href="#vendor-signup" className="ffButton ffButtonWhite">Sign Up as a Vendor</a>
          <a href={STRIPE_PAYMENT_LINK} target="_blank" rel="noreferrer" className="ffButton ffButtonRed">
            Purchase Now
          </a>
        </div>
      </section>

      <section className="ffWrap ffSection">
        <SectionTitle>Freedom Fest at a Glance</SectionTitle>
        <div className="ffGrid2">
          <div className="ffCard">
            <h3>What Freedom Fest Is About</h3>
            <p>
              Freedom Fest brings veterans, military families, supporters, artists,
              local businesses, and the community together for an evening with a purpose.
              Veteran Voice Radio uses music, media, art, and veteran stories to create
              connection, preserve voices that deserve to be heard, and support creative
              outlets that can help people heal.
            </p>
            <p>
              Expect live music, veteran stories, community vendors, creative-healing
              activities, and an evening centered on service, sacrifice, family, and freedom.
            </p>
          </div>

          <div className="ffCard ffCardBlue">
            <h3>Location</h3>
            <p><strong>Hagood Mill Historic Site</strong><br />138 Hagood Mill Rd<br />Pickens, SC 29671</p>
            <p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=138+Hagood+Mill+Rd+Pickens+SC+29671"
                target="_blank"
                rel="noreferrer"
                className="ffButton ffButtonGhost"
              >
                Get Directions
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="ffWrap ffSection">
        <SectionTitle>Event Schedule</SectionTitle>
        <div className="ffGrid2">
          <div className="ffCard">
            <div className="ffTime">4:00 PM</div>
            <h3 style={{ marginTop: 8 }}>Gates Open</h3>
            <p>Meet vendors, explore the grounds, connect with the community, and get settled before the program begins.</p>
          </div>
          <div className="ffCard">
            <div className="ffTime ffTimeBlue">5:45 PM</div>
            <h3 style={{ marginTop: 8 }}>Opening Ceremonies</h3>
            <p>Freedom Fest officially begins, followed by live music, stories, and the evening&apos;s featured programming.</p>
          </div>
        </div>
      </section>

      <section className="ffWrap ffSection">
        <SectionTitle>Live Music & Community</SectionTitle>
        <div className="ffCard">
          <p style={{ marginTop: 0 }}>
            Freedom Fest features veteran-connected and independent artists who use music and personal stories to bring people together.
            The current lineup includes headliner <strong>Scottie Fraser</strong>, along with <strong>Mike Sandilla</strong> and <strong>James Holbert</strong>.
            Artist appearances and performance order are subject to change.
          </p>
        </div>
      </section>

      <section className="ffWrap ffSection">
        <SectionTitle>Admission</SectionTitle>
        <div className="ffGrid2">
          <div className="ffCard ffPriceCard">
            <div className="ffPriceLabel">General Admission</div>
            <div className="ffPrice">$15</div>
            <div className="ffPriceSub">At the gate</div>
          </div>
          <div className="ffCard ffCardRed ffPriceCard">
            <div className="ffPriceLabel">Veterans & First Responders</div>
            <div className="ffPrice">$10</div>
            <div className="ffPriceSub">At the gate</div>
          </div>
        </div>
      </section>

      <section id="vendor-signup" className="ffWrap ffSection">
        <SectionTitle>Vendor & Booth Registration</SectionTitle>
        <div className="ffVendorGrid">
          <div className="ffStack">
            <div className="ffCard ffCardRed">
              <h3>Booth Space — Please Read</h3>
              <p>
                Your purchase is for <strong>the vendor spot only</strong>.
                <strong> Tables and electricity are not included.</strong>
              </p>
              <p>
                Complete the registration form so we have your contact and vendor information,
                then use the Stripe button to purchase your space. Registration and payment are
                both required to complete your booth signup.
              </p>
              <a href={STRIPE_PAYMENT_LINK} target="_blank" rel="noreferrer" className="ffButton ffButtonRed ffButtonFull">
                Purchase Now
              </a>
              <div className="ffFormNote">Secure payment is completed on Stripe.</div>
            </div>

            <div className="ffCard">
              <h3>What to Have Ready</h3>
              <ul className="ffList">
                <li>Business, organization, or vendor name</li>
                <li>Main contact information</li>
                <li>What you plan to sell, display, or provide</li>
                <li>Website or social link, if you have one</li>
                <li>Any notes the Freedom Fest team should know</li>
              </ul>
            </div>
          </div>

          <form action="https://formsubmit.co/donald.l.dunn@gmail.com" method="POST" className="ffForm">
            <input type="hidden" name="_cc" value="bcoopermarine@gmail.com" />
            <input type="hidden" name="_subject" value="New Freedom Fest Vendor Registration" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://www.veteranvoiceradio.com/freedom-fest/thank-you" />
            <input type="hidden" name="_captcha" value="true" />
            <input type="text" name="_honey" className="ffHidden" tabIndex={-1} autoComplete="off" />

            <h3>Freedom Fest Vendor Signup Form</h3>
            <p className="ffFormIntro">Submit your information below. A copy of the registration will be sent to the Freedom Fest team.</p>

            <div className="ffFields">
              <label className="ffLabel ffFieldFull">
                Business / Organization Name *
                <input className="ffInput" type="text" name="Business / Organization" required autoComplete="organization" placeholder="Your business or organization" />
              </label>

              <label className="ffLabel">
                Contact Name *
                <input className="ffInput" type="text" name="Contact Name" required autoComplete="name" placeholder="First and last name" />
              </label>

              <label className="ffLabel">
                Phone *
                <input className="ffInput" type="tel" name="Phone" required autoComplete="tel" placeholder="Best phone number" />
              </label>

              <label className="ffLabel ffFieldFull">
                Email *
                <input className="ffInput" type="email" name="email" required autoComplete="email" placeholder="you@example.com" />
              </label>

              <label className="ffLabel">
                Vendor Type *
                <select className="ffInput" name="Vendor Type" required defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option value="Food / Beverage">Food / Beverage</option>
                  <option value="Merchandise / Retail">Merchandise / Retail</option>
                  <option value="Nonprofit / Community Organization">Nonprofit / Community Organization</option>
                  <option value="Service Business">Service Business</option>
                  <option value="Artist / Maker">Artist / Maker</option>
                  <option value="Other">Other</option>
                </select>
              </label>

              <label className="ffLabel">
                Number of Spots *
                <select className="ffInput" name="Number of Spots" required defaultValue="1">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4+">4 or more</option>
                </select>
              </label>

              <label className="ffLabel ffFieldFull">
                What will you sell, display, or provide? *
                <textarea className="ffInput" name="Products / Services" rows={4} required placeholder="Tell us what visitors can expect at your booth." />
              </label>

              <label className="ffLabel ffFieldFull">
                Website or Social Media
                <input className="ffInput" type="text" name="Website / Social Media" placeholder="Website, Facebook page, Instagram, etc." />
              </label>

              <label className="ffLabel ffFieldFull">
                Notes or Questions
                <textarea className="ffInput" name="Notes / Questions" rows={4} placeholder="Anything else the Freedom Fest team should know?" />
              </label>
            </div>

            <div className="ffChecks">
              <label className="ffCheck">
                <input type="checkbox" name="Booth Terms Acknowledged" value="Yes — space only; tables and electricity are not included" required />
                <span>I understand this purchase is for the vendor spot only. Tables and electricity are not included. *</span>
              </label>
              <label className="ffCheck">
                <input type="checkbox" name="Registration and Payment Required" value="Yes" required />
                <span>I understand that I must submit this form and complete the Stripe payment to finish my booth registration. *</span>
              </label>
            </div>

            <button type="submit" className="ffButton ffButtonBlue ffButtonFull" style={{ marginTop: 22 }}>
              Submit Vendor Registration
            </button>
            <p className="ffFormNote">Questions about vendor registration can be sent to donald.l.dunn@gmail.com.</p>
          </form>
        </div>
      </section>

      <section className="ffWrap ffBottom">
        <h2>Be Part of Freedom Fest</h2>
        <p>
          Whether you come to enjoy the event or bring your business or organization as a vendor,
          your participation helps create a stronger community around veterans, their families,
          and the voices Veteran Voice Radio exists to serve.
        </p>
        <div className="ffBottomActions">
          <a href="#vendor-signup" className="ffButton ffButtonGhost">Vendor Signup Form</a>
          <a href={STRIPE_PAYMENT_LINK} target="_blank" rel="noreferrer" className="ffButton ffButtonRed">Purchase Now</a>
        </div>
      </section>
    </main>
  );
}
