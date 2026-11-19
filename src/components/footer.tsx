import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";
export function Footer() {
  return <footer className="border-t border-white/[.07] py-8">
    <div className="container-shell flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
      <div><p className="text-sm font-semibold">{profile.fullName}</p><p className="mt-1 text-xs text-slate-500">AI Engineer · Building useful AI systems.</p></div>
      <div className="flex items-center gap-4 text-slate-400">
        <Link aria-label="GitHub" href={profile.github} target="_blank"><Github size={17}/></Link>
        <Link aria-label="LinkedIn" href={profile.linkedin} target="_blank"><Linkedin size={17}/></Link>
        <Link aria-label="Email" href={`mailto:${profile.email}`}><Mail size={17}/></Link>
        <span className="text-xs text-slate-600">© {new Date().getFullYear()} {profile.fullName}</span>
      </div>
    </div>
  </footer>;
}
