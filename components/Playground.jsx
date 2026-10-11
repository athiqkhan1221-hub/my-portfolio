"use client";

import { useState } from "react";
import Image from "next/image";
import { playgroundCategories, playgroundItems } from "@/data/playground";
import PlaygroundModal from "./PlaygroundModal";
import { Sparkles, Play, ArrowUpRight, Film, Ratio } from "lucide-react";

export default function Playground() {
  const [activeCategory, setActiveCategory] = useState("All Experiments");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = playgroundItems.filter((item) => {
    if (activeCategory === "All Experiments") return true;
    return item.category === activeCategory;
  });

  return (
    <section id="playground" className="py-24 md:py-32 border-b border-[#303530] relative bg-[#131513]">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="section-label">BEYOND THE CODE</span>
            <h2 className="section-heading">
              A space for <span className="text-[#C2F970]">experiments.</span>
            </h2>
            <p className="section-description">
              Not every interesting idea begins with a code editor. This is where I
              share AI video experiments, visual concepts, editing work, and creative
              tests.
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#303530]/60 overflow-x-auto">
          {playgroundCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`font-mono text-xs px-3.5 py-1.5 rounded-lg whitespace-nowrap transition-all border ${
                activeCategory === cat
                  ? "bg-[#C2F970] text-[#111311] border-[#C2F970] font-semibold"
                  : "bg-[#1B1E1B] text-[#A5ACA5] border-[#303530] hover:text-[#F4F3ED] hover:border-[#444B44]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {filteredItems.map((item) => {
            const isVertical = item.aspectRatio === "9:16";

            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`group cursor-pointer bg-[#202420] border border-[#303530] rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#444B44] hover:shadow-2xl hover:shadow-black/60 ${
                  isVertical ? "sm:row-span-2" : ""
                }`}
              >
                {/* Media Container with explicit aspect ratio */}
                <div
                  className={`relative w-full overflow-hidden bg-[#111311] border-b border-[#303530] ${
                    isVertical
                      ? "aspect-[9/16]"
                      : item.aspectRatio === "4:3"
                      ? "aspect-[4/3]"
                      : "aspect-[16/9]"
                  }`}
                >
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Ratio badge */}
                  <div className="absolute top-3 left-3 bg-[#111311]/85 backdrop-blur-sm border border-[#303530] px-2 py-0.5 rounded text-[10px] font-mono text-[#C2F970] flex items-center gap-1">
                    <Ratio className="w-3 h-3" />
                    <span>{item.aspectRatio}</span>
                  </div>

                  {/* Type badge */}
                  <div className="absolute top-3 right-3 bg-[#111311]/85 backdrop-blur-sm border border-[#303530] px-2 py-0.5 rounded text-[10px] font-mono text-[#A5ACA5]">
                    {item.type}
                  </div>

                  {/* Hover Inspect Icon */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-3 rounded-full bg-[#C2F970] text-[#111311] transform scale-75 group-hover:scale-100 transition-transform">
                      <Film className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Card Content & Caption */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[11px] text-[#A5ACA5] block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-heading font-bold text-base text-[#F4F3ED] group-hover:text-[#C2F970] transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-xs text-[#A5ACA5] line-clamp-3 leading-relaxed mb-4">
                      {item.caption}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#303530] flex items-center justify-between text-xs font-mono">
                    <span className="text-[#6E756E]">Inspect Spec</span>
                    <span className="text-[#C2F970] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      <span>View</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Placeholder Notice for Athiq */}
        <div className="mt-12 p-5 rounded-xl bg-[#1B1E1B] border border-[#303530] text-center">
          <p className="font-body text-xs text-[#A5ACA5]">
            <strong className="text-[#F4F3ED]">Asset Customization:</strong> Video clips and thumbnails can be placed directly inside <code className="font-mono text-[#C2F970]">/public/videos/</code> and <code className="font-mono text-[#C2F970]">/public/images/</code>. Simply link their file names in <code className="font-mono text-[#C2F970]">data/playground.js</code>.
          </p>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedItem && (
        <PlaygroundModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </section>
  );
}
