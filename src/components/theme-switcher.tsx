"use client";

import React, { useEffect, useState } from "react";

const themes = [
  { id: "default", name: "Warm", bg: "#151413", accent: "#E8836B", metaColor: "#151413" },
  { id: "mint", name: "Mint", bg: "#F6F1E6", accent: "#1F5D3A", metaColor: "#F6F1E6" },
  { id: "ocean", name: "Ocean", bg: "#0A1628", accent: "#2DD4BF", metaColor: "#0A1628" },
  { id: "lavender", name: "Lavender", bg: "#FAF8FF", accent: "#7C4DFF", metaColor: "#FAF8FF" },
] as const;

type ThemeId = (typeof themes)[number]["id"];

export function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState<ThemeId>("default");

  useEffect(() => {
    // Read from URL or localStorage
    const params = new URLSearchParams(window.location.search);
    const paramTheme = params.get("theme") as ThemeId | null;
    const storedTheme = localStorage.getItem("portfolio-theme") as ThemeId | null;
    const initialTheme: ThemeId =
      paramTheme && themes.some((t) => t.id === paramTheme)
        ? paramTheme
        : storedTheme && themes.some((t) => t.id === storedTheme)
        ? storedTheme
        : "default";

    applyTheme(initialTheme);
  }, []);

  const applyTheme = (theme: ThemeId) => {
    setCurrentTheme(theme);
    if (theme === "default") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }
    localStorage.setItem("portfolio-theme", theme);

    // Update meta theme-color
    const tConfig = themes.find((t) => t.id === theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta && tConfig) {
      meta.setAttribute("content", tConfig.metaColor);
    }

    // Update URL query parameter without page reload
    const url = new URL(window.location.href);
    if (theme === "default") {
      url.searchParams.delete("theme");
    } else {
      url.searchParams.set("theme", theme);
    }
    window.history.replaceState(null, "", url.toString());
  };

  return (
    <aside
      data-review-ui
      className="fixed bottom-5 right-5 z-[9999] rounded-full border border-border bg-surface p-1.5 shadow-card backdrop-blur-md transition-transform duration-200"
      aria-label="Theme selector"
    >
      <div className="flex items-center gap-1">
        {themes.map(({ id, name, bg, accent }) => {
          const isActive = currentTheme === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => applyTheme(id)}
              className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-mono font-medium transition-all ${
                isActive
                  ? "border border-accent bg-surface-2 text-text font-bold"
                  : "border border-transparent text-muted hover:bg-surface-2 hover:text-text"
              }`}
              aria-label={`${name} theme`}
            >
              <span
                className="h-3 w-3 shrink-0 rounded-full border"
                style={{ backgroundColor: bg, borderColor: accent }}
              />
              <span className="hidden sm:inline">{name}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
