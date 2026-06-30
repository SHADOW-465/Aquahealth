"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Wrench,
  Sparkles,
  RefreshCw,
  PlusSquare,
  ShieldCheck,
  ShieldAlert,
  ShoppingBag,
  Share2,
  Droplet,
  GlassWater
} from "lucide-react";

interface ServicesProps {
  onOpenBooking: (service: string) => void;
}

const SERVICES_LIST = [
  {
    icon: RefreshCw,
    title: "General RO Service",
    description: "Thorough system inspection, chemical washing of pre-filter chamber, sediment flushing, and complete TDS testing.",
    cta: "Book General Service"
  },
  {
    icon: Sparkles,
    title: "Filter Replacement",
    description: "Upgrade sediment, carbon, post-carbon, and RO membrane filters to extend system life and improve taste.",
    cta: "Book Filter Change"
  },
  {
    icon: PlusSquare,
    title: "RO Installation",
    description: "Expert installation of any brand purifier with perfect pipe layouts, electrical connection, and setup testing.",
    cta: "Book Installation"
  },
  {
    icon: Droplet,
    title: "Water Tank Cleaning",
    description: "Deep chemical cleaning and sanitation of your purifier's storage tank to prevent bacterial slime accumulation.",
    cta: "Book Tank Cleaning"
  },
  {
    icon: ShieldCheck,
    title: "Annual Maintenance (AMC)",
    description: "Year-round peace of mind. Covers scheduled service visits, filter changes, and repair assistance under one plan.",
    cta: "Book AMC Plan"
  },
  {
    icon: ShieldAlert,
    title: "Repair & Troubleshooting",
    description: "Prompt diagnosis and fixes for leaks, constant drainage, vibration noises, slow flow rate, or electrical failures.",
    cta: "Book Repair Service"
  },
  {
    icon: ShoppingBag,
    title: "New Purifier Sales",
    description: "Purchase premium, custom-assembled, or branded RO+UV+UF purifiers backed by a solid manufacturer warranty.",
    cta: "Inquire About Sales"
  },
  {
    icon: Share2,
    title: "Pipe & Leak Fixes",
    description: "Replacement of yellowed, fragile tubes and fixing leaky joints to protect your modular kitchen from damage.",
    cta: "Book Leak Repair"
  },
  {
    icon: GlassWater,
    title: "Water Quality Check",
    description: "Digital testing of TDS, pH, chlorine levels, and hardness of input and output water to ensure filtration safety.",
    cta: "Book Water Test"
  }
];

export default function Services({ onOpenBooking }: ServicesProps) {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-3.5 py-1.5 rounded-full">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-dark-text">
            Professional Solutions For All Purifiers
          </h2>
          <p className="text-zinc-500 font-medium max-w-xl mx-auto text-sm sm:text-base">
            From filter replacements to custom AMC plans, we handle all models with genuine spares and transparent pricing.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
                className="flex flex-col justify-between p-6 rounded-2xl bg-zinc-50 border border-zinc-100 hover:bg-white hover:border-primary/15 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group"
              >
                <div>
                  {/* Icon */}
                  <div className="p-3 w-fit rounded-xl bg-white border border-zinc-100 text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="mt-5 text-lg font-bold text-dark-text group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="mt-2.5 text-sm text-grey-text leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>

                {/* Button */}
                <button
                  onClick={() => onOpenBooking(service.title)}
                  className="mt-6 w-full py-2.5 px-4 text-xs font-bold text-zinc-700 bg-white border border-zinc-200 rounded-xl hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 cursor-pointer shadow-sm"
                >
                  {service.cta}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
