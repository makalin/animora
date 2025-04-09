import fs from 'fs';
const name = process.argv[2];
const theme = `:root.${name} {
  --bg: #000000;
  --text: #ffffff;
}`;
fs.writeFileSync(`./themes/${name}.css`, theme);
console.log(`✔ Theme "${name}" created!`);
