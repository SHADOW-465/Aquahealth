"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Droplet } from "lucide-react";

interface FeatureHighlightProps {
  onOpenBooking: () => void;
}

export default function FeatureHighlight({ onOpenBooking }: FeatureHighlightProps) {
  return (
    <section className="py-20 bg-white border-t border-zinc-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image Pane */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[400px] aspect-square rounded-2xl overflow-hidden shadow-xl border border-zinc-200"
            >
              <Image
                src="/sediment_filter.png"
                alt="Premium sediment replacement filter close up"
                fill
                sizes="(max-w-7xl) 100vw, 400px"
                className="object-cover object-center"
              />
            </motion.div>
          </div>

          {/* Content Pane */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-center lg:text-left">
            <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent/15 px-3.5 py-1.5 rounded-full inline-block">
              Exclusive Customer Value
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-dark-text">
              5 FREE Extra Pre-Filters Included
            </h2>
            
            <p className="text-zinc-500 font-medium text-sm sm:text-base leading-relaxed">
              The external sediment filter captures the bulk of the visible mud, silt, and rust entering your purifier. At Aquahealth, we provide five extra pre-filters with every new purifier purchase, making it effortless to replace this outer layer when it accumulates dirt.
            </p>

            <div className="space-y-4 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-start gap-3.5 text-left">
                <div className="p-1 rounded-full bg-accent/10 text-accent shrink-0 mt-0.5">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900">Protects Downstream Filters</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    Regularly swapping the cheap outer pre-filter prevents clogging of expensive carbon and membrane filters inside.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3.5 text-left">
                <div className="p-1 rounded-full bg-accent/10 text-accent shrink-0 mt-0.5">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900">Extends Purifier Lifespan</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    Maintains optimal water input pressure, reducing workload on the booster pump and avoiding premature failure.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-lg shadow-primary/10 transition-all cursor-pointer"
              >
                Claim This Offer Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
