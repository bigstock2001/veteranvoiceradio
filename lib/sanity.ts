// lib/sanity.ts
type SanityEnv = {
  projectId: string;
  dataset: string;
  apiVersion: string; // "YYYY-MM-DD"
  useCdn: boolean;
};

function getSanityEnv(): SanityEnv | null {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "";

  // Keep this stable unless you have a reason to change it.
  // This is the API version date (not "v2024-01-01", just "2024-01-01")
  const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

  if (!projectId || !dataset) return null;

  return {
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
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
    const res = await fetch(url.toString(), {
      cache: "no-store",
      // Later if you want caching:
      // next: { revalidate: 60 },
    });

    if (!res.ok) return { ok: false, data: null };

    const json = (await res.json()) as { result?: T };
    return { ok: true, data: (json.result ?? null) as T | null };
  } catch {
    return { ok: false, data: null };
  }
}
