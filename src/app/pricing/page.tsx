"use client";

import React from "react";
import Link from "next/link";
import { Info, HelpCircle, DollarSign, Check, PhoneCall } from "lucide-react";

const BASIC_RATES = [
  {
    service: "Inspection & Diagnostics",
    price: "₹199 - ₹350",
    desc: "Waived off if you proceed with any service or repair recommendations."
  },
  {
    service: "Outer Primary Sediment Filter",
    price: "₹199",
    desc: "Replacement cartridge for the external housing bowl (5 micron rating)."
  },
  {
    service: "General Purifier Servicing",
    price: "Starting from ₹350",
    desc: "Includes tank chemical sanitization, TDS test, and system flushing."
  },
  {
    service: "Annual Maintenance Cover (AMC)",
    price: "₹3,199 onwards",
    desc: "Full year cover for breakdown calls, inspections, and standard filters."
  }
];

const ESTIMATED_SPARES = [
  { part: "High-Rejection RO Membrane (75 GPD)", price: "₹1,800 - ₹2,200", warranty: "90 Days" },
  { part: "Heavy-Duty Booster Pump (75 GPD)", price: "₹1,950 - ₹2,400", warranty: "1 Year" },
  { part: "SMPS Power Adapter (24V/36V)", price: "₹850 - ₹1,200", warranty: "1 Year" },
  { part: "Active Carbon Filter Cartridge", price: "₹450 - ₹650", warranty: "90 Days" },
  { part: "Sediment Filter Cartridge (Internal)", price: "₹400 - ₹550", warranty: "90 Days" },
  { part: "Solenoid Valve (SV)", price: "₹350 - ₹500", warranty: "90 Days" },
  { part: "Float Sensor Switch", price: "₹250 - ₹350", warranty: "90 Days" },
  { part: "Food-Grade Connecting Tubes (LLDPE)", price: "₹150 - ₹250 (Full set)", warranty: "N/A" }
];

export default function PricingPage() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-3.5 py-1.5 rounded-full inline-block">
            Service Pricing
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-dark-text sm:text-5xl">
            Transparent Pricing
          </h1>
          <p className="text-zinc-500 font-medium text-sm sm:text-base leading-relaxed">
            Aquahealth is built on honesty. We itemize all rates and estimates. You will always receive a clear quotation and explanation before any technician work begins.
          </p>
        </div>

        {/* 1. Basic Rates Table */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-zinc-900 flex items-center gap-2">
            <DollarSign size={20} className="text-primary" />
            Standard Service Rates
          </h2>

          <div className="border border-zinc-200 rounded-2xl overflow-hidden bg-white shadow-sm">
            <div className="divide-y divide-zinc-200">
              {BASIC_RATES.map((rate, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row justify-between p-6 gap-2 sm:gap-6 hover:bg-zinc-50/50">
                  <div className="space-y-1 sm:max-w-lg">
                    <h4 className="text-sm font-bold text-zinc-900">{rate.service}</h4>
                    <p className="text-xs text-zinc-500 font-semibold leading-relaxed">{rate.desc}</p>
                  </div>
                  <div className="shrink-0 text-left sm:text-right font-black text-primary text-sm sm:text-base">
                    {rate.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Note */}
        <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-150 flex items-start gap-3">
          <Info className="h-5 w-5 text-zinc-400 shrink-0 mt-0.5" />
          <p className="text-xs text-zinc-500 font-semibold leading-relaxed">
            <span className="font-bold text-zinc-700">Disclaimer Note:</span> All service, repair, and spare parts rates are estimated values. Final repair pricing depends heavily on your purifier's overall condition and the specific replacement components required. No work is started without your prior cost approval.
          </p>
        </div>

        {/* 2. Spares Estimation Table */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-zinc-900">Estimated Spare Parts Pricing</h2>
            <p className="text-xs text-zinc-400 mt-1 font-semibold">Common high-quality replacement spares compatible with Kent, Aquaguard, and other models.</p>
          </div>

          <div className="border border-zinc-200 rounded-2xl overflow-hidden bg-white shadow-sm">
            <table className="min-w-full divide-y divide-zinc-200 text-left text-xs font-semibold text-zinc-750">
              <thead className="bg-zinc-50 text-zinc-400 uppercase tracking-widest text-[10px] font-bold">
                <tr>
                  <th className="px-6 py-4">Component Spare</th>
                  <th className="px-6 py-4">Price Range (Est.)</th>
                  <th className="px-6 py-4">Service Warranty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                {ESTIMATED_SPARES.map((spare, idx) => (
                  <tr key={idx} className="hover:bg-zinc-50/30">
                    <td className="px-6 py-4 font-bold text-zinc-900">{spare.part}</td>
                    <td className="px-6 py-4 text-primary font-bold">{spare.price}</td>
                    <td className="px-6 py-4">{spare.warranty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center pt-4">
          <Link
            href="/book"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-lg shadow-primary/10 transition-all"
          >
            Book An Inspection Visit
          </Link>
        </div>

      </div>
    </div>
  );
}
