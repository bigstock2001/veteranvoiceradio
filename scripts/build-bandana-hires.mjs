import fs from "node:fs/promises";
import path from "node:path";

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

const publicDir = path.resolve("public/shop");
await fs.mkdir(publicDir, { recursive: true });
await fs.writeFile(path.join(publicDir, "bandana-hires.webp"), bytes);

const generatedDir = path.resolve("app/api/shop/bandana");
await fs.mkdir(generatedDir, { recursive: true });
await fs.writeFile(
  path.join(generatedDir, "generated.js"),
  `const BANDANA_BASE64 = ${JSON.stringify(base64)};\nexport default BANDANA_BASE64;\n`,
  "utf8"
);

console.log(`Built high-resolution bandana image (${bytes.length} bytes)`);
