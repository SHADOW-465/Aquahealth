"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, User, Phone, MapPin, Wrench, CheckCircle2, ChevronRight, Upload } from "lucide-react";

interface BookingFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
  prefilledBrand?: string;
  prefilledArea?: string;
}

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

export default function BookingFormModal({
  isOpen,
  onClose,
  prefilledService = "",
  prefilledBrand = "",
  prefilledArea = ""
}: BookingFormModalProps) {
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
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        service: prefilledService || prev.service,
        brand: prefilledBrand || prev.brand,
        area: CHENNAI_AREAS.includes(prefilledArea) ? prefilledArea : prev.area,
        customArea: !CHENNAI_AREAS.includes(prefilledArea) && prefilledArea ? prefilledArea : prev.customArea
      }));
      setIsSuccess(false);
      setIsSubmitting(false);
    }
  }, [isOpen, prefilledService, prefilledBrand, prefilledArea]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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

    // Mock API call then redirect to WhatsApp
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      const finalArea = formData.area === "Other" ? formData.customArea : formData.area;
      const waMessage = `Hi Aquahealth, I would like to book a service request:
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

      // Automatically open WhatsApp after a delay
      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
        onClose();
      }, 2000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
              <h3 className="text-2xl font-bold tracking-tight">Book Professional Service</h3>
              <p className="mt-1 text-sm text-white/80">
                Chennai's trusted water purifier service. Response within 15 minutes.
              </p>
            </div>

            <div className="p-6 max-h-[75vh] overflow-y-auto">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="booking-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400">
                          <User size={18} />
                        </span>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-100 transition-all"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1.5">
                        WhatsApp/Phone Number *
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400">
                          <Phone size={18} />
                        </span>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter 10-digit mobile number"
                          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-100 transition-all"
                        />
                      </div>
                    </div>

                    {/* Service Area */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1.5">
                          Select Chennai Area *
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400">
                            <MapPin size={18} />
                          </span>
                          <select
                            name="area"
                            required
                            value={formData.area}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm bg-white dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-100 transition-all appearance-none"
                          >
                            <option value="">Select Area</option>
                            {CHENNAI_AREAS.map((a) => (
                              <option key={a} value={a}>{a}</option>
                            ))}
                            <option value="Other">Other Chennai Location</option>
                          </select>
                        </div>
                      </div>

                      {formData.area === "Other" && (
                        <div>
                          <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1.5">
                            Enter Your Area *
                          </label>
                          <input
                            type="text"
                            name="customArea"
                            required
                            value={formData.customArea}
                            onChange={handleChange}
                            placeholder="E.g., Velachery Main Road"
                            className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-100 transition-all"
                          />
                        </div>
                      )}

                      {/* Brand */}
                      <div>
                        <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1.5">
                          Purifier Brand
                        </label>
                        <select
                          name="brand"
                          value={formData.brand}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm bg-white dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-100 transition-all appearance-none"
                        >
                          <option value="">Select Brand</option>
                          {BRANDS.map((b) => (
                            <option key={b} value={b}>{b}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Service Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1.5">
                          Service Needed *
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400">
                            <Wrench size={18} />
                          </span>
                          <select
                            name="service"
                            required
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm bg-white dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-100 transition-all appearance-none"
                          >
                            <option value="">Select Service</option>
                            {SERVICES.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Time slot */}
                      <div>
                        <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1.5">
                          Preferred Time Slot
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400">
                            <Calendar size={18} />
                          </span>
                          <select
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm bg-white dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-100 transition-all appearance-none"
                          >
                            <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                            <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                            <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Problem Description */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1.5">
                        Describe the issue / notes
                      </label>
                      <textarea
                        name="problem"
                        rows={2}
                        value={formData.problem}
                        onChange={handleChange}
                        placeholder="E.g., Bad taste, leaking water, filter light blinking..."
                        className="w-full px-4 py-2 rounded-lg border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-100 transition-all resize-none"
                      />
                    </div>

                    {/* Mock Image Upload */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1.5">
                        Upload Photo of Purifier/Filter (Optional)
                      </label>
                      <div className="mt-1 flex justify-center px-6 pt-3 pb-3 border-2 border-zinc-300 dark:border-zinc-700 border-dashed rounded-lg hover:border-primary dark:hover:border-primary transition-colors cursor-pointer relative">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <div className="space-y-1 text-center">
                          <Upload className="mx-auto h-6 w-6 text-zinc-400" />
                          <div className="flex text-xs text-zinc-600 dark:text-zinc-400">
                            <span className="relative rounded-md font-semibold text-primary hover:text-primary-dark">
                              {file ? file.name : "Choose a file"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-medium bg-gradient-to-r from-primary to-secondary hover:opacity-95 active:scale-[0.99] transition-all shadow-md shadow-primary/20 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      ) : (
                        <>
                          Confirm & Book on WhatsApp
                          <ChevronRight size={18} />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center text-center py-12 px-4"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="mb-4 text-accent"
                    >
                      <CheckCircle2 size={64} className="stroke-2" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Booking Confirmed!</h3>
                    <p className="mt-2 text-zinc-600 dark:text-zinc-400 max-w-sm">
                      We are now redirecting you to WhatsApp to complete your booking with our technician instantly.
                    </p>
                    <div className="mt-6 flex items-center justify-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-accent animate-ping" />
                      <span className="text-sm font-semibold text-accent">Redirecting...</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
