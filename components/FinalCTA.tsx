'use client'

import { motion } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="py-16 px-4 sm:px-6 pb-16"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[32px] bg-dark-green px-10 py-20 md:px-20 flex flex-col items-center text-center"
        >
          {/* Decorative lime shapes */}
          <div className="absolute top-[-20%] right-[-5%] w-[500px] h-[500px] rounded-full bg-lime opacity-[0.06] blur-[100px] pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-[-20%] left-[-5%] w-[400px] h-[400px] rounded-full bg-lime opacity-[0.05] blur-[80px] pointer-events-none" aria-hidden="true" />
          <svg
            className="absolute bottom-8 right-12 opacity-[0.08]"
            width="160"
            height="160"
            viewBox="0 0 160 160"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="80" cy="80" r="70" stroke="#C7FF33" strokeWidth="1" fill="none" />
            <circle cx="80" cy="80" r="40" stroke="#C7FF33" strokeWidth="0.5" fill="none" />
            <line x1="10" y1="80" x2="150" y2="80" stroke="#C7FF33" strokeWidth="0.5" />
            <line x1="80" y1="10" x2="80" y2="150" stroke="#C7FF33" strokeWidth="0.5" />
          </svg>
          <svg
            className="absolute top-8 left-12 opacity-[0.06]"
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            aria-hidden="true"
          >
            <rect x="10" y="10" width="100" height="100" rx="20" stroke="#C7FF33" strokeWidth="1" fill="none" />
            <rect x="30" y="30" width="60" height="60" rx="12" stroke="#C7FF33" strokeWidth="0.5" fill="none" />
          </svg>

          <div className="relative z-10 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime/15 border border-lime/30 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-lime" aria-hidden="true" />
              <span className="text-lime/90 text-[13px] font-medium">Jetzt durchstarten</span>
            </motion.div>

            <h2
              id="cta-heading"
              className="text-[36px] sm:text-[52px] md:text-[60px] font-bold text-white leading-tight tracking-tight mb-6"
            >
              Bereit für die nächste Gruppenaktivität –{' '}
              <span className="text-lime">ohne Verwaltungschaos?</span>
            </h2>
            <p className="text-[17px] text-white/70 leading-relaxed mb-10">
              Starten Sie mit einem Pilotzugang für Ihre Einrichtung und testen Sie Tripando mit
              echten Angeboten.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="#"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-full bg-lime text-dark-green text-[15px] font-semibold focus-ring"
              >
                Demo anfragen
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-full border border-white/30 text-white text-[15px] font-semibold hover:bg-white/10 transition-colors focus-ring"
              >
                Pilot starten
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
