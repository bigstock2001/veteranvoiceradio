// app/stations/semper-fi-country/page.tsx

import StationPageShell from "@/components/StationPageShell";
import { getStation } from "@/lib/stations";

export default function SemperFiCountryPage() {
  const station = getStation("semper-fi-country");
  if (!station) return null;

  return <StationPageShell station={station} />;
}
