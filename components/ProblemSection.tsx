'use client'

import { motion } from 'framer-motion'
import { problemCards } from '@/lib/data'

export default function ProblemSection() {
  return (
    <section
      id="problem"
      aria-labelledby="problem-heading"
      className="py-24 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <h2
            id="problem-heading"
            className="text-[38px] sm:text-[52px] md:text-[60px] font-bold text-primary leading-tight tracking-tight max-w-3xl"
          >
            Warum Gruppenaktivitäten heute unnötig kompliziert sind
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {problemCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.2 } }}
              className={`p-8 rounded-3xl flex flex-col gap-4 cursor-default ${
                card.highlighted
                  ? 'bg-lime'
                  : 'bg-white border border-black/[0.06] shadow-soft'
              }`}
            >
              <h3
                className={`text-[22px] font-bold leading-tight ${
                  card.highlighted ? 'text-dark-green' : 'text-primary'
                }`}
              >
                {card.title}
              </h3>
              <p
                className={`text-[16px] leading-relaxed ${
                  card.highlighted ? 'text-dark-green/80' : 'text-secondary'
                }`}
              >
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
