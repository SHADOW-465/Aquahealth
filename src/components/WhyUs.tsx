"use client";

import React from "react";
import { motion } from "framer-motion";
import { Gift, Sparkles, CheckSquare, Users, Cpu, DollarSign } from "lucide-react";

const WHY_CARDS = [
  {
    icon: Gift,
    title: "5 FREE Extra Pre-Filters",
    description: "Replacing the outer sediment filter regularly protects the internal filtration system and extends downstream filter life.",
  },
  {
    icon: Sparkles,
    title: "Deep Internal Cleaning",
    description: "Sanitization of internal tanks, deep cleaning of components, pipe inspection, and comprehensive system flushing.",
  },
  {
    icon: CheckSquare,
    title: "Professional Inspection",
    description: "Thorough system diagnostics with zero hidden surprises. Complete transparency on purifier health and required work.",
  },
  {
    icon: Users,
    title: "Expert Technicians",
    description: "Our engineers are experienced, reliable, and friendly, offering quick resolutions for all water purifier brands.",
  },
  {
    icon: Cpu,
    title: "Premium Quality Parts",
    description: "We use only genuine, premium replacement filters and quality components specifically suited for your purifier model.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "Clear explanations of repairs needed before work starts. Absolutely no unnecessary filter replacements.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-3.5 py-1.5 rounded-full">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-dark-text">
            Setting the Standard for Water Purification
          </h2>
          <p className="text-zinc-500 font-medium max-w-xl mx-auto text-sm sm:text-base">
            Aquahealth is engineered for trust. We prioritize transparency, quality craftsmanship, and long-term purifier health.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ y: -5 }}
                className="group relative p-8 rounded-2xl bg-zinc-50 hover:bg-white border border-zinc-100 hover:border-primary/10 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Icon Wrapper */}
                <div className="p-3.5 rounded-xl bg-white border border-zinc-100 text-primary group-hover:bg-primary group-hover:text-white transition-all w-fit shadow-sm">
                  <Icon className="h-6 w-6" />
                </div>
                
                {/* Title */}
                <h3 className="mt-6 text-lg font-bold text-dark-text group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                
                {/* Description */}
                <p className="mt-3 text-sm text-grey-text leading-relaxed font-medium">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
