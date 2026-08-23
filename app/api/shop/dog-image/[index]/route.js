import sharp from "sharp";
import b0 from "../../../../shop/hires/bandana0";
import b1 from "../../../../shop/hires/bandana1";
import b2 from "../../../../shop/hires/bandana2";
import b3 from "../../../../shop/hires/bandana3";
import b4 from "../../../../shop/hires/bandana4";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(_request, { params }) {
  const { index } = await params;
  const n = Number(index);
  if (!Number.isInteger(n) || n < 1 || n > 10) {
    return new Response("Image index must be 1 through 10", { status: 400 });
  }

  const source = Buffer.from(b0 + b1 + b2 + b3 + b4, "base64");
  const meta = await sharp(source).metadata();
  if (!meta.width || !meta.height) {
    return new Response("Unable to read source image", { status: 500 });
  }

  const columns = 2;
  const rows = 5;
  const cellWidth = Math.floor(meta.width / columns);
  const cellHeight = Math.floor(meta.height / rows);
  const zero = n - 1;
  const col = zero % columns;
  const row = Math.floor(zero / columns);

  const left = col * cellWidth;
  const top = row * cellHeight;
  const width = col === columns - 1 ? meta.width - left : cellWidth;
  const height = row === rows - 1 ? meta.height - top : cellHeight;

  const png = await sharp(source)
    .extract({ left, top, width, height })
    .png({ quality: 100 })
    .toBuffer();

  return new Response(png, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Content-Disposition": `inline; filename=dog-bandana-${String(n).padStart(2, "0")}.png`,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
