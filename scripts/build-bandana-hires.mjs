import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const chunks = [];
for (let n = 0; n < 5; n += 1) {
  const file = path.resolve(`app/shop/hires/bandana${n}.js`);
  const source = await fs.readFile(file, "utf8");
  const match = source.match(/const chunk = "([A-Za-z0-9+/=]+)";/);
  if (!match) throw new Error(`Could not read bandana image chunk: ${file}`);
  chunks.push(match[1]);
  console.log(`bandana${n}: ${match[1].length} base64 chars`);
}

// bandana1 was truncated by 175 base64 characters when originally saved.
// Restore the missing span with neutral base64 data only as a decoder-recovery test.
const repairedBase64 = chunks[0] + chunks[1] + "A".repeat(175) + chunks[2] + chunks[3] + chunks[4];
const bytes = Buffer.from(repairedBase64, "base64");
console.log(`Repaired candidate bytes: ${bytes.length}`);

if (
  bytes.subarray(0, 4).toString("ascii") !== "RIFF" ||
  bytes.subarray(8, 12).toString("ascii") !== "WEBP"
) {
  throw new Error("Candidate is not a WebP container.");
}

const metadata = await sharp(bytes, { failOn: "none" }).metadata();
console.log("Recovered metadata:", metadata);

const outDir = path.resolve("public/shop/bandana-test");
await fs.mkdir(outDir, { recursive: true });
await sharp(bytes, { failOn: "none" }).webp({ quality: 95 }).toFile(path.join(outDir, "recovered.webp"));

console.log("Recovered test image written.");
