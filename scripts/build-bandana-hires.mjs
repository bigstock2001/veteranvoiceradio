import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourcePath = path.resolve("public/shop/vvr-shop-bandanas.webp");
const bytes = await fs.readFile(sourcePath);

const metadata = await sharp(bytes).metadata();
if (!metadata.width || !metadata.height) {
  throw new Error("Could not read bandana source dimensions.");
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
    .resize({
      width: cellWidth * 4,
      height: cellHeight * 4,
      kernel: sharp.kernel.lanczos3,
    })
    .sharpen({ sigma: 1.1, m1: 0.8, m2: 2.2 })
    .webp({ quality: 96, smartSubsample: true })
    .toFile(path.join(outDir, `${code}.webp`));
}

console.log(
  `Built enhanced B01-B17 static bandana files from working ${metadata.width}x${metadata.height} source.`
);
