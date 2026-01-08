// app/sanity-check/page.tsx
import { getSanityEnv, sanityFetch } from "@/lib/sanity";

export const dynamic = "force-dynamic";

export default async function SanityCheckPage() {
  const env = getSanityEnv();

  const [totalRes, typesRes, artistRes] = await Promise.all([
    sanityFetch<number>(`count(*[])`),
    sanityFetch<string[]>(`array::unique(*[]. _type)`),
    sanityFetch<number>(`count(*[_type=="artist"])`),
  ]);

  const sampleRes = await sanityFetch<any>(
    `*[_type=="artist"][0]{_id,name,slug,stations,featured}`
  );

  const out = {
    env,
    ok: Boolean(env) && totalRes.ok && typesRes.ok,
    totalDocs: totalRes.ok ? totalRes.data : null,
    types: typesRes.ok ? typesRes.data : null,
    artistCount: artistRes.ok ? artistRes.data : null,
    sample: sampleRes.ok ? sampleRes.data : null,
  };

  return (
    <div className="container pagePad">
      <h1 className="h2" style={{ marginBottom: 12 }}>
        Sanity Check
      </h1>
      <pre className="note" style={{ whiteSpace: "pre-wrap" }}>
        {JSON.stringify(out, null, 2)}
      </pre>
    </div>
  );
}
