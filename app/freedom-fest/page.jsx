export const metadata = {
  title: "Freedom Fest 2026 | Veteran Voice Radio",
  description:
    "Freedom Fest 2026 at Hagood Mill Historic Site in Pickens, South Carolina. Event details, tickets, and paid vendor registration.",
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
        .ffPage { color:#f8fafc; min-height:100vh; padding-bottom:48px; }
        .ffPage *, .ffPage *::before, .ffPage *::after { box-sizing:border-box; }
        .ffWrap { width:min(1120px, calc(100% - 40px)); margin:0 auto; }
        .ffHero { margin-top:36px; padding:54px 34px; border-radius:26px; border:1px solid rgba(255,255,255,.18); background:radial-gradient(circle at 12% 5%, rgba(220,38,38,.46), transparent 38%), radial-gradient(circle at 90% 0%, rgba(37,99,235,.48), transparent 42%), linear-gradient(135deg, rgba(7,10,20,.98), rgba(10,20,48,.96)); box-shadow:0 22px 55px rgba(0,0,0,.5); text-align:center; }
        .ffEyebrow { margin:0; color:#fca5a5; font-size:13px; font-weight:900; letter-spacing:.22em; text-transform:uppercase; }
        .ffHero h1 { margin:12px 0 0; color:#fff; font-size:clamp(42px,7vw,76px); line-height:1; letter-spacing:-.035em; }
        .ffHeroLead { max-width:780px; margin:22px auto 0; color:rgba(255,255,255,.86); font-size:clamp(17px,2vw,21px); line-height:1.65; }
        .ffInfoGrid { max-width:900px; margin:30px auto 0; display:grid; grid-template-columns:repeat(3,1fr); gap:14px; }
        .ffInfoCard { padding:20px 16px; border-radius:17px; border:1px solid rgba(255,255,255,.17); background:rgba(0,0,0,.42); }
        .ffInfoLabel { color:#fca5a5; font-size:11px; font-weight:900; letter-spacing:.17em; text-transform:uppercase; }
        .ffInfoValue { margin-top:8px; color:#fff; font-size:23px; line-height:1.2; font-weight:900; }
        .ffInfoSub { margin-top:6px; color:rgba(255,255,255,.66); font-size:13px; }
        .ffHeroActions, .ffBottomActions { margin-top:28px; display:flex; justify-content:center; align-items:center; gap:12px; flex-wrap:wrap; }
        .ffButton { display:inline-flex; align-items:center; justify-content:center; min-height:48px; padding:0 22px; border-radius:12px; font-size:15px; font-weight:900; text-decoration:none; border:1px solid transparent; transition:transform .15s ease, filter .15s ease; }
        .ffButton:hover { transform:translateY(-1px); filter:brightness(1.08); }
        .ffButtonWhite { background:#fff; color:#111827; }
        .ffButtonRed { background:#dc2626; color:#fff; box-shadow:0 10px 26px rgba(220,38,38,.25); }
        .ffButtonBlue { background:#2563eb; color:#fff; box-shadow:0 10px 26px rgba(37,99,235,.25); }
        .ffButtonGhost { background:rgba(255,255,255,.08); color:#fff; border-color:rgba(255,255,255,.2); }
        .ffButtonFull { width:100%; min-height:56px; font-size:17px; }
        .ffSection { margin-top:46px; }
        .ffSectionTitle { display:inline-block; margin:0 0 22px; padding:12px 18px; border-radius:14px; border:1px solid rgba(255,255,255,.2); background:linear-gradient(90deg,rgba(185,28,28,.42),rgba(255,255,255,.09),rgba(29,78,216,.42)),rgba(8,12,22,.92); color:#fff; font-size:clamp(24px,3vw,34px); }
        .ffGrid2 { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:20px; }
        .ffCard { padding:26px; border-radius:18px; border:1px solid rgba(255,255,255,.16); background:rgba(7,10,18,.86); box-shadow:0 14px 34px rgba(0,0,0,.34); color:#f8fafc; }
        .ffCardBlue { background:linear-gradient(145deg,rgba(10,25,60,.92),rgba(7,10,18,.88)); }
        .ffCardRed { background:linear-gradient(145deg,rgba(75,12,19,.78),rgba(7,10,18,.9)); border-color:rgba(248,113,113,.32); }
        .ffCardGreen { background:linear-gradient(145deg,rgba(6,78,59,.48),rgba(7,10,18,.9)); border-color:rgba(52,211,153,.28); }
        .ffCard h3 { margin:0; color:#fff; font-size:23px; line-height:1.25; }
        .ffCard p, .ffCard li { color:rgba(255,255,255,.79); font-size:16px; line-height:1.65; }
        .ffCard p { margin:14px 0 0; }
        .ffCard strong { color:#fff; }
        .ffTime { color:#fca5a5; font-size:13px; font-weight:900; letter-spacing:.12em; text-transform:uppercase; }
        .ffTimeBlue { color:#93c5fd; }
        .ffPriceCard { padding:28px; text-align:center; }
        .ffPriceLabel { color:rgba(255,255,255,.67); font-size:12px; font-weight:800; letter-spacing:.12em; text-transform:uppercase; }
        .ffPrice { margin-top:8px; color:#fff; font-size:42px; font-weight:950; }
        .ffPriceSub { margin-top:5px; color:rgba(255,255,255,.62); }
        .ffVendorGrid { display:grid; grid-template-columns:.9fr 1.1fr; gap:24px; align-items:start; }
        .ffList { margin:16px 0 0; padding-left:20px; }
        .ffList li { margin:8px 0; }
        .ffStep { display:flex; gap:14px; align-items:flex-start; margin-top:18px; }
        .ffStepNum { flex:0 0 auto; width:34px; height:34px; border-radius:999px; display:flex; align-items:center; justify-content:center; background:#2563eb; color:#fff; font-weight:900; }
        .ffStepText strong { display:block; color:#fff; margin-bottom:3px; }
        .ffNote { margin-top:12px; color:rgba(255,255,255,.58); font-size:13px; line-height:1.5; text-align:center; }
        .ffBottom { margin-top:46px; padding:34px; border-radius:20px; border:1px solid rgba(255,255,255,.16); background:rgba(7,10,18,.88); text-align:center; }
        .ffBottom h2 { margin:0; color:#fff; font-size:32px; }
        .ffBottom p { max-width:780px; margin:14px auto 0; color:rgba(255,255,255,.72); line-height:1.65; }
        @media (max-width:800px) { .ffInfoGrid,.ffGrid2,.ffVendorGrid { grid-template-columns:1fr; } .ffHero { padding:40px 20px; } .ffWrap { width:min(100% - 24px,1120px); } .ffHeroActions .ffButton,.ffBottomActions .ffButton { width:100%; } .ffCard { padding:20px; } }
      `}</style>

      <section className="ffWrap ffHero">
        <p className="ffEyebrow">Veteran Voice Radio Presents</p>
        <h1>Freedom Fest 2026</h1>
        <p className="ffHeroLead">
          A community celebration built around veterans, music, storytelling, creative healing,
          local businesses, and the people who support those who served.
        </p>
        <div className="ffInfoGrid">
          <InfoCard label="Date" value="Saturday, Sept. 12" sub="2026" />
          <InfoCard label="Gates Open" value="4:00 PM" sub="Come early and explore" />
          <InfoCard label="Opening Ceremonies" value="5:45 PM" sub="Music and programming follow" />
        </div>
        <div className="ffHeroActions">
          <a href="#vendor-signup" className="ffButton ffButtonWhite">Become a Vendor</a>
          <a href="/freedom-fest/tickets" className="ffButton ffButtonRed">Purchase Tickets</a>
        </div>
      </section>

      <section className="ffWrap ffSection">
        <SectionTitle>Freedom Fest at a Glance</SectionTitle>
        <div className="ffGrid2">
          <div className="ffCard">
            <h3>What Freedom Fest Is About</h3>
            <p>
              Freedom Fest brings veterans, military families, supporters, artists, local businesses,
              and the community together for an evening with a purpose. Veteran Voice Radio uses music,
              media, art, and veteran stories to create connection and preserve voices that deserve to be heard.
            </p>
          </div>
          <div className="ffCard ffCardBlue">
            <h3>Location</h3>
            <p><strong>Hagood Mill Historic Site</strong><br />138 Hagood Mill Rd<br />Pickens, SC 29671</p>
            <p>
              <a href="https://www.google.com/maps/search/?api=1&query=138+Hagood+Mill+Rd+Pickens+SC+29671" target="_blank" rel="noreferrer" className="ffButton ffButtonGhost">Get Directions</a>
            </p>
          </div>
        </div>
      </section>

      <section className="ffWrap ffSection">
        <SectionTitle>Event Schedule</SectionTitle>
        <div className="ffGrid2">
          <div className="ffCard">
            <div className="ffTime">4:00 PM</div>
            <h3 style={{ marginTop:8 }}>Gates Open</h3>
            <p>Meet vendors, explore the grounds, connect with the community, and get settled before the program begins.</p>
          </div>
          <div className="ffCard">
            <div className="ffTime ffTimeBlue">5:45 PM</div>
            <h3 style={{ marginTop:8 }}>Opening Ceremonies</h3>
            <p>Freedom Fest officially begins, followed by live music, stories, and the evening&apos;s featured programming.</p>
          </div>
        </div>
      </section>

      <section className="ffWrap ffSection">
        <SectionTitle>Live Music & Community</SectionTitle>
        <div className="ffCard">
          <p style={{ marginTop:0 }}>
            The current lineup includes headliner <strong>Scottie Fraser</strong>, along with <strong>Mike Sandilla</strong> and <strong>James Holbert</strong>. Artist appearances and performance order are subject to change.
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
          <div className="ffCard ffCardRed">
            <h3>Vendor Space — Payment First</h3>
            <p>
              Your purchase is for <strong>the vendor spot only</strong>. <strong>Tables and electricity are not included.</strong>
            </p>
            <p>
              Vendor registration now starts with payment. The vendor information form is no longer available before checkout.
            </p>
            <a href={STRIPE_PAYMENT_LINK} className="ffButton ffButtonRed ffButtonFull" style={{ marginTop:22 }}>
              Pay for Vendor Space
            </a>
            <div className="ffNote">Secure payment is completed through Stripe.</div>
          </div>

          <div className="ffCard ffCardGreen">
            <h3>How Vendor Registration Works</h3>
            <div className="ffStep">
              <div className="ffStepNum">1</div>
              <div className="ffStepText"><strong>Pay through Stripe</strong><span>Complete the vendor-space payment first.</span></div>
            </div>
            <div className="ffStep">
              <div className="ffStepNum">2</div>
              <div className="ffStepText"><strong>Stripe sends you to the vendor form</strong><span>The form opens only after a successful checkout return.</span></div>
            </div>
            <div className="ffStep">
              <div className="ffStepNum">3</div>
              <div className="ffStepText"><strong>Submit your booth information</strong><span>Your registration email includes the Stripe Checkout session reference so the Freedom Fest team can tie the form to the payment.</span></div>
            </div>
            <p style={{ marginTop:22 }}>
              Have your business name, contact information, vendor type, products or services, and any website or social link ready.
            </p>
          </div>
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
          <a href={STRIPE_PAYMENT_LINK} className="ffButton ffButtonRed">Pay for Vendor Space</a>
          <a href="/freedom-fest/tickets" className="ffButton ffButtonGhost">Purchase Event Tickets</a>
        </div>
      </section>
    </main>
  );
}
