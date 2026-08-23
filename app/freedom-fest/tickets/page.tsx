"use client";

import { useEffect, useState } from "react";

const PRESALE = {
  veteran: "https://buy.stripe.com/7sY6oIbjHbM39ApaLOfbq04",
  general: "https://buy.stripe.com/4gM4gAfzXcQ7bIxf24fbq05",
  sponsor: "https://donate.stripe.com/6oU00k9bzg2jaEtg68fbq0b",
};

const DOOR = {
  veteran: "https://buy.stripe.com/14AaEY2Nb7vN9Apg68fbq06",
  general: "https://buy.stripe.com/cNi5kE2Nb17p4g57zCfbq07",
  sponsor: "https://donate.stripe.com/14AdRa73r9DV7sh5rufbq0a",
};

function easternDateKey(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);

  const year = parts.find((p) => p.type === "year")?.value ?? "0000";
  const month = parts.find((p) => p.type === "month")?.value ?? "00";
  const day = parts.find((p) => p.type === "day")?.value ?? "00";
  return `${year}-${month}-${day}`;
}

export default function FreedomFestTicketsPage() {
  const [eventDayPricing, setEventDayPricing] = useState(false);

  useEffect(() => {
    const updatePricing = () => {
      setEventDayPricing(easternDateKey(new Date()) >= "2026-09-12");
    };

    updatePricing();
    const timer = window.setInterval(updatePricing, 30_000);
    return () => window.clearInterval(timer);
  }, []);

  const links = eventDayPricing ? DOOR : PRESALE;
  const veteranPrice = eventDayPricing ? 10 : 5;
  const generalPrice = eventDayPricing ? 15 : 10;
  const sponsorPrice = eventDayPricing ? 10 : 5;

  return (
    <main className="ticketPage">
      <style>{`
        .ticketPage {
          min-height: 100vh;
          color: #fff;
          padding: 44px 20px 80px;
        }
        .ticketWrap {
          width: min(1080px, 100%);
          margin: 0 auto;
        }
        .ticketHero {
          text-align: center;
          padding: 42px 24px;
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,.18);
          background:
            radial-gradient(circle at 10% 0%, rgba(220,38,38,.45), transparent 36%),
            radial-gradient(circle at 90% 0%, rgba(37,99,235,.45), transparent 38%),
            rgba(5,8,16,.94);
          box-shadow: 0 22px 60px rgba(0,0,0,.45);
        }
        .ticketEyebrow {
          color: #fca5a5;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: .18em;
          text-transform: uppercase;
        }
        .ticketHero h1 {
          margin: 10px 0 0;
          font-size: clamp(38px, 7vw, 68px);
          line-height: 1;
        }
        .ticketLead {
          max-width: 720px;
          margin: 18px auto 0;
          color: rgba(255,255,255,.78);
          font-size: 18px;
          line-height: 1.6;
        }
        .priceNotice {
          display: inline-block;
          margin-top: 22px;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(245,158,11,.16);
          border: 1px solid rgba(245,158,11,.5);
          color: #fde68a;
          font-weight: 900;
        }
        .ticketGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
          margin-top: 28px;
        }
        .ticketCard {
          padding: 30px;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,.17);
          background: rgba(7,10,18,.9);
          box-shadow: 0 18px 42px rgba(0,0,0,.35);
        }
        .ticketCardDiscount {
          background: linear-gradient(145deg, rgba(78,14,20,.84), rgba(7,10,18,.94));
          border-color: rgba(248,113,113,.35);
        }
        .ticketSponsor {
          grid-column: 1 / -1;
          background:
            radial-gradient(circle at 0% 0%, rgba(37,99,235,.28), transparent 40%),
            radial-gradient(circle at 100% 100%, rgba(220,38,38,.24), transparent 42%),
            rgba(7,10,18,.94);
          border-color: rgba(147,197,253,.42);
        }
        .ticketLabel {
          color: rgba(255,255,255,.68);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: .13em;
          text-transform: uppercase;
        }
        .ticketPrice {
          margin-top: 8px;
          font-size: 58px;
          font-weight: 950;
          line-height: 1;
        }
        .ticketEach {
          margin-top: 5px;
          color: rgba(255,255,255,.6);
        }
        .ticketCopy {
          min-height: 78px;
          margin-top: 18px;
          color: rgba(255,255,255,.78);
          line-height: 1.55;
        }
        .ticketSponsor .ticketCopy {
          min-height: 0;
          max-width: 780px;
        }
        .ticketBuy {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-height: 58px;
          margin-top: 22px;
          border-radius: 13px;
          color: #fff;
          text-decoration: none;
          font-size: 17px;
          font-weight: 950;
          background: linear-gradient(90deg, #dc2626, #2563eb);
          box-shadow: 0 0 18px rgba(239,68,68,.35), 0 0 34px rgba(37,99,235,.22);
          transition: transform .15s ease, filter .15s ease;
        }
        .ticketBuy:hover {
          transform: translateY(-2px) scale(1.01);
          filter: brightness(1.12);
        }
        .verifyBox {
          margin-top: 28px;
          padding: 24px;
          border-radius: 18px;
          border: 1px solid rgba(96,165,250,.3);
          background: rgba(30,58,138,.15);
        }
        .verifyBox h2 { margin: 0; font-size: 22px; }
        .verifyBox p { margin: 10px 0 0; color: rgba(255,255,255,.77); line-height: 1.6; }
        .ticketFine {
          margin-top: 22px;
          text-align: center;
          color: rgba(255,255,255,.55);
          font-size: 13px;
          line-height: 1.5;
        }
        @media (max-width: 720px) {
          .ticketGrid { grid-template-columns: 1fr; }
          .ticketSponsor { grid-column: auto; }
          .ticketCard { padding: 24px; }
          .ticketCopy { min-height: 0; }
        }
      `}</style>

      <div className="ticketWrap">
        <section className="ticketHero">
          <div className="ticketEyebrow">Veteran Voice Radio Presents</div>
          <h1>Freedom Fest Tickets</h1>
          <p className="ticketLead">
            Saturday, September 12, 2026 at Hagood Mill Historic Site in Pickens, South Carolina.
            Choose your ticket type below and complete secure checkout through Stripe.
          </p>
          <div className="priceNotice">
            {eventDayPricing
              ? "Event-day pricing is now in effect"
              : "Presale pricing — buy before midnight September 12"}
          </div>
        </section>

        <section className="ticketGrid">
          <article className="ticketCard ticketCardDiscount">
            <div className="ticketLabel">Veterans & First Responders</div>
            <div className="ticketPrice">${veteranPrice}</div>
            <div className="ticketEach">per ticket</div>
            <p className="ticketCopy">
              Select the number of tickets during Stripe checkout. You will also choose Veteran / Active Military or First Responder.
            </p>
            <a className="ticketBuy" href={links.veteran} target="_blank" rel="noreferrer">
              Buy Discounted Tickets
            </a>
          </article>

          <article className="ticketCard">
            <div className="ticketLabel">General Admission</div>
            <div className="ticketPrice">${generalPrice}</div>
            <div className="ticketEach">per ticket</div>
            <p className="ticketCopy">
              General admission for Freedom Fest. Select the number of tickets you need during Stripe checkout.
            </p>
            <a className="ticketBuy" href={links.general} target="_blank" rel="noreferrer">
              Buy General Admission
            </a>
          </article>

          <article className="ticketCard ticketSponsor">
            <div className="ticketLabel">Can&apos;t Attend? Send Someone Who Served.</div>
            <div className="ticketPrice">${sponsorPrice}</div>
            <div className="ticketEach">sponsors one veteran or first responder admission</div>
            <p className="ticketCopy">
              Purchase a ticket even if you cannot come. Veteran Voice Radio will give the sponsored admission to a veteran or first responder so they can attend Freedom Fest. You can increase the quantity during Stripe checkout if you would like to sponsor more than one person.
            </p>
            <a className="ticketBuy" href={links.sponsor} target="_blank" rel="noreferrer">
              Sponsor a Veteran or First Responder
            </a>
          </article>
        </section>

        <section className="verifyBox">
          <h2>Veteran / First Responder Verification</h2>
          <p>
            Discounted-ticket buyers must present valid veteran, military, or first-responder identification at entry. The Stripe purchase records which eligibility category the buyer selected. If eligibility cannot be verified at the gate, the difference to general admission is due before entry.
          </p>
        </section>

        <p className="ticketFine">
          Stripe collects the purchaser name, email, phone number, quantity, payment status, and ticket category so Freedom Fest sales can be tracked and exported.
        </p>
      </div>
    </main>
  );
}
