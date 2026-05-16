'use client'

import { motion } from 'framer-motion'
import { Building2, Users, MapPin, Briefcase } from 'lucide-react'

const cards = [
  {
    icon: Building2,
    gradient: 'from-[#0D1F14] to-[#173D2B]',
    title: 'Pflegeheime & Tagespflege',
    description: 'Aktivitäten zentral planen und buchen',
  },
  {
    icon: Users,
    gradient: 'from-[#1a1a2e] to-[#16213e]',
    title: 'Diakonie & Caritas',
    description: 'Trägerweite Übersicht über alle Buchungen',
  },
  {
    icon: Briefcase,
    gradient: 'from-[#1f1205] to-[#3b2008]',
    title: 'AWO & Sozialverbände',
    description: 'Mehrere Standorte, ein System',
  },
  {
    icon: MapPin,
    gradient: 'from-[#0D1F14] to-[#173D2B]',
    title: 'Anbieter & Ausflugsziele',
    description: 'Geprüfte B2B-Anfragen direkt erhalten',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function TrustStrip() {
  return (
    <section id="trust" aria-labelledby="trust-heading" className="py-12 bg-white">
      <h2 id="trust-heading" className="sr-only">
        Unsere Zielgruppen
      </h2>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.2, ease: 'easeOut' },
                }}
                className="group relative p-5 rounded-2xl bg-white flex flex-col gap-3 cursor-default"
                style={{
                  border: '1px solid rgba(0,0,0,0.06)',
                  boxShadow: 'var(--shadow-card)',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(199,255,51,0.4)'
                  e.currentTarget.style.boxShadow =
                    '0 1px 3px rgba(0,0,0,0.04), 0 20px 60px rgba(0,0,0,0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-card)'
                }}
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center flex-shrink-0`}
                >
                  <Icon size={18} className="text-[#C7FF33]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold text-[#111111] leading-tight mb-1">
                    {card.title}
                  </h3>
                  <p className="text-[13px] text-[#6B7280] leading-snug">{card.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
