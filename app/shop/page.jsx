export const metadata = {
  title: "Shop | Veteran Voice Radio",
  description:
    "Shop personalized Veteran Voice Radio door and wall decor and dog bandanas. Every purchase supports our veteran-focused mission.",
};

const WALL_DECOR_LINK = "https://buy.stripe.com/9B628s1J77vN27X7zCfbq02";
const BANDANA_LINK = "https://buy.stripe.com/8x25kE2Nb5nFfYN5rufbq03";

const wallDesigns = [
  ["W01", "Welcome to Our Patch"],
  ["W02", "Happy Fall Y'all"],
  ["W03", "Trick or Treat"],
  ["W04", "Home of a Hero"],
  ["W05", "Land of the Free"],
  ["W06", "Faith, Family & Freedom"],
  ["W07", "Not All Heroes Wear Capes"],
  ["W08", "Pets Leave Paw Prints"],
  ["W09", "Guests Approved by the Dog"],
];

const bandanaDesigns = [
  ["B01", "Rescued & Adored"],
  ["B02", "Official Party Animal"],
  ["B03", "Mama's Favorite Child"],
  ["B04", "Professional Treat Tester"],
  ["B05", "Certified Good Dog"],
  ["B06", "Raising a Paw for Veterans"],
  ["B07", "Proud Pup of a Veteran"],
  ["B08", "Proud to Serve, Proud to Love"],
  ["B09", "Loyal, Brave, Fearless"],
  ["B10", "Home of the Brave"],
  ["B11", "U.S. Military / Dogs Support Our Troops"],
  ["B12", "Not All Heroes Wear Capes"],
  ["B13", "My Dog Is My Favorite Person"],
  ["B14", "Spoiled & Loved"],
  ["B15", "Adventure Buddy"],
  ["B16", "Good Dog Good Boy"],
  ["B17", "Kisses & Wagging Tails"],
];

function DesignGrid({ designs }) {
  return (
    <div className="shopDesignGrid">
      {designs.map(([code, name]) => (
        <div className="shopDesign" key={code}>
          <span className="shopCode">{code}</span>
          <span>{name}</span>
        </div>
      ))}
    </div>
  );
}

