# // ...existing code...
# AI SEO — Next‑Gen SaaS Frontend (Next.js + Tailwind)

AI SEO is a production‑ready Next.js 15 frontend prototype for an AI‑powered digital marketing and local SEO automation platform tailored for:

- Software solution companies (Tally, Marg, custom ERP/accounting)
- IT training & computer coaching institutes (programming, certification, accounting)

The UI is crafted to feel human‑designed and professional (Notion / Linear / Vercel inspiration) with a monochrome palette and an elegant accent color. Light and dark themes are supported and persisted.

---

## Key Principles
- Clean, corporate aesthetic: minimal typography (Inter / Poppins), balanced whitespace, clear hierarchy.
- Monochrome palette with an accent (electric blue / teal).
- No generic "AI website" gimmicks (no gradient blobs / neon glows).
- Accessibility first: keyboard navigation, ARIA, visible focus states.
- Responsive: desktop → tablet → mobile.
- Subtle micro‑interactions: hover states, smooth Framer Motion transitions, contextual tooltips.

---

## Feature Overview (each is a dedicated page / route)
1. Dashboard — Overview KPIs, metrics, growth charts, welcome banner.
2. Google Business Profile Management — profile status, posts creator, review responses, photo manager, analytics, Q&A.
3. Content Creation Hub — AI content generator, keyword optimizer, brand voice, content calendar, library.
4. Digital Marketing Suite — social post creator, ad & email copy, video script templates, hashtag research, campaign templates.
5. Local SEO Tools — keyword research, competitor analysis, maps optimization, local schema generator.
6. Review Management Center — review monitoring, AI response generation, reputation score, review request automation.
7. Analytics & Reports — mock JSON metrics, SEO / social / leads tabs, PDF report export.
8. Human Approval Workflow — content queue, editor split view, approval actions, quality scoring.
9. Client Management — multi‑location portal, onboarding, roles, billing plans.
10. AI Settings & Configuration — model selection, prompt templates, brand guidelines, integrations, automation rules.

---

## UI Layout
Top-level layout:
<AppLayout>
  <Sidebar />   // collapsible nav (icons + labels)
  <TopNavbar /> // search, notifications, profile, dark/light toggle
  <MainContainer>
    <Routes />  // each feature listed above as a page
  </MainContainer>
</AppLayout>

Sidebar nav keys:
- 📊 Dashboard
- 🏢 Google Business
- ✍️ Content Hub
- 📱 Marketing Suite
- 🔍 SEO Tools
- ⭐ Reviews
- 📈 Analytics
- ✅ Approval Workflow
- 👥 Client Management
- ⚙️ Settings

Industry-specific widgets:
- Training centers: batch calendar, testimonials, badges, faculty cards.
- Software vendors: version timeline, product comparison, demo request forms, support dashboard.

---

## Tech Stack
- Framework: Next.js 15 (React 18 compatible)
- Styling: Tailwind CSS + handcrafted components (no heavy UI kits)
- Dark/Light toggle: Tailwind dark mode + localStorage preference
- Fonts: Inter or Poppins (Google Fonts)
- Icons: lucide-react / Heroicons
- State: Zustand or React Context API
- Animations: Framer Motion
- Code organization: modular, semantic React components (Card, Sidebar, Header, MetricTile, Drawer, Modal, Table)

---

## Project Structure (recommended)
- app/ or src/app/ — Next.js routes & pages
- components/ — reusable UI components (Card, Sidebar, Header, MetricTile, Drawer, Modal, Table)
- styles/ — Tailwind config, global styles
- data/ — industry demo data (courses, products, reviews, sample metrics JSON)
- lib/ — utilities, API clients, integrations (Google Business, social APIs)
- hooks/ — reusable hooks (theme, keyboard navigation)
- public/ — images and assets

---

## Demo Data & Examples
Included placeholder examples for both verticals:
- Courses: "Advanced Excel", "Python Bootcamp", "Full‑Stack Web"
- Software: "Tally Prime", "Marg ERP", "Custom ERP Suite"
- Google post examples, social captions, ad copies, review templates.

Sample messages:
- "🎓 New Python Batch Starting Dec 1st! Limited 20 Seats. Enroll Now!"
- "💼 Tally Prime - Complete business management solution with GST compliance."

---

## Getting Started (development)
1. Install dependencies
```sh
pnpm install
# or
npm install
```
2. Run dev server
```sh
pnpm dev
# or
npm run dev
```
3. Build for production
```sh
pnpm build
# or
npm run build
```

Note: The project uses Tailwind JIT and stores the user's theme choice in localStorage.

---

## Theming & Accessibility
- Light / dark support via Tailwind's dark mode classes.
- Keyboard focus states and ARIA attributes across components.
- Contrast checks for monochrome palette with accent highlights.

---

## Design & UX Notes
- Typography: Inter (scale tokens, consistent weights).
- Layout spacing: tokenized gaps/margins for consistent rhythm.
- Micro‑interactions: Framer Motion for page transitions & subtle component anims.
- All components are designed to feel handcrafted (avoid repetitive UI patterns).

---

## Contribution
- Follow the branching strategy and component conventions.
- Keep Tailwind classes modular and extract repeated patterns.
- Add demo JSON under data/ for any new feature scaffolding.

---

## License
- MIT — feel free to adapt the frontend for your SaaS UI needs.

---

For the current workspace entry point see [README.md](README.md).
// ...existing code...