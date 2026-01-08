// lib/sanity.ts
type SanityEnv = {
  projectId: string;
  dataset: string;
  apiVersion: string;
  useCdn: boolean;
};

// MUST match your Sanity Vision version (your screenshot shows v2026-01-08)
export const SANITY_API_VERSION = "2026-01-08";

export function getSanityEnv(): SanityEnv | null {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "";

  if (!projectId || !dataset) return null;

  return {
    projectId,
    dataset,
    apiVersion: SANITY_API_VERSION,
    useCdn: false,
  };
}

export async function sanityFetch<T>(
  groq: string,
  params?: Record<string, string | number | boolean>
): Promise<{ ok: true; data: T | null } | { ok: false; data: null }> {
  const env = getSanityEnv();
  if (!env) return { ok: false, data: null };

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
    if (!res.ok) return { ok: false, data: null };

    const json = (await res.json()) as { result?: T };
    return { ok: true, data: (json.result ?? null) as T | null };
  } catch {
    return { ok: false, data: null };
  }
}
