// app/stations/[slug]/page.tsx

import { notFound } from "next/navigation";
import { getStation } from "@/lib/stations";
import StationHeroPlayer from "@/components/StationHeroPlayer";

type StationPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function StationPage({ params }: StationPageProps) {
  const { slug } = await params;

  const station = getStation(slug);
  if (!station) return notFound();

  return (
    <div>
      <section
        className="stationHero"
        style={{
          ["--accent" as any]: station.theme.accent,
          ["--accent2" as any]: station.theme.accent2,
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,.70), rgba(0,0,0,.50)), url(${station.theme.heroImage})`,
        }}
      >
        <div className="container heroInner">
          <div className="heroLeft">
            <div className="kicker">Station</div>
            <h1 className="h1">{station.name}</h1>
            <p className="lead">{station.description}</p>

            <div className="heroQuick">
              <div className="quickCard">
                <div className="quickTitle">Built for listening</div>
                <div className="subtle">
                  Player stays visible and never gets buried.
                </div>
              </div>
              <div className="quickCard">
                <div className="quickTitle">Professional + fun</div>
                <div className="subtle">Same layout, different station vibe.</div>
              </div>
            </div>
          </div>

          <div className="heroRight">
            <StationHeroPlayer station={station} />
          </div>
        </div>
      </section>

      <div className="container pagePad">
        <section className="section">
          <div className="sectionTitle">Today’s Lineup (placeholder)</div>
          <div className="lineupGrid">
            <div className="lineupCard">
              <div className="lineupTime">Now</div>
              <div className="lineupShow">Live Programming</div>
              <div className="subtle">
                We’ll connect this to your real schedule next.
              </div>
            </div>
            <div className="lineupCard">
              <div className="lineupTime">Next</div>
              <div className="lineupShow">Featured Show Block</div>
              <div className="subtle">
                Cards will be driven by data (file or CMS).
              </div>
            </div>
            <div className="lineupCard">
              <div className="lineupTime">Later</div>
              <div className="lineupShow">Community Spotlight</div>
              <div className="subtle">Artists, shows, and veteran stories.</div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="sectionTitle">Engagement (placeholder)</div>
          <div className="featureGrid">
            <div className="featureCard">
              <div className="featureTitle">Request a Song</div>
              <div className="subtle">
                We’ll add a clean form that routes to email/Sheet.
              </div>
            </div>
            <div className="featureCard">
              <div className="featureTitle">Submit Music</div>
              <div className="subtle">
                Artist submission workflow—simple and professional.
              </div>
            </div>
            <div className="featureCard">
              <div className="featureTitle">Support the Mission</div>
              <div className="subtle">
                Sponsors + donate page designed for trust.
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
