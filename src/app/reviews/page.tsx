"use client";

import React from "react";
import Link from "next/link";
import { REVIEWS } from "@/data/cms";
import { Star, MessageSquare, Quote, CheckCircle2, ChevronRight } from "lucide-react";

export default function ReviewsPage() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-3.5 py-1.5 rounded-full inline-block">
            Customer Feedback
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-dark-text sm:text-5xl">
            Customer Reviews & Ratings
          </h1>
          <p className="text-zinc-500 font-medium text-sm sm:text-base leading-relaxed">
            Aquahealth is rated 4.9/5 stars by Chennai homeowners. Explore real reviews, rating summaries, and service case studies.
          </p>
        </div>

        {/* Ratings Summary Dashboard */}
        <div className="bg-zinc-50 border border-zinc-150 p-6 sm:p-8 rounded-3xl grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Average Score */}
          <div className="text-center space-y-2 md:border-r border-zinc-200 py-2">
            <div className="text-5xl font-black text-primary">4.9</div>
            <div className="flex justify-center text-amber-400 gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} className="fill-current" />
              ))}
            </div>
            <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">
              Based on 1,200+ local ratings
            </p>
          </div>

          {/* Breakdown bars */}
          <div className="md:col-span-2 space-y-2">
            <div className="flex items-center gap-3 text-xs font-bold text-zinc-500">
              <span className="w-12">5 Star</span>
              <div className="flex-1 h-2 bg-zinc-200 rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: "94%" }} />
              </div>
              <span className="w-8 text-right">94%</span>
            </div>
            <div className="flex items-center gap-3 text-xs font-bold text-zinc-500">
              <span className="w-12">4 Star</span>
              <div className="flex-1 h-2 bg-zinc-200 rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: "5%" }} />
              </div>
              <span className="w-8 text-right">5%</span>
            </div>
            <div className="flex items-center gap-3 text-xs font-bold text-zinc-500">
              <span className="w-12">3 Star</span>
              <div className="flex-1 h-2 bg-zinc-200 rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: "1%" }} />
              </div>
              <span className="w-8 text-right">1%</span>
            </div>
          </div>
        </div>

        {/* Case Studies / Customer Stories Section */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-zinc-900">Featured Service Case Studies</h2>
          
          <div className="space-y-6">
            {/* Case Study 1 */}
            <div className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:shadow-md transition-shadow">
              <div className="md:col-span-8 space-y-3">
                <span className="text-[10px] font-bold text-primary uppercase bg-primary/5 px-2 py-0.5 rounded">
                  Borewell Water Treatment (TDS 1600+)
                </span>
                <h3 className="text-lg font-bold text-zinc-900">Resolving Saline Taste in Tambaram Villa</h3>
                <p className="text-xs sm:text-sm text-zinc-500 font-semibold leading-relaxed">
                  The client complained that their existing purifier water tasted bitter and saline. Our engineer tested the input groundwater, revealing a TDS level of 1,650 ppm. We replaced the depleted membrane with a high-rejection 80 GPD membrane and adjusted the mineral control, bringing output TDS down to 90 ppm.
                </p>
                <div className="flex items-center gap-2 text-xs font-bold text-accent">
                  <CheckCircle2 size={16} />
                  <span>Result: Sweet taste restored, TDS lowered by 94.5%</span>
                </div>
              </div>
              <div className="md:col-span-4 bg-zinc-50 p-4 rounded-xl border border-zinc-150 space-y-2 self-stretch flex flex-col justify-center">
                <div className="text-[10px] uppercase font-bold text-zinc-400">Customer Quote</div>
                <p className="text-xs italic font-medium text-zinc-650">"Our water tastes wonderful now. The explanation from the technician was very detailed and professional."</p>
                <div className="text-[10px] font-bold text-zinc-800">— S. Krishnan, Tambaram</div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-zinc-900">Recent Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS.map((review) => (
              <div
                key={review.id}
                className="flex flex-col justify-between p-6 rounded-2xl bg-zinc-50 border border-zinc-150 relative"
              >
                <Quote className="h-8 w-8 text-primary/10 absolute top-4 right-4" />
                
                <div>
                  <div className="flex text-amber-400 gap-0.5 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={14} className="fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 italic font-semibold leading-relaxed">
                    "{review.text}"
                  </p>
                </div>

                <div className="mt-6 border-t border-zinc-200/50 pt-4 flex items-center justify-between text-xs font-bold text-zinc-500">
                  <div>
                    <h4 className="text-zinc-900">{review.name}</h4>
                    <span className="text-[10px] text-zinc-400">{review.location}</span>
                  </div>
                  <span className="text-[10px] font-semibold text-zinc-450">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/book"
            className="inline-flex items-center gap-1.5 px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-lg transition-all"
          >
            Experience Professional Service Today
            <ChevronRight size={16} />
          </Link>
        </div>

      </div>
    </div>
  );
}
