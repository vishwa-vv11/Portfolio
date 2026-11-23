import { Compass, Lightbulb, Target } from "lucide-react";
import { PageHeading } from "@/components/page-heading";
import { Reveal } from "@/components/motion";
import { profile } from "@/lib/data";
export default function About() {
  return <div className="container-shell section-space">
    <PageHeading eyebrow="A little about me" title={<>Curious by nature.<br/><span className="gradient-text">Engineer by practice.</span></>} description={profile.summary}/>
    <div className="mt-16 grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
      <Reveal><div className="panel h-full p-7 sm:p-9"><p className="eyebrow">My story</p><h2 className="mt-4 text-2xl font-semibold text-text">I enjoy building systems that move beyond the demo.</h2><div className="text-muted mt-6 space-y-4 text-sm leading-8"><p>My interest sits at the intersection of software engineering and artificial intelligence. I enjoy understanding how models work, connecting them to data and tools, and shaping them into applications that solve a clearly defined problem.</p><p>My experience as a founding team member and AI Engineer at Genorai Technologies gave me exposure to manufacturing environments and customer-facing product work. It reinforced the importance of understanding the actual workflow before choosing the technology.</p><p>Outside project work, I continue to strengthen my foundations in machine learning, NLP, transformers, retrieval systems and agentic application design.</p></div></div></Reveal>
      <div className="grid gap-4">{[{icon:Target,title:"Problem first",desc:"Understand the user and operational context before designing a solution."},{icon:Lightbulb,title:"Learn by building",desc:"Turn concepts into working experiments, prototypes and products."},{icon:Compass,title:"Practical engineering",desc:"Care about testing, reliability, usability and deployment."}].map(({icon:Icon,title,desc},i)=><Reveal key={title} delay={i*.08}><div className="panel flex gap-4 p-6"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent"><Icon size={19}/></div><div><h3 className="font-semibold text-text">{title}</h3><p className="text-muted mt-2 text-sm leading-6">{desc}</p></div></div></Reveal>)}</div>
    </div>
  </div>;
}
