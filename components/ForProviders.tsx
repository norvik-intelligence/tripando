'use client'

import { motion } from 'framer-motion'
import { Inbox, TrendingUp, Calendar, FileText, Building2, ArrowRight } from 'lucide-react'
import { providerBenefits } from '@/lib/data'

const iconMap: Record<string, React.ReactNode> = {
  Inbox: <Inbox size={22} className="text-lime" />,
  TrendingUp: <TrendingUp size={22} className="text-lime" />,
  Calendar: <Calendar size={22} className="text-lime" />,
  FileText: <FileText size={22} className="text-lime" />,
  Building2: <Building2 size={22} className="text-lime" />,
}

export default function ForProviders() {
  return (
    <section
      id="anbieter"
      aria-labelledby="providers-heading"
      className="py-24 px-4 sm:px-6 bg-dark-green"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block px-4 py-1.5 rounded-full bg-lime/15 text-lime text-[13px] font-semibold mb-6"
          >
            Für Anbieter
          </motion.span>
          <motion.h2
            id="providers-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[38px] sm:text-[52px] md:text-[60px] font-bold text-white leading-tight tracking-tight max-w-3xl mb-4"
          >
            Für Anbieter, die mehr{' '}
            <span className="text-lime">Gruppenbuchungen</span>{' '}
            erhalten möchten.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[17px] text-white/60 max-w-2xl leading-relaxed"
          >
            Zoos, Museen, Vereine, Kursanbieter, Busunternehmen, Theater und Restaurants.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {providerBenefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.2 } }}
              className="p-7 rounded-3xl bg-white/[0.06] border border-white/10 backdrop-blur-sm cursor-default"
            >
              <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center mb-5">
                {iconMap[benefit.title === 'Digitale Anfrageverwaltung' ? 'Inbox'
                  : benefit.title === 'Bessere Auslastung' ? 'TrendingUp'
                  : benefit.title === 'Planbare Gruppenbuchungen' ? 'Calendar'
                  : benefit.title === 'Saubere automatische Abrechnung' ? 'FileText'
                  : 'Building2']}
              </div>
              <h3 className="text-[18px] font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-[14px] text-white/60 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-lime text-dark-green text-[15px] font-semibold focus-ring"
          >
            Als Anbieter registrieren
            <ArrowRight size={16} aria-hidden="true" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
