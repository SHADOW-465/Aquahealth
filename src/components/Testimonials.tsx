"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, MapPin } from "lucide-react";

const REVIEWS = [
  {
    name: "Rajesh Kumar",
    location: "Nanganallur, Chennai",
    stars: 5,
    text: "The technician from Aquahealth was very professional and thorough. He checked the input and output water TDS levels before and after replacing the filters. Honest service and transparent pricing.",
  },
  {
    name: "Priya Sridhar",
    location: "Velachery, Chennai",
    stars: 5,
    text: "We had a continuous water drainage issue in our Aquaguard purifier. The booking on WhatsApp was incredibly easy. The engineer diagnosed a failed auto-cut off sensor and replaced it. Very reasonable pricing.",
  },
  {
    name: "Balaji Krishnan",
    location: "Tambaram, Chennai",
    stars: 5,
    text: "Excellent AMC package. They set up regular tank cleaning and filter health checks. Our water taste has improved significantly. I appreciate that they don't push for unnecessary filter changes.",
  },
  {
    name: "Meera Venkatesh",
    location: "Adyar, Chennai",
    stars: 5,
    text: "Highly impressed by their response speed. Called them in the morning for a new installation, and the technician completed the setup by afternoon. Very polite and cleaned up the workspace after work.",
  }
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 bg-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-3.5 py-1.5 rounded-full">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-dark-text">
            Loved By Chennai Families
          </h2>
          <p className="text-zinc-500 font-medium max-w-xl mx-auto text-sm sm:text-base">
            Read real feedback from homeowners, apartments, and offices who rely on us for their daily pure drinking water.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-zinc-100 hover:shadow-lg transition-shadow relative"
            >
              <div>
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary/10 absolute top-4 right-4" />

                {/* Stars */}
                <div className="flex text-amber-400 gap-0.5 mb-4">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <Star key={i} size={16} className="fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed italic font-medium">
                  "{review.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 border-t border-zinc-100 dark:border-zinc-800 pt-4">
                <h4 className="text-sm font-bold text-dark-text">{review.name}</h4>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-semibold mt-1">
                  <MapPin size={12} className="text-primary" />
                  <span>{review.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
