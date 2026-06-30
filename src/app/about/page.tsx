"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, HeartPulse, Sparkles, Milestone } from "lucide-react";

const TIMELINE = [
  {
    year: "2023",
    title: "Founding & Mission",
    desc: "Launched in Nanganallur, Chennai, to provide clean drinking water without complex, opaque sales tactics."
  },
  {
    year: "2024",
    title: "1,000+ Families Served",
    desc: "Expanded service teams to Velachery, Tambaram, and Adyar, focusing on same-day service turnaround."
  },
  {
    year: "2025",
    title: "Headless CMS & Custom Spares",
    desc: "Introduced strict quality control guidelines and standardized diagnostic inspection protocols."
  },
  {
    year: "2026",
    title: "Flagship Design System",
    desc: "Refined digital bookings, standardized technician field uniforms, and launched transparent pricing."
  }
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Intro Hero */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-3.5 py-1.5 rounded-full inline-block">
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-dark-text">
            Water Purity,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Built on Transparency.
            </span>
          </h1>
          <p className="text-zinc-500 font-medium text-sm sm:text-base leading-relaxed">
            Aquahealth was founded in Chennai to bridge the gap between technical water filtration systems and honest, reliable customer service. We believe every household deserves safe drinking water without the hassle of hidden charges or pushy sales calls.
          </p>
        </div>

        {/* Vision & Mission Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-y border-zinc-150 py-12">
          <div className="space-y-3 p-4">
            <h3 className="text-lg font-bold text-zinc-900">Our Mission</h3>
            <p className="text-sm text-zinc-500 font-semibold leading-relaxed">
              To deliver absolute water purity and complete pricing clarity to families across Chennai. We achieve this by deploying vetted water engineers, utilizing certified spare parts, and adjusting output TDS levels specifically matching ground conditions.
            </p>
          </div>
          <div className="space-y-3 p-4 border-t md:border-t-0 md:border-l border-zinc-150">
            <h3 className="text-lg font-bold text-zinc-900">Our Vision</h3>
            <p className="text-sm text-zinc-500 font-semibold leading-relaxed">
              To raise the industry standard of water purification service in India. We envision a future where drinking water health diagnostics are transparent, standardized, and easily managed at the tap of a button.
            </p>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="space-y-10">
          <h2 className="text-2xl font-bold text-zinc-900 text-center">Core Pillars of Trust</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100 flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-xl bg-white border border-zinc-200 text-primary">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-base font-bold text-zinc-900">100% Genuine Spares</h3>
              <p className="text-xs text-zinc-500 font-semibold leading-relaxed">
                Only certified high-rejection membranes, food-grade pipelines, and premium carbon blocks ever enter your purifier.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100 flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-xl bg-white border border-zinc-200 text-primary">
                <HeartPulse size={24} />
              </div>
              <h3 className="text-base font-bold text-zinc-900">Health Calibration</h3>
              <p className="text-xs text-zinc-500 font-semibold leading-relaxed">
                We calibrate output TDS levels to retain essential minerals, keeping water sweet, tasty, and healthy for children and elders.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100 flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-xl bg-white border border-zinc-200 text-primary">
                <Sparkles size={24} />
              </div>
              <h3 className="text-base font-bold text-zinc-900">Tidy Operations</h3>
              <p className="text-xs text-zinc-500 font-semibold leading-relaxed">
                Our vetted technicians wear clean uniforms, cover their shoes, work without cluttering, and sanitize the area before leaving.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Timeline */}
        <div className="space-y-12">
          <h2 className="text-2xl font-bold text-zinc-900 text-center flex items-center justify-center gap-2">
            <Milestone size={24} className="text-primary" />
            Our Journey In Chennai
          </h2>
          <div className="relative border-l border-zinc-200 ml-4 md:ml-32 space-y-10 py-4">
            {TIMELINE.map((t, idx) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-4 border-white bg-primary shadow-sm" />
                
                {/* Year Label */}
                <div className="absolute left-[-120px] top-0 hidden md:block text-right w-24 text-sm font-extrabold text-primary">
                  {t.year}
                </div>

                <div className="space-y-1.5">
                  <span className="inline-block md:hidden text-xs font-extrabold text-primary uppercase bg-primary/5 px-2 py-0.5 rounded">
                    {t.year}
                  </span>
                  <h4 className="text-base font-bold text-zinc-900">{t.title}</h4>
                  <p className="text-xs text-zinc-500 font-semibold leading-relaxed max-w-xl">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
