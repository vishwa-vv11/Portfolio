# Vishwa — AI Engineer Portfolio

A responsive multi-page personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS and Framer Motion.

## Requirements
- Node.js 20.9+ (Node 22 LTS recommended)
- npm
- Git

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Production build
```bash
npm run build
npm start
```

## Deploy to Vercel
1. Create a GitHub repository named `vishwa-ai-portfolio`.
2. Push this project:
   ```bash
   git init
   git add .
   git commit -m "Build Vishwa AI Engineer portfolio"
   git branch -M main
   git remote add origin https://github.com/vishwa-vv11/vishwa-ai-portfolio.git
   git push -u origin main
   ```
3. Sign in at https://vercel.com with GitHub.
4. Select **Add New → Project**, import `vishwa-ai-portfolio`.
5. Keep the detected Next.js settings and click **Deploy**.
6. Future pushes to `main` automatically trigger production deployments.

## Personalise before publishing
- Contact email: `vishwarathinavel3126@gmail.com`.
- Verify your LinkedIn URL and repository URLs.
- Add your latest resume as `public/resume.pdf` to activate the Resume links.
- Review the project descriptions and only retain technologies/features you can confidently explain in an interview.
- Optional: add project screenshots to `public/projects/` and update the `image` fields in `src/lib/data.ts`.

## Pages
- `/` Home
- `/about` About
- `/projects` Projects
- `/experience` Experience
- `/skills` Skills
- `/contact` Contact

This is a static portfolio front end. It does not expose private APIs or require environment variables.
