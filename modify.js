const fs = require('fs');

let content = fs.readFileSync('./components/sections/pricing-section.tsx', 'utf8');

const regexToExtractCard = /(<div\s+key=\{plan\.id\}(?:.|\n)*?) {12}\)\n {10}\}\)\}/;
let match = content.match(regexToExtractCard);
if (match) {
  let cardJsx = match[1];
  
  let renderFunction = "  const renderPlanCard = (plan: any) => {\n" +
  "    const isExpanded = expandedPlan === plan.id;\n" +
  "    return (\n" +
  cardJsx + "\n" +
  "    );\n" +
  "  };\n\n  return (";

  content = content.replace('  return (', renderFunction);

  let gridRegex = /\{\/\* 4-Column Card Grid \*\/\}[\s\S]*?\)\n          \}\)\}\n        <\/div>/m;
  let replacementGrid = "{/* 3-Column Personal Card Grid */}\n" +
  '        <div className="grid gap-6 md:grid-cols-3">\n' +
  '          {plans.filter(p => p.id !== "group").map(renderPlanCard)}\n' +
  "        </div>\n\n" +
  "        {/* Group Plan Section */}\n" +
  '        <div className="mt-24">\n' +
  '          <div className="mb-10 text-center">\n' +
  '            <h3 className="mb-2 text-2xl font-bold tracking-tight md:text-3xl">\n' +
  '              {"그룹 코칭 플랜"}\n' +
  "            </h3>\n" +
  '            <p className="mt-2 text-base font-light opacity-60">\n' +
  '              {"소규모 그룹으로 밀도 있게 진행되는 실전 코칭"}\n' +
  "            </p>\n" +
  "          </div>\n" +
  '          <div className="mx-auto max-w-sm md:max-w-md lg:max-w-lg">\n' +
  '            {plans.filter(p => p.id === "group").map(renderPlanCard)}\n' +
  "          </div>\n" +
  "        </div>";

  content = content.replace(gridRegex, replacementGrid);
  fs.writeFileSync('./components/sections/pricing-section.tsx', content);
  console.log("Success");
} else {
  console.log("Regex mismatched!");
}