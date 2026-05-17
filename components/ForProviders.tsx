'use client'

import { motion } from 'framer-motion'
import { Inbox, TrendingUp, Calendar, FileText, Building2, ArrowRight } from 'lucide-react'
import { providerBenefits } from '@/lib/data'

const iconComponents: Record<string, React.ElementType> = {
  'Digitale Anfrageverwaltung': Inbox,
  'Bessere Auslastung': TrendingUp,
  'Planbare Gruppenbuchungen': Calendar,
  'Saubere automatische Abrechnung': FileText,
  'Zugang zu hunderten Einrichtungen': Building2,
}

const prefersReduced =
  typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

const fadeUp = {
  hidden: prefersReduced ? {} : { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = {
  visible: { transition: { staggerChildren: prefersReduced ? 0 : 0.08 } },
}

export default function ForProviders() {
  return (
    <section
      id="anbieter"
      aria-labelledby="providers-heading"
      className="py-28 px-4 sm:px-6 relative overflow-hidden noise"
      style={{ background: '#0D1F14' }}
    >
      {/* Gradient orb top-right */}
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{
          top: '-10%',
          right: '-5%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'rgba(199,255,51,0.08)',
          filter: 'blur(80px)',
        }}
      />
      {/* Gradient orb bottom-left */}
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{
          bottom: '-10%',
          left: '-5%',
          width: 320,
          height: 320,
          borderRadius: '50%',
          background: 'rgba(199,255,51,0.05)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-14 text-center"
        >
          <span
            className="inline-block px-3 py-1.5 rounded-full text-[12px] font-semibold mb-6"
            style={{ background: 'rgba(199,255,51,0.1)', color: '#C7FF33', border: '1px solid rgba(199,255,51,0.2)' }}
          >
            Für Anbieter
          </span>
          <h2
            id="providers-heading"
            className="font-bold leading-tight max-w-3xl mx-auto mb-4"
            style={{
              fontSize: 'clamp(36px, 5vw, 60px)',
              letterSpacing: '-0.04em',
              color: '#FFFFFF',
            }}
          >
            Mehr{' '}
            <span className="text-lime-gradient">Gruppenbuchungen</span>{' '}
            erhalten.
          </h2>
          <p className="text-[17px] max-w-2xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
            Zoos, Museen, Vereine, Kursanbieter, Busunternehmen, Theater und Restaurants.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
        >
          {providerBenefits.map((benefit) => {
            const Icon = iconComponents[benefit.title] ?? Building2
            return (
              <motion.div
                key={benefit.title}
                variants={fadeUp}
                whileHover={{
                  borderColor: 'rgba(199,255,51,0.3)',
                  boxShadow: '0 0 0 1px rgba(199,255,51,0.1), 0 20px 60px rgba(0,0,0,0.4)',
                  y: -4,
                  transition: { duration: 0.2, ease: 'easeOut' },
                }}
                className="p-7 rounded-2xl cursor-default"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(199,255,51,0.1)', border: '1px solid rgba(199,255,51,0.15)' }}
                >
                  <Icon size={20} aria-hidden="true" style={{ color: '#C7FF33' }} />
                </div>
                <h3
                  className="text-[17px] font-semibold mb-2 leading-tight"
                  style={{ color: '#FFFFFF', letterSpacing: '-0.02em' }}
                >
                  {benefit.title}
                </h3>
                <p className="text-[14px] leading-relaxed" style={{ color: '#6B7280' }}>
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
        >
          <motion.a
            href="#"
            whileHover={prefersReduced ? {} : { scale: 1.04 }}
            whileTap={prefersReduced ? {} : { scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[15px] font-semibold focus-ring"
            style={{ background: '#C7FF33', color: '#0D1F14', letterSpacing: '-0.01em' }}
          >
            Als Anbieter registrieren
            <ArrowRight size={16} aria-hidden="true" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
