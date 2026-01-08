import { sanityFetch } from "@/lib/sanity";

type SanityArtist = {
  _id?: string;
  name?: string;
  slug?: { current?: string };
  stations?: unknown;
  featured?: boolean;
};

export const metadata = {
  title: "Sanity Check",
};

export default async function SanityCheckPage() {
  const groq = `{
    "artists": *[_type=="artist"] | order(_updatedAt desc)[0...10]{
      _id, name, slug, stations, featured
    },
    "count": count(*[_type=="artist"])
  }`;

  const res = await sanityFetch<{ artists: SanityArtist[]; count: number }>(groq);

  return (
    <div className="container pagePad">
      <section className="section">
        <div className="sectionTitle">Sanity Check</div>

        <div className="note" style={{ marginTop: 12 }}>
          ok: <strong>{String(res.ok)}</strong>
        </div>

        <pre
          style={{
            marginTop: 12,
            padding: 12,
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.15)",
            background: "rgba(255,255,255,0.06)",
            overflow: "auto",
            maxHeight: 520,
          }}
        >
          {JSON.stringify(res.data, null, 2)}
        </pre>

        <div className="note" style={{ marginTop: 12 }}>
          If <strong>ok=false</strong> or <strong>count=0</strong> but Studio has artists, your Vercel env vars are not pointing at the same Sanity project/dataset (or the values include quotes).
        </div>
      </section>
    </div>
  );
}
