import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Paid Vendor Registration | Freedom Fest 2026",
  description: "Complete your Freedom Fest vendor information after Stripe payment.",
};

export default async function VendorRegistrationPage({ searchParams }) {
  const params = await searchParams;
  const sessionId = typeof params?.session_id === "string" ? params.session_id : "";

  if (!/^cs_(live|test)_[A-Za-z0-9]+$/.test(sessionId)) {
    redirect("/freedom-fest#vendor-signup");
  }

  return (
    <main className="min-h-[80vh] text-white">
      <section className="container pagePad">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl border border-emerald-400/30 bg-emerald-950/25 p-6 text-center shadow-2xl">
            <div className="text-sm font-black uppercase tracking-[0.2em] text-emerald-300">
              Payment Complete
            </div>
            <h1 className="mt-3 text-4xl font-black sm:text-5xl">Finish Your Vendor Registration</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/75">
              Stripe has returned you to the paid-vendor registration step. Complete this form so the Freedom Fest team has your booth and contact information.
            </p>
          </div>

          <form
            action="https://formsubmit.co/donald.l.dunn@gmail.com"
            method="POST"
            className="mt-8 rounded-3xl border border-white/15 bg-black/55 p-6 shadow-2xl sm:p-8"
          >
            <input type="hidden" name="_cc" value="bcoopermarine@gmail.com" />
            <input type="hidden" name="_subject" value="PAID Freedom Fest Vendor Registration" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://www.veteranvoiceradio.com/freedom-fest/thank-you" />
            <input type="hidden" name="_captcha" value="true" />
            <input type="hidden" name="Stripe Checkout Session" value={sessionId} />
            <input type="hidden" name="Payment Status" value="Paid - arrived from Stripe checkout" />
            <input type="text" name="_honey" className="absolute -left-[10000px] h-px w-px overflow-hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="font-bold sm:col-span-2">
                Business / Organization Name *
                <input className="mt-2 w-full rounded-xl border border-white/20 bg-slate-900 px-4 py-3 text-white" type="text" name="Business / Organization" required autoComplete="organization" />
              </label>

              <label className="font-bold">
                Contact Name *
                <input className="mt-2 w-full rounded-xl border border-white/20 bg-slate-900 px-4 py-3 text-white" type="text" name="Contact Name" required autoComplete="name" />
              </label>

              <label className="font-bold">
                Phone *
                <input className="mt-2 w-full rounded-xl border border-white/20 bg-slate-900 px-4 py-3 text-white" type="tel" name="Phone" required autoComplete="tel" />
              </label>

              <label className="font-bold sm:col-span-2">
                Email *
                <input className="mt-2 w-full rounded-xl border border-white/20 bg-slate-900 px-4 py-3 text-white" type="email" name="email" required autoComplete="email" />
              </label>

              <label className="font-bold">
                Vendor Type *
                <select className="mt-2 w-full rounded-xl border border-white/20 bg-slate-900 px-4 py-3 text-white" name="Vendor Type" required defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option value="Food / Beverage">Food / Beverage</option>
                  <option value="Merchandise / Retail">Merchandise / Retail</option>
                  <option value="Nonprofit / Community Organization">Nonprofit / Community Organization</option>
                  <option value="Service Business">Service Business</option>
                  <option value="Artist / Maker">Artist / Maker</option>
                  <option value="Other">Other</option>
                </select>
              </label>

              <label className="font-bold">
                Number of Spots *
                <select className="mt-2 w-full rounded-xl border border-white/20 bg-slate-900 px-4 py-3 text-white" name="Number of Spots" required defaultValue="1">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4+">4 or more</option>
                </select>
              </label>

              <label className="font-bold sm:col-span-2">
                What will you sell, display, or provide? *
                <textarea className="mt-2 min-h-28 w-full rounded-xl border border-white/20 bg-slate-900 px-4 py-3 text-white" name="Products / Services" required />
              </label>

              <label className="font-bold sm:col-span-2">
                Website or Social Media
                <input className="mt-2 w-full rounded-xl border border-white/20 bg-slate-900 px-4 py-3 text-white" type="text" name="Website / Social Media" />
              </label>

              <label className="font-bold sm:col-span-2">
                Notes or Questions
                <textarea className="mt-2 min-h-28 w-full rounded-xl border border-white/20 bg-slate-900 px-4 py-3 text-white" name="Notes / Questions" />
              </label>
            </div>

            <label className="mt-6 flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm leading-relaxed text-white/80">
              <input className="mt-1" type="checkbox" name="Booth Terms Acknowledged" value="Yes - space only; tables and electricity are not included" required />
              <span>I understand the purchase is for vendor space only. Tables and electricity are not included. *</span>
            </label>

            <button type="submit" className="mt-6 w-full rounded-xl bg-blue-600 px-6 py-4 text-lg font-black text-white transition hover:bg-blue-700">
              Submit Paid Vendor Registration
            </button>

            <p className="mt-4 text-center text-xs text-white/55">
              Payment reference: {sessionId}
            </p>
          </form>

          <div className="mt-7 text-center">
            <Link href="/freedom-fest" className="font-bold text-blue-300 hover:text-blue-200">
              Return to Freedom Fest details
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
