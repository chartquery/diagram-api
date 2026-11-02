#!/usr/bin/env bash
# Diagram Render API – cURL example
# Usage: CHARTQUERY_API_KEY=your-key bash diagram.sh
set -euo pipefail

curl -sS --fail-with-body -G "https://api.chartquery.com/v1/diagram" \
  -H "x-api-key: ${CHARTQUERY_API_KEY}" \
  --data-urlencode type=mermaid \
  --data-urlencode 'query=graph TD
  A[Start] --> B{OK?}
  B -->|yes| C[End]
  B -->|no| D[Error]' \
  --data-urlencode format=png \
  -o diagram.png

echo "Saved diagram.png"
