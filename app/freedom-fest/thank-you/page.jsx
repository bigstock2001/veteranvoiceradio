export const metadata = {
  title: "Vendor Registration Received | Freedom Fest 2026",
  description: "Freedom Fest vendor registration confirmation.",
};

const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/aFa28s87v3fx13TaLOfbq01";

export default function FreedomFestThankYouPage() {
  return (
    <main className="min-h-[70vh] text-white">
      <section className="container pagePad">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/15 bg-black/50 p-8 text-center shadow-2xl backdrop-blur sm:p-12">
          <div className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
            Freedom Fest 2026
          </div>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">
            Vendor Registration Received
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
            Thank you for submitting your vendor information. If you have not already
            purchased your booth space, use the button below to complete your registration.
          </p>

          <div className="mt-7 rounded-2xl border border-red-400/30 bg-red-950/25 p-5 text-left">
            <p className="font-bold text-white">Important:</p>
            <p className="mt-2 text-white/75">
              Booth payment is for the vendor spot only. Tables and electricity are
              not included.
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={STRIPE_PAYMENT_LINK}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-red-600 px-7 py-3 font-black text-white transition hover:bg-red-700"
            >
              Purchase Now
            </a>
            <a
              href="/freedom-fest"
              className="rounded-xl border border-white/20 bg-white/10 px-7 py-3 font-bold transition hover:bg-white/15"
            >
              Return to Freedom Fest
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
