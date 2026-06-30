"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { showToast } from "@/components/Toast";
import { BLOGS } from "@/data/cms";
import { Search, Calendar, Clock, ChevronRight } from "lucide-react";

const CATEGORIES = ["All", "Water Safety", "Maintenance", "Technology"];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    showToast("Thank you for subscribing to our water health newsletter!", "success");
    setEmail("");
  };

  const filteredBlogs = BLOGS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredPost = BLOGS.find(p => p.featured);

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-3.5 py-1.5 rounded-full inline-block">
            Aquahealth Journal
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-dark-text sm:text-5xl">
            Water Safety & Purifier Guides
          </h1>
          <p className="text-zinc-500 font-medium text-sm sm:text-base leading-relaxed">
            Educational articles, filter maintenance tips, and water safety updates tailored for Chennai households.
          </p>
        </div>

        {/* Featured Post (Visual panel at top) */}
        {featuredPost && activeCategory === "All" && !searchQuery && (
          <div className="bg-zinc-50 border border-zinc-150 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto hover:shadow-md transition-shadow">
            <div className="lg:col-span-7 relative w-full aspect-[16/10] bg-white">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                sizes="(max-w-7xl) 100vw, 650px"
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-5 p-6 sm:p-8 space-y-4">
              <span className="text-[10px] font-bold text-primary uppercase bg-primary/10 px-2.5 py-1 rounded">
                Featured Article
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 font-semibold leading-relaxed">
                {featuredPost.excerpt}
              </p>
              
              <div className="flex items-center gap-4 text-[10px] text-zinc-400 font-bold border-t border-zinc-200/60 pt-4">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {featuredPost.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {featuredPost.readTime}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Filters and Search Strip */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-zinc-100 pt-10 max-w-5xl mx-auto">
          {/* Tabs */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-sm"
                    : "bg-zinc-50 text-zinc-650 border border-zinc-200 hover:bg-zinc-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:max-w-xs">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-zinc-400">
              <Search size={16} />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides..."
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-xs"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {filteredBlogs.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl border border-zinc-200 overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div className="relative w-full aspect-[16/10] bg-zinc-50 border-b border-zinc-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-w-7xl) 100vw, 400px"
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-primary uppercase bg-primary/5 px-2 py-0.5 rounded">
                    {post.category}
                  </span>
                  <h3 className="text-base font-bold text-zinc-900 leading-snug mt-1 hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-zinc-500 font-semibold leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[10px] text-zinc-400 font-bold border-t border-zinc-100 pt-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription Banner */}
        <div className="bg-gradient-to-r from-primary to-primary-dark p-8 sm:p-12 rounded-3xl text-white max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative overflow-hidden shadow-xl">
          <div className="absolute right-0 top-0 w-80 h-80 bg-secondary/15 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="md:col-span-7 space-y-2 relative z-10">
            <h3 className="text-xl sm:text-2xl font-black">Subscribe to Water Safety Alerts</h3>
            <p className="text-xs sm:text-sm text-white/80 font-medium leading-relaxed max-w-md">
              Receive notifications on Chennai seasonal groundwater changes, pre-filter replacement alerts, and exclusive AMC discount coupons.
            </p>
          </div>

          <div className="md:col-span-5 relative z-10">
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-white/50 text-xs focus:bg-white focus:text-zinc-900 focus:placeholder-zinc-400 outline-none transition-all"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-primary font-bold text-xs rounded-xl hover:bg-zinc-100 transition-colors shadow-sm cursor-pointer"
              >
                Join
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
