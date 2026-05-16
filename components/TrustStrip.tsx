'use client'

import { motion } from 'framer-motion'
import { trustCards } from '@/lib/data'

export default function TrustStrip() {
  return (
    <section
      id="trust"
      aria-labelledby="trust-heading"
      className="py-16 bg-white"
    >
      <h2 id="trust-heading" className="sr-only">Unsere Zielgruppen</h2>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.2 } }}
              className="p-6 rounded-3xl bg-background border border-black/[0.06] flex flex-col gap-3 cursor-default"
            >
              <span className="text-2xl" role="img" aria-hidden="true">{card.icon}</span>
              <div>
                <h3 className="text-[15px] font-semibold text-primary leading-tight mb-1">
                  {card.title}
                </h3>
                <p className="text-[13px] text-secondary leading-snug">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
