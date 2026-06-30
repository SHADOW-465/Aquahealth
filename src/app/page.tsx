"use client";

import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import WhyUs from "@/components/WhyUs";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import Pricing from "@/components/Pricing";
import FeatureHighlight from "@/components/FeatureHighlight";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import AreasServed from "@/components/AreasServed";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import BookingFormModal from "@/components/BookingFormModal";

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
      {/* Sticky Premium Navigation */}
      <Navigation onOpenBooking={() => handleOpenBooking()} />

      {/* Hero Section */}
      <main className="pt-2">
        <Hero onOpenBooking={() => handleOpenBooking()} />
        
        {/* Brand Trust Wall */}
        <TrustStrip />
        
        {/* Why Choose Us Section */}
        <WhyUs />
        
        {/* Step-by-Step Process */}
        <HowItWorks />
        
        {/* Our Main Services Grid */}
        <Services onOpenBooking={(srv) => handleOpenBooking(srv)} />
        
        {/* Before / After Servicing Comparisons */}
        <BeforeAfter />
        
        {/* Feature Highlight: 5 Free Pre-filters */}
        <FeatureHighlight onOpenBooking={() => handleOpenBooking("5 Free Pre-filters Offer")} />
        
        {/* Glassmorphism Pricing Cards */}
        <Pricing onOpenBooking={(plan) => handleOpenBooking(plan)} />
        
        {/* Stats Counter Strip */}
        <Stats />
        
        {/* Testimonials Review Cards */}
        <Testimonials />
        
        {/* Interactive Areas Served list */}
        <AreasServed onOpenBooking={(srv, area) => handleOpenBooking(srv, area)} />
        
        {/* Accordion FAQ Section */}
        <FAQ />
        
        {/* Large Conversion Call To Action Banner */}
        <CTABanner onOpenBooking={() => handleOpenBooking("Direct CTA Booking")} />
      </main>

      {/* Footer Details */}
      <Footer />

      {/* Floating Corner CTAs & Overlays */}
      <FloatingWhatsApp />
      
      {/* Intercept exit attempts */}
      <ExitIntentPopup onOpenBooking={(srv) => handleOpenBooking(srv)} />

      {/* Modal Lead Capture Form */}
      <BookingFormModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        prefilledService={prefilledService}
        prefilledArea={prefilledArea}
      />
    </div>
  );
}
