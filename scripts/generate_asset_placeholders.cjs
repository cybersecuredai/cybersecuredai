#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const roots = ['client', 'src'];
const files = [];

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir)) {
    const p = path.join(dir, entry);
    const st = fs.statSync(p);
    if (st.isDirectory()) walk(p);
    else if (/\.(t|j)sx?$|\.(html|css)$/i.test(entry)) files.push(p);
  }
}

roots.forEach(walk);

const outRoot = path.resolve('attached_assets');
let created = 0;

for (const file of files) {
  const txt = fs.readFileSync(file, 'utf8');
  const re1 = /attached_assets\/[A-Za-z0-9_\-\/\.\s]+\.(png|jpe?g|webp|gif|svg)/g;
  const re2 = /@assets\/[A-Za-z0-9_\-\/\.\s]+\.(png|jpe?g|webp|gif|svg)/g;
  const matches = new Set();
  for (const m of txt.matchAll(re1)) matches.add(m[0]);
  for (const m of txt.matchAll(re2)) matches.add('attached_assets/' + m[0].replace(/^@assets\//, ''));
  for (const rel of matches) {
    const out = path.resolve(rel);
    const dir = path.dirname(out);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    if (!fs.existsSync(out)) {
      fs.writeFileSync(out, Buffer.from('placeholder'));
      created++;
    }
  }
}

console.log(`[placeholders] ensured ${created} assets under ${outRoot}`);