export default function ShopPage() {
  return (
    <main className="shopPage">
      <style>{`
        .shopPage {
          min-height: 100vh;
          color: #f8fafc;
          padding: 38px 0 64px;
        }

        .shopPage *, .shopPage *::before, .shopPage *::after { box-sizing: border-box; }

        .shopWrap {
          width: min(1160px, calc(100% - 36px));
          margin: 0 auto;
        }

        .shopHero {
          position: relative;
          overflow: hidden;
          padding: 54px 34px;
          border-radius: 28px;
          border: 1px solid rgba(255,255,255,.16);
          background:
            radial-gradient(circle at 8% 12%, rgba(185,28,28,.55), transparent 34%),
            radial-gradient(circle at 92% 5%, rgba(30,64,175,.52), transparent 38%),
            linear-gradient(135deg, #07101f, #0a1830 55%, #07101f);
          box-shadow: 0 24px 60px rgba(0,0,0,.45);
          text-align: center;
        }

        .shopHero::after {
          content: "★  ★  ★";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 18px;
          color: rgba(255,255,255,.16);
          font-size: 28px;
          letter-spacing: .65em;
          pointer-events: none;
        }

        .shopEyebrow {
          margin: 0;
          color: #fca5a5;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: .22em;
          text-transform: uppercase;
        }

        .shopHero h1 {
          margin: 10px 0 0;
          color: #fff;
          font-size: clamp(44px, 7vw, 78px);
          line-height: .98;
          letter-spacing: -.04em;
        }

        .shopHeroLead {
          max-width: 780px;
          margin: 20px auto 0;
          color: rgba(255,255,255,.84);
          font-size: clamp(17px, 2vw, 21px);
          line-height: 1.65;
        }

        .shopMission {
          display: inline-block;
          margin-top: 22px;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(255,255,255,.08);
          border: 1px solid rgba(255,255,255,.14);
          color: #fff;
          font-weight: 800;
        }

        .shopProducts {
          margin-top: 34px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 24px;
        }

        .shopProduct {
          overflow: hidden;
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,.15);
          background: rgba(5,10,20,.92);
          box-shadow: 0 18px 45px rgba(0,0,0,.34);
        }

        .shopProductTop {
          min-height: 230px;
          padding: 34px 28px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          background:
            linear-gradient(180deg, rgba(0,0,0,.06), rgba(0,0,0,.72)),
            repeating-linear-gradient(90deg, rgba(255,255,255,.025) 0 1px, transparent 1px 48px),
            linear-gradient(135deg, #20314f, #0f172a 48%, #6b1d1d);
        }

        .shopProductBandana .shopProductTop {
          background:
            linear-gradient(180deg, rgba(0,0,0,.04), rgba(0,0,0,.72)),
            radial-gradient(circle at 78% 25%, rgba(194,65,12,.36), transparent 34%),
            linear-gradient(135deg, #1e293b, #172554 50%, #3f1d1d);
        }

        .shopBadge {
          align-self: flex-start;
          padding: 7px 10px;
          border-radius: 999px;
          background: #fff;
          color: #111827;
          font-size: 11px;
          font-weight: 950;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .shopProductTop h2 {
          margin: 14px 0 0;
          color: #fff;
          font-size: clamp(30px, 4vw, 43px);
          line-height: 1.05;
        }

        .shopPrice {
          margin-top: 10px;
          color: #fecaca;
          font-size: 25px;
          font-weight: 950;
        }

        .shopProductBody { padding: 26px; }

        .shopProductBody p {
          margin: 0;
          color: rgba(255,255,255,.76);
          font-size: 15px;
          line-height: 1.65;
        }

        .shopProductBody h3 {
          margin: 24px 0 12px;
          color: #fff;
          font-size: 18px;
        }

        .shopDesignGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 9px;
        }

        .shopDesign {
          display: flex;
          align-items: center;
          gap: 9px;
          min-height: 46px;
          padding: 9px 10px;
          border-radius: 10px;
          background: rgba(255,255,255,.055);
          border: 1px solid rgba(255,255,255,.09);
          color: rgba(255,255,255,.84);
          font-size: 12px;
          line-height: 1.25;
        }

        .shopCode {
          flex: 0 0 auto;
          min-width: 38px;
          color: #fca5a5;
          font-weight: 950;
        }

        .shopButton {
          display: flex;
          width: 100%;
          min-height: 56px;
          margin-top: 24px;
          align-items: center;
          justify-content: center;
          padding: 0 18px;
          border-radius: 13px;
          background: #dc2626;
          color: #fff;
          text-decoration: none;
          font-size: 17px;
          font-weight: 950;
          box-shadow: 0 12px 28px rgba(220,38,38,.25);
          transition: transform .15s ease, filter .15s ease;
        }

        .shopButton:hover { transform: translateY(-1px); filter: brightness(1.08); }
        .shopProductBandana .shopButton { background: #2563eb; box-shadow: 0 12px 28px rgba(37,99,235,.24); }

        .shopCheckoutNote {
          margin-top: 11px !important;
          text-align: center;
          color: rgba(255,255,255,.52) !important;
          font-size: 12px !important;
        }

        .shopHow {
          margin-top: 34px;
          padding: 28px;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,.14);
          background: rgba(7,12,24,.88);
        }

        .shopHow h2 { margin: 0; color: #fff; font-size: 28px; }
        .shopSteps {
          margin-top: 20px;
          display: grid;
          grid-template-columns: repeat(4, minmax(0,1fr));
          gap: 14px;
        }

        .shopStep {
          padding: 18px;
          border-radius: 14px;
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.09);
        }

        .shopStepNo {
          width: 32px;
          height: 32px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #fff;
          color: #111827;
          font-weight: 950;
        }

        .shopStep strong { display: block; margin-top: 12px; color: #fff; }
        .shopStep span { display: block; margin-top: 6px; color: rgba(255,255,255,.66); font-size: 13px; line-height: 1.5; }

        .shopFooterNote {
          margin-top: 24px;
          padding: 18px 22px;
          border-radius: 14px;
          border: 1px solid rgba(248,113,113,.2);
          background: rgba(127,29,29,.18);
          text-align: center;
          color: rgba(255,255,255,.78);
          line-height: 1.6;
        }

        @media (max-width: 900px) {
          .shopProducts, .shopSteps { grid-template-columns: 1fr; }
          .shopDesignGrid { grid-template-columns: 1fr; }
          .shopHero { padding: 42px 20px 56px; }
          .shopWrap { width: min(100% - 22px, 1160px); }
        }
      `}</style>

      <div className="shopWrap">
        <section className="shopHero">
          <p className="shopEyebrow">Veteran Voice Radio</p>
          <h1>Shop With Purpose.</h1>
          <p className="shopHeroLead">
            Personalized decor and dog bandanas made with care. Every purchase helps support
            Veteran Voice Radio and our mission to give veterans a voice through music,
            storytelling, art, and community.
          </p>
          <div className="shopMission">Made in the USA • Personalized for you • Supporting veterans</div>
        </section>

        <section className="shopProducts" aria-label="Shop products">
          <article className="shopProduct">
            <div className="shopProductTop">
              <span className="shopBadge">Door & Wall Decor</span>
              <h2>Personalized Door & Wall Decor</h2>
              <div className="shopPrice">Starting at $20</div>
            </div>
            <div className="shopProductBody">
              <p>
                Choose a design and add names, a family name, pet names, or a special saying.
                Your design selection and personalization are collected during Stripe checkout.
              </p>
              <h3>Available designs</h3>
              <DesignGrid designs={wallDesigns} />
              <a className="shopButton" href={WALL_DECOR_LINK} target="_blank" rel="noreferrer">
                Personalize & Order
              </a>
              <p className="shopCheckoutNote">Secure checkout powered by Stripe.</p>
            </div>
          </article>

          <article className="shopProduct shopProductBandana">
            <div className="shopProductTop">
              <span className="shopBadge">Dog Bandanas</span>
              <h2>Personalized Dog Bandanas</h2>
              <div className="shopPrice">Starting at $20</div>
            </div>
            <div className="shopProductBody">
              <p>
                Pick your favorite bandana design and add your pet's name or another short
                personalization. Each design has a unique code so your order is clear.
              </p>
              <h3>Available designs</h3>
              <DesignGrid designs={bandanaDesigns} />
              <a className="shopButton" href={BANDANA_LINK} target="_blank" rel="noreferrer">
                Personalize & Order
              </a>
              <p className="shopCheckoutNote">Secure checkout powered by Stripe.</p>
            </div>
          </article>
        </section>

        <section className="shopHow">
          <h2>How ordering works</h2>
          <div className="shopSteps">
            <div className="shopStep"><div className="shopStepNo">1</div><strong>Choose a product</strong><span>Select decor or a personalized dog bandana.</span></div>
            <div className="shopStep"><div className="shopStepNo">2</div><strong>Choose your design</strong><span>Use the unique W or B design code shown above.</span></div>
            <div className="shopStep"><div className="shopStepNo">3</div><strong>Add personalization</strong><span>Enter names, pet names, or special wording during checkout.</span></div>
            <div className="shopStep"><div className="shopStepNo">4</div><strong>Pay securely</strong><span>Stripe collects payment, contact information, and your U.S. shipping address.</span></div>
          </div>
        </section>

        <div className="shopFooterNote">
          <strong>Every purchase makes an impact.</strong> Thank you for standing with our veterans and supporting Veteran Voice Radio.
        </div>
      </div>
    </main>
  );
}
