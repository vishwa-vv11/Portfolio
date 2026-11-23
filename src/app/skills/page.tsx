import { PageHeading } from "@/components/page-heading";
import { Reveal } from "@/components/motion";
import { skillGroups } from "@/lib/data";
export default function Skills() {
  return <div className="container-shell section-space">
    <PageHeading eyebrow="Technical toolkit" title={<>A growing toolkit for<br/><span className="gradient-text">intelligent applications.</span></>} description="Technologies and concepts I have worked with or studied through projects and hands-on learning. I focus on understanding fundamentals rather than collecting tool names."/>
    <div className="mt-14 grid gap-4 md:grid-cols-2">{skillGroups.map((g,i)=><Reveal key={g.title} delay={i*.08}><section className="panel h-full p-7"><p className="text-xs font-mono text-dim">0{i+1} / SKILL AREA</p><h2 className="mt-5 text-xl font-semibold text-text">{g.title}</h2><div className="mt-6 flex flex-wrap gap-2">{g.items.map(item=><span key={item} className="tag px-3 py-2 text-xs">{item}</span>)}</div></section></Reveal>)}</div>
    <p className="muted mt-7 text-xs leading-6">Skill levels are intentionally not self-rated here. Be prepared to discuss your hands-on experience and depth for each technology during interviews.</p>
  </div>;
}
