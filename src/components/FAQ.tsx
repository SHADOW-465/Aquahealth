"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "How often should I service my water purifier?",
    answer: "We recommend a general service once every 4 to 6 months. Regular maintenance includes internal tank cleaning and thorough testing to prevent microbial growth and ensure constant water flow.",
  },
  {
    question: "How often should filters be changed?",
    answer: "The sediment pre-filter should typically be replaced every 3 to 6 months depending on tap water turbidity. Carbon filters and sediment filters should be replaced every 9 to 12 months. The RO Membrane generally lasts 1.5 to 2 years, depending on input water TDS level and usage.",
  },
  {
    question: "Why does my RO water taste strange or bitter?",
    answer: "A bitter or bad taste usually indicates that the carbon block filter is exhausted and cannot absorb chlorine/odor anymore, or the RO Membrane has degraded, allowing dissolved salts to pass through. We suggest booking a quick TDS inspection to diagnose the issue.",
  },
  {
    question: "How long does a typical service take?",
    answer: "A general service and tank sanitization take around 45 to 60 minutes. Complete filter replacements and membrane upgrades take approximately 1 to 1.5 hours.",
  },
  {
    question: "Do you repair all water purifier brands?",
    answer: "Yes, we support Kent, Aquaguard, Livpure, AO Smith, Pureit, Blue Star, Havells, and custom-assembled local purifiers. We carry genuine compatible spares and filters for all major models.",
  },
  {
    question: "Can I book and track bookings through WhatsApp?",
    answer: "Absolutely! Clicking any 'Book' button on our page redirects you to WhatsApp where you can share details, chat directly with a technician, schedule visits, and send/receive photos.",
  },
  {
    question: "Do you visit apartments and high-rises in Chennai?",
    answer: "Yes, we regularly service individual flats in major high-rises and apartments across Velachery, OMR, Tambaram, and Adyar. We can also handle bulk filtration service requests for entire societies.",
  },
  {
    question: "Do you provide official invoices and warranty on spares?",
    answer: "Yes, we provide printed or digital invoices for all filter changes and repairs. All premium replacement parts (like booster pumps or SMPS adapters) carry standard manufacturer or dealer warranties, ranging from 3 months to 1 year.",
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-section-bg border-t border-zinc-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-3.5 py-1.5 rounded-full inline-block">
            Common Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-dark-text">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-500 font-medium max-w-xl mx-auto text-sm">
            Everything you need to know about our services, parts warranty, and booking process.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-zinc-150 overflow-hidden transition-all shadow-sm hover:shadow-md"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-sm sm:text-base text-zinc-800 hover:text-primary transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3 pr-4">
                    <HelpCircle size={18} className="text-primary shrink-0" />
                    {item.question}
                  </span>
                  <div className="shrink-0 p-1 bg-zinc-50 rounded-lg border border-zinc-200 text-zinc-400">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                {/* Animated Answer Wrapper */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="p-5 pt-0 text-xs sm:text-sm text-zinc-500 font-semibold leading-relaxed border-t border-zinc-100/60 bg-zinc-50/30">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
