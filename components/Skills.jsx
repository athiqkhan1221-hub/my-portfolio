"use client";

import { skillGroups } from "@/data/skills";
import {
  Code2,
  Terminal,
  Cpu,
  Video,
  Layers,
  CheckCircle2,
  Sparkles
} from "lucide-react";

export default function Skills() {
  const getGroupIcon = (category) => {
    switch (category) {
      case "FRONTEND DEVELOPMENT":
        return Code2;
      case "PROGRAMMING":
        return Terminal;
      case "AI & EXPLORATION":
        return Cpu;
      case "CREATIVE PRODUCTION":
        return Video;
      case "FULL-STACK DEVELOPMENT":
        return Layers;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32 border-b border-[#303530] relative">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="mb-14">
          <span className="section-label">MY TOOLKIT</span>
          <h2 className="section-heading">
            Different tools. <br />
            <span className="text-[#C2F970]">One curious mind.</span>
          </h2>
          <p className="section-description">
            A transparent overview of the languages, frameworks, and creative software
            I study and apply in real projects. No arbitrary progress bars or exaggerated claims.
          </p>
        </div>

        {/* Grouped Skills Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {skillGroups.map((group, groupIdx) => {
            const Icon = getGroupIcon(group.category);
            const isWide =
              group.category === "FRONTEND DEVELOPMENT" ||
              group.category === "FULL-STACK DEVELOPMENT";

            return (
              <div
                key={groupIdx}
                className={`bg-[#202420] border border-[#303530] rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all hover:border-[#444B44] ${
                  isWide ? "lg:col-span-6" : "lg:col-span-6 xl:col-span-4"
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-4 mb-5 border-b border-[#303530]">
                    <div className="p-2 rounded-lg bg-[#1B1E1B] text-[#C2F970] border border-[#303530]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base text-[#F4F3ED] tracking-tight">
                        {group.category}
                      </h3>
                      <p className="font-body text-xs text-[#A5ACA5]">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {group.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-lg bg-[#111311] border border-[#303530] flex flex-col gap-1.5 transition-colors hover:border-[#444B44]"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-heading font-semibold text-sm text-[#F4F3ED]">
                            {skill.name}
                          </span>
                          <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#1B1E1B] text-[#C2F970] border border-[#303530]">
                            {skill.status}
                          </span>
                        </div>
                        <p className="font-body text-xs text-[#A5ACA5] leading-relaxed">
                          {skill.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Note */}
                <div className="mt-5 pt-3 border-t border-[#303530]/60 flex items-center gap-2 text-[11px] font-mono text-[#6E756E]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C2F970]" />
                  <span>Applied in active coursework &amp; personal projects</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
