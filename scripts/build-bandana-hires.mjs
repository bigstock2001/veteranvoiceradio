import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const chunkFiles = [0, 1, 2, 3, 4].map((n) =>
  path.resolve(`app/shop/hires/bandana${n}.js`)
);

let base64 = "";
for (const file of chunkFiles) {
  const source = await fs.readFile(file, "utf8");
  const match = source.match(/const chunk = "([A-Za-z0-9+/=]+)";/);
  if (!match) throw new Error(`Could not read bandana image chunk: ${file}`);
  base64 += match[1];
}

const bytes = Buffer.from(base64, "base64");
if (
  bytes.subarray(0, 4).toString("ascii") !== "RIFF" ||
  bytes.subarray(8, 12).toString("ascii") !== "WEBP"
) {
  throw new Error("Bandana high-resolution source did not decode to a valid WebP image.");
}

const image = sharp(bytes);
const metadata = await image.metadata();
if (!metadata.width || !metadata.height) {
  throw new Error("Could not read high-resolution bandana dimensions.");
}

const columns = 4;
const rows = 5;
const totalDesigns = 17;
const cellWidth = Math.floor(metadata.width / columns);
const cellHeight = Math.floor(metadata.height / rows);

const outDir = path.resolve("public/shop/bandana");
await fs.mkdir(outDir, { recursive: true });

for (let index = 0; index < totalDesigns; index += 1) {
  const col = index % columns;
  const row = Math.floor(index / columns);
  const code = `B${String(index + 1).padStart(2, "0")}`;

  await sharp(bytes)
    .extract({
      left: col * cellWidth,
      top: row * cellHeight,
      width: cellWidth,
      height: cellHeight,
    })
    .webp({ quality: 92 })
    .toFile(path.join(outDir, `${code}.webp`));
}

console.log(
  `Built B01-B17 as individual bandana files from ${metadata.width}x${metadata.height} source.`
);
