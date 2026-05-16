'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { testimonials } from '@/lib/data'

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

const avatarGradients = [
  'linear-gradient(135deg, #0D1F14, #173D2B)',
  'linear-gradient(135deg, #1a1a2e, #16213e)',
  'linear-gradient(135deg, #2d1b69, #1a0533)',
]

export default function Testimonials() {
  return (
    <section
      id="referenzen"
      aria-labelledby="testimonials-heading"
      className="py-28 px-4 sm:px-6 bg-white relative overflow-hidden"
    >
      {/* Decorative large quote marks */}
      <div
        className="absolute top-16 left-8 select-none pointer-events-none font-bold"
        aria-hidden="true"
        style={{
          fontSize: 'clamp(120px, 20vw, 240px)',
          lineHeight: 1,
          color: '#C7FF33',
          opacity: 0.12,
          fontFamily: 'Georgia, serif',
        }}
      >
        &ldquo;
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-14"
        >
          <p
            className="text-[13px] font-semibold uppercase mb-4"
            style={{ color: '#6B7280', letterSpacing: '0.08em' }}
          >
            Referenzen
          </p>
          <h2
            id="testimonials-heading"
            className="font-bold leading-tight mx-auto mb-4"
            style={{
              fontSize: 'clamp(36px, 5vw, 60px)',
              letterSpacing: '-0.04em',
              color: '#111111',
              maxWidth: 600,
            }}
          >
            Gebaut für den Alltag sozialer Einrichtungen.
          </h2>
          <p className="text-[17px] text-[#6B7280] max-w-xl mx-auto">
            Das sagen Einrichtungsleitungen, Verwaltungen und Anbieter über Tripando.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              whileHover={
                prefersReduced
                  ? {}
                  : { y: -6, boxShadow: 'var(--shadow-elevated)', transition: { duration: 0.2, ease: 'easeOut' } }
              }
              className="flex flex-col gap-5 cursor-default"
              style={{
                padding: 32,
                borderRadius: 24,
                background: '#FFFFFF',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              {/* Stars */}
              <div className="flex gap-1" aria-label={`${t.stars} von 5 Sternen`}>
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    aria-hidden="true"
                    style={{ fill: '#C7FF33', color: '#C7FF33' }}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote
                className="text-[16px] leading-[1.7] flex-1 italic"
                style={{ color: '#374151' }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div
                className="flex items-center gap-3 pt-4"
                style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: avatarGradients[i % avatarGradients.length] }}
                  aria-hidden="true"
                >
                  <span className="text-[12px] font-bold text-[#C7FF33]">
                    {t.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-[#111111]">{t.name}</div>
                  <div className="text-[12px] text-[#6B7280]">
                    {t.role} · {t.organization}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
