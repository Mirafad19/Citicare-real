import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export function Preloader() {
  const location = useLocation();
  const [initialLoading, setInitialLoading] = useState(true);
  const [routeLoading, setRouteLoading] = useState(false);

  // Initial landing loader
  useEffect(() => {
    // End the initial load as soon as components render (with a polite transition delay)
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Subsequent route-change loaders
  useEffect(() => {
    if (initialLoading) return;

    setRouteLoading(true);
    const timeout = setTimeout(() => {
      setRouteLoading(false);
    }, 450); // standard snappy transition

    return () => clearTimeout(timeout);
  }, [location.pathname, initialLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {initialLoading && (
          <motion.div
            key="initial-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center pointer-events-auto"
          >
            <div className="flex flex-col items-center space-y-4">
              {/* Standard circular spinner */}
              <div className="relative">
                <div className="w-12 h-12 rounded-full border-4 border-slate-100 border-t-[#1e3a8a] animate-spin" />
              </div>
              <span className="text-slate-400 font-sans font-medium text-xs tracking-wider uppercase">
                Loading Citicare...
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Traditional neat route spinner overlay */}
      <AnimatePresence>
        {routeLoading && !initialLoading && (
          <motion.div
            key="route-loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-white/70 backdrop-blur-[1px] z-[9998] flex items-center justify-center"
          >
            <div className="flex flex-col items-center space-y-3 p-6 bg-white rounded-2xl shadow-lg border border-slate-100">
              <div className="w-9 h-9 rounded-full border-3 border-slate-100 border-t-[#1e3a8a] animate-spin" />
              <span className="text-slate-500 font-sans text-[11px] font-semibold uppercase tracking-wider">
                Loading page...
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

