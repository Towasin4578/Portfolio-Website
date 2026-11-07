import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.json());

// Initialize GoogleGenAI server-side with telemetry header
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

const SYSTEM_INSTRUCTION = `You are the polite, intelligent, and context-aware AI Assistant for Ashraf Siddiki Towasin (also known as Towasin), an undergraduate student, programmer, and aspiring software engineer from Bangladesh.

Your role is to warmly assist portfolio visitors, answer questions about Towasin's background, education, technical skills, services, projects, and contact details politely and accurately in their preferred language (English or Bengali).

Key Portfolio Facts About Ashraf Siddiki Towasin:
1. Identity:
   - Full Name: Ashraf Siddiki Towasin
   - Short Name: Towasin
   - Location: Bangladesh
   - Current Status: Undergraduate Student in Electrical & Electronic Engineering (EEE), Programmer, Aspiring Software Engineer.
   - Passion: Solving math problems, algorithm design, coding for the web, learning new technologies every day.
   - Learning Journey: Began learning web development on January 10, 2023. Believes "it's never too late to start a journey."

2. Education Journey:
   - Step 01: High School Life at Gouripur SA High School (2018 — 2023). First exposure to algorithmic thinking, coding, and science clubs.
   - Step 02: College Life at Dr. Mosharraf Foundation Degree College (2023 — 2025). Built core programming foundations in C, data structures, and HTML/CSS.
   - Step 03: University Life at Barishal Engineering College (2025 — Present). Studying Electrical & Electronic Engineering (EEE), mastering Python, hardware-software integration, and advancing toward software engineering.

3. Technical & Core Skills:
   - C Programming: Foundation in procedural logic, pointers, memory allocation, and data structures.
   - Python: Clean syntax, scripting, automation, engineering computations, and modern backend logic.
   - HTML & CSS: Modern responsive design, semantic layouts, CSS animations, and UI/UX styling.
   - Web Development: Full-stack concepts, JavaScript, modern frameworks, and responsive interactive web experiences.
   - Mathematics: Favorite way to spend time; problem-solving, discrete mathematics, and analytical reasoning.
   - Competitive Programming: Algorithmic challenges, code optimization, and logic building.
   - YouTube SEO: Professional optimization, keyword research, titles, descriptions, and tags to help videos rank and find target audiences.
   - Team Collaboration: Git workflow, communication, open to collaborative open-source and hackathon projects.

4. Services & Offerings:
   - YouTube SEO optimization gig on Fiverr (link: https://www.fiverr.com/s/7jjoqyL).
   - Open for internships, collaborative software projects, and learning opportunities.

5. Projects:
   - Currently building initial production projects and practicing every single day.
   - GitHub profile: https://github.com/Towasin4578

6. Contact Details:
   - WhatsApp: +8801971124566 (https://wa.me/8801971124566)
   - Email: towasin344533@gmail.com
   - Fiverr: https://www.fiverr.com/s/7jjoqyL
   - GitHub: https://github.com/Towasin4578

Guidelines for Answering:
- Respond in the language used by the visitor (English or Bengali). If the visitor writes in Bengali or Banglish, reply warmly in clean Bengali. If in English, reply in friendly, professional English.
- Be humble, encouraging, respectful, and articulate.
- If asked about personal matters not in the portfolio, politely explain that you represent Ashraf's technical portfolio and invite them to connect with him directly via WhatsApp or email.
- Format responses cleanly with brief bullet points or short paragraphs when helpful.`;

// Multi-turn Gemini Chat API Route
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, userMessage } = req.body;

    if (!userMessage && (!messages || messages.length === 0)) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const currentPrompt = userMessage || (messages && messages[messages.length - 1]?.content) || '';

    // Convert chat history into Gemini contents format for one fast roundtrip
    const contents: any[] = [];
    if (Array.isArray(messages) && messages.length > 1) {
      for (let i = 0; i < messages.length - 1; i++) {
        const msg = messages[i];
        if (msg.content) {
          contents.push({
            role: msg.role === 'user' ? 'user' : 'model',
            parts: [{ text: msg.content }],
          });
        }
      }
    }
    contents.push({
      role: 'user',
      parts: [{ text: currentPrompt }],
    });

    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Gemini API request timed out')), 7000)
    );

    const generatePromise = ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    const response = (await Promise.race([generatePromise, timeoutPromise])) as any;
    const reply = response?.text || "Hello! I am Ashraf's portfolio assistant. How can I help you today?";
    return res.json({ reply });
  } catch (error: any) {
    console.error('Error in /api/chat:', error);
    const fallbackMessage =
      "I am Ashraf's portfolio assistant! Ashraf Siddiki Towasin is an undergraduate student in Electrical & Electronic Engineering at Barishal Engineering College and an aspiring software engineer. You can connect with him directly at towasin344533@gmail.com or on WhatsApp at +8801971124566!";
    return res.status(200).json({
      reply: fallbackMessage,
    });
  }
});

// Setup Vite development server middleware or production static files
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening at http://0.0.0.0:${port}`);
  });
}

startServer();
