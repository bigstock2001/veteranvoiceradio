export default function SemperFiCountryDjsPage() {
  const PATRIOT_GLASS = {
    backgroundColor: "rgba(8,12,22,.78)",
    backgroundImage:
      "linear-gradient(90deg, rgba(220,38,38,.38), rgba(255,255,255,.16), rgba(37,99,235,.38))",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    border: "1px solid rgba(255,255,255,.18)",
    borderRadius: "14px",
    boxShadow: "0 10px 30px rgba(0,0,0,.35)",
  };

  const GLASS_PANEL = {
    background: "rgba(8,12,22,.56)",
    border: "1px solid rgba(255,255,255,.12)",
    borderRadius: "14px",
    boxShadow: "0 10px 30px rgba(0,0,0,.35)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
  };

  return (
    <main className="main" style={{ color: "rgba(255,255,255,.92)" }}>
      <div className="container" style={{ paddingTop: 28, paddingBottom: 40 }}>
        {/* Page Title Divider */}
        <div
          className="px-4 py-2"
          style={{
            ...PATRIOT_GLASS,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            color: "rgba(255,255,255,.96)",
          }}
        >
          <span style={{ fontSize: 22, fontWeight: 900, letterSpacing: 0.2 }}>Semper Fi Country DJs</span>
        </div>

        <p className="subtle" style={{ marginTop: 12, lineHeight: 1.6, maxWidth: 900 }}>
          Browse shows and meet the hosts.
        </p>

        {/* Show Card: Reveille & Coffee */}
        <section
          style={{
            marginTop: 26,
            borderRadius: 18,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          {/* Show Image */}
          <div style={{ width: "100%" }}>
            <img
              src="/images/reveille-and-coffee.jpg"
              alt="Reveille & Coffee show artwork"
              style={{ width: "100%", display: "block" }}
            />
          </div>

          {/* Content */}
          <div style={{ padding: 18 }}>
            <div
              style={{
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <div>
                {/* Show Title Divider */}
                <div
                  className="px-4 py-2"
                  style={{
                    ...PATRIOT_GLASS,
                    display: "inline-flex",
                    alignItems: "center",
                    color: "rgba(255,255,255,.96)",
                  }}
                >
                  <span style={{ fontSize: 18, fontWeight: 900 }}>Reveille &amp; Coffee</span>
                </div>

                <div className="subtle" style={{ marginTop: 10 }}>
                  Weekdays • 6:00 AM – 9:00 AM
                </div>
              </div>

              <a
                href="/djs/semper-fi-country/reveille-and-coffee"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px 14px",
                  borderRadius: 12,
                  textDecoration: "none",
                  fontWeight: 800,
                  color: "rgba(255,255,255,.92)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  background: "rgba(255,255,255,0.06)",
                }}
              >
                View Show Page →
              </a>
            </div>

            {/* Description in a glass panel for readability */}
            <div style={{ marginTop: 14, maxWidth: 900, padding: 14, ...GLASS_PANEL }}>
              <p style={{ margin: 0, lineHeight: 1.6, color: "rgba(255,255,255,.88)" }}>
                Start your morning with Buck &amp; Cassie—real conversation, veteran perspective, and grounded energy to
                ease into the day. Reveille &amp; Coffee blends military culture with everyday life: familiar voices,
                zero fluff, and plenty of coffee.
              </p>
            </div>

            {/* Hosts */}
            <div style={{ marginTop: 22 }}>
              {/* Hosts Divider */}
              <div
                className="px-4 py-2"
                style={{
                  ...PATRIOT_GLASS,
                  display: "inline-flex",
                  alignItems: "center",
                  color: "rgba(255,255,255,.96)",
                }}
              >
                <span style={{ fontSize: 14, fontWeight: 900, letterSpacing: 0.3 }}>Hosts</span>
              </div>

              <div
                style={{
                  marginTop: 14,
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: 14,
                }}
              >
                {/* Buck */}
                <div
                  style={{
                    borderRadius: 16,
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.10)",
                    background: "rgba(0,0,0,0.12)",
                  }}
                >
                  <img src="/images/buck.jpg" alt="Buck" style={{ width: "100%", display: "block" }} />
                  <div style={{ padding: 12 }}>
                    <div style={{ fontWeight: 900, fontSize: 16, color: "rgba(255,255,255,.95)" }}>Buck</div>
                    <div className="subtle" style={{ marginTop: 4 }}>
                      Co-host • Semper Fi Country
                    </div>
                  </div>
                </div>

                {/* Cassie */}
                <div
                  style={{
                    borderRadius: 16,
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.10)",
                    background: "rgba(0,0,0,0.12)",
                  }}
                >
                  <img src="/images/cassie.jpg" alt="Cassie" style={{ width: "100%", display: "block" }} />
                  <div style={{ padding: 12 }}>
                    <div style={{ fontWeight: 900, fontSize: 16, color: "rgba(255,255,255,.95)" }}>Cassie</div>
                    <div className="subtle" style={{ marginTop: 4 }}>
                      Co-host • Semper Fi Country
                    </div>
                  </div>
                </div>
              </div>

              <div className="subtle" style={{ marginTop: 14 }}>
                Image files expected in: <strong>/public/images/</strong>
                <br />
                • reveille-and-coffee.jpg • buck.jpg • cassie.jpg
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
