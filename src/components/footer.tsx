import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";
export function Footer() {
  return <footer className="border-t border-border py-8">
    <div className="container-shell flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
      <div><p className="text-sm font-semibold text-text">{profile.fullName}</p><p className="mt-1 text-xs text-dim">AI Engineer · Building useful AI systems.</p></div>
      <div className="flex items-center gap-4 text-muted">
        <Link aria-label="GitHub" href={profile.github} target="_blank" className="hover:text-accent transition-colors"><Github size={17}/></Link>
        <Link aria-label="LinkedIn" href={profile.linkedin} target="_blank" className="hover:text-accent transition-colors"><Linkedin size={17}/></Link>
        <Link aria-label="Email" href={`mailto:${profile.email}`} className="hover:text-accent transition-colors"><Mail size={17}/></Link>
        <span className="text-xs text-dim">© {new Date().getFullYear()} {profile.fullName}</span>
      </div>
    </div>
  </footer>;
}
