'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Grid3X3, ArrowRight } from 'lucide-react'
import { navItems } from '@/lib/data'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
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
          ? 'py-3 shadow-[0_1px_0_rgba(0,0,0,0.06),0_8px_32px_rgba(0,0,0,0.06)]'
          : 'py-5'
      }`}
      style={{
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        backgroundColor: scrolled ? 'rgba(245,245,242,0.92)' : 'rgba(245,245,242,0)',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2.5 focus-ring rounded-xl"
          aria-label="Tripando Startseite"
        >
          <div className="w-7 h-7 rounded-full bg-[#C7FF33] flex items-center justify-center flex-shrink-0">
            <Grid3X3 size={13} className="text-[#173D2B]" strokeWidth={2.5} aria-hidden="true" />
          </div>
          <span
            className="text-[17px] leading-none"
            style={{ fontWeight: 500, color: '#111111', letterSpacing: '-0.01em' }}
          >
            Tripando
          </span>
        </a>

        {/* Desktop Nav */}
        <nav aria-label="Hauptnavigation" className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[14px] text-[#3d3d3d] hover:text-[#111111] transition-colors duration-200 focus-ring rounded-md"
              style={{ fontWeight: 450, letterSpacing: '-0.01em' }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-3">
          <motion.a
            href="#demo"
            className="group flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#C7FF33] text-[#0D1F14] text-[14px] font-semibold focus-ring"
            style={{ letterSpacing: '-0.01em' }}
            whileHover="hover"
            whileTap={{ scale: 0.97 }}
          >
            Demo anfragen
            <motion.span
              variants={{ hover: { x: 3 } }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              aria-hidden="true"
            >
              <ArrowRight size={14} />
            </motion.span>
          </motion.a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors focus-ring"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={mobileOpen}
        >
          <AnimatePresence initial={false} mode="wait">
            {mobileOpen ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.15 }}
              >
                <X size={20} />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.15 }}
              >
                <Menu size={20} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-0 top-16 z-40 flex flex-col px-6 py-8"
            style={{ backgroundColor: 'rgba(245,245,242,0.97)', backdropFilter: 'blur(16px)' }}
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setMobileOpen(false)}
                  className="text-[32px] font-bold text-[#111111] py-3 border-b border-black/[0.05] focus-ring rounded-md tracking-tight"
                  style={{ letterSpacing: '-0.03em' }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.05 + 0.05, duration: 0.35 }}
            >
              <a
                href="#demo"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full text-center px-6 py-4 rounded-full bg-[#C7FF33] text-[#0D1F14] text-[16px] font-semibold focus-ring"
              >
                Demo anfragen
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
