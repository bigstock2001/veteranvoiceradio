import chunk0 from "../../../shop/dog-sprite/chunk0";
import chunk1 from "../../../shop/dog-sprite/chunk1";
import chunk2 from "../../../shop/dog-sprite/chunk2";
import chunk3 from "../../../shop/dog-sprite/chunk3";
import chunk4 from "../../../shop/dog-sprite/chunk4";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const bytes = Buffer.from(chunk0 + chunk1 + chunk2 + chunk3 + chunk4, "base64");

  return new Response(bytes, {
    status: 200,
    headers: {
      "Content-Type": "image/webp",
      "Content-Length": String(bytes.length),
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
