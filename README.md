# MY — AI Engineer Portfolio

A responsive personal portfolio showcasing my work across artificial intelligence, machine learning, generative AI, retrieval-augmented generation, agentic systems, and computer vision.

The project combines a Next.js application with a standalone template implementation. It includes a project gallery, professional experience, education, technical skills, certificates, and contact information.

## Highlights

- Responsive desktop and mobile layouts
- Featured AI and engineering projects
- Experience and education sections
- Grouped technical skills
- Certificate and badge gallery with original file links
- Framer Motion transitions and scroll reveals
- Search metadata and favicon assets

## Featured Projects

| Project | Focus | Repository |
|---|---|---|
| FactoryCopilot | Industrial AI and agentic workflows | [View repository](https://github.com/vishwa-vv11/FactoryCopilot) |
| ATLAS-NLP Workbench | NLP concepts and language representations | [View repository](https://github.com/vishwa-vv11/NLP-Atlas) |
| SwachhVision | Computer vision and civic technology | [View repository](https://github.com/vishwa-vv11/SwachhVision) |

## Technology Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Portfolio Sections

| Route | Description |
|---|---|
| `/` | Hero introduction and engineering focus |
| `/about` | Personal summary and engineering approach |
| `/projects` | Applied AI projects and repository links |
| `/experience` | Professional experience and education |
| `/skills` | Technical skill groups |
| `/certificates` | Credential previews and original documents |
| `/contact` | Email, GitHub, and LinkedIn links |

## Getting Started

### Requirements

- Node.js 20.9 or later
- npm
- Git

### Installation

```bash
npm install
```

### Local Development

```bash
npm run dev
```

Open `http://localhost:3000`.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```text
src/
├── app/
│   ├── about/
│   ├── certificates/
│   ├── contact/
│   ├── experience/
│   ├── projects/
│   ├── skills/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
└── lib/
    └── data.ts

public/
├── certificates/
├── favicon assets
└── portfolio.html
```

Profile details, projects, experience, education, skills, and credentials are maintained in `src/lib/data.ts`.

## Deployment

The project is ready for deployment on Vercel:

1. Push the repository to GitHub.
2. Import the repository in Vercel.
3. Keep the detected Next.js framework settings.
4. Deploy the project.
5. Assign or configure a stable Vercel domain in project settings.

No environment variables or private API keys are required.

## Contact

- Email: [vishwarathinavel3126@gmail.com](mailto:vishwarathinavel3126@gmail.com)
- LinkedIn: [linkedin.com/in/vishvv111](https://www.linkedin.com/in/vishvv111/)
- GitHub: [github.com/vishwa-vv11](https://github.com/vishwa-vv11)

## License

This is a personal portfolio project. Certificate assets remain the property of their respective issuers and are included for portfolio display.
