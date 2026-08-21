import fs from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const chunkFiles = [
  "app/shop/hires/bandana0.js",
  "app/shop/hires/bandana1.js",
  "app/shop/hires/bandana2.js",
  "app/shop/hires/bandana3.js",
  "app/shop/hires/bandana4.js",
];

export async function GET() {
  try {
    let base64 = "";

    for (const relativePath of chunkFiles) {
      const source = await fs.readFile(path.join(process.cwd(), relativePath), "utf8");
      const match = source.match(/const chunk = "([A-Za-z0-9+/=]+)";/);
      if (!match) {
        throw new Error(`Unable to read ${relativePath}`);
      }
      base64 += match[1];
    }

    const bytes = Buffer.from(base64, "base64");
    const validWebp =
      bytes.subarray(0, 4).toString("ascii") === "RIFF" &&
      bytes.subarray(8, 12).toString("ascii") === "WEBP";

    if (!validWebp) {
      throw new Error("Bandana image data is not a valid WebP");
    }

    return new Response(bytes, {
      status: 200,
      headers: {
        "Content-Type": "image/webp",
        "Content-Length": String(bytes.length),
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("Bandana image endpoint failed:", error);
    return new Response("Bandana image unavailable", {
      status: 500,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }
}
