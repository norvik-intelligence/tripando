'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Menu, X, Grid3X3 } from 'lucide-react'
import { navItems } from '@/lib/data'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white/80 backdrop-blur-xl shadow-soft border-b border-black/5'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 focus-ring rounded-xl" aria-label="Tripando Startseite">
          <div className="w-9 h-9 rounded-full bg-lime flex items-center justify-center">
            <Grid3X3 size={16} className="text-dark-green" strokeWidth={2.5} />
          </div>
          <span className="text-[17px] font-700 tracking-tight text-primary font-bold">Tripando</span>
        </a>

        {/* Desktop Nav */}
        <nav aria-label="Hauptnavigation" className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[14px] font-medium text-secondary hover:text-primary transition-colors duration-200 focus-ring rounded-md"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-3">
          <button
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors focus-ring"
            aria-label="Suche"
          >
            <Search size={16} className="text-secondary" />
          </button>
          <motion.a
            href="#demo"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="px-5 py-2.5 rounded-full bg-lime text-dark-green text-[14px] font-semibold tracking-wide focus-ring"
          >
            Demo anfragen
          </motion.a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors focus-ring"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-16 bg-white z-40 flex flex-col px-6 py-8"
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col gap-2">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-[18px] font-medium text-primary py-3 border-b border-black/5 focus-ring rounded-md"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-8">
              <a
                href="#demo"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-6 py-3.5 rounded-full bg-lime text-dark-green text-[15px] font-semibold focus-ring"
              >
                Demo anfragen
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
