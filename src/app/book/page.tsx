"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Calendar, User, Phone, MapPin, Wrench, CheckCircle2, ChevronRight, Upload } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CHENNAI_AREAS = [
  "Nanganallur", "Velachery", "Pallavaram", "Tambaram", "Chromepet",
  "Adyar", "Guindy", "Medavakkam", "Porur", "Anna Nagar",
  "T Nagar", "OMR", "ECR"
];

const BRANDS = ["Kent", "Aquaguard", "Livpure", "AO Smith", "Pureit", "Blue Star", "Other"];

const SERVICES = [
  "General RO Service", "RO Installation", "Filter Replacement",
  "Water Tank Cleaning", "Annual Maintenance Contract (AMC)",
  "Repair & Troubleshooting", "Water Quality Check"
];

function BookingForm() {
  const searchParams = useSearchParams();
  const queryService = searchParams.get("service") || "";
  const queryBrand = searchParams.get("brand") || "";
  const queryArea = searchParams.get("area") || "";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "",
    customArea: "",
    brand: "",
    service: "",
    problem: "",
    preferredTime: "Morning (9 AM - 12 PM)",
  });
  
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      service: queryService || prev.service,
      brand: queryBrand || prev.brand,
      area: CHENNAI_AREAS.includes(queryArea) ? queryArea : (queryArea ? "Other" : prev.area),
      customArea: !CHENNAI_AREAS.includes(queryArea) && queryArea ? queryArea : prev.customArea
    }));
  }, [queryService, queryBrand, queryArea]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.service) {
      alert("Please fill in name, phone number, and service requested.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      const finalArea = formData.area === "Other" ? formData.customArea : formData.area;
      const waMessage = `Hi Aquahealth, I would like to book a water purifier service:
- *Name*: ${formData.name}
- *Phone*: ${formData.phone}
- *Area*: ${finalArea || "Not specified"}
- *Brand*: ${formData.brand || "Not specified"}
- *Service Type*: ${formData.service}
- *Problem Details*: ${formData.problem || "None"}
- *Preferred Time*: ${formData.preferredTime}
- *File Uploaded*: ${file ? "Yes" : "No"}`;

      const encodedMessage = encodeURIComponent(waMessage);
      const whatsappUrl = `https://wa.me/919840275122?text=${encodedMessage}`;

      // Redirect to WhatsApp
      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
      }, 2000);
    }, 1500);
  };

  return (
    <div className="bg-zinc-50 min-h-screen py-16 flex items-center justify-center">
      <div className="max-w-xl w-full px-4">
        
        <div className="bg-white border border-zinc-200 rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary p-8 text-white">
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">Book Service Call</h1>
            <p className="mt-1 text-xs sm:text-sm text-white/80 font-medium">
              Vetted technicians. Upfront pricing. No hidden surprises.
            </p>
          </div>

          <div className="p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400">
                        <User size={16} />
                      </span>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1.5">
                      WhatsApp/Phone Number *
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400">
                        <Phone size={16} />
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  {/* Service Area */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1.5">
                        Chennai Service Area *
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400">
                          <MapPin size={16} />
                        </span>
                        <select
                          name="area"
                          required
                          value={formData.area}
                          onChange={handleChange}
                          className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-xs sm:text-sm bg-white appearance-none"
                        >
                          <option value="">Select Area</option>
                          {CHENNAI_AREAS.map((a) => (
                            <option key={a} value={a}>{a}</option>
                          ))}
                          <option value="Other">Other Location</option>
                        </select>
                      </div>
                    </div>

                    {formData.area === "Other" && (
                      <div>
                        <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1.5">
                          Specify Location *
                        </label>
                        <input
                          type="text"
                          name="customArea"
                          required
                          value={formData.customArea}
                          onChange={handleChange}
                          placeholder="E.g., Tambaram West"
                          className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-xs sm:text-sm"
                        />
                      </div>
                    )}
                  </div>

                  {/* Service Type & Brand */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1.5">
                        Service Requested *
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400">
                          <Wrench size={16} />
                        </span>
                        <select
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-xs sm:text-sm bg-white appearance-none"
                        >
                          <option value="">Select Service</option>
                          {SERVICES.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1.5">
                        Purifier Brand
                      </label>
                      <select
                        name="brand"
                        value={formData.brand}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-xs sm:text-sm bg-white appearance-none"
                      >
                        <option value="">Select Brand</option>
                        {BRANDS.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Problem Description */}
                  <div>
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1.5">
                      Issue Description / Notes
                    </label>
                    <textarea
                      name="problem"
                      rows={3}
                      value={formData.problem}
                      onChange={handleChange}
                      placeholder="Describe water taste change, leakages, adapter issue, or filter blinking light..."
                      className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-xs sm:text-sm resize-none"
                    />
                  </div>

                  {/* Mock Image Upload */}
                  <div>
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1.5">
                      Upload Purifier Photo (Optional)
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-4 pb-4 border-2 border-zinc-300 border-dashed rounded-xl hover:border-primary transition-colors cursor-pointer relative">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="space-y-1 text-center">
                        <Upload className="mx-auto h-6 w-6 text-zinc-400" />
                        <div className="text-xs font-semibold text-primary">
                          {file ? file.name : "Choose a file from device"}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-bold bg-gradient-to-r from-primary to-secondary hover:opacity-95 active:scale-[0.99] transition-all shadow-md shadow-primary/10 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    ) : (
                      <>
                        Book Service on WhatsApp
                        <ChevronRight size={18} />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center text-center py-12 px-4 space-y-4">
                  <CheckCircle2 size={64} className="text-accent stroke-2 animate-bounce" />
                  <h3 className="text-2xl font-bold text-zinc-900">Request Received!</h3>
                  <p className="text-xs sm:text-sm text-zinc-500 font-semibold leading-relaxed max-w-sm">
                    We are now launching WhatsApp to connect you directly with our dispatcher technician to finalize scheduling.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold text-accent">
                    <span className="h-2 w-2 rounded-full bg-accent animate-ping" />
                    <span>Redirecting...</span>
                  </div>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function BookServicePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-zinc-50">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    }>
      <BookingForm />
    </Suspense>
  );
}
