"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GALLERY } from "@/data/cms";

const CATEGORIES = ["All", "Before/After", "Installations"];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems = activeTab === "All"
    ? GALLERY.filter((item) => item.category !== "Technicians" && item.category !== "Vans")
    : GALLERY.filter((item) => item.category === activeTab);

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-3.5 py-1.5 rounded-full inline-block">
            Our Portfolio
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-dark-text sm:text-5xl">
            Service Gallery & Real Work
          </h1>
          <p className="text-zinc-500 font-medium max-w-xl mx-auto text-sm sm:text-base">
            Take a look at our real customer installations, filter inspections, and our technicians at work across Chennai.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === cat
                  ? "bg-primary text-white shadow-md shadow-primary/10"
                  : "bg-zinc-50 text-zinc-650 border border-zinc-200 hover:bg-zinc-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-50 border border-zinc-150 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="relative w-full aspect-[4/3] bg-white overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-w-7xl) 100vw, 400px"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-350"
                />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4 px-2.5 py-1 bg-white/95 backdrop-blur-sm text-zinc-800 text-[10px] font-bold rounded-lg shadow-sm border border-zinc-100 uppercase tracking-wider">
                  {item.category}
                </div>
              </div>
              <div className="p-5 space-y-1">
                <h3 className="text-sm font-bold text-zinc-900">{item.title}</h3>
                <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
