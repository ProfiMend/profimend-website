import fs from "node:fs";
import path from "node:path";
import OpenAI from "openai";

const instruction = process.env.INSTRUCTION;
const apiKey = process.env.OPENAI_API_KEY;

if (!instruction) throw new Error("Missing INSTRUCTION input.");
if (!apiKey) throw new Error("Missing OPENAI_API_KEY secret.");

const statePath = path.join(process.cwd(), "docs", "PROFIMEND_STATE.md");
if (!fs.existsSync(statePath)) {
  throw new Error(`State file not found: ${statePath}`);
}

const current = fs.readFileSync(statePath, "utf8");

const client = new OpenAI({ apiKey });

const resp = await client.responses.create({
  model: "gpt-4.1-mini",
  input: [
    {
      role: "system",
      content: [
        "You are the ProfiMend PM editor.",
        "Update the markdown file deterministically.",
        "Rules:",
        "- Keep valid markdown.",
        "- Do NOT delete Decision Log history.",
        "- If adding a backlog item: add under 'Backlog (Top 10)'.",
        "- If adding a decision: add a new D- entry under 'Decision Log (Canonical)'.",
        "- Keep changes minimal and aligned to the instruction.",
        "Return ONLY the full updated markdown file. No commentary."
      ].join("\n")
    },
    {
      role: "user",
      content: `INSTRUCTION:\n${instruction}\n\nCURRENT FILE:\n${current}`
    }
  ]
});

const updated = (resp.output_text || "").trim();
if (!updated) throw new Error("OpenAI returned empty output.");

fs.writeFileSync(statePath, updated + "\n", "utf8");
console.log("Updated docs/PROFIMEND_STATE.md");
