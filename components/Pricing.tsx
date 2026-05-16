'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { pricingPlans } from '@/lib/data'

export default function Pricing() {
  return (
    <section
      id="preise"
      aria-labelledby="pricing-heading"
      className="py-24 px-4 sm:px-6 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <h2
            id="pricing-heading"
            className="text-[38px] sm:text-[52px] md:text-[60px] font-bold text-primary leading-tight tracking-tight mb-4"
          >
            Planbare Preise für Einrichtungen und Träger.
          </h2>
          <p className="text-[17px] text-secondary max-w-xl mx-auto">
            Kein verstecktes Kleingedrucktes – klare Pakete, die zu Ihrer Einrichtung passen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.2 } }}
              className={`rounded-3xl p-8 flex flex-col gap-6 relative ${
                plan.highlighted
                  ? 'bg-dark-green border-2 border-lime shadow-card'
                  : 'bg-white border border-black/[0.08] shadow-soft'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-lime text-dark-green text-[12px] font-bold">
                    Empfohlen
                  </span>
                </div>
              )}

              <div>
                <h3 className={`text-[13px] font-semibold uppercase tracking-widest mb-2 ${plan.highlighted ? 'text-lime/70' : 'text-secondary'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-end gap-1.5 mb-2">
                  <span className={`text-[42px] font-bold leading-none ${plan.highlighted ? 'text-white' : 'text-primary'}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`text-[15px] mb-1.5 ${plan.highlighted ? 'text-white/50' : 'text-secondary'}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className={`text-[14px] ${plan.highlighted ? 'text-white/60' : 'text-secondary'}`}>
                  {plan.tagline}
                </p>
              </div>

              <ul className="flex flex-col gap-2.5 flex-1" role="list">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.highlighted ? 'bg-lime' : 'bg-lime/20'}`}>
                      <Check
                        size={11}
                        strokeWidth={3}
                        className={plan.highlighted ? 'text-dark-green' : 'text-dark-green'}
                      />
                    </div>
                    <span className={`text-[14px] ${plan.highlighted ? 'text-white/90' : 'text-primary'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="#demo"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className={`block w-full text-center py-3.5 rounded-full text-[14px] font-semibold transition-colors focus-ring ${
                  plan.highlighted
                    ? 'bg-lime text-dark-green hover:bg-lime/90'
                    : 'bg-background border border-black/[0.1] text-primary hover:bg-black/5'
                }`}
              >
                {plan.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-[14px] text-secondary"
        >
          Zzgl. 1,5 % – 3 % Transaktionsgebühr pro erfolgreicher Buchung.
        </motion.p>
      </div>
    </section>
  )
}
