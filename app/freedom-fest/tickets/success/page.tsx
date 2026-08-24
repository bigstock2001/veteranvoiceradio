"use client";

import Link from "next/link";
import { Suspense, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

const LABELS: Record<string, string> = {
  veteran_first_responder: "Veteran / First Responder Admission",
  general_admission: "General Admission",
  sponsored_admission: "Sponsored Veteran / First Responder Admission",
};

function TicketSuccessContent() {
  const searchParams = useSearchParams();

  const sessionId = searchParams.get("session_id") || "";
  const ticketType = searchParams.get("ticket") || "general_admission";
  const period = searchParams.get("period") || "presale";
  const unitValue = Number(searchParams.get("unit_value") || 0);
  const ticketLabel = LABELS[ticketType] || "Freedom Fest Admission";

  const eventId = useMemo(
    () => (sessionId ? `freedom_fest_${sessionId}` : ""),
    [sessionId]
  );

  useEffect(() => {
    if (!sessionId || !eventId) return;

    const storageKey = `meta_purchase_${sessionId}`;
    if (window.localStorage.getItem(storageKey) === "1") return;

    const params = {
      content_name: "Freedom Fest 2026",
      content_category: "Event Ticket",
      content_ids: [`freedom_fest_2026_${ticketType}_${period}`],
      content_type: "product",
      currency: "USD",
      value: Number.isFinite(unitValue) ? unitValue : 0,
    };

    if (typeof window.fbq === "function") {
      window.fbq("track", "Purchase", params, { eventID: eventId });
    }

    if (typeof window.gtag === "function") {
      window.gtag("event", "purchase", {
        transaction_id: sessionId,
        currency: "USD",
        value: Number.isFinite(unitValue) ? unitValue : 0,
        items: [
          {
            item_id: `freedom_fest_2026_${ticketType}_${period}`,
            item_name: ticketLabel,
          },
        ],
      });
    }

    window.localStorage.setItem(storageKey, "1");
  }, [eventId, period, sessionId, ticketLabel, ticketType, unitValue]);

  return (
    <main className="min-h-[70vh] text-white">
      <section className="container pagePad">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/15 bg-black/50 p-8 text-center shadow-2xl backdrop-blur sm:p-12">
          <div className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
            Freedom Fest 2026
          </div>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">
            Your Tickets Are Confirmed
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
            Thank you for supporting Veteran Voice Radio. Your Stripe payment was completed successfully.
          </p>

          <div className="mx-auto mt-7 max-w-xl rounded-2xl border border-blue-400/30 bg-blue-950/25 p-5 text-left">
            <p className="font-bold text-white">{ticketLabel}</p>
            <p className="mt-2 text-white/75">
              Saturday, September 12, 2026 · Hagood Mill Historic Site · Pickens, South Carolina
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/freedom-fest"
              className="rounded-xl bg-red-600 px-7 py-3 font-black text-white transition hover:bg-red-700"
            >
              Freedom Fest Details
            </Link>
            <Link
              href="/"
              className="rounded-xl border border-white/20 bg-white/10 px-7 py-3 font-bold transition hover:bg-white/15"
            >
              Return Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function FreedomFestTicketSuccessPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-[70vh] text-white">
          <section className="container pagePad">
            <p className="text-center text-white/75">Confirming your Freedom Fest purchase…</p>
          </section>
        </main>
      }
    >
      <TicketSuccessContent />
    </Suspense>
  );
}
