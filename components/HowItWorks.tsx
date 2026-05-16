'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { howItWorksSteps } from '@/lib/data'

export default function HowItWorks() {
  const lineRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(lineRef, { once: true, margin: '-100px' })

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="py-24 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2
            id="how-heading"
            className="text-[38px] sm:text-[52px] md:text-[60px] font-bold text-primary leading-tight tracking-tight max-w-2xl"
          >
            Von der Idee zum bestätigten Ausflug in wenigen Minuten.
          </h2>
        </motion.div>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:block relative" ref={lineRef}>
          {/* Connector line */}
          <div className="absolute top-10 left-10 right-10 h-[2px] bg-black/5 overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-lime rounded-full"
              initial={{ scaleX: 0, originX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'left center' }}
            />
          </div>

          <div className="grid grid-cols-4 gap-6">
            {howItWorksSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ rotate: 1, y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-3xl p-7 border border-black/[0.06] shadow-soft cursor-default"
              >
                <div className="w-10 h-10 rounded-full bg-lime flex items-center justify-center mb-6">
                  <span className="text-[12px] font-bold text-dark-green">{step.number}</span>
                </div>
                <h3 className="text-[18px] font-semibold text-primary mb-3 leading-tight">
                  {step.title}
                </h3>
                <p className="text-[14px] text-secondary leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical steps */}
        <div className="md:hidden flex flex-col gap-4">
          {howItWorksSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-3xl p-6 border border-black/[0.06] shadow-soft flex gap-5"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-lime flex items-center justify-center">
                <span className="text-[12px] font-bold text-dark-green">{step.number}</span>
              </div>
              <div>
                <h3 className="text-[17px] font-semibold text-primary mb-2">{step.title}</h3>
                <p className="text-[14px] text-secondary leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
