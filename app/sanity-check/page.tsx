import { sanityFetch } from "@/lib/sanity";

export const metadata = { title: "Sanity Check" };

type CheckData = {
  env: {
    projectId: string | null;
    dataset: string | null;
    apiVersion: string | null;
  };
  ok: boolean;
  status?: number | null;
  error?: string | null;
  count?: number | null;
  sample?: any;
};

export default async function SanityCheckPage() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? null;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? null;
  const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-01-01";

  // Simple count query
  const groq = `{
    "count": count(*[_type=="artist"]),
    "sample": *[_type=="artist"][0]{ _id, name, slug, stations, featured }
  }`;

  const res = await sanityFetch<{ count: number; sample: any }>(groq);

  const out: CheckData = {
    env: { projectId, dataset, apiVersion },
    ok: res.ok,
    status: (res as any).status ?? null,
    error: (res as any).error ?? null,
    count: res.data?.count ?? null,
    sample: res.data?.sample ?? null,
  };

  return (
    <div className="container pagePad">
      <section className="section">
        <div className="sectionTitle">Sanity Check</div>
        <div className="note" style={{ marginTop: 12 }}>
          Open this page on production and it will show EXACTLY which Sanity env values the deployed site is using.
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
          {JSON.stringify(out, null, 2)}
        </pre>

        <div className="note" style={{ marginTop: 12 }}>
          What we want to see: ok=true AND count &gt; 0. If ok=false, you’ll also see status/error.
        </div>
      </section>
    </div>
  );
}
