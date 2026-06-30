"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, ShieldCheck, HeartHandshake, Star } from "lucide-react";

const STATS_LIST = [
  {
    icon: Users,
    number: "1000+",
    label: "Happy Customers",
    desc: "Families across Chennai trust us"
  },
  {
    icon: ShieldCheck,
    number: "5000+",
    label: "Filters Replaced",
    desc: "Only genuine, certified components used"
  },
  {
    icon: HeartHandshake,
    number: "100%",
    label: "Transparent Pricing",
    desc: "No hidden charges, zero surprises"
  },
  {
    icon: Star,
    number: "5★",
    label: "Customer Rating",
    desc: "Consistent 4.9+ stars local rating"
  }
];

export default function Stats() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white relative overflow-hidden">
      {/* Decorative vector background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS_LIST.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex flex-col items-center text-center space-y-2 p-4 rounded-xl hover:bg-white/5 transition-all"
              >
                {/* Icon wrapper */}
                <div className="p-3 bg-white/10 rounded-xl text-secondary mb-2">
                  <Icon className="h-6 w-6" />
                </div>
                
                {/* Number */}
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight font-mono">
                  {stat.number}
                </span>
                
                {/* Label */}
                <h4 className="text-sm font-bold tracking-tight uppercase">
                  {stat.label}
                </h4>
                
                {/* Subtext */}
                <p className="text-[10px] sm:text-xs text-white/70 font-semibold max-w-[150px]">
                  {stat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
