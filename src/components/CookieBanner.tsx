"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md z-40"
        >
          <div className="glass-card p-5 rounded-2xl flex flex-col gap-3 shadow-xl relative border border-zinc-200 bg-white">
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 p-1 rounded-full text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors"
            >
              <X size={16} />
            </button>

            <div className="flex items-start gap-3 pr-6">
              <Cookie className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-zinc-900">Cookie Preferences</h4>
                <p className="text-xs text-zinc-500 mt-1 leading-relaxed font-semibold">
                  We use cookies to improve your booking experience, track analytics, and remember preferences.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 justify-end mt-2">
              <button
                onClick={handleClose}
                className="px-4 py-2 border border-zinc-200 text-zinc-600 hover:bg-zinc-50 text-xs font-bold rounded-xl transition-all"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="px-4 py-2 bg-primary hover:bg-primary-dark text-white text-xs font-bold rounded-xl transition-all"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
