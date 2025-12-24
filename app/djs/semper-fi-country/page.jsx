export default function SemperFiCountryDjsPage() {
  return (
    <main className="main">
      <div className="container" style={{ paddingTop: 28, paddingBottom: 40 }}>
        <h1 style={{ margin: 0, fontSize: 34, fontWeight: 800 }}>
          Semper Fi Country DJs
        </h1>
        <p className="subtle" style={{ marginTop: 10 }}>
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
                <h2 style={{ margin: 0, fontSize: 26, fontWeight: 800 }}>
                  Reveille &amp; Coffee
                </h2>
                <div className="subtle" style={{ marginTop: 6 }}>
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
                  fontWeight: 700,
                  border: "1px solid rgba(255,255,255,0.14)",
                  background: "rgba(255,255,255,0.06)",
                }}
              >
                View Show Page →
              </a>
            </div>

            <p style={{ marginTop: 14, lineHeight: 1.55, maxWidth: 900 }}>
              Start your morning with Buck &amp; Cassie—real conversation, veteran
              perspective, and grounded energy to ease into the day. Reveille &amp;
              Coffee blends military culture with everyday life: familiar voices,
              zero fluff, and plenty of coffee.
            </p>

            {/* Hosts */}
            <div style={{ marginTop: 18 }}>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800 }}>
                Hosts
              </h3>

              <div
                style={{
                  marginTop: 12,
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
                  <img
                    src="/images/buck.jpg"
                    alt="Buck"
                    style={{ width: "100%", display: "block" }}
                  />
                  <div style={{ padding: 12 }}>
                    <div style={{ fontWeight: 800, fontSize: 16 }}>Buck</div>
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
                  <img
                    src="/images/cassie.jpg"
                    alt="Cassie"
                    style={{ width: "100%", display: "block" }}
                  />
                  <div style={{ padding: 12 }}>
                    <div style={{ fontWeight: 800, fontSize: 16 }}>Cassie</div>
                    <div className="subtle" style={{ marginTop: 4 }}>
                      Co-host • Semper Fi Country
                    </div>
                  </div>
                </div>
              </div>

              <div className="subtle" style={{ marginTop: 12 }}>
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
