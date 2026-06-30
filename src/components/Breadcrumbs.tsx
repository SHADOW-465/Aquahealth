"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  const paths = pathname.split("/").filter(Boolean);

  return (
    <nav aria-label="Breadcrumb" className="bg-zinc-50 border-b border-zinc-150 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center gap-2 text-xs font-semibold text-zinc-500">
          <li className="flex items-center">
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              <Home size={14} />
              <span>Home</span>
            </Link>
          </li>
          {paths.map((path, index) => {
            const href = `/${paths.slice(0, index + 1).join("/")}`;
            const isLast = index === paths.length - 1;
            const label = path.charAt(0).toUpperCase() + path.slice(1).replace("-", " ");

            return (
              <li key={path} className="flex items-center gap-2">
                <ChevronRight size={12} className="text-zinc-350" />
                {isLast ? (
                  <span className="text-zinc-700 font-bold" aria-current="page">
                    {label}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="hover:text-primary transition-colors capitalize"
                  >
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
