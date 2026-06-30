"use client";

import React from "react";
import { motion } from "framer-motion";

const BRANDS = [
  "Kent",
  "Aquaguard",
  "Livpure",
  "AO Smith",
  "Pureit",
  "Blue Star",
  "Havells",
  "Others"
];

export default function TrustStrip() {
  return (
    <section className="bg-zinc-50 border-y border-zinc-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Headline */}
          <div className="shrink-0 text-center md:text-left">
            <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest">
              Supports All Major Brands
            </h3>
            <p className="text-xs text-zinc-500 mt-0.5">
              Genuine spare parts & service compatibility guaranteed.
            </p>
          </div>

          {/* Brands List */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:flex items-center justify-center gap-6 md:gap-8 flex-wrap">
            {BRANDS.map((brand, idx) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex items-center justify-center px-4 py-2 bg-white rounded-lg shadow-sm border border-zinc-200/50 hover:border-primary/20 hover:shadow-md transition-all text-xs font-black tracking-wide text-zinc-500 hover:text-primary dark:text-zinc-400"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
