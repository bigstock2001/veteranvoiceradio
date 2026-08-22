import fs from "node:fs/promises";
import path from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import ffmpegPath from "ffmpeg-static";
import sharp from "sharp";

const execFileAsync = promisify(execFile);
const chunks = [];
for (let n = 0; n < 5; n += 1) {
  const file = path.resolve(`app/shop/hires/bandana${n}.js`);
  const source = await fs.readFile(file, "utf8");
  const match = source.match(/const chunk = "([A-Za-z0-9+/=]+)";/);
  if (!match) throw new Error(`Could not read bandana image chunk: ${file}`);
  chunks.push(match[1]);
  console.log(`bandana${n}: ${match[1].length} base64 chars`);
}

const corruptBytes = Buffer.from(chunks.join(""), "base64");
const workDir = path.resolve(".bandana-recovery");
const outDir = path.resolve("public/shop/bandana-test");
await fs.mkdir(workDir, { recursive: true });
await fs.mkdir(outDir, { recursive: true });

const inputPath = path.join(workDir, "bandana-corrupt.webp");
const recoveredPng = path.join(outDir, "recovered.png");
await fs.writeFile(inputPath, corruptBytes);
console.log(`Corrupt source bytes: ${corruptBytes.length}`);
console.log(`ffmpeg: ${ffmpegPath}`);

try {
  const { stdout, stderr } = await execFileAsync(ffmpegPath, [
    "-y",
    "-v", "warning",
    "-err_detect", "ignore_err",
    "-fflags", "+discardcorrupt",
    "-i", inputPath,
    "-frames:v", "1",
    recoveredPng,
  ], { maxBuffer: 10 * 1024 * 1024 });
  if (stdout) console.log(stdout);
  if (stderr) console.log(stderr);
} catch (error) {
  console.log("ffmpeg recovery failed:", error.stderr || error.message);
  throw error;
}

const metadata = await sharp(recoveredPng).metadata();
console.log("Recovered PNG metadata:", metadata);
console.log("Recovered test image written.");
