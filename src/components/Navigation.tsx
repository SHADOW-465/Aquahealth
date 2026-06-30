"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageSquare, Droplet, ChevronDown, Wrench, ShieldCheck, ShoppingBag, Landmark } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationProps {
  onOpenBooking?: () => void;
}

const NAV_PAGES = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation({ onOpenBooking }: NavigationProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "glass-nav py-3 shadow-sm bg-white/95"
          : "bg-white/80 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img
              src="/logo.png"
              alt="Aquahealth Logo"
              className="h-10 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Nav Links & Mega Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-semibold transition-colors ${
                pathname === "/" ? "text-primary" : "text-zinc-600 hover:text-primary"
              }`}
            >
              Home
            </Link>

            {/* Services & Products Mega Menu Triggers */}
            <div
              className="relative group py-2"
              onMouseEnter={() => setActiveMega("services")}
              onMouseLeave={() => setActiveMega(null)}
            >
              <button
                className={`text-sm font-semibold flex items-center gap-1 transition-colors ${
                  pathname.startsWith("/services") || pathname.startsWith("/products")
                    ? "text-primary"
                    : "text-zinc-600 hover:text-primary"
                }`}
              >
                Solutions
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
              </button>

              <AnimatePresence>
                {activeMega === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full w-[600px] bg-white rounded-2xl border border-zinc-150 shadow-2xl p-6 grid grid-cols-12 gap-6"
                  >
                    {/* Columns */}
                    <div className="col-span-6 space-y-4">
                      <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                        Services
                      </h4>
                      <ul className="space-y-3">
                        <li>
                          <Link href="/services" className="flex items-start gap-2.5 group/item">
                            <Wrench size={16} className="text-primary mt-0.5" />
                            <div>
                              <h5 className="text-xs font-bold text-zinc-800 group-hover/item:text-primary">
                                RO Service & Repair
                              </h5>
                              <p className="text-[10px] text-zinc-400">Filter swaps, pumps, leaks fixes</p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/amc" className="flex items-start gap-2.5 group/item">
                            <ShieldCheck size={16} className="text-primary mt-0.5" />
                            <div>
                              <h5 className="text-xs font-bold text-zinc-800 group-hover/item:text-primary">
                                AMC Maintenance
                              </h5>
                              <p className="text-[10px] text-zinc-400">Year-round filter coverage</p>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="col-span-6 space-y-4">
                      <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                        Purifier Sales
                      </h4>
                      <ul className="space-y-3">
                        <li>
                          <Link href="/products" className="flex items-start gap-2.5 group/item">
                            <ShoppingBag size={16} className="text-primary mt-0.5" />
                            <div>
                              <h5 className="text-xs font-bold text-zinc-800 group-hover/item:text-primary">
                                Home RO Purifiers
                              </h5>
                              <p className="text-[10px] text-zinc-400">Alkaline & mineral custom setups</p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/products?category=commercial" className="flex items-start gap-2.5 group/item">
                            <Landmark size={16} className="text-primary mt-0.5" />
                            <div>
                              <h5 className="text-xs font-bold text-zinc-800 group-hover/item:text-primary">
                                Commercial RO
                              </h5>
                              <p className="text-[10px] text-zinc-400">Offices, clinics & restaurants</p>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {NAV_PAGES.slice(1).map((page) => (
              <Link
                key={page.label}
                href={page.href}
                className={`text-sm font-semibold transition-colors ${
                  pathname === page.href ? "text-primary" : "text-zinc-600 hover:text-primary"
                }`}
              >
                {page.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919840275122"
              className="flex items-center gap-2 text-sm font-bold text-zinc-700 hover:text-primary transition-colors"
            >
              <Phone size={16} className="text-primary" />
              <span>+91 98402 75122</span>
            </a>
            <Link
              href="/book"
              className="px-5 py-2.5 bg-primary hover:bg-primary-dark text-white rounded-xl text-sm font-bold transition-all shadow-md shadow-primary/10 hover:shadow-primary/20 active:scale-95"
            >
              Book Service
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-zinc-650 hover:bg-zinc-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-zinc-150 bg-white shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-xl text-base font-bold transition-colors ${
                  pathname === "/" ? "bg-zinc-50 text-primary" : "text-zinc-700 hover:bg-zinc-50"
                }`}
              >
                Home
              </Link>
              
              <Link
                href="/services"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-xl text-base font-bold transition-colors ${
                  pathname === "/services" ? "bg-zinc-50 text-primary" : "text-zinc-700 hover:bg-zinc-50"
                }`}
              >
                Services
              </Link>

              <Link
                href="/products"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-xl text-base font-bold transition-colors ${
                  pathname === "/products" ? "bg-zinc-50 text-primary" : "text-zinc-700 hover:bg-zinc-50"
                }`}
              >
                Purifiers Catalog
              </Link>

              {NAV_PAGES.slice(1).map((page) => (
                <Link
                  key={page.label}
                  href={page.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-xl text-base font-bold transition-colors ${
                    pathname === page.href ? "bg-zinc-50 text-primary" : "text-zinc-700 hover:bg-zinc-50"
                  }`}
                >
                  {page.label}
                </Link>
              ))}

              <div className="border-t border-zinc-100 pt-4 space-y-3">
                <a
                  href="tel:+919840275122"
                  className="flex items-center gap-3 px-3 py-2 text-base font-bold text-zinc-700"
                >
                  <Phone size={18} className="text-primary" />
                  <span>Call: +91 98402 75122</span>
                </a>
                <Link
                  href="/book"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center py-3 bg-primary hover:bg-primary-dark text-white rounded-xl text-sm font-bold transition-all shadow-md"
                >
                  Book Service online
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
