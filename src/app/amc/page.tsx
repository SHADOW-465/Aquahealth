"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Check, Info, Calendar, PhoneCall, HelpCircle } from "lucide-react";

const BENEFITS = [
  {
    title: "Scheduled Filter Replacements",
    desc: "We track and execute replacements of sediment pre-filters, carbon block filters, and polishing carbon cartridges automatically."
  },
  {
    title: "Unlimited Breakdown Assistance",
    desc: "Experiencing a drop in water pressure or pump noise? AMC members get priority engineering dispatch within 4 hours at zero visit charge."
  },
  {
    title: "Water Quality Monitoring",
    desc: "During every visit, we test tap water and output RO water TDS, mineral content, and pH balance to ensure absolute filtration standards."
  },
  {
    title: "Deep Chamber Sanitization",
    desc: "Complete scrub and sanitization of the water storage tank and internal tubing using food-grade chemicals twice a year."
  }
];

const SCHEDULE = [
  { month: "Month 1", title: "Activation & Diagnostics", desc: "First visit to check input TDS, clean storage tank, and fit a new external sediment pre-filter." },
  { month: "Month 4", title: "Intermediate Check-up", desc: "Inspection of tubing joints, electrical wiring safety, pressure pump output, and pre-filter cleanup." },
  { month: "Month 8", title: "Mid-Term Service", desc: "Replacement of outer pre-filter cartridge and deep sanitation of the reservoir tank." },
  { month: "Month 12", title: "Renewal & Complete Servicing", desc: "Annual servicing check. Evaluation of membrane rejection rates, filter checks, and plan renewal options." }
];

export default function AMCPage() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Intro Banner */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-3.5 py-1.5 rounded-full inline-block">
            Maintenance Plans
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-dark-text sm:text-5xl">
            Annual Maintenance Contracts
          </h1>
          <p className="text-zinc-500 font-medium text-sm sm:text-base leading-relaxed">
            Ensure your family always drinks pure water. Our AMC plans cover all scheduled services, filter replacements, and breakdown calls under a single transparent price.
          </p>
        </div>

        {/* Plan Spotlight Card */}
        <div className="bg-white border-2 border-primary rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 px-6 py-2 bg-primary text-white text-xs font-bold rounded-bl-2xl uppercase tracking-wider">
            Best Value Plan
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-zinc-200 pb-6">
            <div>
              <span className="text-xs font-bold text-primary uppercase">Aquahealth Protection AMC</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 mt-1">Comprehensive Cover</h2>
            </div>
            <div className="flex items-baseline text-zinc-950 font-black">
              <span className="text-3xl sm:text-4xl">₹3,199</span>
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-1">/ Year</span>
            </div>
          </div>

          {/* Checklist */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
            <div className="flex items-start gap-2.5 text-xs font-semibold text-zinc-650">
              <Check size={16} className="text-accent shrink-0 mt-0.5" />
              <span>Includes 2 scheduled deep services & sanitizations</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs font-semibold text-zinc-650">
              <Check size={16} className="text-accent shrink-0 mt-0.5" />
              <span>Includes replacement of sediment & carbon block filters</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs font-semibold text-zinc-650">
              <Check size={16} className="text-accent shrink-0 mt-0.5" />
              <span>Unlimited emergency breakdown visits (no service fee)</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs font-semibold text-zinc-650">
              <Check size={16} className="text-accent shrink-0 mt-0.5" />
              <span>Free calibration of pump pressure & flow parameters</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-zinc-50 p-4 rounded-2xl border border-zinc-150">
            <div className="flex items-start gap-2 text-xs text-zinc-500 font-semibold leading-relaxed">
              <Info size={16} className="text-zinc-400 shrink-0 mt-0.5" />
              <span>RO Membrane replacement, if required, is charged separately with a 15% discount for AMC members.</span>
            </div>
            <Link
              href="/book?service=Annual Maintenance Contract (AMC)"
              className="shrink-0 w-full sm:w-auto px-6 py-3 bg-primary hover:bg-primary-dark text-white text-xs font-bold rounded-xl text-center shadow-md"
            >
              Book AMC Plan
            </Link>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-zinc-900 text-center">Why Subscribe to Aquahealth AMC?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BENEFITS.map((b) => (
              <div key={b.title} className="p-6 rounded-2xl bg-zinc-50 border border-zinc-150 space-y-2">
                <h3 className="text-base font-bold text-zinc-900">{b.title}</h3>
                <p className="text-xs text-zinc-500 font-semibold leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule Timeline */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-zinc-900 text-center flex items-center justify-center gap-2">
            <Calendar size={24} className="text-primary" />
            Your AMC Schedule Timeline
          </h2>
          <div className="border border-zinc-150 rounded-2xl overflow-hidden bg-white shadow-sm">
            <div className="divide-y divide-zinc-200">
              {SCHEDULE.map((s, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-start p-6 gap-4 sm:gap-8 hover:bg-zinc-50/50">
                  <div className="shrink-0">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-lg uppercase tracking-wider">
                      {s.month}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-zinc-900">{s.title}</h4>
                    <p className="text-xs text-zinc-500 font-semibold leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
