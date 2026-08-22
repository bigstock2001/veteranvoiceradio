import fs from "node:fs/promises";
import path from "node:path";

const file = path.join(process.cwd(), "public", "shop", "vvr-shop-bandanas.webp");
const bytes = await fs.readFile(file);
const b64 = bytes.toString("base64");
const chunkSize = 4000;
console.log(`BANDANA_BYTES=${bytes.length}`);
console.log(`BANDANA_BASE64_LENGTH=${b64.length}`);
for (let i = 0, n = 0; i < b64.length; i += chunkSize, n += 1) {
  console.log(`BANDANA_CHUNK_${n}=${b64.slice(i, i + chunkSize)}`);
}
