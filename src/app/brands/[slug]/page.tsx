import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BRANDS_CMS, SERVICES } from "@/data/cms";
import { Check, Info, ChevronRight, Phone, Award, ShieldCheck, HelpCircle } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BRANDS_CMS.map((brand) => ({
    slug: brand.slug
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const brand = BRANDS_CMS.find((b) => b.slug === slug);
  if (!brand) return {};

  return {
    title: `Professional ${brand.name} Water Purifier Service Chennai | Aquahealth`,
    description: `Need RO service or repairs for your ${brand.name} purifier in Chennai? Certified technicians, compatible genuine spare parts. Book online now!`,
    openGraph: {
      title: `${brand.name} Water Purifier Service & Repair Chennai | Aquahealth`,
      description: `Expert technicians compatible with ${brand.name} purifiers. Same-day service, 90-day parts warranty.`,
      url: `https://aquahealth.in/brands/${slug}`,
    }
  };
}

export default async function BrandPage({ params }: PageProps) {
  const { slug } = await params;
  const brand = BRANDS_CMS.find((b) => b.slug === slug);
  if (!brand) {
    notFound();
  }

  // Service Schema Markup
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${brand.name} Water Purifier Service`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Aquahealth",
      "telephone": "+919840275122",
      "url": "https://aquahealth.in"
    },
    "description": `Expert maintenance, filter changes, and repairs compatible with ${brand.name} RO systems in Chennai.`,
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Chennai"
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-blue-50/40 via-white to-white border-b border-zinc-100">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-3.5 py-1.5 rounded-full inline-block">
            Brand Compatibility Expert
          </span>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-dark-text leading-tight">
            {brand.name} Water Purifier Service in Chennai
          </h1>

          <p className="text-sm sm:text-base text-zinc-500 font-semibold max-w-xl mx-auto leading-relaxed">
            Get professional repair, filter replacements, and scheduled maintenance for your {brand.name} RO system. We carry genuine compatible spares and filters.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href={`/book?brand=${encodeURIComponent(brand.name)}`}
              className="w-full sm:w-auto px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-lg shadow-primary/10 transition-colors text-center"
            >
              Book Service Call
            </Link>
            
            <a
              href="tel:+919840275122"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-800 font-bold rounded-xl transition-colors"
            >
              <Phone size={16} className="text-primary" />
              Call: +91 98402 75122
            </a>
          </div>
        </div>
      </section>

      {/* Brand Overview & Signs */}
      <section className="py-16 max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-zinc-900">About {brand.name} Systems</h2>
          <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-semibold">
            {brand.description} While these purifiers are highly efficient, Chennai's groundwater hardness demands regular maintenance of the filtration cartridges and membranes to guarantee drinking hygiene.
          </p>
          
          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-150 flex items-start gap-3">
            <Info className="h-5 w-5 text-zinc-400 shrink-0 mt-0.5" />
            <p className="text-[11px] text-zinc-500 font-semibold leading-relaxed">
              We use premium components that are fully compatible with {brand.name} specifications, matching flow rates and pressure tolerances.
            </p>
          </div>
        </div>

        {/* Common Issues list */}
        <div className="bg-zinc-50 border border-zinc-150 p-6 rounded-2xl space-y-4">
          <h3 className="text-base font-bold text-zinc-900">Common {brand.name} Purifier Issues</h3>
          <ul className="space-y-3.5">
            {brand.commonIssues.map((issue, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs font-semibold text-zinc-650">
                <Check size={14} className="text-primary shrink-0 mt-0.5" />
                <span>{issue}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Brand-Specific FAQs */}
      <section className="py-16 max-w-3xl mx-auto px-4 space-y-8 border-t border-zinc-100">
        <h2 className="text-2xl font-bold text-zinc-900 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {brand.faq.map((f, i) => (
            <div key={i} className="p-5 rounded-xl border border-zinc-150 bg-white space-y-2">
              <h4 className="text-sm font-bold text-zinc-800">Q: {f.question}</h4>
              <p className="text-xs text-zinc-550 leading-relaxed font-semibold">A: {f.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Spares & Quality Badges */}
      <section className="bg-zinc-50 py-16 border-t border-zinc-150">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-2xl bg-white border border-zinc-200 space-y-3">
            <ShieldCheck className="mx-auto h-8 w-8 text-primary" />
            <h4 className="text-sm font-bold text-zinc-900">Compatible Spares</h4>
            <p className="text-[11px] text-zinc-400 font-semibold">Genuine filter block and membrane replacements.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-zinc-200 space-y-3">
            <Award className="mx-auto h-8 w-8 text-primary" />
            <h4 className="text-sm font-bold text-zinc-900">Experienced Techs</h4>
            <p className="text-[11px] text-zinc-400 font-semibold">Engineers trained on all branded models.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-zinc-200 space-y-3">
            <Info className="mx-auto h-8 w-8 text-primary" />
            <h4 className="text-sm font-bold text-zinc-900">Upfront Estimates</h4>
            <p className="text-[11px] text-zinc-400 font-semibold">Clear price quotes before servicing starts.</p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white text-center">
        <div className="max-w-xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black">Need RO Service for your {brand.name}?</h2>
          <p className="text-xs sm:text-sm text-white/80 font-medium leading-relaxed max-w-sm mx-auto">
            Book now and get a certified technician at your Chennai doorstep within hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href={`/book?brand=${encodeURIComponent(brand.name)}`}
              className="w-full sm:w-auto px-6 py-3 bg-white text-primary font-bold text-xs rounded-xl shadow-md"
            >
              Book Service Online
            </Link>
            <a
              href="tel:+919840275122"
              className="w-full sm:w-auto px-6 py-3 bg-primary-dark/40 border border-white/20 text-white font-bold text-xs rounded-xl"
            >
              Call Hotline
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
