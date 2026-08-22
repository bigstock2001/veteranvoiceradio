import fs from "node:fs/promises";
import path from "node:path";

export async function GET() {
  const file = path.join(process.cwd(), "public", "shop", "vvr-shop-bandanas.webp");
  const bytes = await fs.readFile(file);
  return new Response(bytes.toString("base64"), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}
