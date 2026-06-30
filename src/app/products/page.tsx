"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { PRODUCTS, ProductItem } from "@/data/cms";
import { Check, ClipboardList, Info, ChevronRight } from "lucide-react";

const CATEGORIES = ["All", "Home RO", "Commercial RO", "Countertop", "Wall Mount"];

function ProductsCatalog() {
  const searchParams = useSearchParams();
  const preselectedId = searchParams.get("id");
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  // Automatically open product details if preselectedId is in search params
  useEffect(() => {
    if (preselectedId) {
      const prod = PRODUCTS.find((p) => p.id === preselectedId);
      if (prod) {
        setSelectedProduct(prod);
      }
    }
  }, [preselectedId]);

  const filteredProducts = selectedCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-3.5 py-1.5 rounded-full inline-block">
            Water Purifier Sales
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-dark-text sm:text-5xl">
            Premium Water Purifiers
          </h1>
          <p className="text-zinc-500 font-medium max-w-xl mx-auto text-sm sm:text-base">
            Choose from custom-engineered home RO filters or high-capacity commercial plants backed by warranties and expert installation.
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex justify-center flex-wrap gap-2.5 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setSelectedProduct(null); // Clear details when changing tabs
              }}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-primary text-white shadow-md shadow-primary/10"
                  : "bg-zinc-50 text-zinc-650 border border-zinc-200 hover:bg-zinc-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main Grid: List on Left, Specs flyout on Right (if selected) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Products List */}
          <div className={`${selectedProduct ? "lg:col-span-6" : "lg:col-span-12"} grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-350`}>
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-zinc-50 rounded-2xl border border-zinc-150 overflow-hidden flex flex-col justify-between hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="relative w-full aspect-[4/3] bg-white border-b border-zinc-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-w-7xl) 100vw, 450px"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-primary uppercase bg-primary/5 px-2 py-0.5 rounded">
                      {product.category}
                    </span>
                    <h3 className="text-base font-bold text-zinc-900 mt-1.5">{product.name}</h3>
                    <div className="text-lg font-black text-primary">{product.price}</div>
                  </div>

                  <p className="text-xs text-zinc-500 leading-relaxed font-semibold">
                    {product.suitableFor}
                  </p>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-white hover:bg-zinc-150 text-zinc-800 text-xs font-bold rounded-xl border border-zinc-200 transition-colors cursor-pointer"
                    >
                      Specifications
                    </button>
                    
                    <Link
                      href={`/book?service=Sales Inquiry&brand=${encodeURIComponent(product.name)}`}
                      className="flex-1 flex items-center justify-center py-2.5 bg-primary hover:bg-primary-dark text-white text-xs font-bold rounded-xl transition-colors shadow-sm"
                    >
                      Enquire Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Product Specifications Sidebar Panel */}
          {selectedProduct && (
            <div className="lg:col-span-6 bg-zinc-50 border border-primary/20 p-6 sm:p-8 rounded-2xl space-y-6 shadow-xl sticky top-24">
              <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
                <div>
                  <span className="text-[10px] font-bold text-primary uppercase bg-primary/5 px-2.5 py-1 rounded">
                    {selectedProduct.category}
                  </span>
                  <h2 className="text-xl font-bold text-zinc-900 mt-2">{selectedProduct.name}</h2>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="p-1 rounded-full hover:bg-zinc-200 text-zinc-400 hover:text-zinc-700 transition-colors cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Technical Specifications */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
                  <ClipboardList size={16} />
                  Technical Specifications
                </h4>
                
                <div className="border border-zinc-200 rounded-xl overflow-hidden bg-white">
                  <table className="min-w-full divide-y divide-zinc-200 text-xs font-semibold text-zinc-700">
                    <tbody className="divide-y divide-zinc-200">
                      {Object.entries(selectedProduct.specs).map(([key, val]) => (
                        <tr key={key} className="hover:bg-zinc-50/50">
                          <td className="px-4 py-3 bg-zinc-50 font-bold text-zinc-500 w-1/3 border-r border-zinc-200">{key}</td>
                          <td className="px-4 py-3 text-zinc-800">{val}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Features checklist */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                  Purification Highlights
                </h4>
                <ul className="space-y-2">
                  {selectedProduct.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs font-semibold text-zinc-650">
                      <Check size={14} className="text-accent shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing & Inquiry CTA */}
              <div className="bg-white border border-zinc-200 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold text-zinc-400 uppercase">Estimated Price</div>
                  <div className="text-2xl font-black text-primary">{selectedProduct.price}</div>
                </div>
                <Link
                  href={`/book?service=Sales Inquiry&brand=${encodeURIComponent(selectedProduct.name)}`}
                  className="flex items-center gap-1 px-5 py-3 bg-primary hover:bg-primary-dark text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-primary/10"
                >
                  Confirm & Enquire
                  <ChevronRight size={14} />
                </Link>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-zinc-50">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    }>
      <ProductsCatalog />
    </Suspense>
  );
}
