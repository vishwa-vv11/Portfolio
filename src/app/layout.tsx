import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
export const metadata: Metadata = {
  title: "Vishwa | AI Engineer",
  description: "Portfolio of Vishwa — AI Engineer focused on Machine Learning, Generative AI, RAG and Agentic AI.",
  metadataBase: new URL("https://example.com"),
  openGraph: { title: "Vishwa | AI Engineer", description: "Building practical AI systems for real-world problems.", type: "website" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Navbar/><main>{children}</main><Footer/></body></html>;
}
