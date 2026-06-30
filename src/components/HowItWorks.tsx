"use client";

import React from "react";
import { motion } from "framer-motion";
import { ClipboardEdit, UserCheck, Search, ShieldCheck, Wrench, GlassWater } from "lucide-react";

const STEPS = [
  {
    icon: ClipboardEdit,
    title: "1. Book Online",
    description: "Submit details in 30 seconds via our website form or quick WhatsApp link.",
  },
  {
    icon: UserCheck,
    title: "2. Technician Visit",
    description: "Our certified technician arrives at your doorstep at your preferred time slot.",
  },
  {
    icon: Search,
    title: "3. Smart Inspection",
    description: "We check the TDS level, filter health, water pressure, and electricals.",
  },
  {
    icon: ShieldCheck,
    title: "4. Your Approval",
    description: "Get a clear explanation and pricing. We only proceed after your approval.",
  },
  {
    icon: Wrench,
    title: "5. Expert Service",
    description: "Fast servicing, tank cleaning, and filter replacements with premium parts.",
  },
  {
    icon: GlassWater,
    title: "6. Enjoy Clean Water",
    description: "Sip with complete peace of mind, backed by our service guarantee.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-section-bg border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-3.5 py-1.5 rounded-full">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-dark-text">
            How Aquahealth Works
          </h2>
          <p className="text-zinc-500 font-medium max-w-xl mx-auto text-sm sm:text-base">
            From booking to service completion, we make the entire process convenient, clear, and transparent.
          </p>
        </div>

        {/* Timeline Grid (Horizontal on large, Vertical otherwise) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
          {/* Connector Line for Desktop (LG) */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-0.5 bg-zinc-200/60 z-0" />

          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-zinc-100/80 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Node bubble */}
                <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center border-4 border-white dark:border-zinc-950 shadow-md relative z-10">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <h3 className="mt-4 text-base font-bold text-dark-text">
                  {step.title}
                </h3>
                
                <p className="mt-2 text-xs text-grey-text leading-relaxed font-medium">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
