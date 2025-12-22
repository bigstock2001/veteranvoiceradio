// components/StationPageShell.tsx

import type { Station } from "@/lib/stations";
import StationSpeakerHero from "@/components/StationSpeakerHero";

export default function StationPageShell({ station }: { station: Station }) {
  return (
    <div>
      {/* This is the hero that contains the speakers + console */}
      <StationSpeakerHero station={station} />

      <div className="container pagePad">
        <section className="section">
          <div className="sectionTitle">Today’s Lineup (placeholder)</div>
          <div className="lineupGrid">
            <div className="lineupCard">
              <div className="lineupTime">Now</div>
              <div className="lineupShow">Live Programming</div>
              <div className="subtle">Next: connect to your real schedule.</div>
            </div>
            <div className="lineupCard">
              <div className="lineupTime">Next</div>
              <div className="lineupShow">Featured Block</div>
              <div className="subtle">Show cards driven by data.</div>
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
              <div className="subtle">Clean form that routes to email/Sheet.</div>
            </div>
            <div className="featureCard">
              <div className="featureTitle">Submit Music</div>
              <div className="subtle">Artist submission workflow.</div>
            </div>
            <div className="featureCard">
              <div className="featureTitle">Support the Mission</div>
              <div className="subtle">Sponsors + donate page built for trust.</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
