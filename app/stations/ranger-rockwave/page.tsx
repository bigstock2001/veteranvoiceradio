// app/stations/ranger-rockwave/page.tsx

import StationPageShell from "@/components/StationPageShell";
import { getStation } from "@/lib/stations";

export default function RangerRockwavePage() {
  const station = getStation("ranger-rockwave");
  if (!station) return null;

  return <StationPageShell station={station} />;
}
