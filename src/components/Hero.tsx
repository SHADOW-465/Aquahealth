"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageSquare, Phone, ShieldCheck, Clock, Award, Landmark } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  // Generate random positions for floating particles
  const particles = Array.from({ length: 15 });

  return (
    <section id="home" className="relative min-h-[90vh] pt-24 lg:pt-32 pb-16 flex items-center bg-gradient-to-b from-blue-50/50 via-white to-white overflow-hidden">
      {/* Floating Particles background effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-secondary/15"
            style={{
              width: Math.random() * 12 + 6,
              height: Math.random() * 12 + 6,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100 - Math.random() * 150],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
              Serving Chennai & Surrounding Areas
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-dark-text leading-tight"
            >
              PURE WATER.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                PROFESSIONAL SERVICE.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-grey-text max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed"
            >
              Premium Water Purifier Sales, Installation & Expert Service across Chennai. 
              Enjoy Same-Day service, transparent pricing, and trusted technicians.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all cursor-pointer active:scale-98"
              >
                <MessageSquare size={20} className="fill-current" />
                Book on WhatsApp
              </button>
              
              <a
                href="tel:+919840275122"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-800 font-bold rounded-xl transition-all"
              >
                <Phone size={20} className="text-secondary" />
                Call Now: +91 98402 75122
              </a>
            </motion.div>

            {/* Trust Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start"
            >
              <div className="flex text-amber-400 text-xl font-bold">⭐⭐⭐⭐⭐</div>
              <p className="text-xs font-semibold text-zinc-500">
                Trusted by 1,000+ Chennai Families • 4.9/5 Rating
              </p>
            </motion.div>

            {/* Badges Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-6 border-t border-zinc-100 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-secondary shrink-0" />
                <span className="text-[11px] font-bold text-zinc-700 tracking-tight uppercase">Same Day Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-secondary shrink-0" />
                <span className="text-[11px] font-bold text-zinc-700 tracking-tight uppercase">Expert Techs</span>
              </div>
              <div className="flex items-center gap-2">
                <Landmark className="h-5 w-5 text-secondary shrink-0" />
                <span className="text-[11px] font-bold text-zinc-700 tracking-tight uppercase">Clear Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-secondary shrink-0" />
                <span className="text-[11px] font-bold text-zinc-700 tracking-tight uppercase">Genuine Parts</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Visual Asset */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[450px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-zinc-100 border border-zinc-200/50"
            >
              <Image
                src="/hero_purifier.png"
                alt="Modern water purifier dispensing clean water"
                fill
                priority
                sizes="(max-w-7xl) 100vw, 450px"
                className="object-cover object-center animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
