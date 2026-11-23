import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { spawn } from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const screenshotsDir = path.join(rootDir, "screenshots");

const THEMES = ["default", "mint", "ocean", "lavender"];
const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 900, isMobile: false },
  { name: "mobile", width: 390, height: 844, isMobile: true },
];

const TARGETS = [
  { id: "home-full", path: "/portfolio.html", type: "page" },
  { id: "home-hero", path: "/portfolio.html", selector: ".hero", type: "section" },
  { id: "home-about", path: "/portfolio.html#about", selector: "#about", type: "section" },
  { id: "home-projects", path: "/portfolio.html#projects", selector: "#projects", type: "section" },
  { id: "home-experience", path: "/portfolio.html#experience", selector: "#experience", type: "section" },
  { id: "home-skills", path: "/portfolio.html#skills", selector: "#skills", type: "section" },
  { id: "home-certificates", path: "/portfolio.html#certificates", selector: "#certificates", type: "section" },
  { id: "route-about", path: "/about", type: "page" },
  { id: "route-projects", path: "/projects", type: "page" },
  { id: "route-experience", path: "/experience", type: "page" },
  { id: "route-skills", path: "/skills", type: "page" },
  { id: "route-certificates", path: "/certificates", type: "page" },
  { id: "route-contact", path: "/contact", type: "page" },
];

async function isServerRunning(url) {
  try {
    const res = await fetch(url, { method: "HEAD" });
    return res.ok || res.status === 200 || res.status === 307 || res.status === 308;
  } catch {
    return false;
  }
}

async function startServer() {
  const url = "http://localhost:3000/portfolio.html";
  if (await isServerRunning(url)) {
    console.log("Server already running on port 3000");
    return null;
  }

  console.log("Starting Next.js server on port 3000...");
  const proc = spawn("npx.cmd", ["next", "start", "-p", "3000"], {
    cwd: rootDir,
    stdio: "inherit",
    shell: true,
  });

  // Wait up to 30s for server to start
  const start = Date.now();
  while (Date.now() - start < 30000) {
    if (await isServerRunning(url)) {
      console.log("Server started successfully!");
      return proc;
    }
    await new Promise((r) => setTimeout(r, 600));
  }
  throw new Error("Server failed to start within 30 seconds");
}

async function launchBrowser() {
  try {
    return await chromium.launch({ channel: "chrome", headless: true });
  } catch {
    try {
      return await chromium.launch({ channel: "msedge", headless: true });
    } catch {
      return await chromium.launch({ headless: true });
    }
  }
}

