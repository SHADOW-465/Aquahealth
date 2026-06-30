"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift, ShieldAlert, Phone, ArrowRight } from "lucide-react";

interface ExitIntentPopupProps {
  onOpenBooking: (service?: string) => void;
}

export default function ExitIntentPopup({ onOpenBooking }: ExitIntentPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    // Only run on desktop and if not already triggered in this session
    const stored = sessionStorage.getItem("exit_intent_triggered");
    if (stored) {
      setHasTriggered(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 20 && !hasTriggered) {
        setIsVisible(true);
        setHasTriggered(true);
        sessionStorage.setItem("exit_intent_triggered", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasTriggered]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleClaim = () => {
    setIsVisible(false);
    onOpenBooking("General RO Service (10% Off Exit Offer)");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Popup Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 shadow-2xl dark:bg-zinc-900 border border-primary/20"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1.5 rounded-full text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <X size={18} />
            </button>

            {/* Icon Banner */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary dark:bg-primary/20">
                <Gift className="h-6 w-6 animate-bounce" />
              </div>
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Exclusive Chennai Offer</span>
                <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Wait! Don't leave yet</h4>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Is your water purifier overdue for a service? Protect your family's health today.
              </p>
              
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 flex items-start gap-3">
                <ShieldAlert className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-sm font-bold text-zinc-950 dark:text-zinc-50">10% OFF Service & Filters</h5>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                    Book within the next 24 hours to claim this offer. Same-day service available.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-6 space-y-2">
              <button
                onClick={handleClaim}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-medium bg-gradient-to-r from-primary to-secondary hover:opacity-95 transition-all shadow-md shadow-primary/20"
              >
                Claim 10% Discount Now
                <ArrowRight size={16} />
              </button>
              
              <a
                href="tel:+919840275122"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-zinc-200 text-zinc-700 dark:text-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-850 font-medium transition-all text-sm"
              >
                <Phone size={16} />
                Call Instead: +91 98402 75122
              </a>
            </div>
            
            <p className="text-[10px] text-center text-zinc-400 mt-4">
              *Valid for Nanganallur, Velachery, Tambaram, and all major areas in Chennai.
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
