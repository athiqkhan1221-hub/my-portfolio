"use client";

import { learningGoals } from "@/data/learning";
import { BookOpen, CheckCircle, Target, ArrowRight } from "lucide-react";

export default function LearningJourney() {
  return (
    <section id="journey" className="py-24 md:py-32 border-b border-[#303530] relative">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="mb-14">
          <span className="section-label">CURRENTLY LEARNING</span>
          <h2 className="section-heading">
            The work in <span className="text-[#C2F970]">progress.</span>
          </h2>
          <p className="section-description">
            Software engineering is a continuous discipline. These are the active domains,
            frameworks, and concepts I am currently strengthening.
          </p>
        </div>

        {/* Lightweight Editable Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {learningGoals.map((goal) => (
            <div
              key={goal.id}
              className="bg-[#202420] border border-[#303530] rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all hover:border-[#444B44]"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-[#303530]">
                  <span className="font-mono text-2xl font-extrabold text-[#C2F970]">
                    {goal.index}
                  </span>
                  <div className="status-pill live text-[10px] py-0.5 px-2.5">
                    <span className="pulse-dot" />
                    <span>{goal.status}</span>
                  </div>
                </div>

                <span className="font-mono text-xs text-[#A5ACA5] block mb-1.5 uppercase tracking-wider">
                  {goal.category}
                </span>

                <h3 className="font-heading font-bold text-lg sm:text-xl text-[#F4F3ED] mb-3 leading-snug">
                  {goal.title}
                </h3>

                <p className="font-body text-sm text-[#A5ACA5] leading-relaxed mb-6">
                  {goal.description}
                </p>
              </div>

              {/* Focus Areas List */}
              <div className="pt-4 border-t border-[#303530]/70">
                <span className="font-mono text-[11px] text-[#6E756E] uppercase tracking-wider block mb-2.5">
                  Current Focus Milestones:
                </span>
                <ul className="space-y-2">
                  {goal.focusAreas.map((area, idx) => (
                    <li
                      key={idx}
                      className="font-body text-xs text-[#F4F3ED] flex items-start gap-2.5"
                    >
                      <Target className="w-3.5 h-3.5 text-[#C2F970] shrink-0 mt-0.5" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Updating Roadmap */}
        <div className="mt-8 text-center">
          <p className="font-mono text-xs text-[#6E756E]">
            Roadmap updated regularly in <code className="text-[#C2F970]">data/learning.js</code> as milestones are accomplished.
          </p>
        </div>
      </div>
    </section>
  );
}
