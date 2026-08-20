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
  ["B16", "Good Dog / Good Boy"],
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

function ProductPreview({
  image,
  alt,
  label,
  title,
  price,
  description,
  designs,
  link,
  buttonText,
  blue = false,
}) {
  return (
    <section className={`shopProductSection ${blue ? "shopProductBlue" : ""}`}>
      <div className="shopProductHeader">
        <div>
          <div className="shopSectionEyebrow">{label}</div>
          <h2>{title}</h2>
          <div className="shopPrice">{price}</div>
        </div>
        <a className="shopTopOrder" href={link} target="_blank" rel="noreferrer">
          Order Now
        </a>
      </div>

      <div className="shopPreviewLayout">
        <div className="shopExampleCard">
          <div className="shopExampleLabel">Design examples</div>
          <img className="shopExampleImage" src={image} alt={alt} loading="lazy" />
          <p className="shopExampleHelp">
            Match the code on the example with the code you choose during Stripe checkout.
          </p>
        </div>

        <div className="shopDesignPanel">
          <p className="shopDescription">{description}</p>
          <h3>Choose your design</h3>
          <DesignGrid designs={designs} />
          <div className="shopRemember">
            <strong>Remember your design code.</strong> You will select it again during checkout and enter your personalization there.
          </div>
          <a className="shopButton" href={link} target="_blank" rel="noreferrer">
            {buttonText}
          </a>
          <p className="shopCheckoutNote">Secure checkout powered by Stripe.</p>
        </div>
      </div>
    </section>
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
          width: min(1180px, calc(100% - 36px));
          margin: 0 auto;
        }

        .shopHero {
          position: relative;
          overflow: hidden;
          padding: 58px 34px 66px;
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

        .shopEyebrow, .shopSectionEyebrow {
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
          max-width: 800px;
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

        .shopQuickLinks {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 18px;
          margin-top: 28px;
        }

        .shopQuickCard {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding: 20px 22px;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,.13);
          background: rgba(6,12,24,.88);
          text-decoration: none;
          color: #fff;
          box-shadow: 0 12px 28px rgba(0,0,0,.25);
        }

        .shopQuickCard strong { display: block; font-size: 20px; }
        .shopQuickCard span { display: block; margin-top: 5px; color: rgba(255,255,255,.62); font-size: 13px; }
        .shopQuickArrow { font-size: 28px !important; color: #fca5a5 !important; margin: 0 !important; }

        .shopProductSection {
          margin-top: 34px;
          padding: 28px;
          border-radius: 24px;
          border: 1px solid rgba(248,113,113,.22);
          background:
            radial-gradient(circle at 3% 0%, rgba(185,28,28,.25), transparent 28%),
            rgba(5,10,20,.94);
          box-shadow: 0 18px 45px rgba(0,0,0,.34);
        }

        .shopProductBlue {
          border-color: rgba(96,165,250,.22);
          background:
            radial-gradient(circle at 97% 0%, rgba(37,99,235,.27), transparent 28%),
            rgba(5,10,20,.94);
        }

        .shopProductBlue .shopSectionEyebrow { color: #93c5fd; }
        .shopProductBlue .shopCode { color: #93c5fd; }
        .shopProductBlue .shopButton, .shopProductBlue .shopTopOrder {
          background: #2563eb;
          box-shadow: 0 12px 28px rgba(37,99,235,.24);
        }

        .shopProductHeader {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 22px;
        }

        .shopProductHeader h2 {
          margin: 7px 0 0;
          color: #fff;
          font-size: clamp(30px, 4vw, 45px);
          line-height: 1.05;
        }

        .shopPrice {
          margin-top: 9px;
          color: #fecaca;
          font-size: 24px;
          font-weight: 950;
        }

        .shopProductBlue .shopPrice { color: #bfdbfe; }

        .shopTopOrder, .shopButton {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 13px;
          background: #dc2626;
          color: #fff;
          text-decoration: none;
          font-weight: 950;
          box-shadow: 0 12px 28px rgba(220,38,38,.25);
          transition: transform .15s ease, filter .15s ease;
        }

        .shopTopOrder { min-height: 48px; padding: 0 21px; flex: 0 0 auto; }
        .shopButton { width: 100%; min-height: 56px; margin-top: 20px; padding: 0 18px; font-size: 17px; }
        .shopTopOrder:hover, .shopButton:hover { transform: translateY(-1px); filter: brightness(1.08); }

        .shopPreviewLayout {
          display: grid;
          grid-template-columns: minmax(300px, .84fr) minmax(0, 1.16fr);
          gap: 24px;
          align-items: start;
        }

        .shopExampleCard, .shopDesignPanel {
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,.11);
          background: rgba(255,255,255,.045);
        }

        .shopExampleCard { padding: 16px; text-align: center; }
        .shopDesignPanel { padding: 22px; }

        .shopExampleLabel {
          margin-bottom: 12px;
          color: rgba(255,255,255,.7);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .shopExampleImage {
          display: block;
          width: 100%;
          max-width: 520px;
          height: auto;
          margin: 0 auto;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,.16);
          box-shadow: 0 12px 28px rgba(0,0,0,.3);
        }

        .shopExampleHelp {
          margin: 12px 0 0;
          color: rgba(255,255,255,.58);
          font-size: 12px;
          line-height: 1.5;
        }

        .shopDescription {
          margin: 0;
          color: rgba(255,255,255,.78);
          font-size: 15px;
          line-height: 1.65;
        }

        .shopDesignPanel h3 {
          margin: 22px 0 12px;
          color: #fff;
          font-size: 20px;
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
          min-height: 48px;
          padding: 9px 10px;
          border-radius: 10px;
          background: rgba(255,255,255,.055);
          border: 1px solid rgba(255,255,255,.09);
          color: rgba(255,255,255,.86);
          font-size: 12px;
          line-height: 1.3;
        }

        .shopCode {
          flex: 0 0 auto;
          min-width: 38px;
          color: #fca5a5;
          font-weight: 950;
        }

        .shopRemember {
          margin-top: 16px;
          padding: 13px 14px;
          border-radius: 11px;
          background: rgba(255,255,255,.055);
          border: 1px solid rgba(255,255,255,.09);
          color: rgba(255,255,255,.72);
          font-size: 13px;
          line-height: 1.5;
        }

        .shopRemember strong { color: #fff; }

        .shopCheckoutNote {
          margin: 10px 0 0;
          text-align: center;
          color: rgba(255,255,255,.52);
          font-size: 12px;
        }

        .shopHow {
          margin-top: 34px;
          padding: 28px;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,.14);
          background: rgba(7,12,24,.88);
        }

        .shopHow h2 { margin: 0; color: #fff; font-size: 30px; }

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
          padding: 20px 22px;
          border-radius: 14px;
          border: 1px solid rgba(248,113,113,.2);
          background: rgba(127,29,29,.18);
          text-align: center;
          color: rgba(255,255,255,.78);
          line-height: 1.6;
        }

        @media (max-width: 900px) {
          .shopQuickLinks, .shopPreviewLayout, .shopSteps { grid-template-columns: 1fr; }
          .shopProductHeader { align-items: flex-start; flex-direction: column; }
          .shopTopOrder { width: 100%; }
          .shopHero { padding: 42px 20px 56px; }
          .shopWrap { width: min(100% - 22px, 1180px); }
          .shopProductSection { padding: 18px; }
        }

        @media (max-width: 560px) {
          .shopDesignGrid { grid-template-columns: 1fr; }
          .shopDesignPanel { padding: 16px; }
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

        <div className="shopQuickLinks">
          <a className="shopQuickCard" href="#wall-decor">
            <div><strong>Door & Wall Decor</strong><span>See W01–W09 examples</span></div>
            <span className="shopQuickArrow">→</span>
          </a>
          <a className="shopQuickCard" href="#dog-bandanas">
            <div><strong>Dog Bandanas</strong><span>See B01–B17 examples</span></div>
            <span className="shopQuickArrow">→</span>
          </a>
        </div>

        <div id="wall-decor">
          <ProductPreview
            image="/vvr-shop-wall-decor.webp"
            alt="Veteran Voice Radio personalized door and wall decor design examples W01 through W09"
            label="W01–W09"
            title="Personalized Door & Wall Decor"
            price="Starting at $20"
            description="Choose the design you want, then personalize it with names, a family name, pet names, or another short message. Use the W-code shown with the example so there is no confusion about which design you selected."
            designs={wallDesigns}
            link={WALL_DECOR_LINK}
            buttonText="Personalize & Order Wall Decor"
          />
        </div>

        <div id="dog-bandanas">
          <ProductPreview
            image="/vvr-shop-bandanas.webp"
            alt="Veteran Voice Radio personalized dog bandana design examples B01 through B17"
            label="B01–B17"
            title="Personalized Dog Bandanas"
            price="Starting at $20"
            description="Pick your favorite bandana design and add your pet's name or another short personalization. Every bandana now has a unique B-code, so you can choose the exact design you want during checkout."
            designs={bandanaDesigns}
            link={BANDANA_LINK}
            buttonText="Personalize & Order Bandana"
            blue
          />
        </div>

        <section className="shopHow">
          <h2>How ordering works</h2>
          <div className="shopSteps">
            <div className="shopStep"><div className="shopStepNo">1</div><strong>Choose a product</strong><span>Select personalized decor or a dog bandana.</span></div>
            <div className="shopStep"><div className="shopStepNo">2</div><strong>Pick the design</strong><span>Use the W or B code shown beside the example you want.</span></div>
            <div className="shopStep"><div className="shopStepNo">3</div><strong>Add personalization</strong><span>Enter names, pet names, or special wording during Stripe checkout.</span></div>
            <div className="shopStep"><div className="shopStepNo">4</div><strong>Pay securely</strong><span>Stripe collects payment, contact information, quantity, and your U.S. shipping address.</span></div>
          </div>
        </section>

        <div className="shopFooterNote">
          <strong>Every purchase makes an impact.</strong> Thank you for standing with our veterans and supporting Veteran Voice Radio.
        </div>
      </div>
    </main>
  );
}
