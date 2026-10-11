"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { Filter, Sparkles, FolderGit2 } from "lucide-react";

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps & Systems" },
    { id: "ai", label: "AI & Experimentation" },
    { id: "in-progress", label: "In Progress / Active" },
  ];

  const filteredProjects = projects.filter((item) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "web")
      return item.category.includes("Web") || item.category.includes("Full-Stack");
    if (selectedFilter === "ai")
      return item.category.includes("AI") || item.category.includes("Creative");
    if (selectedFilter === "in-progress")
      return item.badgeType === "in-progress" || item.badgeType === "live";
    return true;
  });

  return (
    <section id="work" className="py-24 md:py-32 border-b border-[#303530] relative">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="section-label">SELECTED WORK</span>
            <h2 className="section-heading">
              Things I&apos;ve built. <br />
              <span className="text-[#A5ACA5]">Things I&apos;m figuring out.</span>
            </h2>
            <p className="section-description">
              A growing collection of projects, experiments, and practical solutions.
              Each represents real exploration without fabricated claims.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setSelectedFilter(filter.id)}
                className={`font-mono text-xs px-3.5 py-1.5 rounded-lg border transition-all ${
                  selectedFilter === filter.id
                    ? "bg-[#C2F970] text-[#111311] border-[#C2F970] font-semibold shadow-sm"
                    : "bg-[#1B1E1B] text-[#A5ACA5] border-[#303530] hover:text-[#F4F3ED] hover:border-[#444B44]"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={setActiveModalProject}
            />
          ))}
        </div>

        {/* Editorial Project Note Banner */}
        <div className="mt-12 p-6 rounded-xl bg-[#1B1E1B] border border-[#303530] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FolderGit2 className="w-5 h-5 text-[#C2F970] shrink-0" />
            <p className="font-body text-xs sm:text-sm text-[#A5ACA5]">
              <strong className="text-[#F4F3ED]">Transparency note:</strong> These projects represent ongoing academic coursework and personal experiments. As live deployments and repositories are updated, links will become active automatically.
            </p>
          </div>
          <a
            href="#contact"
            className="btn-ghost shrink-0 text-xs font-mono"
          >
            Suggest an idea →
          </a>
        </div>
      </div>

      {/* Deep-dive Project Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
