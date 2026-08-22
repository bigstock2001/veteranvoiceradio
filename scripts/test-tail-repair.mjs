import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const chunks=[];
for(let n=0;n<5;n++){
  const source=await fs.readFile(path.resolve(`app/shop/hires/bandana${n}.js`),"utf8");
  const m=source.match(/const chunk = "([A-Za-z0-9+/=]+)";/);
  chunks.push(m[1]);
}
const b=Buffer.from(chunks.join(""),"base64");
const repaired=Buffer.from(b);
repaired.writeUInt32LE(repaired.length-8,4);
repaired.writeUInt32LE(repaired.length-20,16);
console.log('PATCHED_RIFF',repaired.readUInt32LE(4)+8,'PATCHED_VP8',repaired.readUInt32LE(16));
try {
 const meta=await sharp(repaired,{failOn:'none'}).metadata();
 console.log('META',meta);
 const out=path.resolve('public/shop/bandana-test/tail-repaired.png');
 await fs.mkdir(path.dirname(out),{recursive:true});
 await sharp(repaired,{failOn:'none'}).png().toFile(out);
 console.log('DECODE_OK',out);
} catch(e){
 console.error('DECODE_FAIL',e.message);
 process.exit(1);
}
