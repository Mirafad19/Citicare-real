import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export function Preloader() {
  const location = useLocation();
  const [initialLoading, setInitialLoading] = useState(true);
  const [routeLoading, setRouteLoading] = useState(false);

  // Initial landing loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  // Subsequent route-change loaders
  useEffect(() => {
    if (initialLoading) return;

    setRouteLoading(true);
    const timeout = setTimeout(() => {
      setRouteLoading(false);
    }, 400); // Standard quick transition

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
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center pointer-events-auto"
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="w-12 h-12 rounded-full border-4 border-slate-100 border-t-[#1e3a8a] animate-spin" />
              <span className="text-slate-500 font-sans font-semibold text-xs tracking-wider uppercase">
                Loading Citicare...
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {routeLoading && !initialLoading && (
          <motion.div
            key="route-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: 'easeInOut' }}
            className="fixed inset-0 bg-white z-[9998] flex flex-col items-center justify-center pointer-events-auto"
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="w-10 h-10 rounded-full border-4 border-slate-100 border-t-[#1e3a8a] animate-spin" />
              <span className="text-slate-500 font-sans font-semibold text-xs tracking-wider uppercase">
                Page Loading...
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
