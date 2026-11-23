"use client";

import { useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { BriefcaseBusiness, CheckCircle2, GraduationCap } from "lucide-react";
import { PageHeading } from "@/components/page-heading";
import { experience, education } from "@/lib/data";

export default function Experience() {
  const [activeSlide, setActiveSlide] = useState<"experience" | "education">("experience");
  const trackRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  return <div className="container-shell section-space">
    <PageHeading eyebrow="Experience & education" title={<>Learning in the field.<br/><span className="gradient-text">Building with intent.</span></>} description="Explore my professional experience and academic background."/>
    <div className="mt-10">
      <div className="mb-4 flex items-center justify-between gap-4 text-xs text-dim">
        <p>Swipe sideways to move between sections</p>
        <span aria-live="polite">{activeSlide === "experience" ? "01" : "02"} / 02</span>
      </div>
      <div
        ref={trackRef}
        role="region"
        aria-label="Experience and education slides"
        tabIndex={0}
        onScroll={(event) => setActiveSlide(event.currentTarget.scrollLeft >= event.currentTarget.clientWidth / 2 ? "education" : "experience")}
        onKeyDown={(event) => {
          if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
          event.preventDefault();
          event.currentTarget.scrollTo({ left: event.key === "ArrowRight" ? event.currentTarget.clientWidth : 0, behavior: reduceMotion ? "auto" : "smooth" });
        }}
        className="experience-track flex snap-x snap-mandatory overflow-x-auto rounded-[18px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent/60"
      >
        <article role="group" aria-roledescription="slide" aria-label="Experience, slide 1 of 2" className="panel w-3/4 shrink-0 snap-start p-7 sm:p-9">
          <div className="flex items-center gap-3"><BriefcaseBusiness className="text-accent"/><p className="eyebrow">Professional experience</p></div>
          {experience.map((job) => (
            <div key={job.company} className="mt-7">
              <div className="flex flex-wrap justify-between gap-3"><div><h2 className="text-2xl font-semibold text-text">{job.company}</h2><p className="mt-2 text-accent">{job.role}</p></div><span className="tag">{job.period}</span></div>
              <p className="muted mt-2 text-xs">{job.type}</p>
              <p className="muted mt-6 text-sm leading-7">{job.description}</p>
              <ul className="mt-6 space-y-4">{job.bullets.map((bullet) => <li key={bullet} className="flex gap-3 text-sm leading-6 text-muted"><CheckCircle2 size={17} className="mt-0.5 shrink-0 text-accent"/>{bullet}</li>)}</ul>
            </div>
          ))}
        </article>
        <article role="group" aria-roledescription="slide" aria-label="Education, slide 2 of 2" className="panel w-full shrink-0 snap-start p-7 sm:p-9">
          <div className="flex items-center gap-3"><GraduationCap className="text-accent"/><p className="eyebrow">Education</p></div>
          <div className="mt-7 divide-y divide-border">
            {education.map((item) => (
              <section key={item.institution} className="py-6 first:pt-0 last:pb-0">
                <div className="flex flex-wrap items-start justify-between gap-3"><div><h2 className="text-xl font-semibold text-text">{item.institution}</h2><p className="mt-2 text-sm text-muted">{item.qualification}</p></div><span className="tag">{item.period}</span></div>
                <p className="mt-4 text-sm text-accent">{item.result}</p>
              </section>
            ))}
          </div>
        </article>
      </div>
    </div>
  </div>;
}
