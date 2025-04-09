import fs from 'fs';
const name = process.argv[2];
const content = `export default function ${name}Plugin() {
  const style = document.createElement('style');
  style.innerHTML = \`
    .${name} {
      /* ${name} plugin styles */
    }
  \`;
  document.head.appendChild(style);
}`;
fs.writeFileSync(`./plugins/${name}.js`, content);
console.log(`✔ Plugin "${name}" added!`);
