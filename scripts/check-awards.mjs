#!/usr/bin/env node
// Assert the Awards page markup served by a running server (default :4300).
// Usage: node scripts/check-awards.mjs [baseUrl]
const base = process.argv[2] ?? "http://localhost:4300";
const raw = await fetch(`${base}/awards`).then((r) => r.text());
const text = raw.replace(/<!--.*?-->/gs, "").replace(/<[^>]+>/g, "");
const entry =
  raw.match(/<li>(?:(?!<li>).)*?Catalan Math Kangaroo.*?<\/ul><\/li>/s)?.[0] ?? "";

const checks = [
  ['"Silver Pin" is the award title', /<h3[^>]*>Silver Pin</.test(entry)],
  ['"Catalan Math Kangaroo" appears', text.includes("Catalan Math Kangaroo")],
  ['"(Cangur, SCM)" does not appear', !text.includes("(Cangur, SCM)")],
  ['"top four of the cohort" appears 0 times', !text.includes("top four of the cohort")],
  ['"First Place in Catalonia" appears 0 times', !/first place in catalonia/i.test(text)],
  [
    "description reads as specified",
    text.includes(
      "Best performer overall of the Catalan edition of the Kangaroo mathematics contest.",
    ),
  ],
  ['"2020" still appears on the entry', entry.includes("2020")],
];

let failed = 0;
for (const [name, ok] of checks) {
  if (!ok) failed++;
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}`);
}
process.exit(failed ? 1 : 0);
