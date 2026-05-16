'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'

const pillLabels = [
  'Geprüfte Anbieter',
  'Gruppenbuchungen',
  'Rechnung & Zahlung',
  'Barrierefreiheitsfilter',
]

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  const prefersReducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false

  const fadeUp = {
    hidden: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section
      ref={ref}
      id="hero"
      aria-labelledby="hero-headline"
      className="pt-24 px-4 sm:px-6 pb-8"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="relative w-full rounded-[32px] overflow-hidden"
          style={{ minHeight: '90vh' }}
        >
          {/* Background with parallax */}
          <motion.div
            style={prefersReducedMotion ? {} : { y: bgY }}
            className="absolute inset-0 bg-dark-green"
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#173D2B] via-[#1a4a32] to-[#0d2418]" />
            {/* Lime geometric blobs */}
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-lime opacity-[0.07] blur-[80px]" />
            <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-lime opacity-[0.05] blur-[60px]" />
            <div className="absolute top-[30%] left-[-5%] w-[400px] h-[400px] rounded-full bg-lime opacity-[0.04] blur-[100px]" />
            {/* Abstract lime shapes */}
            <div className="absolute top-12 right-12 w-2 h-2 rounded-full bg-lime opacity-60" />
            <div className="absolute top-20 right-24 w-1.5 h-1.5 rounded-full bg-lime opacity-40" />
            <div className="absolute bottom-32 right-16 w-3 h-3 rounded-full bg-lime opacity-30" />
            <svg
              className="absolute top-8 right-8 opacity-10"
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="100" cy="100" r="80" stroke="#C7FF33" strokeWidth="1" fill="none" />
              <circle cx="100" cy="100" r="50" stroke="#C7FF33" strokeWidth="0.5" fill="none" />
              <line x1="20" y1="100" x2="180" y2="100" stroke="#C7FF33" strokeWidth="0.5" />
              <line x1="100" y1="20" x2="100" y2="180" stroke="#C7FF33" strokeWidth="0.5" />
            </svg>
          </motion.div>

          {/* Content — bottom left */}
          <div className="relative z-10 flex flex-col justify-end h-full min-h-[90vh] p-10 md:p-16">
            <div className="max-w-3xl">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-lime/30 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-lime animate-pulse" aria-hidden="true" />
                <span className="text-lime/90 text-sm font-medium">B2B-Plattform für soziale Einrichtungen</span>
              </motion.div>

              <motion.h1
                id="hero-headline"
                variants={fadeUp}
                initial="hidden"
                animate="show"
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[44px] sm:text-[64px] md:text-[80px] font-bold text-white leading-[1.05] tracking-tight mb-6"
              >
                Gruppenaktivitäten für{' '}
                <span className="text-lime">Senioren</span>{' '}
                einfacher planen, buchen und abrechnen.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="show"
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[17px] md:text-[18px] text-white/70 leading-relaxed mb-10 max-w-2xl"
              >
                Tripando verbindet Pflegeeinrichtungen, soziale Träger und Vereine mit geprüften
                Freizeit-, Kultur- und Gesundheitsangeboten – zentral, barrierefrei und
                professionell organisiert.
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap gap-3 mb-10"
              >
                <motion.a
                  href="#demo"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.04 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                  className="px-7 py-3.5 rounded-full bg-lime text-dark-green text-[15px] font-semibold tracking-wide focus-ring"
                >
                  Kostenlose Demo anfragen
                </motion.a>
                <a
                  href="#how-it-works"
                  className="px-7 py-3.5 rounded-full border border-white/30 text-white text-[15px] font-semibold hover:bg-white/10 transition-colors focus-ring flex items-center gap-2"
                >
                  So funktioniert Tripando
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
              </motion.div>

              {/* Pill row */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap gap-2"
              >
                {pillLabels.map((label) => (
                  <span
                    key={label}
                    className="px-4 py-2 rounded-full bg-white/10 text-white/80 text-[13px] font-medium border border-white/10"
                  >
                    {label}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right side: vertical progress dots */}
          <div
            className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4"
            aria-hidden="true"
          >
            {['01', '02', '03'].map((n, i) => (
              <div key={n} className="flex flex-col items-center gap-1">
                <span className={`text-[11px] font-semibold ${i === 0 ? 'text-lime' : 'text-white/30'}`}>
                  {n}
                </span>
                <div className={`w-1 h-1 rounded-full ${i === 0 ? 'bg-lime' : 'bg-white/20'}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
