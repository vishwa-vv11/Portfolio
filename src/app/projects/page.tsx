import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { PageHeading } from "@/components/page-heading";
import { Reveal } from "@/components/motion";
import { projects } from "@/lib/data";
export default function Projects() {
  return <div className="container-shell section-space">
    <PageHeading eyebrow="Selected work" title={<>Building ideas into<br/><span className="gradient-text">working systems.</span></>} description="A closer look at projects that reflect my interests in applied AI, language technologies and computer vision. Open each repository for implementation details and source code."/>
    <div className="mt-14 space-y-5">{projects.map((p,i)=><Reveal key={p.number} delay={i*.08}><article className="panel grid gap-7 p-6 sm:p-8 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs text-slate-600">PROJECT {p.number}</p><p className="eyebrow mt-8">{p.category}</p><h2 className="mt-3 text-2xl font-bold">{p.name}</h2><p className="muted mt-4 text-sm leading-7">{p.description}</p><Link href={p.href} target="_blank" className="mt-7 inline-flex items-center gap-2 text-sm text-blue-200 hover:text-white"><Github size={16}/> View on GitHub <ArrowUpRight size={14}/></Link></div><div className="rounded-xl border border-white/[.06] bg-black/20 p-5 sm:p-6"><h3 className="text-sm font-semibold">Project highlights</h3><ul className="mt-4 space-y-3">{p.highlights.map(x=><li key={x} className="flex gap-3 text-sm leading-6 text-slate-300"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300"/>{x}</li>)}</ul><div className="mt-7 border-t border-white/[.07] pt-5"><p className="text-xs text-slate-500">TECHNOLOGIES</p><div className="mt-3 flex flex-wrap gap-2">{p.stack.map(t=><span className="tag" key={t}>{t}</span>)}</div></div></div></article></Reveal>)}</div>
    <p className="muted mt-8 text-xs leading-6">Project summaries are concise portfolio descriptions. Refer to each repository for the current implementation, exact capabilities and dependencies.</p>
  </div>;
}
