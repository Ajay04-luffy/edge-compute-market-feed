// Validates a market feed before publishing. Usage: node tools/validate-feed.mjs feed/market-feed.json
import { readFileSync } from 'node:fs';
const f = JSON.parse(readFileSync(process.argv[2] || 'feed/market-feed.json', 'utf8'));
const errs = [], warns = [];
if (!Array.isArray(f.cpus) || !f.cpus.length) errs.push('cpus[] missing or empty');
for (const c of f.cpus || []) {
  for (const k of ['model', 'mt', 'st', 'threads']) if (c[k] == null || c[k] === '') errs.push(`${c.model || c.id}: missing ${k}`);
  if (!c.sources || !c.sources.length) warns.push(`${c.model}: no sources`);
  if (c.benchEstimated) warns.push(`${c.model}: benchmark estimated`);
}
for (const m of f.memory || []) if (!m.type || !m.family || !m.speedMTs || !Array.isArray(m.moduleSizesGB)) errs.push(`memory ${m.type}: needs type, family, speedMTs, moduleSizesGB`);
for (const s of f.storage || []) if (!s.type || !Array.isArray(s.capacitiesGB)) errs.push(`storage ${s.type}: needs type, capacitiesGB`);
if (!f.feedVersion) errs.push('feedVersion missing');
console.log(`${f.cpus?.length || 0} CPUs, ${f.memory?.length || 0} memory, ${f.storage?.length || 0} storage · version ${f.feedVersion}`);
warns.forEach(w => console.log('warn:', w));
if (errs.length) { errs.forEach(e => console.error('ERROR:', e)); process.exit(1); }
console.log('Feed OK');
