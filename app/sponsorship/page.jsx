export const metadata = {
  title: "Sponsorship | Spring Freedom Fling — Veteran Voice Radio",
  description:
    "Partner with Veteran Voice Radio to support veterans through music, media, and community. Sponsorship opportunities for Spring Freedom Fling.",
};

export default function SponsorshipPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      {/* Hero */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">
          Spring Freedom Fling Sponsorship Opportunities
        </h1>
        <p className="text-lg text-gray-300">
          Support veterans. Support community. Support music with a mission.
        </p>
      </section>

      {/* About */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">About the Event</h2>
        <p>
          <strong>Spring Freedom Fling</strong> is a mission-driven community
          music festival presented by Veteran Voice Radio, a nonprofit dedicated
          to amplifying veteran voices through music, media, and creative
          healing.
        </p>
        <p>
          <strong>Location:</strong> Easley, South Carolina <br />
          <strong>Date:</strong> To Be Announced
        </p>
      </section>

      {/* Mission */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Why Spring Freedom Fling Matters
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Operating and expanding Veteran Voice Radio</li>
          <li>Launching a Veteran Art Therapy Program</li>
          <li>Creating the Veteran Voice Music Awards (VVMA)</li>
        </ul>
      </section>

      {/* Audience */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Who Your Business Reaches</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Veterans and military families</li>
          <li>Local families and community leaders</li>
          <li>Live music fans</li>
          <li>Patriot-supportive consumers</li>
        </ul>
      </section>

      {/* Radio Reach */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Radio Network Reach</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">Semper Fi Country</h3>
            <ul className="mt-2 space-y-1">
              <li>1,800+ listening sessions</li>
              <li>110+ unique listeners</li>
              <li>13+ minute average listening time</li>
            </ul>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">Ranger Rockwave</h3>
            <ul className="mt-2 space-y-1">
              <li>1,600+ listening sessions</li>
              <li>90+ unique listeners</li>
              <li>2+ minute average listening time</li>
            </ul>
          </div>
        </div>

        <p className="text-sm text-gray-400">
          Combined network reach includes 3,000+ verified listening sessions
          nationwide.
        </p>
      </section>

      {/* Social Reach */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Social & Digital Reach</h2>
        <p>
          Veteran Voice Radio delivers extended sponsor visibility across digital
          platforms.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>15,000+ combined social media followers</li>
          <li>Short-form video, show clips, and promotions</li>
          <li>Sponsor mentions before and after the event</li>
        </ul>
      </section>

      {/* Sponsorship Levels */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">Sponsorship Levels</h2>

        <div className="p-6 border rounded-lg space-y-2">
          <h3 className="text-xl font-bold">🇺🇸 Freedom Partner — $6,500</h3>
          <p className="italic">Exclusive Presenting Sponsor (1 available)</p>
          <ul className="list-disc list-inside">
            <li>Main stage banner placement</li>
            <li>Premium booth</li>
            <li>Radio & podcast mentions</li>
            <li>Social media features</li>
            <li>VIP passes</li>
            <li>Logo on official event T-shirts</li>
          </ul>
        </div>

        <div className="p-6 border rounded-lg space-y-2">
          <h3 className="text-xl font-bold">🥇 Gold Sponsor — $4,500</h3>
          <ul className="list-disc list-inside">
            <li>Stage signage</li>
            <li>Booth space</li>
            <li>Radio & podcast mentions</li>
            <li>VIP passes</li>
            <li>Logo on event T-shirts</li>
          </ul>
        </div>

        <div className="p-6 border rounded-lg space-y-2">
          <h3 className="text-xl font-bold">🥈 Silver Sponsor — $2,500</h3>
          <ul className="list-disc list-inside">
            <li>Shared signage</li>
            <li>Radio mention</li>
            <li>Social media thank-you</li>
            <li>Logo on event T-shirts</li>
          </ul>
        </div>

        <div className="p-6 border rounded-lg space-y-2">
          <h3 className="text-xl font-bold">⭐ Patriot Sponsor — $500</h3>
          <ul className="list-disc list-inside">
            <li>Sponsor board listing</li>
            <li>Event-day recognition</li>
            <li>Website listing</li>
            <li>Logo on event T-shirts</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">Let’s Partner</h2>
        <p>
          Supporting Spring Freedom Fling means supporting veterans, creativity,
          and community.
        </p>
        <p>
          📧 <strong>Email:</strong> your@email.com <br />
          🌐 <strong>Website:</strong> veteranvoiceradio.com
        </p>
      </section>
    </main>
  );
}
