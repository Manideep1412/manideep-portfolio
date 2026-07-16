# Manideep Salla — Developer Portfolio

Personal portfolio site showcasing full-stack engineering projects, skills, and experience. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

**Live site:** [your-domain.vercel.app](#) _(update after deploying)_

---

## Tech Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion v11 |
| Icons | Lucide React |
| Fonts | Inter + JetBrains Mono |
| Deployment | Vercel |

---

## Featured Projects

### 1. AI Support Agent
RAG-powered customer support chatbot with semantic vector search and real-time streaming.

- **Stack:** Next.js 15 · .NET 9 · MongoDB Atlas · OpenAI GPT-4o mini
- **Highlights:** Vector embeddings, SSE streaming, knowledge base admin, session history
- **Repo:** [github.com/manideep-salla/ai-support-agent](#)

### 2. React Client Hub
Real-time customer support platform with live chat and conversation management.

- **Stack:** React 18 · Vite · .NET 9 · SignalR · SQLite
- **Highlights:** WebSocket real-time messaging, multi-conversation inbox, contact management
- **Repo:** [github.com/manideep-salla/react-client-hub](#)

### 3. Angular IAM Dashboard
Enterprise Identity & Access Management dashboard with role-based access control.

- **Stack:** Angular 19 · .NET 9 · SQL Server · JWT
- **Highlights:** User/role management, audit logs, JWT auth, enterprise UI patterns
- **Repo:** [github.com/manideep-salla/angular-enterprise-dashboard](#)

---

## Local Development

### Prerequisites
- Node.js 18.17+
- npm

### Run locally

```bash
git clone https://github.com/manideep-salla/manideep-portfolio.git
cd manideep-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm start
```

---

## Deploy to Vercel

### Option 1 — GitHub + Vercel Dashboard (recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Click **Deploy** — Vercel auto-detects Next.js
5. Live in ~60 seconds

### Option 2 — Vercel CLI

```bash
npm i -g vercel
vercel --prod
```

No environment variables are required for the portfolio itself.

---

## Project Structure

```
web_portfolio/
├── app/
│   ├── layout.tsx              # Root layout + SEO metadata
│   ├── page.tsx                # Main page (composes all sections)
│   └── globals.css             # Global styles + CSS variables
├── components/
│   ├── Navbar.tsx              # Sticky nav with scroll tracking
│   ├── Hero.tsx                # Hero section
│   ├── About.tsx               # Bio + highlights
│   ├── Skills.tsx              # Skill bars by category
│   ├── Projects.tsx            # Featured project cards
│   ├── BackendEngineering.tsx  # .NET expertise showcase
│   ├── Architecture.tsx        # System architecture diagram
│   ├── Experience.tsx          # Career timeline
│   ├── DemoApps.tsx            # Live demo cards
│   ├── Contact.tsx             # Contact form
│   └── Footer.tsx              # Footer
├── lib/
│   └── utils.ts                # cn() utility
├── public/
│   └── resume.pdf              # Resume (replace with yours)
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## Updating Content

All content is in the component files. Key places to update:

| What | Where |
|---|---|
| Name, headline, stats | `components/Hero.tsx` |
| Bio, quick facts | `components/About.tsx` |
| Skills and levels | `components/Skills.tsx` |
| Project cards | `components/Projects.tsx` |
| Work history | `components/Experience.tsx` |
| Demo app links | `components/DemoApps.tsx` |
| Email, LinkedIn, GitHub | `components/Contact.tsx` + `components/Footer.tsx` |
| SEO title + description | `app/layout.tsx` |

### Contact form
The form in `Contact.tsx` simulates sending. To make it functional, wire it to:
- **[Formspree](https://formspree.io)** — free, no backend needed
- **[Resend](https://resend.com)** — via a Next.js API route
