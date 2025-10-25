# AI SEO Platform - Next.js Frontend

## Overview

A production-ready Next.js 15 frontend for an AI-powered SEO automation and digital marketing platform designed for B2B software companies and IT service providers.

## Tech Stack

- **Framework**: Next.js 15 (React 18)
- **Styling**: Tailwind CSS with dark mode support
- **State Management**: Zustand
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **TypeScript**: Full type safety
- **Font**: Inter (Google Fonts)

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── dashboard/         # Dashboard page
│   ├── google-business/   # Google Business Profile management
│   ├── content-hub/       # AI content creation
│   ├── marketing-suite/   # Digital marketing tools
│   ├── seo-tools/         # Local SEO optimization
│   ├── reviews/           # Review management
│   ├── analytics/         # Analytics and reporting
│   ├── workflow/          # Human approval workflow
│   ├── clients/           # Client management
│   ├── settings/          # AI configuration
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page (redirects to dashboard)
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── AppLayout.tsx      # Main application layout
│   ├── Sidebar.tsx        # Navigation sidebar
│   ├── TopNavbar.tsx      # Top navigation bar
│   ├── ThemeProvider.tsx  # Dark/light theme context
│   ├── Card.tsx           # Card component
│   ├── MetricCard.tsx     # Metric display card
│   └── Button.tsx         # Button component
├── data/                  # Demo data and constants
│   └── demoData.ts        # Sample data for all features
├── public/                # Static assets
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies
```

## Features

### 1. Dashboard
- Overview KPIs and metrics
- Recent activity feed
- Performance progress bars
- Business growth indicators

### 2. Google Business Profile
- Profile status verification
- Google Posts creator
- Photo manager
- Performance analytics

### 3. Content Hub
- AI content generator
- Keyword optimizer with SEO scoring
- Brand voice settings
- Content library with status tracking

### 4. Marketing Suite
- Social media post creator (Instagram, Facebook, LinkedIn, Twitter)
- Email marketing content generator
- Video script templates
- Hashtag research
- Campaign templates

### 5. SEO Tools
- Keyword research with volume and difficulty metrics
- Competitor analysis dashboard
- Maps optimization tracking
- Local ranking indicators

### 6. Review Management
- Multi-platform review monitoring (Google, Facebook)
- AI-powered response generator
- Reputation score tracking
- Response rate analytics

### 7. Analytics & Reports
- Traffic overview
- Top performing keywords
- Social media engagement metrics
- PDF report generation

### 8. Human Approval Workflow
- Content queue management
- Split-screen editor (AI vs Human versions)
- Quality scoring system (5-star rating)
- Approval/rejection actions
- Approval history tracking

### 9. Client Management
- Client directory with profile completeness
- Team management with role-based access
- Billing plans overview
- Access controls

### 10. AI Settings
- AI model selection (GPT-4, Claude, Gemini)
- Customizable prompt templates
- Brand guidelines configuration
- Integration management (social platforms, Google Business)
- Quality thresholds and automation rules

## Design Principles

- **Clean, Corporate Aesthetic**: Inspired by Notion, Linear, and Vercel
- **Monochrome Palette**: Soft grayscale with electric blue (#0EA5E9) accents
- **Dark/Light Themes**: Seamless theme switching with localStorage persistence
- **Professional Typography**: Inter font family
- **Accessibility**: ARIA labels, keyboard navigation, visible focus states
- **Responsive**: Desktop, tablet, and mobile layouts
- **Micro-interactions**: Hover effects, smooth transitions, contextual tooltips

## Development

### Running Locally

```bash
npm install
npm run dev
```

The development server runs on `http://0.0.0.0:5000`

### Building for Production

```bash
npm run build
npm start
```

## Configuration

### Replit Environment
- The application is configured to run on port 5000 with host `0.0.0.0`
- Cross-origin requests are allowed for Replit's proxy environment
- Cache-Control headers are set to `no-cache` to prevent stale content in the iframe preview

### Dark Mode
- Theme preference is stored in localStorage
- System preference is detected on first visit
- Toggle available in the top navigation bar

## Demo Data

The application includes comprehensive demo data for:
- Content generation metrics
- Customer reviews (positive and negative)
- Client profiles with industry data
- SEO keywords with search volumes
- Marketing campaigns with performance data
- Social media post templates

All data is located in `data/demoData.ts` and can be easily customized.

## Deployment

The application is configured for autoscale deployment:
- Build command: `npm run build`
- Start command: `npm start`
- Deployment target: Autoscale (for stateless web applications)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - Free to adapt for your SaaS UI needs.

## Notes

- All features use realistic placeholder data
- No backend integration required - pure frontend demo
- Ready for API integration when needed
- Designed for B2B software and IT service companies
