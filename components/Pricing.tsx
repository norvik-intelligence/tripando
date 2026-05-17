'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X, ArrowRight } from 'lucide-react'

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

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    monthlyPrice: 149,
    annualPrice: 124,
    period: '/Monat',
    tagline: 'Für einzelne Einrichtungen',
    features: [
      { text: '1 Standort', included: true },
      { text: 'Angebotskatalog', included: true },
      { text: 'Gruppenbuchungen', included: true },
      { text: 'Rechnungsübersicht', included: true },
      { text: 'E-Mail-Support', included: true },
      { text: 'Freigabeprozesse', included: false },
      { text: 'Rollen & Rechte', included: false },
    ],
    cta: 'Jetzt starten',
    highlighted: false,
    dark: false,
  },
  {
    id: 'professional',
    name: 'Professional',
    monthlyPrice: 299,
    annualPrice: 249,
    period: '/Monat',
    tagline: 'Für größere Einrichtungen',
    features: [
      { text: 'Bis zu 5 Standorte', included: true },
      { text: 'Unbegrenzte Buchungsanfragen', included: true },
      { text: 'Freigabeprozesse', included: true },
      { text: 'Rollen & Rechte', included: true },
      { text: 'Reporting & Auswertungen', included: true },
      { text: 'Priorisierter Support', included: true },
      { text: 'API & Datenexport', included: false },
    ],
    cta: 'Demo anfragen',
    highlighted: true,
    dark: false,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    monthlyPrice: null,
    annualPrice: null,
    period: null,
    tagline: 'Für Dachverbände',
    features: [
      { text: 'Unbegrenzte Standorte', included: true },
      { text: 'Zentrale Trägerverwaltung', included: true },
      { text: 'Individuelle Konditionen', included: true },
      { text: 'API & Datenexport', included: true },
      { text: 'Persönliches Onboarding', included: true },
      { text: 'SLA & Dedicated Support', included: true },
      { text: 'Custom Integrationen', included: true },
    ],
    cta: 'Kontakt aufnehmen',
    highlighted: false,
    dark: true,
  },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section
      id="preise"
      aria-labelledby="pricing-heading"
      className="py-28 px-4 sm:px-6 dot-grid"
      style={{ background: '#F5F5F2' }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-12"
        >
          <p
            className="text-[13px] font-semibold uppercase mb-4"
            style={{ color: '#6B7280', letterSpacing: '0.08em' }}
          >
            Preise
          </p>
          <h2
            id="pricing-heading"
            className="font-bold leading-tight mx-auto mb-4"
            style={{
              fontSize: 'clamp(36px, 5vw, 60px)',
              letterSpacing: '-0.04em',
              color: '#111111',
              maxWidth: 600,
            }}
          >
            Planbare Preise für Einrichtungen und Träger.
          </h2>
          <p className="text-[17px] text-[#6B7280] max-w-xl mx-auto mb-8">
            Kein verstecktes Kleingedrucktes – klare Pakete, die zu Ihrer Einrichtung passen.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3">
            <span
              className="text-[14px] font-medium"
              style={{ color: annual ? '#6B7280' : '#111111' }}
            >
              Monatlich
            </span>
            <button
              role="switch"
              aria-checked={annual}
              onClick={() => setAnnual(!annual)}
              className="relative w-12 h-6 rounded-full transition-colors duration-200 focus-ring"
              style={{ background: annual ? '#C7FF33' : 'rgba(0,0,0,0.15)' }}
            >
              <motion.div
                className="absolute top-1 w-4 h-4 rounded-full"
                style={{ background: annual ? '#0D1F14' : '#FFFFFF' }}
                animate={{ x: annual ? 28 : 4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              />
            </button>
            <span
              className="text-[14px] font-medium flex items-center gap-2"
              style={{ color: annual ? '#111111' : '#6B7280' }}
            >
              Jährlich
              <AnimatePresence>
                {annual && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-[11px] font-bold px-2 py-0.5 rounded-full"
                    style={{ background: 'rgba(16,185,129,0.12)', color: '#059669' }}
                  >
                    2 Monate gratis
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={fadeUp}
              whileHover={
                prefersReduced
                  ? {}
                  : { y: -6, scale: 1.01, transition: { duration: 0.2, ease: 'easeOut' } }
              }
              className="rounded-3xl p-8 flex flex-col gap-6 relative cursor-default"
              style={{
                background: plan.dark ? '#111111' : '#FFFFFF',
                border: plan.highlighted
                  ? '2px solid #C7FF33'
                  : plan.dark
                  ? '1px solid rgba(255,255,255,0.08)'
                  : '1px solid rgba(0,0,0,0.06)',
                boxShadow: plan.highlighted
                  ? '0 0 0 1px #C7FF33, 0 0 60px rgba(199,255,51,0.15)'
                  : 'var(--shadow-card)',
              }}
            >
              {/* Empfohlen badge */}
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span
                    className="px-4 py-1.5 rounded-full text-[12px] font-bold"
                    style={{ background: '#C7FF33', color: '#0D1F14' }}
                  >
                    Empfohlen
                  </span>
                </div>
              )}

              <div>
                <p
                  className="text-[11px] font-semibold uppercase mb-3"
                  style={{
                    letterSpacing: '0.1em',
                    color: plan.highlighted
                      ? 'rgba(199,255,51,0.7)'
                      : plan.dark
                      ? 'rgba(255,255,255,0.4)'
                      : '#6B7280',
                  }}
                >
                  {plan.name}
                </p>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={annual ? 'annual' : 'monthly'}
                    initial={prefersReduced ? {} : { opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={prefersReduced ? {} : { opacity: 0, y: 8 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="flex items-end gap-1.5 mb-2"
                  >
                    <span
                      className="font-bold leading-none tabular"
                      style={{
                        fontSize: 52,
                        letterSpacing: '-0.04em',
                        color: plan.dark ? '#FFFFFF' : '#111111',
                      }}
                    >
                      {plan.monthlyPrice === null
                        ? 'Individuell'
                        : `${annual ? plan.annualPrice : plan.monthlyPrice} €`}
                    </span>
                    {plan.period && (
                      <span
                        className="text-[15px] mb-2"
                        style={{ color: plan.dark ? 'rgba(255,255,255,0.4)' : '#6B7280' }}
                      >
                        {plan.period}
                      </span>
                    )}
                  </motion.div>
                </AnimatePresence>

                <p
                  className="text-[14px]"
                  style={{ color: plan.dark ? 'rgba(255,255,255,0.5)' : '#6B7280' }}
                >
                  {plan.tagline}
                </p>
              </div>

              <ul className="flex flex-col gap-2.5 flex-1" role="list">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: feature.included
                          ? plan.highlighted
                            ? '#C7FF33'
                            : 'rgba(199,255,51,0.15)'
                          : 'rgba(0,0,0,0.06)',
                      }}
                    >
                      {feature.included ? (
                        <Check
                          size={11}
                          strokeWidth={3}
                          style={{ color: plan.highlighted ? '#0D1F14' : '#173D2B' }}
                          aria-hidden="true"
                        />
                      ) : (
                        <X size={11} strokeWidth={2.5} style={{ color: '#9CA3AF' }} aria-hidden="true" />
                      )}
                    </div>
                    <span
                      className="text-[14px]"
                      style={{
                        color: feature.included
                          ? plan.dark
                            ? 'rgba(255,255,255,0.85)'
                            : '#111111'
                          : '#9CA3AF',
                      }}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="#demo"
                whileHover={prefersReduced ? {} : { scale: 1.03 }}
                whileTap={prefersReduced ? {} : { scale: 0.97 }}
                className="flex items-center justify-center gap-2 w-full text-center py-3.5 rounded-full text-[14px] font-semibold transition-colors focus-ring"
                style={
                  plan.highlighted
                    ? { background: '#C7FF33', color: '#0D1F14' }
                    : plan.dark
                    ? { background: 'rgba(255,255,255,0.1)', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.12)' }
                    : { background: '#F5F5F2', color: '#111111', border: '1px solid rgba(0,0,0,0.1)' }
                }
              >
                {plan.cta}
                <ArrowRight size={14} aria-hidden="true" />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={prefersReduced ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-[14px] text-[#6B7280]"
        >
          Zzgl. 1,5 % – 3 % Transaktionsgebühr pro erfolgreicher Buchung.
        </motion.p>
      </div>
    </section>
  )
}
