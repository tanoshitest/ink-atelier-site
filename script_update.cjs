const fs = require('fs');
let code = fs.readFileSync('src/data/portfolio.ts', 'utf8');

const targetIds = [47, 2, 51, 97, 96, 57];
let extracted = [];

// Extract lines
const lines = code.split('\n');
const newLines = lines.filter(line => {
  let match = line.match(/\{ id: (\d+),/);
  if (match && targetIds.includes(parseInt(match[1]))) {
    // preserve order defined in targetIds
    const index = targetIds.indexOf(parseInt(match[1]));
    extracted[index] = line.trim();
    return false; // remove from original
  }
  return true;
});

// Create new block
const newBlock = `  // FEATURED IN "ALL" (Top 6 explicitly ordered)
  ${extracted.join('\n  ')}
`;

// Insert the newBlock after 'export const portfolioItems: [...'
const insertIdx = newLines.findIndex(l => l.includes('export const portfolioItems'));
newLines.splice(insertIdx + 1, 0, newBlock);

// Insert bird image into Blackwork section
const blackworkIdx = newLines.findIndex(l => l.includes('bo-anh-19'));
newLines.splice(blackworkIdx + 1, 0, '  { id: 101, src: "/media/bird_arrow.webp", title: "Blackwork & Fine Line #20", artist: "DOUCES Studio", style: "Blackwork & Fine Line", aspect: "3/4" },');

fs.writeFileSync('src/data/portfolio.ts', newLines.join('\n'));
console.log('Update complete.');