function generateComparisonHtml(targetId) {
  const themeLabels = {
    default: "Warm Charcoal (Default)",
    mint: "Neo-Mint (Light)",
    ocean: "Deep Ocean (Dark)",
    lavender: "Lavender Studio (Light)",
  };

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Theme Comparison - ${targetId}</title>
  <style>
    body { margin: 0; padding: 24px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #111; color: #eee; }
    h1 { margin: 0 0 8px; font-size: 1.5rem; }
    p { margin: 0 0 24px; color: #888; font-size: 0.9rem; }
    .nav { margin-bottom: 24px; display: flex; flex-wrap: wrap; gap: 8px; }
    .nav a { color: #aaa; text-decoration: none; padding: 4px 10px; background: #222; border-radius: 4px; font-size: 0.8rem; }
    .nav a:hover, .nav a.active { background: #3b82f6; color: #fff; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(640px, 1fr)); gap: 24px; }
    .card { background: #1c1c1f; border: 1px solid #333; border-radius: 8px; overflow: hidden; }
    .card-header { padding: 12px 16px; font-weight: 600; font-size: 0.95rem; border-bottom: 1px solid #333; background: #252529; display: flex; justify-content: space-between; align-items: center; }
    .card-img-wrap { overflow: auto; max-height: 800px; background: #000; }
    .card-img-wrap img { display: block; width: 100%; height: auto; }
    .badge { font-size: 0.72rem; padding: 3px 8px; border-radius: 999px; background: #333; color: #ddd; font-family: monospace; }
  </style>
</head>
<body>
  <h1>Theme Comparison: <code>${targetId}</code></h1>
  <p>Comparing Warm Charcoal, Neo-Mint, Deep Ocean, and Lavender Studio side by side.</p>
  <div class="nav">
    ${TARGETS.map(
      (t) =>
        `<a href="compare-${t.id}.html" class="${t.id === targetId ? "active" : ""}">${t.id}</a>`
    ).join("\n    ")}
  </div>
  <div class="grid">
    ${THEMES.map((theme) => {
      const imgPath = `${theme}/desktop/${targetId}.png`;
      return `
    <div class="card">
      <div class="card-header">
        <span>${themeLabels[theme]}</span>
        <span class="badge">1440x900</span>
      </div>
      <div class="card-img-wrap">
        <a href="${imgPath}" target="_blank">
          <img src="${imgPath}" alt="${theme} - ${targetId}" loading="lazy"/>
        </a>
      </div>
    </div>`;
    }).join("\n")}
  </div>
</body>
</html>`;

  fs.writeFileSync(path.join(screenshotsDir, `compare-${targetId}.html`), html, "utf-8");
}

async function main() {
  const serverProc = await startServer();
  const browser = await launchBrowser();

  try {
    for (const theme of THEMES) {
      for (const vp of VIEWPORTS) {
        const outDir = path.join(screenshotsDir, theme, vp.name);
        fs.mkdirSync(outDir, { recursive: true });

        const context = await browser.newContext({
          viewport: { width: vp.width, height: vp.height },
          isMobile: vp.isMobile,
          deviceScaleFactor: 1,
        });

        const page = await context.newPage();

        for (const target of TARGETS) {
          const sep = target.path.includes("?") ? "&" : "?";
          const url = `http://localhost:3000${target.path}${sep}theme=${theme}`;
          console.log(`[${theme}] [${vp.name}] Capturing ${target.id}...`);

          try {
            await page.goto(url, { waitUntil: "networkidle", timeout: 15000 });
          } catch {
            await page.goto(url, { waitUntil: "domcontentloaded", timeout: 15000 });
          }

          // Ensure review UI is hidden for screenshot
          await page.addStyleTag({
            content: "[data-review-ui] { display: none !important; }",
          });

          // Wait for fonts and reveal transitions to settle
          await page.evaluate(() => document.fonts.ready);
          await page.waitForTimeout(500);

          const outputPath = path.join(outDir, `${target.id}.png`);

          if (target.type === "section" && target.selector) {
            const el = await page.$(target.selector);
            if (el) {
              await el.scrollIntoViewIfNeeded();
              await page.waitForTimeout(300);
              await el.screenshot({ path: outputPath });
            } else {
              await page.screenshot({ path: outputPath, fullPage: true });
            }
          } else {
            await page.screenshot({ path: outputPath, fullPage: true });
          }
        }

        await context.close();
      }
    }

    console.log("Generating comparison contact sheets...");
    for (const target of TARGETS) {
      generateComparisonHtml(target.id);
    }

    // Index page for all comparisons
    const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Theme Comparisons Index</title>
  <style>
    body { margin: 0; padding: 32px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #111; color: #eee; }
    h1 { margin-bottom: 8px; }
    p { color: #888; margin-bottom: 24px; }
    ul { list-style: none; padding: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 12px; }
    li a { display: block; padding: 14px 18px; background: #1e1e24; border: 1px solid #333; border-radius: 8px; color: #60a5fa; text-decoration: none; font-weight: 500; font-family: monospace; transition: all .2s; }
    li a:hover { background: #262630; border-color: #60a5fa; transform: translateY(-2px); }
  </style>
</head>
<body>
  <h1>Theme Comparison Pages</h1>
  <p>Select any page or section below to compare Warm Charcoal, Neo-Mint, Deep Ocean, and Lavender Studio side by side:</p>
  <ul>
    ${TARGETS.map(
      (t) => `<li><a href="compare-${t.id}.html">${t.id} &rarr;</a></li>`
    ).join("\n    ")}
  </ul>
</body>
</html>`;
    fs.writeFileSync(path.join(screenshotsDir, "index.html"), indexHtml, "utf-8");

    console.log("Screenshots and comparison HTML files generated successfully!");
  } finally {
    await browser.close();
    if (serverProc) {
      serverProc.kill("SIGTERM");
    }
  }
}

main().catch((err) => {
  console.error("Error capturing screenshots:", err);
  process.exit(1);
});
