// AI Diagram API – Node.js example (Node 18+, ES module)
// Usage: CHARTQUERY_API_KEY=your-key node diagram_ai.mjs
import { writeFile } from "node:fs/promises";

const headers = { "x-api-key": process.env.CHARTQUERY_API_KEY, "Content-Type": "application/json" };

const params = new URLSearchParams({
  "prompt": "Sequence diagram of a user logging in through an API gateway to an auth service",
  "output_format": "png",
});
const response = await fetch(`https://api.chartquery.com/v1/diagram/ai?${params}`, { headers });
if (!response.ok) {
  console.error(`HTTP ${response.status}: ${await response.text()}`);
  process.exit(1);
}

await writeFile("ai-diagram.png", Buffer.from(await response.arrayBuffer()));
console.log("Saved ai-diagram.png");
