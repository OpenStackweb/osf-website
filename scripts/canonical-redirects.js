// Run after Gatsby/Netlify generates redirects so host rules precede SPA rewrites.
const fs = require('fs');
const file = 'public/_redirects';
const rules = ['https://openinfra.dev/* https://openinfra.org/:splat 301!',
  'http://openinfra.dev/* https://openinfra.org/:splat 301!'];
const existing = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
fs.writeFileSync(file, rules.join('\n') + '\n' + existing.split('\n').filter(line => !rules.includes(line)).join('\n'));
