"use client";

import React, { useState } from "react";
import { showToast } from "@/components/Toast";
import { Phone, Mail, Clock, MapPin, MessageSquare, AlertTriangle, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Name and phone number are required.");
      return;
    }
    
    setIsSubmitting(true);
    setTimeout(() => {
      showToast("Message successfully sent! We will contact you shortly.", "success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-3.5 py-1.5 rounded-full inline-block">
            Support Center
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-dark-text sm:text-5xl">
            Get In Touch
          </h1>
          <p className="text-zinc-500 font-medium text-sm sm:text-base leading-relaxed">
            Have questions about our AMC plans or purifier models? Contact our Chennai support team directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left panel: Info & Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-zinc-50 border border-zinc-150 p-6 sm:p-8 rounded-3xl space-y-6">
              <h3 className="text-lg font-bold text-zinc-900">Contact Details</h3>
              
              <ul className="space-y-4 text-xs sm:text-sm font-semibold">
                <li className="flex items-center gap-3 text-zinc-700">
                  <Phone size={18} className="text-primary shrink-0" />
                  <a href="tel:+919840275122" className="hover:text-primary transition-colors">
                    +91 98402 75122
                  </a>
                </li>
                <li className="flex items-center gap-3 text-zinc-700">
                  <MessageSquare size={18} className="text-[#25D366] shrink-0" />
                  <a href="https://wa.me/919840275122" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    WhatsApp Chat Support
                  </a>
                </li>
                <li className="flex items-center gap-3 text-zinc-700">
                  <Mail size={18} className="text-primary shrink-0" />
                  <a href="mailto:support@aquahealth.in" className="hover:text-primary transition-colors">
                    support@aquahealth.in
                  </a>
                </li>
                <li className="flex items-center gap-3 text-zinc-700">
                  <Clock size={18} className="text-primary shrink-0" />
                  <span className="text-zinc-500">Mon - Sun: 8:00 AM - 9:00 PM</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-700">
                  <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-zinc-500">Nanganallur, Chennai, Tamil Nadu - 600061</span>
                </li>
              </ul>
            </div>

            {/* Emergency Support */}
            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3.5">
              <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5 animate-pulse" />
              <div>
                <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wide">Emergency Assistance</h4>
                <p className="text-xs text-amber-700 font-semibold mt-0.5 leading-relaxed">
                  Purifier leakage flooded your floor? Call our priority emergency hotline at <a href="tel:+919840275122" className="underline font-bold">+91 98402 75122</a> for priority dispatch.
                </p>
              </div>
            </div>

            {/* Google Map Mock Panel */}
            <div className="relative w-full h-[220px] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-100 flex items-center justify-center text-center p-4">
              <div className="space-y-1">
                <MapPin className="mx-auto h-8 w-8 text-primary" />
                <h4 className="text-xs font-bold text-zinc-800">Chennai Service Map</h4>
                <p className="text-[10px] text-zinc-400 max-w-[200px] mx-auto font-semibold">Serving Nanganallur, Velachery, and surrounding Chennai suburbs.</p>
              </div>
            </div>
          </div>

          {/* Right panel: Contact Form */}
          <div className="lg:col-span-7 bg-white border border-zinc-200 p-6 sm:p-8 rounded-3xl shadow-lg space-y-6">
            <h3 className="text-xl font-bold text-zinc-900 border-b border-zinc-100 pb-4">
              Send Us A Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1.5">Your Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile number"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1.5">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1.5">Message / Inquiry Details</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-md transition-all cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
