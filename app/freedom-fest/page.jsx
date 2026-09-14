export const metadata = {
  title: "Freedom Fest 2026 | Veteran Voice Radio",
  description:
    "Freedom Fest 2026 at Hagood Mill Historic Site in Pickens, South Carolina. Event recap and information.",
};

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
        .ffClosed { display:inline-block; margin-top:24px; padding:10px 16px; border-radius:999px; background:rgba(245,158,11,.15); border:1px solid rgba(245,158,11,.48); color:#fde68a; font-weight:900; }
        .ffInfoGrid { max-width:900px; margin:30px auto 0; display:grid; grid-template-columns:repeat(3,1fr); gap:14px; }
        .ffInfoCard { padding:20px 16px; border-radius:17px; border:1px solid rgba(255,255,255,.17); background:rgba(0,0,0,.42); }
        .ffInfoLabel { color:#fca5a5; font-size:11px; font-weight:900; letter-spacing:.17em; text-transform:uppercase; }
        .ffInfoValue { margin-top:8px; color:#fff; font-size:23px; line-height:1.2; font-weight:900; }
        .ffInfoSub { margin-top:6px; color:rgba(255,255,255,.66); font-size:13px; }
        .ffSection { margin-top:46px; }
        .ffSectionTitle { display:inline-block; margin:0 0 22px; padding:12px 18px; border-radius:14px; border:1px solid rgba(255,255,255,.2); background:linear-gradient(90deg,rgba(185,28,28,.42),rgba(255,255,255,.09),rgba(29,78,216,.42)),rgba(8,12,22,.92); color:#fff; font-size:clamp(24px,3vw,34px); }
        .ffGrid2 { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:20px; }
        .ffCard { padding:26px; border-radius:18px; border:1px solid rgba(255,255,255,.16); background:rgba(7,10,18,.86); box-shadow:0 14px 34px rgba(0,0,0,.34); color:#f8fafc; }
        .ffCardBlue { background:linear-gradient(145deg,rgba(10,25,60,.92),rgba(7,10,18,.88)); }
        .ffCard h3 { margin:0; color:#fff; font-size:23px; line-height:1.25; }
        .ffCard p { margin:14px 0 0; color:rgba(255,255,255,.79); font-size:16px; line-height:1.65; }
        .ffCard strong { color:#fff; }
        .ffButton { display:inline-flex; align-items:center; justify-content:center; min-height:48px; padding:0 22px; border-radius:12px; font-size:15px; font-weight:900; text-decoration:none; border:1px solid rgba(255,255,255,.2); background:rgba(255,255,255,.08); color:#fff; }
        .ffBottom { margin-top:46px; padding:34px; border-radius:20px; border:1px solid rgba(255,255,255,.16); background:rgba(7,10,18,.88); text-align:center; }
        .ffBottom h2 { margin:0; color:#fff; font-size:32px; }
        .ffBottom p { max-width:780px; margin:14px auto 0; color:rgba(255,255,255,.72); line-height:1.65; }
        @media (max-width:800px) { .ffInfoGrid,.ffGrid2 { grid-template-columns:1fr; } .ffHero { padding:40px 20px; } .ffWrap { width:min(100% - 24px,1120px); } .ffCard { padding:20px; } }
      `}</style>

      <section className="ffWrap ffHero">
        <p className="ffEyebrow">Veteran Voice Radio Presents</p>
        <h1>Freedom Fest 2026</h1>
        <p className="ffHeroLead">
          Thank you to everyone who joined us for Freedom Fest 2026 and helped make the event possible.
        </p>
        <div className="ffClosed">Event concluded • Ticket sales closed</div>
        <div className="ffInfoGrid">
          <InfoCard label="Date" value="Saturday, Sept. 12" sub="2026" />
          <InfoCard label="Location" value="Hagood Mill" sub="Pickens, South Carolina" />
          <InfoCard label="Presented By" value="Veteran Voice Radio" sub="Veteran-run nonprofit" />
        </div>
      </section>

      <section className="ffWrap ffSection">
        <SectionTitle>Freedom Fest at a Glance</SectionTitle>
        <div className="ffGrid2">
          <div className="ffCard">
            <h3>What Freedom Fest Was About</h3>
            <p>
              Freedom Fest brought veterans, military families, supporters, artists, local businesses,
              and the community together for an evening centered on music, storytelling, creative healing,
              connection, and service.
            </p>
          </div>
          <div className="ffCard ffCardBlue">
            <h3>Location</h3>
            <p><strong>Hagood Mill Historic Site</strong><br />138 Hagood Mill Rd<br />Pickens, SC 29671</p>
            <p>
              <a href="https://www.google.com/maps/search/?api=1&query=138+Hagood+Mill+Rd+Pickens+SC+29671" target="_blank" rel="noreferrer" className="ffButton">View Location</a>
            </p>
          </div>
        </div>
      </section>

      <section className="ffWrap ffSection">
        <SectionTitle>Featured Music</SectionTitle>
        <div className="ffCard">
          <p style={{ marginTop:0 }}>
            Freedom Fest featured headliner <strong>Scottie Fraser</strong>, along with <strong>Mike Sandilla</strong> and <strong>James Holbert</strong>.
          </p>
        </div>
      </section>

      <section className="ffWrap ffBottom">
        <h2>Thank You for Supporting Freedom Fest</h2>
        <p>
          We appreciate every guest, veteran, first responder, performer, vendor, volunteer, sponsor, and supporter who helped bring the event together.
        </p>
      </section>
    </main>
  );
}
