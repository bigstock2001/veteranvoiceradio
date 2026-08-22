import fs from "node:fs/promises";
import path from "node:path";

const chunks=[];
for(let n=0;n<5;n++){
  const source=await fs.readFile(path.resolve(`app/shop/hires/bandana${n}.js`),"utf8");
  const m=source.match(/const chunk = "([A-Za-z0-9+/=]+)";/);
  chunks.push(m[1]);
}
const b=Buffer.from(chunks.join(""),"base64");
console.log('ACTUAL',b.length);
console.log('RIFF_DECLARED',b.readUInt32LE(4)+8);
console.log('WEBP',b.subarray(8,12).toString('ascii'));
let p=12;
while(p+8<=b.length){
 const type=b.subarray(p,p+4).toString('ascii');
 const size=b.readUInt32LE(p+4);
 const dataStart=p+8;
 const dataEnd=dataStart+size;
 console.log('CHUNK',type,'offset',p,'size',size,'dataEnd',dataEnd,'available',Math.max(0,b.length-dataStart),'missing',Math.max(0,dataEnd-b.length));
 p=dataEnd+(size%2);
 if(dataEnd>b.length) break;
}
