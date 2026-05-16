'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { howItWorksSteps } from '@/lib/data'

const prefersReduced =
  typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

const fadeUp = {
  hidden: prefersReduced ? {} : { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = {
  visible: { transition: { staggerChildren: prefersReduced ? 0 : 0.1 } },
}

export default function HowItWorks() {
  const lineRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(lineRef, { once: true, margin: '-100px' })

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="py-28 px-4 sm:px-6 relative overflow-hidden"
      style={{ background: '#0D0D0B' }}
    >
      {/* Ghost section number */}
      <div
        className="absolute top-8 right-8 select-none pointer-events-none font-bold"
        aria-hidden="true"
        style={{
          fontSize: 'clamp(160px, 25vw, 300px)',
          lineHeight: 1,
          color: 'rgba(255,255,255,0.03)',
          letterSpacing: '-0.06em',
        }}
      >
        02
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
            So funktioniert es
          </p>
          <h2
            id="how-heading"
            className="font-bold leading-tight max-w-[560px]"
            style={{
              fontSize: 'clamp(36px, 5vw, 64px)',
              letterSpacing: '-0.04em',
              color: '#FFFFFF',
            }}
          >
            Von der Idee zum bestätigten Ausflug.
          </h2>
        </motion.div>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:block relative" ref={lineRef}>
          {/* Connector line */}
          <div
            className="absolute left-[56px] right-[56px] overflow-hidden rounded-full"
            style={{ top: 24, height: 2, background: 'rgba(255,255,255,0.06)' }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, #C7FF33 0%, rgba(199,255,51,0.4) 100%)',
                transformOrigin: 'left center',
              }}
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-4 gap-5"
          >
            {howItWorksSteps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                whileHover={{
                  borderColor: 'rgba(199,255,51,0.3)',
                  boxShadow: '0 0 0 1px rgba(199,255,51,0.15), 0 20px 60px rgba(0,0,0,0.3)',
                  y: -4,
                  transition: { duration: 0.2, ease: 'easeOut' },
                }}
                className="relative cursor-default"
                style={{
                  padding: 28,
                  borderRadius: 24,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
              >
                {/* Step number badge */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-6 flex-shrink-0"
                  style={{ background: '#C7FF33' }}
                >
                  <span
                    className="text-[13px] font-bold tabular"
                    style={{ color: '#0D1F14', letterSpacing: '-0.01em' }}
                  >
                    {step.number}
                  </span>
                </div>
                <h3
                  className="text-[17px] font-semibold mb-3 leading-tight"
                  style={{ color: '#FFFFFF', letterSpacing: '-0.02em' }}
                >
                  {step.title}
                </h3>
                <p className="text-[14px] leading-relaxed" style={{ color: '#6B7280' }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile vertical steps */}
        <div className="md:hidden flex flex-col gap-4">
          {howItWorksSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={prefersReduced ? {} : { opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-5 p-6 rounded-3xl"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div
                className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
                style={{ background: '#C7FF33' }}
              >
                <span className="text-[13px] font-bold text-[#0D1F14] tabular">{step.number}</span>
              </div>
              <div>
                <h3 className="text-[17px] font-semibold text-white mb-2 leading-tight">
                  {step.title}
                </h3>
                <p className="text-[14px] leading-relaxed" style={{ color: '#6B7280' }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
