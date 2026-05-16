'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { institutionBenefits, upcomingActivities } from '@/lib/data'

type ActivityStatus = 'Bestätigt' | 'Zahlung offen' | 'Angefragt'

const statusStyles: Record<ActivityStatus, string> = {
  Bestätigt: 'bg-emerald-100 text-emerald-700',
  'Zahlung offen': 'bg-amber-100 text-amber-700',
  Angefragt: 'bg-gray-100 text-gray-600',
}

export default function ForInstitutions() {
  return (
    <section
      id="einrichtungen"
      aria-labelledby="institutions-heading"
      className="py-24 px-4 sm:px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-lime/20 text-dark-green text-[13px] font-semibold mb-6">
              Für Einrichtungen
            </span>
            <h2
              id="institutions-heading"
              className="text-[36px] sm:text-[48px] font-bold text-primary leading-tight tracking-tight mb-6"
            >
              Für Einrichtungen, die weniger organisieren und{' '}
              <span className="text-dark-green">mehr ermöglichen</span> wollen.
            </h2>
            <p className="text-[17px] text-secondary leading-relaxed mb-8">
              Von der einzelnen Einrichtung bis zum Dachverband – Tripando passt sich Ihrer
              Struktur an. Alles, was Sie für professionelle Gruppenaktivitäten brauchen,
              in einem System.
            </p>

            <ul className="flex flex-col gap-3" role="list">
              {institutionBenefits.map((benefit, i) => (
                <motion.li
                  key={benefit.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-lime flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-dark-green" strokeWidth={3} />
                  </div>
                  <span className="text-[16px] text-primary">{benefit.text}</span>
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="#demo"
              whileHover={{ scale: 1.04 }}
              className="inline-flex items-center gap-2 mt-10 px-7 py-3.5 rounded-full bg-dark-green text-white text-[15px] font-semibold focus-ring"
            >
              Einrichtung anmelden
            </motion.a>
          </motion.div>

          {/* Right: upcoming activities card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-background rounded-3xl p-6 border border-black/[0.06] shadow-card">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-[15px] font-bold text-primary">Nächste Aktivitäten</h3>
                <span className="text-[12px] text-secondary">AWO Köln-Süd</span>
              </div>

              <div className="flex flex-col gap-3">
                {upcomingActivities.map((activity) => (
                  <div
                    key={activity.name}
                    className="bg-white rounded-2xl p-4 border border-black/[0.05] flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-dark-green flex items-center justify-center flex-shrink-0">
                      <span className="text-lime text-[11px] font-bold leading-tight text-center">
                        {activity.date.split('.')[0]}
                        <br />
                        <span className="text-[9px] text-lime/70">Mai</span>
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[14px] font-semibold text-primary leading-tight truncate">
                        {activity.name}
                      </div>
                      <div className="text-[12px] text-secondary">
                        {activity.participants} Teilnehmer · {activity.date}
                      </div>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold flex-shrink-0 ${statusStyles[activity.status as ActivityStatus]}`}>
                      {activity.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Summary stats */}
              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  { value: '24', label: 'Buchungen' },
                  { value: '7', label: 'Angefragt' },
                  { value: '3', label: 'Standorte' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-2xl p-3 border border-black/[0.05] text-center">
                    <div className="text-[20px] font-bold text-dark-green">{stat.value}</div>
                    <div className="text-[11px] text-secondary">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
