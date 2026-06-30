import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICE_AREAS_CMS, SERVICES } from "@/data/cms";
import { Check, MapPin, ChevronRight, Phone, MessageSquare, ShieldCheck, Clock, Award } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// 1. Static parameter pre-rendering list
export async function generateStaticParams() {
  return SERVICE_AREAS_CMS.map((area) => ({
    slug: area.slug
  }));
}

// 2. SEO Dynamic Metadata generator
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const area = SERVICE_AREAS_CMS.find((a) => a.slug === slug);
  if (!area) return {};

  return {
    title: `Professional RO Water Purifier Service in ${area.name}, Chennai | Aquahealth`,
    description: `Expert RO installation, repair, filter replacements, and AMC plans in ${area.name} (Pincode: ${area.pincode}). Vetted technicians, upfront pricing. Book today!`,
    openGraph: {
      title: `RO Water Purifier Service in ${area.name} | Aquahealth`,
      description: `Need RO repair or service in ${area.name}? Get same-day service from certified engineers starting at ₹199.`,
      url: `https://aquahealth.in/service-areas/${slug}`,
    }
  };
}

export default async function ServiceAreaPage({ params }: PageProps) {
  const { slug } = await params;
  const area = SERVICE_AREAS_CMS.find((a) => a.slug === slug);
  if (!area) {
    notFound();
  }

  // 3. Local Business Schema markup
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Aquahealth ${area.name}`,
    "image": "https://aquahealth.in/hero_purifier.png",
    "telephone": "+919840275122",
    "priceRange": "₹199 - ₹3199",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": area.landmarks[0] || area.name,
      "addressLocality": area.name,
      "addressRegion": "Chennai, Tamil Nadu",
      "postalCode": area.pincode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9804,
      "longitude": 80.1963
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": area.name },
      ...area.nearbyAreas.map(item => ({ "@type": "AdministrativeArea", "name": item }))
    ]
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
            <MapPin size={14} className="text-secondary shrink-0" />
            <span>Pincode: {area.pincode} • Chennai Suburbs</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-dark-text leading-tight">
            Professional RO Water Purifier Service in <span className="text-primary">{area.name}</span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-500 font-semibold max-w-xl mx-auto leading-relaxed">
            Expert RO installation, repair, filter replacements, and AMC maintenance plans for homes and commercial businesses in {area.name} and surrounding neighborhoods.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href={`/book?area=${encodeURIComponent(area.name)}`}
              className="w-full sm:w-auto px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-lg shadow-primary/10 transition-colors text-center"
            >
              Book Service Online
            </Link>
            
            <a
              href="tel:+919840275122"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-800 font-bold rounded-xl transition-colors"
            >
              <Phone size={16} className="text-primary" />
              Call: +91 98402 75122
            </a>
          </div>

          {/* Travel details indicator */}
          <div className="flex justify-center gap-6 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-zinc-400 pt-4">
            <span>Distance from HQ: {area.distance}</span>
            <span>Est. Travel Time: {area.travelTime}</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 max-w-5xl mx-auto px-4 space-y-10">
        <h2 className="text-2xl font-bold text-zinc-900 text-center">Services Offered in {area.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.slice(0, 3).map((srv) => (
            <div key={srv.id} className="p-6 rounded-2xl bg-zinc-50 border border-zinc-150 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <h3 className="text-base font-bold text-zinc-900">{srv.title}</h3>
                <p className="text-xs text-zinc-550 leading-relaxed font-semibold">{srv.shortDesc}</p>
              </div>
              <Link
                href={`/book?service=${encodeURIComponent(srv.title)}&area=${encodeURIComponent(area.name)}`}
                className="mt-6 w-full flex items-center justify-center gap-1 py-2 bg-white hover:bg-zinc-150 text-zinc-800 text-xs font-bold rounded-lg border border-zinc-200 transition-colors"
              >
                Schedule Visit
                <ChevronRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-zinc-50 py-12 border-y border-zinc-150">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1.5">
            <Award className="mx-auto h-6 w-6 text-primary" />
            <h4 className="text-xs font-bold text-zinc-800 uppercase">Expert Techs</h4>
            <p className="text-[10px] text-zinc-400 font-semibold">Trained Engineers</p>
          </div>
          <div className="space-y-1.5">
            <ShieldCheck className="mx-auto h-6 w-6 text-primary" />
            <h4 className="text-xs font-bold text-zinc-800 uppercase">Genuine Spares</h4>
            <p className="text-[10px] text-zinc-400 font-semibold">Original Filters</p>
          </div>
          <div className="space-y-1.5">
            <Clock className="mx-auto h-6 w-6 text-primary" />
            <h4 className="text-xs font-bold text-zinc-800 uppercase">Same-Day Service</h4>
            <p className="text-[10px] text-zinc-400 font-semibold">Fast Turnaround</p>
          </div>
          <div className="space-y-1.5">
            <MapPin className="mx-auto h-6 w-6 text-primary" />
            <h4 className="text-xs font-bold text-zinc-800 uppercase">Local Landmarks</h4>
            <p className="text-[10px] text-zinc-400 font-semibold">{area.landmarks[0]}</p>
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      <section className="py-16 max-w-4xl mx-auto px-4 space-y-10">
        <h2 className="text-2xl font-bold text-zinc-900 text-center">Reviews from {area.name} Residents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {area.testimonials.map((t, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-zinc-200 space-y-4">
              <div className="flex text-amber-400 gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-current" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-zinc-650 italic font-semibold leading-relaxed">"{t.text}"</p>
              <div className="text-xs font-bold text-zinc-900">— {t.name} ({area.name})</div>
            </div>
          ))}
        </div>
      </section>

      {/* Nearby / Adjacent Locations */}
      <section className="bg-zinc-50 border-t border-zinc-150 py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-8 text-center">
          <h2 className="text-xl font-bold text-zinc-900">Serving Nearby Areas</h2>
          <p className="text-xs text-zinc-400 font-semibold max-w-sm mx-auto">We also serve these neighbouring residential zones around {area.name}:</p>
          
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {area.nearbyAreas.map((item) => (
              <span key={item} className="px-4 py-2 bg-white rounded-xl border border-zinc-200 text-xs font-bold text-zinc-650">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Localized FAQ Section */}
      <section className="py-16 max-w-3xl mx-auto px-4 space-y-10">
        <h2 className="text-2xl font-bold text-zinc-900 text-center">Local FAQs: {area.name}</h2>
        <div className="space-y-4">
          {area.faq.map((f, i) => (
            <div key={i} className="p-5 rounded-xl border border-zinc-150 bg-white space-y-2">
              <h4 className="text-sm font-bold text-zinc-800">Q: {f.question}</h4>
              <p className="text-xs text-zinc-550 leading-relaxed font-semibold">A: {f.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTABanner */}
      <section className="py-16 bg-primary text-white text-center relative overflow-hidden">
        <div className="max-w-2xl mx-auto px-4 space-y-6 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-black">Need RO Service in {area.name}?</h2>
          <p className="text-xs sm:text-sm text-white/80 font-medium leading-relaxed max-w-sm mx-auto">
            Book within the next 15 minutes to receive priority scheduling. Our local {area.name} technician is nearby.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href={`/book?area=${encodeURIComponent(area.name)}`}
              className="w-full sm:w-auto px-6 py-3 bg-white text-primary font-bold text-xs rounded-xl shadow-md"
            >
              Book on WhatsApp
            </Link>
            <a
              href="tel:+919840275122"
              className="w-full sm:w-auto px-6 py-3 bg-primary-dark/40 hover:bg-primary-dark/60 border border-white/20 text-white font-bold text-xs rounded-xl"
            >
              Call: +91 98402 75122
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Small helper star element
function Star({ size, className }: { size: number; className?: string }) {
  return (
    <svg className={`h-${size} w-${size} fill-current text-amber-400`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}
