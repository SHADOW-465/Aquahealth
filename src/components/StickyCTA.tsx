"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MessageSquare, Phone, CalendarRange } from "lucide-react";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only when scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-zinc-200 shadow-xl px-4 py-2.5">
      <div className="grid grid-cols-3 gap-3">
        {/* Call CTA */}
        <a
          href="tel:+919840275122"
          className="flex flex-col items-center justify-center gap-1 py-1.5 rounded-xl border border-zinc-200 text-zinc-700 active:bg-zinc-50"
        >
          <Phone size={18} className="text-primary" />
          <span className="text-[10px] font-bold uppercase tracking-tight">Call Us</span>
        </a>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/919840275122?text=Hi%20Aquahealth%2C%20I%20want%20to%20book%2520a%2520service."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-1.5 rounded-xl bg-[#25D366] text-white active:opacity-90"
        >
          <MessageSquare size={18} className="fill-current" />
          <span className="text-[10px] font-bold uppercase tracking-tight">WhatsApp</span>
        </a>

        {/* Form Page CTA */}
        <Link
          href="/book"
          className="flex flex-col items-center justify-center gap-1 py-1.5 rounded-xl bg-primary text-white active:bg-primary-dark"
        >
          <CalendarRange size={18} className="text-secondary" />
          <span className="text-[10px] font-bold uppercase tracking-tight">Book online</span>
        </Link>
      </div>
    </div>
  );
}
