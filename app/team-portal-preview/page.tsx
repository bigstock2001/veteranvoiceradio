import PortalPreview from "@/components/team-portal/PortalPreview";

export const metadata = {
  title: "VVR Team Portal — Design Preview",
  robots: { index: false, follow: false },
};

/** Public design preview only: no member data, documents, or privileged actions. */
export default function TeamPortalPreviewPage() {
  return <div style={{ minHeight: "100vh", background: "#0b1525" }}><PortalPreview /></div>;
}
