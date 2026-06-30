"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, ShieldCheck } from "lucide-react";

interface AreasServedProps {
  onOpenBooking: (service: string, area: string) => void;
}

const AREAS = [
  "Nanganallur",
  "Velachery",
  "Pallavaram",
  "Tambaram",
  "Chromepet",
  "Adyar",
  "Guindy",
  "Porur",
  "Anna Nagar",
  "OMR",
  "ECR",
  "T Nagar",
  "Medavakkam"
];

export default function AreasServed({ onOpenBooking }: AreasServedProps) {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

  return (
    <section id="areas-served" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Panel: Content */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-3.5 py-1.5 rounded-full inline-block">
              Service Locations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-dark-text">
              Expert RO Service, Delivered Across Chennai
            </h2>
            <p className="text-zinc-500 font-medium text-sm sm:text-base leading-relaxed">
              We cover all key areas across South Chennai and beyond. Select your location from the list to book an expert technician in your area instantly.
            </p>
            
            <div className="p-4 rounded-xl bg-green-50/50 border border-green-100 flex items-start gap-3 text-left">
              <ShieldCheck className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <p className="text-xs text-zinc-650 font-semibold leading-relaxed">
                <span className="font-bold text-zinc-800">Same-Day Service Guarantee:</span> Book before 12:00 PM for same-day inspection and repair in Nanganallur, Velachery, and surrounding suburbs.
              </p>
            </div>
          </div>

          {/* Right Panel: Interactive Area Pills Grid */}
          <div className="lg:col-span-7 bg-zinc-50 border border-zinc-150 p-6 sm:p-8 rounded-2xl">
            <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-6 text-center lg:text-left">
              Click Your Location To Book
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {AREAS.map((area) => (
                <button
                  key={area}
                  onClick={() => onOpenBooking("General RO Service", area)}
                  onMouseEnter={() => setHoveredArea(area)}
                  onMouseLeave={() => setHoveredArea(null)}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-zinc-200 hover:border-primary hover:shadow-md transition-all text-left cursor-pointer group"
                >
                  <div className="flex items-center gap-2">
                    <MapPin
                      size={16}
                      className={`shrink-0 transition-colors ${
                        hoveredArea === area ? "text-primary" : "text-zinc-400"
                      }`}
                    />
                    <span className="text-xs font-bold text-zinc-700 group-hover:text-primary transition-colors">
                      {area}
                    </span>
                  </div>
                  <ArrowRight
                    size={14}
                    className="text-zinc-300 group-hover:text-primary group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100"
                  />
                </button>
              ))}
              
              {/* Extra pill representing other areas */}
              <button
                onClick={() => onOpenBooking("General RO Service", "Other")}
                className="flex items-center justify-center p-3.5 rounded-xl border border-dashed border-zinc-300 hover:border-primary hover:bg-white text-xs font-bold text-zinc-500 hover:text-primary transition-all cursor-pointer"
              >
                + Other Areas
              </button>
            </div>
            
            <p className="text-[10px] text-center text-zinc-400 mt-6 font-semibold">
              Can't find your area? We service all locations in and around Chennai. Select "+ Other Areas" to request a callback.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
