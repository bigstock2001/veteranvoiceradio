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

  totalDocs?: number | null;
  types?: string[] | null;

  artistCount?: number | null;
  artistSample?: any;

  djCount?: number | null;
  djSample?: any;
};

export default async function SanityCheckPage() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? null;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? null;
  const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-01-01";

  const groq = `{
    "totalDocs": count(*[]),
    "types": array::unique(*[defined(_type)]._type) | order(@ asc),

    "artistCount": count(*[_type=="artist"]),
    "artistSample": *[_type=="artist"][0]{ _id, _type, name, slug, stations, featured },

    "djCount": count(*[_type=="dj"]),
    "djSample": *[_type=="dj"][0]{ _id, _type, name, slug, stationSlug, showName }
  }`;

  const res = await sanityFetch<any>(groq);

  const out: CheckData = {
    env: { projectId, dataset, apiVersion },
    ok: res.ok,
    status: (res as any).status ?? null,
    error: (res as any).error ?? null,

    totalDocs: res.data?.totalDocs ?? null,
    types: res.data?.types ?? null,

    artistCount: res.data?.artistCount ?? null,
    artistSample: res.data?.artistSample ?? null,

    djCount: res.data?.djCount ?? null,
    djSample: res.data?.djSample ?? null,
  };

  return (
    <div className="container pagePad">
      <section className="section">
        <div className="sectionTitle">Sanity Check</div>

        <pre
          style={{
            marginTop: 12,
            padding: 12,
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.15)",
            background: "rgba(255,255,255,0.06)",
            overflow: "auto",
            maxHeight: 650,
          }}
        >
          {JSON.stringify(out, null, 2)}
        </pre>

        <div className="note" style={{ marginTop: 12 }}>
          Key signals:
          <br />• If totalDocs is low/0 → wrong dataset (even if name says production)
          <br />• If djCount &gt; 0 but artistCount = 0 → artists not in this dataset OR drafts only
          <br />• If “types” list doesn’t include “artist” → there are no published artist docs here
        </div>
      </section>
    </div>
  );
}
