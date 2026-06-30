"use client";

import React from "react";
import { MessageSquare, Phone, Clock, ShieldCheck } from "lucide-react";

interface CTABannerProps {
  onOpenBooking: () => void;
}

export default function CTABanner({ onOpenBooking }: CTABannerProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary-dark text-white relative overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full inline-block">
          Fast Service Chennai
        </span>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
          Need RO Service Today?
        </h2>

        <p className="text-base sm:text-lg text-white/80 font-medium max-w-xl mx-auto leading-relaxed">
          Book instantly through WhatsApp. Enjoy 15-minute response times, expert technicians, and transparent pricing.
        </p>

        {/* Feature Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold uppercase tracking-wider py-4">
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-secondary" />
            <span>Response In 15 Mins</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-secondary" />
            <span>Genuine Replacement Parts</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 bg-white hover:bg-zinc-50 text-primary font-bold rounded-xl shadow-lg transition-all cursor-pointer active:scale-98"
          >
            <MessageSquare size={20} className="text-[#25D366] fill-current" />
            Book on WhatsApp
          </button>
          
          <a
            href="tel:+919840275122"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 bg-primary-dark/40 hover:bg-primary-dark/60 border border-white/20 text-white font-bold rounded-xl transition-all"
          >
            <Phone size={20} className="text-secondary" />
            Call Now: +91 98402 75122
          </a>
        </div>
      </div>
    </section>
  );
}
