import { Reveal } from "@/components/motion";
import type { ReactNode } from "react";
export function PageHeading({ eyebrow, title, description }: { eyebrow: string; title: ReactNode; description: string }) {
  return <div className="max-w-3xl"><Reveal><p className="eyebrow">{eyebrow}</p><h1 className="heading mt-4">{title}</h1><p className="muted mt-5 max-w-2xl text-base leading-8">{description}</p></Reveal></div>;
}
