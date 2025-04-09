import fs from 'fs';
const animName = process.argv[2];
const template = `
.${animName} {
  animation: ${animName} 1s ease-in-out forwards;
}
@keyframes ${animName} {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}`;
fs.writeFileSync(`./css/animations/${animName}.css`, template);
console.log(`✔ Animation "${animName}" generated!`);
