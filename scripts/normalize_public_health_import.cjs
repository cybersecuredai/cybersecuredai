#!/usr/bin/env node
const fs = require('fs');

const path = 'client/src/pages/PublicHealthDashboard.tsx';
try {
  if (!fs.existsSync(path)) {
    console.log('PublicHealthDashboard.tsx not found, skipping normalization');
    process.exit(0);
  }
  let s = fs.readFileSync(path, 'utf8');
  const schemaBlock = s.match(/import\s+\{([\s\S]*?)\}\s*from\s+['"]@shared\/schema['"];?/m);
  if (schemaBlock) {
    const names = schemaBlock[1]
      .split(',')
      .map(x => x.trim())
      .filter(Boolean)
      .join(', ');
    const replacement = `import type { ${names} } from '@shared/schema';`;
    s = s.replace(/import\s+\{([\s\S]*?)\}\s*from\s+['"]@shared\/schema['"];?/m, replacement);
    fs.writeFileSync(path, s);
    console.log('Normalized @shared/schema import to type-only in PublicHealthDashboard.tsx');
  } else {
    const orphan = s.match(/import\s+\{([\s\S]*?)\}\s*;?\s*\n/m);
    if (orphan && s.includes('@shared/schema')) {
      const names = orphan[1]
        .split(',')
        .map(x => x.trim())
        .filter(Boolean)
        .join(', ');
      const fixed = `import type { ${names} } from '@shared/schema';\n`;
      s = s.replace(/import\s+\{([\s\S]*?)\}\s*;?\s*\n/m, fixed);
      fs.writeFileSync(path, s);
      console.log('Repaired malformed import block in PublicHealthDashboard.tsx');
    } else {
      console.log('No schema import normalization needed');
    }
  }
} catch (e) {
  console.log('Normalization step encountered an issue:', e?.message || e);
  process.exit(0);
}
