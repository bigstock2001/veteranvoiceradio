export const metadata = {
  title: "Live Webinar | Barracks Media",
  description:
    "Join Barracks Media live webinars, including Veteran Voice Radio’s Art Resilience Workshop for veterans and first responders.",
  alternates: { canonical: "/webinars/live" },
  openGraph: {
    title: "Live Webinar | Barracks Media",
    description:
      "Watch live and on-demand webinars, including Veteran Voice Radio’s Art Resilience Workshop for veterans and first responders.",
    url: "https://barracksmedia.com/webinars/live",
    type: "website",
  },
};

export default function LiveWebinarPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 text-white">
      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-4">Live Webinar</h1>
        <p className="text-lg text-white/80 max-w-3xl">
          Watch the live session below. If the player hasn’t started yet, it will
          display a waiting screen until the webinar goes live.
        </p>
      </header>

      {/* Live Embed */}
      <section className="mb-10">
        <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-lg">
          <div
            style={{
              width: "100%",
              height: 0,
              position: "relative",
              paddingBottom: "56.25%",
            }}
          >
            <iframe
              src="https://streamyard.com/watch/K2rkMhNVu5yW?embed=true"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen"
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                left: 0,
                top: 0,
                overflow: "hidden",
              }}
              title="Barracks Media Live Webinar"
            />
          </div>
        </div>

        <p className="mt-4 text-sm text-white/60">
          Tip: If the video doesn’t load, refresh the page or try another browser.
        </p>
      </section>

      {/* Event Details */}
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold mb-3">
            Art to Help the Mind and Body
          </h2>

          <p className="text-white/80 leading-relaxed">
            Veteran Voice Radio is launching a free, structured art resilience workshop
            designed specifically for veterans and first responders. This program
            offers a guided creative outlet to support stress management, focus,
            emotional balance, and overall well-being through disciplined artistic
            practice.
          </p>

          <div className="mt-5 space-y-2 text-white/80">
            <p>
              <span className="font-semibold text-white">Led by:</span> Rex Nielson,
              retired police officer
            </p>
            <p>
              <span className="font-semibold text-white">Cost:</span> Free
            </p>
            <p>
              <span className="font-semibold text-white">Supplies:</span> Participants
              provide their own art supplies
            </p>
            <p className="text-sm text-white/60">
              Schedule note: Sessions are offered on Thursdays and Saturdays twice a
              month. They are the same class—attend either Thursday or Saturday.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold mb-3">What is Pointillism?</h2>

          <p className="text-white/80 leading-relaxed">
            Pointillism is an art technique where an image is created using many small,
            intentional dots rather than lines or broad strokes. Up close, the artwork
            can look like patterns of separate marks. From a distance, the dots visually
            blend to form shapes, shading, and depth.
          </p>

          <p className="text-white/80 leading-relaxed mt-4">
            Because it’s built from repetition and small decisions, pointillism can be
            especially helpful for resilience training. The process naturally slows you
            down, encourages steady focus, and rewards patience. Each dot is a small
            completed action—simple on its own, but powerful when combined over time.
          </p>

          <p className="text-white/80 leading-relaxed mt-4">
            You don’t need to be an artist to participate. The goal isn’t perfection.
            It’s creating a calm, structured space to practice attention, control, and
            follow-through—skills that carry over into daily life.
          </p>
        </div>
      </section>
    </main>
  );
}