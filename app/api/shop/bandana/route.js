import BANDANA_BASE64 from "./generated";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const bytes = Buffer.from(BANDANA_BASE64, "base64");
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
