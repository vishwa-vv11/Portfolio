import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeSwitcher } from "@/components/theme-switcher";

export const metadata: Metadata = {
  title: "Vishwa's Portfolio",
  description: "Portfolio of Vishwa R — AI Engineer focused on Machine Learning, Generative AI, RAG and Agentic AI.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  openGraph: { title: "Vishwa's Portfolio", description: "Building practical AI systems for real-world problems.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#151413" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var p=new URLSearchParams(window.location.search);var t=p.get('theme')||localStorage.getItem('portfolio-theme')||'default';if(['default','mint','ocean','lavender'].indexOf(t)===-1)t='default';if(t!=='default'){document.documentElement.setAttribute('data-theme',t);}else{document.documentElement.removeAttribute('data-theme');}var c={default:'#151413',mint:'#F6F1E6',ocean:'#0A1628',lavender:'#FAF8FF'};var m=document.querySelector('meta[name="theme-color"]');if(m&&c[t])m.setAttribute('content',c[t]);}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ThemeSwitcher />
      </body>
    </html>
  );
}
