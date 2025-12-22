// lib/sanity.ts
type SanityEnv = {
  projectId: string;
  dataset: string;
  apiVersion: string;
  useCdn: boolean;
};

function getSanityEnv(): SanityEnv | null {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "";
  const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

  if (!projectId || !dataset) return null;

  return {
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
  };
}

export async function sanityFetch<T>(groq: string, params?: Record<string, string | number | boolean>) {
  const env = getSanityEnv();
  if (!env) return { ok: false as const, data: null as T | null };

  const base = `https://${env.projectId}.api.sanity.io/v${env.apiVersion}/data/query/${env.dataset}`;

  const url = new URL(base);
  url.searchParams.set("query", groq);

  if (params) {
    for (const [k, v] of Object.entries(params)) {
      url.searchParams.set(`$${k}`, String(v));
    }
  }

  try {
    const res = await fetch(url.toString(), { cache: "no-store" });
    if (!res.ok) return { ok: false as const, data: null as T | null };

    const json = (await res.json()) as { result?: T };
    return { ok: true as const, data: (json.result ?? null) as T | null };
  } catch {
    return { ok: false as const, data: null as T | null };
  }
}
