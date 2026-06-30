"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Info, PhoneCall } from "lucide-react";

interface PricingProps {
  onOpenBooking: (service: string) => void;
}

const PRICING_PLANS = [
  {
    title: "Inspection",
    price: "₹150 - ₹250",
    period: "Per Visit",
    description: "Ideal for checking TDS levels, minor filter checks, and identifying issues.",
    features: [
      "Water TDS level testing",
      "Full purifier diagnostics",
      "Filter lifespan check",
      "Joint & piping leakage check",
      "Technician report explanation"
    ],
    cta: "Book Inspection",
    popular: false
  },
  {
    title: "Basic Service",
    price: "₹1500",
    period: "Starting From",
    description: "Comprehensive maintenance to boost performance and taste quality.",
    features: [
      "All inspection checks included",
      "Deep tank cleaning & sanitization",
      "Outer pre-filter replacement",
      "Inner chamber flushing",
      "Pressure pump diagnosis"
    ],
    cta: "Book Service",
    popular: true
  },
  {
    title: "Major Repairs",
    price: "Custom Quote",
    period: "On Inspection",
    description: "Replacing damaged electrical parts, pumps, or vital membranes.",
    features: [
      "RO Membrane replacements",
      "Booster pump replacement",
      "SMPS power adapter fixes",
      "Auto-cut off sensor fixes",
      "90-day parts warranty"
    ],
    cta: "Request Quote",
    popular: false
  }
];

export default function Pricing({ onOpenBooking }: PricingProps) {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-3.5 py-1.5 rounded-full">
            Pricing Plans
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-dark-text">
            Transparent Pricing. No Hidden Surprises.
          </h2>
          <p className="text-zinc-500 font-medium max-w-xl mx-auto text-sm sm:text-base">
            We believe in honest pricing. Receive a detailed quotation before any repair work is commenced.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {PRICING_PLANS.map((plan, idx) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative flex flex-col justify-between p-8 rounded-2xl border transition-all duration-300 ${
                plan.popular
                  ? "bg-white border-primary shadow-xl shadow-primary/5 ring-1 ring-primary"
                  : "glass-card border-zinc-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-sm">
                  Most Popular
                </div>
              )}

              <div>
                {/* Title */}
                <h3 className="text-lg font-bold text-dark-text">{plan.title}</h3>
                
                {/* Price */}
                <div className="mt-4 flex items-baseline text-dark-text">
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                    {plan.price}
                  </span>
                  <span className="ml-1.5 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    / {plan.period}
                  </span>
                </div>
                
                <p className="mt-3 text-xs text-grey-text font-medium leading-relaxed">
                  {plan.description}
                </p>

                {/* Divider */}
                <div className="my-6 border-t border-zinc-100 dark:border-zinc-800" />

                {/* Features */}
                <ul className="space-y-3.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="p-0.5 rounded-full bg-accent/15 text-accent shrink-0 mt-0.5">
                        <Check size={14} className="stroke-3" />
                      </div>
                      <span className="text-xs font-semibold text-zinc-650 leading-tight">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenBooking(`${plan.title} (${plan.price})`)}
                className={`mt-8 w-full py-3 px-4 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                  plan.popular
                    ? "bg-primary hover:bg-primary-dark text-white shadow-md shadow-primary/10"
                    : "bg-zinc-150 hover:bg-zinc-200 text-zinc-800"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Pricing Note */}
        <div className="max-w-2xl mx-auto mt-12 p-4 rounded-xl bg-zinc-50 border border-zinc-150 flex items-start gap-3">
          <Info className="h-5 w-5 text-zinc-400 shrink-0 mt-0.5" />
          <p className="text-xs text-zinc-500 font-medium leading-relaxed">
            <span className="font-bold text-zinc-700">Pricing Note:</span> Final pricing depends on purifier condition and required replacement parts. You'll always receive a complete inspection explanation and cost approval before any work begins.
          </p>
        </div>
      </div>
    </section>
  );
}
