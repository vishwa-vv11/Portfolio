import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { PageHeading } from "@/components/page-heading";
import { Reveal } from "@/components/motion";
import { profile } from "@/lib/data";
export default function Contact() {
  const contacts = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Github, label: "GitHub", value: "github.com/vishwa-vv11", href: profile.github },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/vishvv111", href: profile.linkedin },
  ];
  return <div className="container-shell section-space">
    <PageHeading eyebrow="Contact" title={<>Have a problem worth<br/><span className="gradient-text">building for?</span></>} description="I'm interested in AI engineering opportunities, collaborative projects and practical applications of AI."/>
    <Reveal className="mt-14"><div className="panel grid gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_.8fr]"><div><p className="eyebrow">Let's start a conversation</p><h2 className="mt-4 text-3xl font-bold text-text">Let's build something useful.</h2><p className="muted mt-4 max-w-md text-sm leading-7">Reach out for opportunities, project discussions or to connect professionally.</p><div className="mt-7 flex items-center gap-2 text-xs text-dim"><MapPin size={15}/> {profile.location}</div></div><div className="space-y-3">{contacts.map(({icon:Icon,label,value,href})=><Link key={label} href={href} target={label === "Email" ? undefined : "_blank"} className="flex items-center gap-4 rounded-xl border border-border bg-surface p-4 transition hover:border-accent hover:bg-surface-2"><span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent"><Icon size={18}/></span><span className="min-w-0 flex-1"><span className="block text-xs text-dim">{label}</span><span className="mt-1 block truncate text-sm text-text">{value}</span></span><ArrowUpRight size={16} className="text-dim"/></Link>)}</div></div></Reveal>
  </div>;
}
