'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'

const prefersReduced =
  typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

const fadeUp = prefersReduced
  ? { hidden: {}, visible: {} }
  : {
      hidden: { opacity: 0, y: 32 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
    }

const stagger = {
  visible: { transition: { staggerChildren: prefersReduced ? 0 : 0.1 } },
}

const metrics = [
  { value: '500+', label: 'Einrichtungen' },
  { value: '10.000+', label: 'Buchungen' },
  { value: '98 %', label: 'Weiterempfehlung' },
]

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', prefersReduced ? '0%' : '18%'])

  return (
    <section
      ref={ref}
      id="hero"
      aria-labelledby="hero-headline"
      className="pt-24 px-4 sm:px-6 pb-6"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="relative w-full overflow-hidden noise"
          style={{
            borderRadius: 32,
            minHeight: 'min(90vh, 900px)',
            background: '#0D1F14',
          }}
        >
          {/* Gradient layers */}
          <motion.div
            style={{ y: bgY }}
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
          >
            {/* Layer 1: base radial from bottom-left */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 80% 60% at 20% 100%, rgba(23,61,43,0.9) 0%, transparent 70%)',
              }}
            />
            {/* Layer 2: lime hint top-right */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 50% 40% at 85% 10%, rgba(199,255,51,0.07) 0%, transparent 60%)',
              }}
            />
            {/* Lime orb 1 */}
            <motion.div
              animate={prefersReduced ? {} : { scale: [1, 1.06, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute rounded-full"
              style={{
                width: 600,
                height: 600,
                top: '-10%',
                right: '-8%',
                background: 'rgba(199,255,51,0.08)',
                filter: 'blur(80px)',
              }}
            />
            {/* Lime orb 2 */}
            <motion.div
              animate={prefersReduced ? {} : { scale: [1, 1.04, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute rounded-full"
              style={{
                width: 400,
                height: 400,
                bottom: '10%',
                right: '15%',
                background: 'rgba(199,255,51,0.06)',
                filter: 'blur(100px)',
              }}
            />
            {/* Lime orb 3 */}
            <motion.div
              animate={prefersReduced ? {} : { scale: [1, 1.05, 1] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
              className="absolute rounded-full"
              style={{
                width: 300,
                height: 300,
                top: '30%',
                left: '-5%',
                background: 'rgba(199,255,51,0.05)',
                filter: 'blur(80px)',
              }}
            />
            {/* Decorative dots */}
            <div className="absolute top-12 right-12 w-2 h-2 rounded-full bg-[#C7FF33] opacity-50" />
            <div className="absolute top-20 right-28 w-1.5 h-1.5 rounded-full bg-[#C7FF33] opacity-30" />
            <div className="absolute bottom-32 right-16 w-2.5 h-2.5 rounded-full bg-[#C7FF33] opacity-25" />
            <div className="absolute top-40 right-20 w-1 h-1 rounded-full bg-[#C7FF33] opacity-40" />
          </motion.div>

          {/* Content — bottom left */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex flex-col justify-end min-h-[min(90vh,900px)] p-10 md:p-14"
          >
            <div className="max-w-2xl">
              {/* Metrics pills row */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-8">
                {metrics.map((m, i) => (
                  <span
                    key={m.label}
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium"
                    style={{
                      background: 'rgba(255,255,255,0.07)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: 'rgba(240,237,228,0.9)',
                    }}
                  >
                    <span
                      className="tabular font-bold text-[#C7FF33]"
                      style={{ letterSpacing: '-0.02em' }}
                    >
                      {m.value}
                    </span>
                    <span
                      style={{
                        width: 1,
                        height: 12,
                        background: 'rgba(255,255,255,0.2)',
                        display: 'inline-block',
                      }}
                      aria-hidden="true"
                    />
                    {m.label}
                  </span>
                ))}
              </motion.div>

              {/* Eyebrow */}
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-5">
                <span
                  className="px-3 py-1.5 rounded-full text-[12px] font-semibold"
                  style={{ background: '#C7FF33', color: '#0D1F14', letterSpacing: '0.01em' }}
                >
                  B2B SaaS für Soziale Einrichtungen
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                id="hero-headline"
                variants={fadeUp}
                className="font-bold leading-[1.03] mb-6"
                style={{
                  fontSize: 'clamp(44px, 7vw, 88px)',
                  letterSpacing: '-0.04em',
                  color: '#F0EDE4',
                }}
              >
                Gruppenaktivitäten{' '}
                <span className="text-lime-gradient">einfacher</span>
                {' '}planen.
              </motion.h1>

              {/* Subhead */}
              <motion.p
                variants={fadeUp}
                className="text-[18px] leading-[1.6] mb-10 max-w-[480px]"
                style={{ color: '#9CA3A0' }}
              >
                Tripando verbindet Pflegeeinrichtungen und soziale Träger mit geprüften
                Freizeit-, Kultur- und Gesundheitsangeboten.
              </motion.p>

              {/* Buttons */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                <motion.a
                  href="#demo"
                  whileHover={prefersReduced ? {} : { scale: 1.03 }}
                  whileTap={prefersReduced ? {} : { scale: 0.98 }}
                  className="group flex items-center gap-2 px-7 py-3.5 rounded-full text-[15px] font-semibold focus-ring"
                  style={{ background: '#C7FF33', color: '#0D1F14', letterSpacing: '-0.01em' }}
                >
                  Kostenlose Demo anfragen
                  <motion.span
                    variants={{ hover: { x: 3 } }}
                    aria-hidden="true"
                  >
                    <ArrowRight size={16} />
                  </motion.span>
                </motion.a>
                <a
                  href="#how-it-works"
                  className="flex items-center gap-2 px-7 py-3.5 rounded-full text-[15px] font-semibold transition-colors duration-200 focus-ring"
                  style={{
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: 'rgba(255,255,255,0.85)',
                    letterSpacing: '-0.01em',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  So funktioniert Tripando
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side: vertical progress dots */}
          <div
            className="absolute right-10 bottom-14 hidden lg:flex flex-col items-center gap-5"
            aria-hidden="true"
          >
            {[
              { n: '01', active: true, label: 'Suchen' },
              { n: '02', active: false, label: 'Buchen' },
              { n: '03', active: false, label: 'Abrechnen' },
            ].map(({ n, active, label }) => (
              <div key={n} className="flex flex-col items-center gap-1.5">
                <span
                  className="text-[10px] font-semibold"
                  style={{ color: active ? '#C7FF33' : 'rgba(255,255,255,0.25)' }}
                >
                  {n}
                </span>
                <div
                  className="w-[1px] h-8"
                  style={{ background: active ? 'rgba(199,255,51,0.4)' : 'rgba(255,255,255,0.1)' }}
                />
                <span
                  className="text-[10px] font-medium"
                  style={{
                    color: active ? 'rgba(240,237,228,0.6)' : 'rgba(255,255,255,0.2)',
                    writingMode: 'vertical-rl',
                    transform: 'rotate(180deg)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Floating card: Neue Buchung */}
          <motion.div
            animate={prefersReduced ? {} : { y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-[18%] right-[6%] hidden lg:block"
            aria-hidden="true"
          >
            <div
              className="px-4 py-3 rounded-2xl flex items-center gap-3"
              style={{
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.12)',
                minWidth: 200,
              }}
            >
              <div className="relative">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(199,255,51,0.15)', border: '1px solid rgba(199,255,51,0.3)' }}
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-[#C7FF33]" />
                </div>
                <motion.div
                  animate={prefersReduced ? {} : { scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-full"
                  style={{ background: 'rgba(199,255,51,0.3)' }}
                />
              </div>
              <div>
                <div className="text-[12px] font-semibold text-white">Neue Buchung</div>
                <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Zoo Duisburg · 32 Pers.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating card: Stats */}
          <motion.div
            animate={prefersReduced ? {} : { y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute top-[42%] right-[4%] hidden lg:block"
            aria-hidden="true"
          >
            <div
              className="px-4 py-3 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.12)',
                minWidth: 180,
              }}
            >
              <div className="text-[11px] mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Aktive Buchungen
              </div>
              <div className="flex items-end gap-2">
                <span className="text-[28px] font-bold text-white tabular" style={{ letterSpacing: '-0.03em' }}>
                  24
                </span>
                <span
                  className="text-[12px] font-semibold mb-1 px-2 py-0.5 rounded-full"
                  style={{ background: 'rgba(199,255,51,0.15)', color: '#C7FF33' }}
                >
                  ↑ 12 %
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
