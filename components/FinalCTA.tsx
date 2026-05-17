'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const prefersReduced =
  typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

const fadeUp = {
  hidden: prefersReduced ? {} : { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = {
  visible: { transition: { staggerChildren: prefersReduced ? 0 : 0.1 } },
}

export default function FinalCTA() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="py-16 px-4 sm:px-6 pb-16"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden"
          style={{
            borderRadius: 32,
            background: '#C7FF33',
            padding: 'clamp(48px, 8vw, 80px) clamp(32px, 5vw, 80px)',
          }}
        >
          {/* Decorative background radial */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background: 'radial-gradient(ellipse 60% 60% at 50% 0%, #D4FF5A, transparent)',
            }}
          />

          {/* Decorative circle arcs */}
          <svg
            className="absolute bottom-0 right-0 pointer-events-none"
            width="320"
            height="320"
            viewBox="0 0 320 320"
            fill="none"
            aria-hidden="true"
            style={{ opacity: 0.15 }}
          >
            <circle cx="320" cy="320" r="200" stroke="#0D1F14" strokeWidth="1.5" fill="none" />
            <circle cx="320" cy="320" r="130" stroke="#0D1F14" strokeWidth="1" fill="none" />
            <circle cx="320" cy="320" r="70" stroke="#0D1F14" strokeWidth="0.8" fill="none" />
          </svg>

          {/* Ghost arrow */}
          <div
            className="absolute top-1/2 -translate-y-1/2 right-16 select-none pointer-events-none font-bold hidden lg:block"
            aria-hidden="true"
            style={{
              fontSize: 200,
              lineHeight: 1,
              color: '#0D1F14',
              opacity: 0.06,
              letterSpacing: '-0.05em',
            }}
          >
            →
          </div>

          {/* Decorative top-left shape */}
          <svg
            className="absolute top-8 left-8 pointer-events-none"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            aria-hidden="true"
            style={{ opacity: 0.15 }}
          >
            <rect x="4" y="4" width="72" height="72" rx="16" stroke="#0D1F14" strokeWidth="1.5" fill="none" />
            <rect x="20" y="20" width="40" height="40" rx="8" stroke="#0D1F14" strokeWidth="1" fill="none" />
          </svg>

          {/* Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative z-10 max-w-2xl"
          >
            <motion.div variants={fadeUp}>
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-semibold mb-8"
                style={{ background: 'rgba(13,31,20,0.12)', color: '#0D1F14', border: '1px solid rgba(13,31,20,0.15)' }}
              >
                <span className="w-2 h-2 rounded-full" style={{ background: '#0D1F14', opacity: 0.6 }} aria-hidden="true" />
                Jetzt durchstarten
              </span>
            </motion.div>

            <motion.h2
              id="cta-heading"
              variants={fadeUp}
              className="font-bold leading-tight mb-6"
              style={{
                fontSize: 'clamp(40px, 6vw, 72px)',
                letterSpacing: '-0.04em',
                color: '#0D1F14',
              }}
            >
              Bereit für die nächste Gruppenaktivität?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-[18px] leading-relaxed mb-10"
              style={{ color: 'rgba(13,31,20,0.65)', maxWidth: 480 }}
            >
              Starten Sie mit einem Pilotzugang für Ihre Einrichtung und testen Sie Tripando
              mit echten Angeboten. Kostenlos und ohne Risiko.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <motion.a
                href="#"
                whileHover={prefersReduced ? {} : { scale: 1.04 }}
                whileTap={prefersReduced ? {} : { scale: 0.97 }}
                className="group flex items-center gap-2 px-8 py-4 rounded-full text-[15px] font-semibold focus-ring"
                style={{ background: '#0D1F14', color: '#FFFFFF', letterSpacing: '-0.01em' }}
              >
                Demo anfragen
                <motion.span
                  variants={{ hover: { x: 3 } }}
                  aria-hidden="true"
                >
                  <ArrowRight size={16} />
                </motion.span>
              </motion.a>
              <motion.a
                href="#"
                whileHover={prefersReduced ? {} : { scale: 1.04 }}
                whileTap={prefersReduced ? {} : { scale: 0.97 }}
                className="flex items-center gap-2 px-8 py-4 rounded-full text-[15px] font-semibold focus-ring"
                style={{
                  background: 'transparent',
                  color: '#0D1F14',
                  border: '1.5px solid rgba(13,31,20,0.3)',
                }}
              >
                Pilot starten
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
