"use client";

import React from "react";
import Link from "next/link";
import { SERVICES } from "@/data/cms";
import * as Icons from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-3.5 py-1.5 rounded-full inline-block">
            Our Solutions
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-dark-text sm:text-5xl">
            Water Purifier Services Chennai
          </h1>
          <p className="text-zinc-500 font-medium max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            From emergency repairs to periodic filter replacements and custom AMC plans, discover our full catalog of water quality solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            // Dynamically resolve icon component
            const IconComponent = (Icons as any)[service.icon] || Icons.HelpCircle;

            return (
              <div
                key={service.id}
                className="flex flex-col justify-between p-8 rounded-2xl bg-zinc-50 border border-zinc-150 hover:bg-white hover:border-primary/20 hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  {/* Icon */}
                  <div className="p-3 w-fit rounded-xl bg-white border border-zinc-150 text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="mt-6 text-lg font-bold text-dark-text group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-grey-text leading-relaxed font-semibold">
                    {service.longDesc}
                  </p>

                  {/* Highlights checklist */}
                  <ul className="mt-4 space-y-2 border-t border-zinc-100 dark:border-zinc-800 pt-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-zinc-500">
                        <Icons.Check size={14} className="text-accent shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Booking Trigger Link */}
                <Link
                  href={`/book?service=${encodeURIComponent(service.title)}`}
                  className="mt-8 w-full flex items-center justify-center py-3 bg-white hover:bg-primary hover:text-white border border-zinc-200 hover:border-primary text-zinc-700 text-xs font-bold rounded-xl transition-all shadow-sm"
                >
                  {service.cta}
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
