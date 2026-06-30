"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";

interface ToastMessage {
  id: string;
  message: string;
  type: "success" | "error" | "info";
}

export function showToast(message: string, type: "success" | "error" | "info" = "success") {
  if (typeof window !== "undefined") {
    const event = new CustomEvent("show-toast", { detail: { message, type } });
    window.dispatchEvent(event);
  }
}

export default function Toast() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    const handleToast = (e: Event) => {
      const customEvent = e as CustomEvent<{ message: string; type: "success" | "error" | "info" }>;
      const newToast: ToastMessage = {
        id: Math.random().toString(36).substr(2, 9),
        message: customEvent.detail.message,
        type: customEvent.detail.type
      };
      
      setToasts(prev => [...prev, newToast]);

      // Auto-remove after 4 seconds
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== newToast.id));
      }, 4000);
    };

    window.addEventListener("show-toast", handleToast);
    return () => window.removeEventListener("show-toast", handleToast);
  }, []);

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div className="fixed top-20 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="pointer-events-auto w-full"
          >
            <div className={`p-4 rounded-xl border flex items-start gap-3 shadow-lg bg-white ${
              toast.type === "success"
                ? "border-green-200 text-green-800"
                : toast.type === "error"
                ? "border-red-200 text-red-800"
                : "border-blue-200 text-blue-800"
            }`}>
              {toast.type === "success" && <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />}
              {toast.type === "error" && <AlertCircle className="h-5 w-5 text-red-500 shrink-0" />}
              {toast.type === "info" && <Info className="h-5 w-5 text-primary shrink-0" />}

              <div className="flex-1 text-xs sm:text-sm font-semibold leading-relaxed">
                {toast.message}
              </div>

              <button
                onClick={() => removeToast(toast.id)}
                className="text-zinc-400 hover:text-zinc-650 cursor-pointer shrink-0"
              >
                <X size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
