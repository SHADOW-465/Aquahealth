"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Phone, MessageSquare, Droplet } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationProps {
  onOpenBooking: () => void;
}

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Before/After", href: "#before-after" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export default function Navigation({ onOpenBooking }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "glass-nav py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="p-2 rounded-xl bg-primary/10 text-primary dark:bg-primary/20 group-hover:scale-105 transition-transform">
              <Droplet className="h-6 w-6 fill-current animate-pulse-slow text-secondary" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-dark-text dark:text-white">
                Aqua<span className="text-secondary">health</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-semibold leading-none">
                Pure Water. Honest Service.
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-zinc-600 hover:text-primary dark:text-zinc-300 dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919840275122"
              className="flex items-center gap-2 text-sm font-semibold text-zinc-700 hover:text-primary dark:text-zinc-200 dark:hover:text-white transition-colors"
            >
              <Phone size={16} className="text-primary" />
              <span>+91 98402 75122</span>
            </a>
            <a
              href="https://wa.me/919840275122?text=Hi%20Aquahealth%2C%20I%27d%20like%20to%20book%20a%20purifier%2520service."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-zinc-200 text-zinc-700 dark:border-zinc-700 dark:text-zinc-200 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 text-sm font-semibold transition-all"
            >
              <MessageSquare size={16} className="text-[#25D366]" />
              <span>WhatsApp Book</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="px-5 py-2 bg-primary hover:bg-primary-dark text-white rounded-xl text-sm font-semibold transition-all shadow-md shadow-primary/10 hover:shadow-primary/20 active:scale-95"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-xl text-base font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-primary dark:hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-zinc-100 dark:border-zinc-800 pt-4 space-y-3">
                <a
                  href="tel:+919840275122"
                  className="flex items-center gap-3 px-3 py-2 text-base font-semibold text-zinc-700 dark:text-zinc-200"
                >
                  <Phone size={18} className="text-primary" />
                  <span>Call: +91 98402 75122</span>
                </a>
                <a
                  href="https://wa.me/919840275122?text=Hi%20Aquahealth%2C%20I%27d%20like%20to%20book%20a%20purifier%20service."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-zinc-200 text-zinc-700 dark:border-zinc-700 dark:text-zinc-200 text-sm font-semibold"
                >
                  <MessageSquare size={18} className="text-[#25D366]" />
                  <span>Book on WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-2.5 bg-primary hover:bg-primary-dark text-white rounded-xl text-sm font-semibold transition-all shadow-md"
                >
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
