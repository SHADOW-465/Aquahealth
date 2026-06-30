"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ShieldCheck, HeartHandshake, Check, Star } from "lucide-react";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import WhyUs from "@/components/WhyUs";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import FeatureHighlight from "@/components/FeatureHighlight";
import Pricing from "@/components/Pricing";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import AreasServed from "@/components/AreasServed";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import BookingFormModal from "@/components/BookingFormModal";
import { PRODUCTS } from "@/data/cms";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState("");
  const [prefilledArea, setPrefilledArea] = useState("");

  const handleOpenBooking = (service: string = "", area: string = "") => {
    setPrefilledService(service);
    setPrefilledArea(area);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setPrefilledService("");
    setPrefilledArea("");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <Hero onOpenBooking={() => handleOpenBooking("Hero Instant Booking")} />
      
      {/* 2. Brand Trust Wall */}
      <TrustStrip />
      
      {/* 3. Featured Services Grid */}
      <Services onOpenBooking={(srv) => handleOpenBooking(srv)} />

      {/* 4. Why Aquahealth Section */}
      <WhyUs />
      
      {/* 5. How It Works Timeline */}
      <HowItWorks />
      
      {/* 6. Featured Products Showcase */}
      <section className="py-20 bg-section-bg border-y border-zinc-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-3.5 py-1.5 rounded-full">
              Product Catalogue
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-dark-text">
              Featured Water Purifiers
            </h2>
            <p className="text-zinc-500 font-medium max-w-xl mx-auto text-sm sm:text-base">
              Explore our range of premium, high-efficiency RO+UV units custom-calibrated for Chennai's municipal and borewell water.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {PRODUCTS.slice(0, 2).map((product) => (
              <div key={product.id} className="bg-white rounded-2xl border border-zinc-150 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow">
                <div className="relative w-full aspect-[4/3] bg-zinc-50 border-b border-zinc-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-w-7xl) 100vw, 450px"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    {product.category}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-zinc-900">{product.name}</h3>
                    <div className="text-xl font-black text-primary">{product.price}</div>
                    <p className="text-xs text-zinc-500 leading-relaxed font-semibold">{product.suitableFor}</p>
                  </div>
                  
                  <ul className="space-y-2">
                    {product.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-xs font-semibold text-zinc-650">
                        <Check size={14} className="text-accent shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/products?id=${product.id}`}
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 bg-zinc-50 hover:bg-zinc-100 text-zinc-800 text-xs font-bold rounded-xl border border-zinc-200 transition-colors"
                  >
                    View Details
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:text-primary-dark"
            >
              Browse Full Catalogue
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Interactive Before/After Comparisons */}
      <BeforeAfter />
      
      {/* 8. Feature Highlight: 5 Free Pre-filters */}
      <FeatureHighlight onOpenBooking={() => handleOpenBooking("5 Free Pre-filters Home Page")} />
      
      {/* 9. Glassmorphism Pricing & AMC Tiers */}
      <Pricing onOpenBooking={(plan) => handleOpenBooking(plan)} />
      
      {/* 10. Customer Reviews Grid */}
      <Testimonials />
      
      {/* 11. Statistics counters */}
      <Stats />
      
      {/* 12. Interactive Service Areas grid */}
      <AreasServed onOpenBooking={(srv, area) => handleOpenBooking(srv, area)} />
      
      {/* 13. FAQ Preview accordions */}
      <FAQ />

      {/* 14. Large Bottom Conversion CTA Banner */}
      <CTABanner onOpenBooking={() => handleOpenBooking("Home Page CTABanner")} />

      {/* Dynamic Booking Modal */}
      <BookingFormModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        prefilledService={prefilledService}
        prefilledArea={prefilledArea}
      />
    </div>
  );
}
