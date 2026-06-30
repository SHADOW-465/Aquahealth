import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES_CMS } from "@/data/cms";
import { Check, Info, ChevronRight, Phone, Clock, ShieldCheck, ListOrdered } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES_CMS.map((service) => ({
    slug: service.slug
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES_CMS.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `Professional ${service.name} in Chennai | Aquahealth`,
    description: `Need expert ${service.name} in Chennai? Transparent rates, certified water engineers, and 90-day parts warranty. Book online now!`,
    openGraph: {
      title: `${service.name} Service Chennai | Aquahealth`,
      description: `${service.description} Starting from ${service.pricing}. Genuine compatible spares.`,
      url: `https://aquahealth.in/services/${slug}`,
    }
  };
}

export default async function ServiceDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES_CMS.find((s) => s.slug === slug);
  if (!service) {
    notFound();
  }

  // Service Schema Markup
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Aquahealth",
      "telephone": "+919840275122",
      "url": "https://aquahealth.in"
    },
    "description": service.description,
    "offers": {
      "@type": "Offer",
      "price": service.pricing.replace(/[^0-9]/g, "") || "199",
      "priceCurrency": "INR"
    },
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
            Purifier Solutions
          </span>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-dark-text leading-tight">
            Professional {service.name} in Chennai
          </h1>

          <p className="text-sm sm:text-base text-zinc-500 font-semibold max-w-xl mx-auto leading-relaxed">
            {service.description} Scheduled slots, certified engineers, and genuine compatible spare parts.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href={`/book?service=${encodeURIComponent(service.name)}`}
              className="w-full sm:w-auto px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-lg shadow-primary/10 transition-colors text-center"
            >
              Book This Service
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

      {/* Benefits & Pricing */}
      <section className="py-16 max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Benefits Panel */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-zinc-900">Key Benefits of {service.name}</h2>
          <ul className="space-y-4">
            {service.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-zinc-650">
                <div className="p-0.5 rounded-full bg-accent/15 text-accent mt-0.5 shrink-0">
                  <Check size={14} className="stroke-3" />
                </div>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing panel */}
        <div className="bg-zinc-50 border border-zinc-150 p-6 sm:p-8 rounded-3xl space-y-6">
          <div>
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Pricing Structure</span>
            <div className="text-3xl font-black text-primary mt-1">{service.pricing}</div>
          </div>
          
          <div className="border-t border-zinc-200 pt-4 flex items-start gap-3">
            <Info className="h-5 w-5 text-zinc-400 shrink-0 mt-0.5" />
            <p className="text-xs text-zinc-500 font-semibold leading-relaxed">
              Diagnostic inspection fee is included or waived if repair service is performed. All replacement spares are quoted and approved prior to service completion.
            </p>
          </div>
        </div>
      </section>

      {/* Service Process Timeline */}
      <section className="py-16 max-w-4xl mx-auto px-4 space-y-10 border-t border-zinc-100">
        <h2 className="text-2xl font-bold text-zinc-900 text-center flex items-center justify-center gap-2">
          <ListOrdered size={24} className="text-primary" />
          Our Step-by-Step Service Process
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
          {service.process.map((step, idx) => (
            <div key={idx} className="p-5 bg-zinc-50 border border-zinc-150 rounded-2xl space-y-2 relative">
              <span className="absolute top-4 right-4 text-xs font-black text-primary/10">0{idx + 1}</span>
              <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Step 0{idx + 1}</h4>
              <h3 className="text-sm font-bold text-zinc-900">{step}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Service FAQs */}
      <section className="py-16 max-w-3xl mx-auto px-4 space-y-8 border-t border-zinc-100">
        <h2 className="text-2xl font-bold text-zinc-900 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {service.faq.map((f, i) => (
            <div key={i} className="p-5 rounded-xl border border-zinc-150 bg-white space-y-2">
              <h4 className="text-sm font-bold text-zinc-800">Q: {f.question}</h4>
              <p className="text-xs text-zinc-550 leading-relaxed font-semibold">A: {f.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary-dark text-white text-center">
        <div className="max-w-xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black">Ready to Book {service.name}?</h2>
          <p className="text-xs sm:text-sm text-white/80 font-medium leading-relaxed max-w-sm mx-auto">
            Schedule an certified technician visit at your preferred timing in Chennai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href={`/book?service=${encodeURIComponent(service.name)}`}
              className="w-full sm:w-auto px-6 py-3 bg-white text-primary font-bold text-xs rounded-xl shadow-md"
            >
              Book Service Online
            </Link>
            <a
              href="tel:+919840275122"
              className="w-full sm:w-auto px-6 py-3 bg-primary-dark/40 border border-white/20 text-white font-bold text-xs rounded-xl"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
