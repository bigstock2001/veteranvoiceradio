export default function ReveilleAndCoffeeShowPage() {
  return (
    <main className="main">
      <div className="container" style={{ paddingTop: 28, paddingBottom: 44 }}>
        {/* Hero */}
        <section
          style={{
            borderRadius: 18,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <img
            src="/images/reveille-and-coffee.jpg"
            alt="Reveille & Coffee show artwork"
            style={{ width: "100%", display: "block" }}
          />

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
                <div className="subtle" style={{ marginBottom: 8 }}>
                  Semper Fi Country
                </div>
                <h1 style={{ margin: 0, fontSize: 34, fontWeight: 900 }}>
                  Reveille &amp; Coffee
                </h1>
                <div className="subtle" style={{ marginTop: 8 }}>
                  Weekdays • 6:00 AM – 9:00 AM
                </div>
              </div>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a
                  href="/djs/semper-fi-country"
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
                  ← Back to Semper Fi DJs
                </a>

                <a
                  href="/stations/semper-fi-country"
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
                  Go to Station →
                </a>
              </div>
            </div>

            <p style={{ marginTop: 14, lineHeight: 1.6, maxWidth: 950 }}>
              Start your morning with Buck &amp; Cassie—real conversation, veteran
              perspective, and grounded energy to ease into the day. Reveille &amp;
              Coffee blends military culture with everyday life: familiar voices,
              zero fluff, and plenty of coffee.
            </p>
          </div>
        </section>

        {/* Hosts */}
        <section style={{ marginTop: 22 }}>
          <h2 style={{ margin: 0, fontSize: 22, fontWeight: 900 }}>
            Meet the Hosts
          </h2>
          <p className="subtle" style={{ marginTop: 8 }}>
            The voices behind the morning routine.
          </p>

          <div
            style={{
              marginTop: 14,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
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
              <div style={{ padding: 14 }}>
                <div style={{ fontWeight: 900, fontSize: 18 }}>Buck</div>
                <div className="subtle" style={{ marginTop: 6 }}>
                  Co-host • Semper Fi Country
                </div>
                <p style={{ marginTop: 10, lineHeight: 1.55 }}>
                  Buck brings a steady, grounded vibe to the morning—veteran
                  perspective, real talk, and the kind of humor that keeps the
                  day moving.
                </p>
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
              <div style={{ padding: 14 }}>
                <div style={{ fontWeight: 900, fontSize: 18 }}>Cassie</div>
                <div className="subtle" style={{ marginTop: 6 }}>
                  Co-host • Semper Fi Country
                </div>
                <p style={{ marginTop: 10, lineHeight: 1.55 }}>
                  Cassie adds warmth and quick wit—keeping it upbeat, relatable,
                  and honest while still respecting the mission behind the
                  station.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Show Details */}
        <section style={{ marginTop: 22 }}>
          <h2 style={{ margin: 0, fontSize: 22, fontWeight: 900 }}>
            Show Details
          </h2>

          <div
            style={{
              marginTop: 12,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 14,
            }}
          >
            <div
              style={{
                borderRadius: 16,
                padding: 14,
                border: "1px solid rgba(255,255,255,0.10)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <div className="subtle">Time Slot</div>
              <div style={{ marginTop: 8, fontWeight: 900, fontSize: 16 }}>
                Weekdays • 6:00 AM – 9:00 AM
              </div>
            </div>

            <div
              style={{
                borderRadius: 16,
                padding: 14,
                border: "1px solid rgba(255,255,255,0.10)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <div className="subtle">Station</div>
              <div style={{ marginTop: 8, fontWeight: 900, fontSize: 16 }}>
                Semper Fi Country
              </div>
            </div>

            <div
              style={{
                borderRadius: 16,
                padding: 14,
                border: "1px solid rgba(255,255,255,0.10)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <div className="subtle">Format</div>
              <div style={{ marginTop: 8, fontWeight: 900, fontSize: 16 }}>
                Conversational • Veteran Lifestyle • Morning Routine
              </div>
            </div>
          </div>

          <div className="subtle" style={{ marginTop: 12 }}>
            Image files expected in: <strong>/public/images/</strong>
            <br />
            • reveille-and-coffee.jpg • buck.jpg • cassie.jpg
          </div>
        </section>
      </div>
    </main>
  );
}
