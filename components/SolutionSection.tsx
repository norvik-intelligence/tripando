'use client'

import { motion } from 'framer-motion'
import { Search, ClipboardList, CheckCircle, Receipt } from 'lucide-react'
import { featureCards } from '@/lib/data'

const iconMap: Record<string, React.ReactNode> = {
  Search: <Search size={24} className="text-dark-green" />,
  ClipboardList: <ClipboardList size={24} className="text-dark-green" />,
  CheckCircle: <CheckCircle size={24} className="text-dark-green" />,
  Receipt: <Receipt size={24} className="text-dark-green" />,
}

export default function SolutionSection() {
  return (
    <section
      id="loesung"
      aria-labelledby="solution-heading"
      className="py-24 px-4 sm:px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 max-w-2xl"
        >
          <h2
            id="solution-heading"
            className="text-[38px] sm:text-[52px] md:text-[60px] font-bold text-primary leading-tight tracking-tight mb-4"
          >
            Eine Plattform für Planung, Buchung und Abrechnung.
          </h2>
          <p className="text-[17px] text-secondary leading-relaxed">
            Tripando bündelt alle Schritte der Aktivitätsplanung in einem System – von der Suche bis zur Rechnung.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {featureCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.2 } }}
              className="p-8 rounded-3xl bg-background border border-black/[0.06] flex flex-col gap-4 cursor-default group"
            >
              <div className="w-12 h-12 rounded-2xl bg-lime/20 flex items-center justify-center group-hover:bg-lime transition-colors duration-200">
                {iconMap[card.icon]}
              </div>
              <div>
                <h3 className="text-[20px] font-semibold text-primary mb-2">{card.title}</h3>
                <p className="text-[16px] text-secondary leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
