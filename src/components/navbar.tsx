"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
const links = [
  ["/", "Home"], ["/about", "About"], ["/projects", "Projects"],
  ["/experience", "Experience"], ["/skills", "Skills"],
  ["/certificates", "Credentials"],
];
export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/[.06] bg-[#090b10]/85 backdrop-blur-xl">
      <div className="container-shell flex h-[72px] items-center justify-between">
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([href, label]) => (
            <Link key={href} href={href} className={`text-[.94rem] font-medium transition-colors ${pathname === href ? "text-white" : "text-slate-400 hover:text-white"}`}>{label}</Link>
          ))}
        </nav>
        <Link href="/contact" className="hidden items-center gap-2 rounded-full border border-blue-300/30 px-4 py-2 text-sm font-semibold text-blue-100 transition hover:bg-blue-300/10 lg:flex">Let's connect <ArrowUpRight size={14}/></Link>
        <button aria-label="Toggle navigation" className="text-slate-200 lg:hidden" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      </div>
      {open && <nav className="container-shell grid gap-1 pb-4 md:hidden">{links.map(([href,label]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm text-slate-300 hover:bg-white/5">{label}</Link>)}</nav>}
    </header>
  );
}
