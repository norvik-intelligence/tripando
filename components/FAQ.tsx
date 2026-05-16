'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { faqItems } from '@/lib/data'

const prefersReduced =
  typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-28 px-4 sm:px-6"
      style={{ background: '#F5F5F2' }}
    >
      <div className="max-w-[720px] mx-auto">
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <p
            className="text-[13px] font-semibold uppercase mb-4"
            style={{ color: '#6B7280', letterSpacing: '0.08em' }}
          >
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="font-bold leading-tight"
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              letterSpacing: '-0.04em',
              color: '#111111',
            }}
          >
            Häufige Fragen
          </h2>
        </motion.div>

        <div className="flex flex-col">
          {faqItems.map((item, i) => (
            <motion.div
              key={item.question}
              initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                className="w-full flex items-center justify-between py-5 text-left focus-ring rounded-lg gap-4"
              >
                <span
                  className="text-[16px] font-semibold"
                  style={{
                    color: openIndex === i ? '#111111' : '#111111',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: prefersReduced ? 0 : 0.2, ease: 'easeOut' }}
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                  style={{
                    background: openIndex === i ? '#C7FF33' : 'rgba(0,0,0,0.06)',
                  }}
                >
                  <Plus
                    size={14}
                    aria-hidden="true"
                    style={{ color: openIndex === i ? '#0D1F14' : '#6B7280' }}
                  />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={prefersReduced ? {} : { height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={prefersReduced ? {} : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p
                      className="pb-5 text-[15px] leading-[1.65]"
                      style={{ color: '#6B7280' }}
                    >
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
