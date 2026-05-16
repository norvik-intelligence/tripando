'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { institutionBenefits, upcomingActivities } from '@/lib/data'

type ActivityStatus = 'Bestätigt' | 'Zahlung offen' | 'Angefragt'

const statusConfig: Record<ActivityStatus, { bg: string; text: string }> = {
  Bestätigt: { bg: 'rgba(16,185,129,0.12)', text: '#059669' },
  'Zahlung offen': { bg: 'rgba(245,158,11,0.12)', text: '#D97706' },
  Angefragt: { bg: 'rgba(107,114,128,0.12)', text: '#6B7280' },
}

const prefersReduced =
  typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

export default function ForInstitutions() {
  return (
    <section
      id="einrichtungen"
      aria-labelledby="institutions-heading"
      className="py-28 px-4 sm:px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              className="inline-block px-3 py-1.5 rounded-full text-[12px] font-semibold mb-6"
              style={{ background: 'rgba(199,255,51,0.15)', color: '#173D2B' }}
            >
              Für Einrichtungen
            </span>
            <h2
              id="institutions-heading"
              className="font-bold leading-tight mb-6"
              style={{
                fontSize: 'clamp(32px, 4vw, 52px)',
                letterSpacing: '-0.04em',
                color: '#111111',
              }}
            >
              Weniger organisieren,{' '}
              <span className="text-lime-gradient">mehr ermöglichen.</span>
            </h2>
            <p className="text-[17px] text-[#6B7280] leading-relaxed mb-10">
              Von der einzelnen Einrichtung bis zum Dachverband – Tripando passt sich Ihrer
              Struktur an. Alles, was Sie für professionelle Gruppenaktivitäten brauchen,
              in einem System.
            </p>

            <ul className="flex flex-col gap-3.5 mb-10" role="list">
              {institutionBenefits.map((benefit, i) => (
                <motion.li
                  key={benefit.text}
                  initial={prefersReduced ? {} : { opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: '#C7FF33' }}
                  >
                    <Check size={11} strokeWidth={3} style={{ color: '#0D1F14' }} aria-hidden="true" />
                  </div>
                  <span className="text-[15px] font-medium text-[#111111]">{benefit.text}</span>
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="#demo"
              whileHover={prefersReduced ? {} : { scale: 1.04 }}
              whileTap={prefersReduced ? {} : { scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[15px] font-semibold focus-ring"
              style={{ background: '#173D2B', color: '#FFFFFF', letterSpacing: '-0.01em' }}
            >
              Einrichtung anmelden
              <ArrowRight size={15} aria-hidden="true" />
            </motion.a>
          </motion.div>

          {/* Right: stacked cards */}
          <div className="relative">
            {/* Card 2 (behind, rotated) */}
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, x: 40, rotate: -3 }}
              whileInView={{ opacity: 1, x: 0, rotate: -3 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 rounded-3xl"
              style={{
                background: '#F5F5F2',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: 'var(--shadow-card)',
                transform: 'rotate(-3deg) scale(0.97)',
                zIndex: 0,
              }}
            />

            {/* Card 1 (front) */}
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 rounded-3xl p-6"
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: 'var(--shadow-elevated)',
              }}
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-[15px] font-bold text-[#111]">Nächste Aktivitäten</h3>
                <span
                  className="text-[12px] font-medium"
                  style={{ color: '#6B7280' }}
                >
                  AWO Köln-Süd
                </span>
              </div>

              <div className="flex flex-col gap-2.5">
                {upcomingActivities.map((activity) => {
                  const st = statusConfig[activity.status as ActivityStatus] ?? {
                    bg: 'rgba(107,114,128,0.12)',
                    text: '#6B7280',
                  }
                  return (
                    <div
                      key={activity.name}
                      className="flex items-center gap-3 p-3.5 rounded-2xl"
                      style={{ background: '#F9F9F7', border: '1px solid rgba(0,0,0,0.04)' }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex flex-col items-center justify-center flex-shrink-0"
                        style={{ background: '#173D2B' }}
                      >
                        <span className="text-[14px] font-bold text-[#C7FF33] leading-none">
                          {activity.date.split('.')[0]}
                        </span>
                        <span className="text-[9px] text-[#C7FF33] opacity-60 leading-none mt-0.5">Mai</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[14px] font-semibold text-[#111] leading-tight truncate">
                          {activity.name}
                        </div>
                        <div className="text-[12px] text-[#6B7280]">
                          {activity.participants} Teilnehmer
                        </div>
                      </div>
                      <span
                        className="px-2.5 py-1 rounded-full text-[11px] font-semibold flex-shrink-0"
                        style={{ background: st.bg, color: st.text }}
                      >
                        {activity.status}
                      </span>
                    </div>
                  )
                })}
              </div>

              {/* Summary stats */}
              <div
                className="mt-5 grid grid-cols-3 gap-2.5 pt-5"
                style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}
              >
                {[
                  { value: '24', label: 'Buchungen' },
                  { value: '7', label: 'Angefragt' },
                  { value: '3', label: 'Standorte' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-3 rounded-xl text-center"
                    style={{ background: '#F5F5F2', border: '1px solid rgba(0,0,0,0.05)' }}
                  >
                    <div
                      className="text-[22px] font-bold tabular"
                      style={{ color: '#173D2B', letterSpacing: '-0.03em' }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-[#6B7280]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
