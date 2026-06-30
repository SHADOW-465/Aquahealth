"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, Clock, MapPin, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-zinc-400 border-t border-zinc-800">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Panel */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Aquahealth Logo"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            
            <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-semibold">
              Premium water purifier sales, installation, and expert repair services across Chennai. Dedicated to providing families with pure drinking water and honest, reliable customer care.
            </p>
            
            <div className="flex items-center gap-3 text-xs font-bold text-zinc-400">
              <ShieldCheck size={16} className="text-accent" />
              <span>Certified Spares & Guaranteed Service</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">Why Us</a>
              </li>
              <li>
                <a href="#before-after" className="hover:text-white transition-colors">Before/After</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Service Areas List */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Service Areas
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-zinc-500">
              <span>Nanganallur</span>
              <span>Velachery</span>
              <span>Pallavaram</span>
              <span>Tambaram</span>
              <span>Chromepet</span>
              <span>Adyar</span>
              <span>Guindy</span>
              <span>Porur</span>
              <span>Anna Nagar</span>
              <span>T Nagar</span>
              <span>OMR & ECR</span>
              <span>Medavakkam</span>
            </div>
          </div>

          {/* Contact Panel */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Contact & Hours
            </h4>
            <ul className="space-y-3.5 text-xs font-semibold">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-secondary shrink-0" />
                <a href="tel:+919840275122" className="text-zinc-300 hover:text-white transition-colors">
                  +91 98402 75122
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-secondary shrink-0" />
                <a href="mailto:support@aquahealth.in" className="text-zinc-300 hover:text-white transition-colors">
                  support@aquahealth.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-secondary shrink-0" />
                <span className="text-zinc-400">
                  Mon - Sun: 8:00 AM - 9:00 PM
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-secondary shrink-0 mt-0.5" />
                <span className="text-zinc-500">
                  Nanganallur, Chennai, Tamil Nadu - 600061
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-zinc-950 border-t border-zinc-800/40 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left text-[11px] font-semibold text-zinc-655">
            &copy; {currentYear} Aquahealth. All rights reserved. • Chennai, India.
          </p>
          
          <div className="flex items-center gap-4 text-zinc-500">
            <a href="#" className="hover:text-white transition-colors" title="Facebook">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-white transition-colors" title="Instagram">
              <svg className="h-4 w-4 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
