export default function BuckAndCassiePage() {
  const PATRIOT_GLASS = {
    backgroundColor: "rgba(8,12,22,.78)",
    backgroundImage:
      "linear-gradient(90deg, rgba(220,38,38,.38), rgba(255,255,255,.16), rgba(37,99,235,.38))",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    border: "1px solid rgba(255,255,255,.18)",
    borderRadius: "14px",
    boxShadow: "0 10px 30px rgba(0,0,0,.35)",
  } as const;

  const GLASS_PANEL = {
    background: "rgba(8,12,22,.62)",
    border: "1px solid rgba(255,255,255,.14)",
    borderRadius: "14px",
    boxShadow: "0 10px 30px rgba(0,0,0,.35)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
  } as const;

  return (
    <main className="max-w-6xl mx-auto px-4 py-10" style={{ color: "rgba(255,255,255,.92)" }}>
      {/* Show Hero */}
      <section className="mb-10">
        <img
          src="/images/reveille-and-coffee.jpg"
          alt="Reveille & Coffee Show"
          className="w-full rounded-xl shadow-lg"
        />
      </section>

      {/* Show Info */}
      <section className="mb-10">
        {/* Patriot Divider Title */}
        <div
          className="px-4 py-2 inline-flex"
          style={{ ...PATRIOT_GLASS, color: "rgba(255,255,255,.96)", fontWeight: 900, fontSize: 24 }}
        >
          Reveille &amp; Coffee
        </div>

        {/* Schedule */}
        <div style={{ marginTop: 10 }}>
          <div
            className="inline-flex px-3 py-2"
            style={{
              ...GLASS_PANEL,
              color: "rgba(255,255,255,.82)",
              fontWeight: 800,
              fontSize: 14,
            }}
          >
            Weekdays • 6:00 AM – 9:00 AM
          </div>
        </div>

        {/* Description */}
        <div className="mt-4 max-w-3xl p-4" style={GLASS_PANEL}>
          <p style={{ lineHeight: 1.7, color: "rgba(255,255,255,.88)" }}>
            Start your morning with Buck &amp; Cassie as they bring real conversation, veteran perspective, and grounded
            energy to ease into the day. Reveille &amp; Coffee blends military culture with everyday life — familiar
            voices, zero fluff, and plenty of coffee.
          </p>
        </div>
      </section>

      {/* Hosts */}
      <section>
        {/* Patriot Divider for Section Header */}
        <div
          className="px-4 py-2 inline-flex"
          style={{ ...PATRIOT_GLASS, color: "rgba(255,255,255,.96)", fontWeight: 900, fontSize: 18 }}
        >
          Your Hosts
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
          {/* Buck */}
          <div className="text-center p-4" style={GLASS_PANEL}>
            <img src="/images/buck.jpg" alt="Buck" className="mx-auto rounded-xl shadow-md" />
            <div style={{ fontWeight: 900, fontSize: 18, marginTop: 14, color: "rgba(255,255,255,.95)" }}>Buck</div>
          </div>

          {/* Cassie */}
          <div className="text-center p-4" style={GLASS_PANEL}>
            <img src="/images/cassie.jpg" alt="Cassie" className="mx-auto rounded-xl shadow-md" />
            <div style={{ fontWeight: 900, fontSize: 18, marginTop: 14, color: "rgba(255,255,255,.95)" }}>Cassie</div>
          </div>
        </div>
      </section>
    </main>
  );
}
