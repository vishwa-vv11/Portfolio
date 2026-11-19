import Image from "next/image";
import { Award, ExternalLink } from "lucide-react";
import { PageHeading } from "@/components/page-heading";
import { Reveal } from "@/components/motion";
import { credentials } from "@/lib/data";

export default function Certificates() {
  return (
    <div className="container-shell section-space">
      <PageHeading
        eyebrow="Badges & certificates"
        title={<>Proof of learning.<br /><span className="gradient-text">Milestones earned.</span></>}
        description="A record of completed certifications and badges."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {credentials.map((credential) => (
          <Reveal key={credential.href}>
            <article className="panel h-full overflow-hidden">
              {credential.image ? (
                <a href={credential.href} target="_blank" rel="noreferrer" aria-label={`Open ${credential.name}`} className="relative block aspect-[1.65] bg-black/20">
                  <Image src={credential.image} alt={`${credential.name} certificate preview`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-2" />
                </a>
              ) : (
                <div className="flex aspect-[1.65] items-center justify-center border-b border-white/[.06] bg-white/[.02] text-blue-200">
                  <Award size={34} strokeWidth={1.5} />
                </div>
              )}
              <div className="flex h-[calc(100%-auto)] flex-col p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="tag">{credential.kind}</span>
                  {credential.date && <span className="text-right text-xs text-slate-500">{credential.date}</span>}
                </div>
                <h2 className="mt-4 text-base font-semibold leading-6">{credential.name}</h2>
                {credential.issuer && <p className="muted mt-2 text-sm">{credential.issuer}</p>}
                {credential.detail && <p className="muted mt-3 text-sm leading-6">{credential.detail}</p>}
                <a href={credential.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm text-blue-200 transition-colors hover:text-white">
                  Open certificate <ExternalLink size={14} />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}