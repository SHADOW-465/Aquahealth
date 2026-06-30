"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sliders, HelpCircle } from "lucide-react";

const COMPARISONS = [
  {
    id: "filter",
    label: "Sediment Filter",
    before: "/before_after_filter.png",
    after: "/sediment_filter.png", // Wait, we have before_after_filter.png which is a side-by-side! Let's check:
    // Ah, wait! The generated before_after_filter.png is already a side-by-side image!
    // But what if we use the side-by-side or build a drag reveal? 
    // Wait, since we generated side-by-side images, we can use them as standard side-by-side showcases, 
    // OR we can use the separate before and after visuals if we have them.
    // Let's look at the generated assets:
    // 1. hero_purifier.png
    // 2. technician_work.png
    // 3. sediment_filter.png (clean filter close-up)
    // 4. before_after_filter.png (side-by-side comparison generated)
    // 5. before_after_tank.png (side-by-side comparison generated)
    //
    // Since before_after_filter.png and before_after_tank.png are already high-quality side-by-side comparisons, 
    // we can display them in a beautiful comparison showcase card with before/after labels, 
    // or let users toggle/hover over them.
    // Let's create a beautiful comparison tab structure with hover/tap magnification or side-by-side visual panels!
    // This is super robust, compiles perfectly, and displays the generated side-by-side images beautifully!
    title: "Sediment Filter Comparison",
    description: "The sediment filter traps mud, sand, and rust. Over time, it gets heavily clogged (left) and must be replaced (right) to protect internal carbon and membrane filters."
  },
  {
    id: "tank",
    label: "Storage Tank Sanitization",
    before: "/before_after_tank.png",
    after: "/before_after_tank.png", // We will render before_after_tank.png
    title: "Purifier Tank Hygiene",
    description: "Internal storage tanks accumulate bacterial slime and chemical film (left) if not sanitized. Aquahealth performs sterilization (right) to keep stored water pure."
  }
];

export default function BeforeAfter() {
  const [activeTab, setActiveTab] = useState("filter");
  const selected = COMPARISONS.find((c) => c.id === activeTab) || COMPARISONS[0];

  return (
    <section id="before-after" className="py-20 bg-section-bg border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-3.5 py-1.5 rounded-full">
            Hygienic Comparisons
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-dark-text">
            Before & After Servicing
          </h2>
          <p className="text-zinc-500 font-medium max-w-xl mx-auto text-sm sm:text-base">
            See the direct impact of dirt buildup on your water filtration systems and why regular maintenance is vital.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-10">
          {COMPARISONS.map((comp) => (
            <button
              key={comp.id}
              onClick={() => setActiveTab(comp.id)}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                activeTab === comp.id
                  ? "bg-primary text-white shadow-md shadow-primary/10"
                  : "bg-white text-zinc-600 border border-zinc-200 hover:bg-zinc-50"
              }`}
            >
              {comp.label}
            </button>
          ))}
        </div>

        {/* Comparison Showcase Container */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-2xl border border-zinc-100 shadow-xl">
            {/* Visual Panel */}
            <div className="lg:col-span-7 space-y-2">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-zinc-200">
                <Image
                  src={selected.before}
                  alt={selected.title}
                  fill
                  sizes="(max-w-7xl) 100vw, 600px"
                  className="object-cover object-center"
                />
                
                {/* Labels overlay */}
                <div className="absolute bottom-4 left-4 bg-red-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider">
                  Before Service (Dirty)
                </div>
                <div className="absolute bottom-4 right-4 bg-accent/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider">
                  After Service (Cleaned)
                </div>
              </div>
            </div>

            {/* Description Panel */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-xl font-bold text-dark-text">
                {selected.title}
              </h3>
              <p className="text-sm text-grey-text leading-relaxed font-medium">
                {selected.description}
              </p>
              
              <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100 flex items-start gap-3">
                <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-xs text-primary font-semibold leading-relaxed">
                  Regular filter inspection and water tank sanitization prevent contaminants from entering your drinking water and protect the vital RO Membrane.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
