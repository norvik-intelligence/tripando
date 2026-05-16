'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/lib/data'

export default function Testimonials() {
  return (
    <section
      id="referenzen"
      aria-labelledby="testimonials-heading"
      className="py-24 px-4 sm:px-6 bg-white"
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
            id="testimonials-heading"
            className="text-[38px] sm:text-[52px] md:text-[60px] font-bold text-primary leading-tight tracking-tight mb-4"
          >
            Gebaut für den Alltag sozialer Einrichtungen.
          </h2>
          <p className="text-[17px] text-secondary max-w-xl mx-auto">
            Das sagen Einrichtungsleitungen, Verwaltungen und Anbieter über Tripando.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.2 } }}
              className="p-8 rounded-3xl bg-background border border-black/[0.06] flex flex-col gap-5 cursor-default"
            >
              {/* Stars */}
              <div className="flex gap-1" aria-label={`${t.stars} von 5 Sternen`}>
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={14} className="text-lime fill-lime" aria-hidden="true" />
                ))}
              </div>

              {/* Quote icon */}
              <Quote size={24} className="text-lime/40" aria-hidden="true" />

              {/* Quote text */}
              <blockquote className="text-[16px] text-primary leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-black/[0.06]">
                <div className="w-9 h-9 rounded-full bg-dark-green flex items-center justify-center flex-shrink-0">
                  <span className="text-[11px] font-bold text-lime">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-primary">{t.name}</div>
                  <div className="text-[12px] text-secondary">
                    {t.role} · {t.organization}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
