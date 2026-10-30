#!/usr/bin/env bash
# AI Diagram API – cURL example
# Usage: CHARTQUERY_API_KEY=your-key bash diagram_ai.sh
set -euo pipefail

curl -sS -G "https://api.chartquery.com/v1/diagram/ai" \
  -H "x-api-key: ${CHARTQUERY_API_KEY}" \
  --data-urlencode 'prompt=Sequence diagram of a user logging in through an API gateway to an auth service' \
  --data-urlencode output_format=png \
  -o ai-diagram.png

echo "Saved ai-diagram.png"
