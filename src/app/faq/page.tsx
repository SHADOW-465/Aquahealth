"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQS } from "@/data/cms";
import { Search, HelpCircle, Plus, Minus } from "lucide-react";

const CATEGORIES = ["All", "General", "Filters & Maintenance", "Water Quality", "AMC & Pricing", "Booking & Service"];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFAQs = FAQS.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-3.5 py-1.5 rounded-full inline-block">
            Resources
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-dark-text sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="text-zinc-500 font-medium text-sm sm:text-base leading-relaxed">
            Search our directory of 40+ detailed answers covering water quality, filter life, maintenance plans, and booking rules.
          </p>
        </div>

        {/* Live Search Bar */}
        <div className="relative max-w-xl mx-auto">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-zinc-400">
            <Search size={18} />
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs (e.g., TDS, membrane, saline, Kent...)"
            className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm shadow-sm transition-all"
          />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center gap-2 flex-wrap max-w-3xl mx-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenId(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-md"
                  : "bg-zinc-50 text-zinc-650 border border-zinc-200 hover:bg-zinc-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQs List */}
        <div className="space-y-4">
          <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest border-b border-zinc-100 pb-2 flex justify-between">
            <span>Showing {filteredFAQs.length} questions</span>
            <span>Category: {activeCategory}</span>
          </div>

          {filteredFAQs.length > 0 ? (
            <div className="space-y-4">
              {filteredFAQs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="bg-white rounded-2xl border border-zinc-150 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <button
                      onClick={() => handleToggle(faq.id)}
                      className="w-full flex items-center justify-between p-5 text-left font-bold text-zinc-800 hover:text-primary transition-colors cursor-pointer text-sm sm:text-base"
                    >
                      <span className="flex items-center gap-3 pr-4">
                        <HelpCircle size={18} className="text-primary shrink-0" />
                        {faq.question}
                      </span>
                      <div className="shrink-0 p-1 bg-zinc-50 rounded-lg border border-zinc-200 text-zinc-400">
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="p-5 pt-0 text-xs sm:text-sm text-zinc-500 font-semibold leading-relaxed border-t border-zinc-100/60 bg-zinc-50/20">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 bg-zinc-50 rounded-2xl border border-dashed border-zinc-200 text-zinc-400 font-semibold text-sm">
              No matching FAQs found. Try searching for other terms like "membrane", "AMC", or "spares".
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
