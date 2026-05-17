'use client'

import { motion } from 'framer-motion'
import { Search, AlertCircle, FileX } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.09 } },
}

const cards = [
  {
    icon: Search,
    title: 'Zu viel Suche',
    description:
      'Angebote werden über Google, Telefonlisten und alte Kontakte zusammengesucht. Kein zentrales Verzeichnis, keine klaren Daten.',
    highlighted: false,
  },
  {
    icon: AlertCircle,
    title: 'Keine klare Eignung.',
    description:
      'Barrierefreiheit, Gruppengrößen, Begleitpersonen und Mobilitätsanforderungen sind oft unklar oder nicht dokumentiert.',
    highlighted: true,
  },
  {
    icon: FileX,
    title: 'Manuelle Abrechnung',
    description:
      'Anfragen, Rechnungen, Bestätigungen und Zahlungen laufen über viele einzelne Kanäle – E-Mail, Telefon, Fax.',
    highlighted: false,
  },
]

export default function ProblemSection() {
  return (
    <section
      id="problem"
      aria-labelledby="problem-heading"
      className="py-28 px-4 sm:px-6 dot-grid"
      style={{ background: '#FFFFFF' }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-16"
        >
          <p
            className="text-[13px] font-semibold uppercase mb-4"
            style={{ color: '#6B7280', letterSpacing: '0.08em' }}
          >
            Das Problem heute
          </p>
          <h2
            id="problem-heading"
            className="font-bold leading-tight max-w-[600px]"
            style={{
              fontSize: 'clamp(36px, 5vw, 64px)',
              letterSpacing: '-0.04em',
              color: '#111111',
            }}
          >
            Warum alles unnötig{' '}
            <span className="text-lime-gradient">kompliziert</span>{' '}ist.
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          style={{
            gridTemplateRows: 'auto',
          }}
        >
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.2, ease: 'easeOut' } }}
                className="relative flex flex-col gap-5 cursor-default"
                style={{
                  padding: 32,
                  borderRadius: 24,
                  background: card.highlighted ? '#C7FF33' : '#FFFFFF',
                  border: card.highlighted
                    ? 'none'
                    : '1px solid rgba(0,0,0,0.06)',
                  boxShadow: card.highlighted
                    ? '0 0 0 2px rgba(199,255,51,0.4), 0 20px 60px rgba(199,255,51,0.15)'
                    : 'var(--shadow-card)',
                  transition: 'box-shadow 0.2s, transform 0.2s',
                  gridRow: i === 1 ? 'span 1' : 'span 1',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: card.highlighted ? 'rgba(13,31,20,0.12)' : 'rgba(199,255,51,0.12)',
                  }}
                >
                  <Icon
                    size={20}
                    aria-hidden="true"
                    style={{ color: card.highlighted ? '#0D1F14' : '#173D2B' }}
                  />
                </div>
                <div>
                  <h3
                    className="text-[20px] font-bold leading-tight mb-3"
                    style={{
                      letterSpacing: '-0.02em',
                      color: card.highlighted ? '#0D1F14' : '#111111',
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-[15px] leading-relaxed"
                    style={{ color: card.highlighted ? 'rgba(13,31,20,0.75)' : '#6B7280' }}
                  >
                    {card.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
