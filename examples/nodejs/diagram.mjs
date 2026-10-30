// Diagram Render API – Node.js example (Node 18+, ES module)
// Usage: CHARTQUERY_API_KEY=your-key node diagram.mjs
import { writeFile } from "node:fs/promises";

const headers = { "x-api-key": process.env.CHARTQUERY_API_KEY, "Content-Type": "application/json" };

const params = new URLSearchParams({
  "type": "mermaid",
  "query": "graph TD\n  A[Start] --> B{OK?}\n  B -->|yes| C[End]\n  B -->|no| D[Error]",
  "format": "png",
});
const response = await fetch(`https://api.chartquery.com/v1/diagram?${params}`, { headers });
if (!response.ok) {
  console.error(`HTTP ${response.status}: ${await response.text()}`);
  process.exit(1);
}

await writeFile("diagram.png", Buffer.from(await response.arrayBuffer()));
console.log("Saved diagram.png");
