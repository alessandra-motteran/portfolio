import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));

// Lazy Google GenAI initialization helper
let aiClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
}

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', hasGeminiKey: !!getGenAI() });
});

// API: Generate tailored project interview & deep-dive questions
app.post('/api/generate-questions', async (req, res) => {
  try {
    const { projectTitle, anonymousSector, role, summary, existingQAs } = req.body;
    const ai = getGenAI();

    if (!ai) {
      // Return high-quality deterministic expert design management questions
      return res.json({
        questions: [
          `In this ${anonymousSector} project, how did you balance rigorous safety/regulatory constraints with modern intuitive UX?`,
          `As ${role}, how did you orchestrate alignment between engineering leads, product stakeholders, and shop-floor operators?`,
          `What trade-offs were negotiated regarding hardware legacy limits vs. software modernizations?`,
          `How was the design system or UI kit architected to scale across future machinery lines or brand variants?`,
          `Which qualitative research methods yielded the breakthrough insights that shaped the final delivery?`
        ],
        source: 'curated'
      });
    }

    const prompt = `You are a Senior Design Executive and Design Recruiter interviewing Alessandra Motteran, an experienced B2B Design Manager & Innovation Designer.
She is presenting an anonymous, NDA-compliant project:
- Title: "${projectTitle}"
- Anonymous Industry Sector: "${anonymousSector}"
- Role: "${role}"
- Summary: "${summary}"
- Previous Context / Notes: "${JSON.stringify(existingQAs || [])}"

TASK:
Generate 4-5 incisive, senior-level design leadership & product strategy questions to probe deeper into this project.
CRITICAL CONSTRAINT: NEVER ask for or mention real company names. Strictly maintain NDA confidentiality. Focus on methodology, human-centered design, stakeholder alignment, DesignOps, technical friction, budget/burn-rate efficiency, and quantifiable business outcomes.

Return a JSON array of strings: ["question 1", "question 2", "question 3", "question 4"]`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      }
    });

    const text = response.text || '[]';
    const parsed = JSON.parse(text);
    return res.json({ questions: parsed, source: 'gemini' });
  } catch (error) {
    console.error('Error generating questions:', error);
    return res.status(500).json({
      error: 'Failed to generate questions',
      questions: [
        'How did you structure the discovery phase given the confidential industrial domain?',
        'What were the most challenging stakeholder negotiations regarding scope vs. burn rate?',
        'How did this project influence the team’s ongoing DesignOps and component reuse?'
      ],
      source: 'fallback'
    });
  }
});

// API: NDA Sanitizer & Case Study Enrichment Engine
app.post('/api/sanitize-and-enrich', async (req, res) => {
  try {
    const { rawText, projectTitle, clientHint } = req.body;
    const ai = getGenAI();

    if (!ai) {
      // Local rule-based sanitization
      let sanitized = (rawText || '')
        .replace(/Tetra Pak|Tetrapak/gi, '[Global Packaging & Processing Leader]')
        .replace(/Voilàp|Voilap/gi, '[International Industrial Machinery Group]')
        .replace(/Elumatec/gi, '[Precision Cutting Machinery Subsidiary]')
        .replace(/Motiqa/gi, '[Fenestration Software Specialist]')
        .replace(/Clevertech/gi, '[Automated End-of-Line Robotics Leader]')
        .replace(/Ing Ferrari|Ferrari/gi, '[Industrial Engineering & HVAC Provider]')
        .replace(/Datalogic/gi, '[Global Optical Sensor & Auto-ID Provider]')
        .replace(/NYUAD|NYU Abu Dhabi/gi, '[International Academic Institution - UAE]')
        .replace(/NiEW/gi, '[Strategic Innovation Design Practice]');

      return res.json({
        sanitizedSummary: sanitized,
        keyInsights: [
          'Sanitized proprietary brand entities into industry archetype descriptors.',
          'Preserved human-centered research metrics and operational workflows.',
          'Highlighted cross-functional team alignment and delivery efficiency.'
        ],
        source: 'local-rule-engine'
      });
    }

    const prompt = `You are a specialized Enterprise IP & NDA Anonymization Specialist for Design Portfolios.
A Design Manager wants to add notes, slide transcripts, or delivery achievements from a confidential client engagement.

Input text:
"""
${rawText}
"""
Target project: "${projectTitle || 'Confidential Project'}"
Client/Entity hint to obscure: "${clientHint || 'Any corporate brand names'}"

INSTRUCTIONS:
1. STRICT NDA SCRUBBING: Remove any real corporate client names, proprietary brand trademarks, internal confidential server addresses, or identifying personnel names. Replace them with professional archetype descriptors (e.g. "Global Aseptic Packaging Leader", "Tier-1 Industrial Automation OEM", "Academic Institution in the UAE").
2. Synthesize the text into high-impact case study enrichment points:
   - "anonymizedContext": A polished 2-3 sentence overview of the challenge.
   - "keyMethods": 3-4 specific UX/HCD/Leadership methods used.
   - "deliverables": Key artifacts (e.g. Design system components, HMI specifications, Journey blueprints, Figma tokens).
   - "measurableImpact": Tangible business or operational outcomes (e.g. efficiency, burn-rate control, stakeholder trust).

Respond in valid JSON with schema:
{
  "anonymizedContext": "...",
  "keyMethods": ["...", "..."],
  "deliverables": ["...", "..."],
  "measurableImpact": ["...", "..."]
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      }
    });

    const parsed = JSON.parse(response.text || '{}');
    return res.json({ ...parsed, source: 'gemini' });
  } catch (error) {
    console.error('Error sanitizing notes:', error);
    return res.status(500).json({
      error: 'Sanitization process encountered an error',
      source: 'fallback'
    });
  }
});

async function start() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Portfolio server listening on http://0.0.0.0:${PORT}`);
  });
}

start();
