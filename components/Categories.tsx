'use client'

import { motion } from 'framer-motion'
import {
  PawPrint, Landmark, Music, Heart, Waves,
  Mountain, Bus, MapPin, Shield, ArrowRight,
} from 'lucide-react'
import { categories } from '@/lib/data'

const iconMap: Record<string, React.ElementType> = {
  PawPrint,
  Landmark,
  Music,
  Heart,
  Waves,
  Mountain,
  Bus,
  MapPin,
  Shield,
}

const cardGradients: Record<string, string> = {
  'Zoo & Tierparks': 'linear-gradient(135deg, #1a3d1a 0%, #2d5a27 50%, #4a8c3f 100%)',
  'Museen & Kultur': 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #2d2d6e 100%)',
  'Theater & Musik': 'linear-gradient(135deg, #2d1b69 0%, #1a0533 50%, #3d1a6e 100%)',
  'Gesundheitskurse': 'linear-gradient(135deg, #3d0a0a 0%, #6b1212 50%, #8b2020 100%)',
  'Schwimmbäder': 'linear-gradient(135deg, #0a2540 0%, #063970 50%, #0f6191 100%)',
  'Wandervereine': 'linear-gradient(135deg, #1a3d1a 0%, #2d6b2d 50%, #3d7a3d 100%)',
  'Busunternehmen': 'linear-gradient(135deg, #3d2a00 0%, #6b4a00 50%, #8b6000 100%)',
  'Tagesausflüge': 'linear-gradient(135deg, #3d1a00 0%, #6b3000 50%, #8b4500 100%)',
  'Präventionskurse': 'linear-gradient(135deg, #0a1a3d 0%, #122d6b 50%, #1a3d8b 100%)',
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Categories() {
  return (
    <section
      id="kategorien"
      aria-labelledby="categories-heading"
      className="py-28 px-4 sm:px-6"
      style={{ background: '#F5F5F2' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              className="text-[13px] font-semibold uppercase mb-3"
              style={{ color: '#6B7280', letterSpacing: '0.08em' }}
            >
              Angebotskategorien
            </p>
            <h2
              id="categories-heading"
              className="font-bold leading-tight"
              style={{
                fontSize: 'clamp(32px, 4.5vw, 56px)',
                letterSpacing: '-0.04em',
                color: '#111111',
              }}
            >
              Alles, was Seniorengruppen{' '}
              <br className="hidden sm:block" />
              erleben können.
            </h2>
          </motion.div>

          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.04 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-[14px] font-semibold focus-ring flex-shrink-0"
            style={{ background: '#C7FF33', color: '#0D1F14' }}
          >
            Alle 40+ Kategorien
            <ArrowRight size={15} aria-hidden="true" />
          </motion.a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => {
            const Icon = iconMap[cat.icon] || MapPin
            const gradient = cardGradients[cat.name] || `linear-gradient(135deg, #1a3d1a, #2d5a27)`
            return (
              <motion.div
                key={cat.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className="group relative overflow-hidden cursor-pointer"
                style={{ borderRadius: 20, aspectRatio: '3/4' }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2, ease: 'easeOut' },
                }}
              >
                {/* Background gradient */}
                <div
                  className="absolute inset-0"
                  style={{ background: gradient }}
                />

                {/* Lime overlay on hover */}
                <div
                  className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  style={{ background: 'rgba(199,255,51,0.12)' }}
                />

                {/* Ghost large text */}
                <div
                  className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
                  aria-hidden="true"
                >
                  <Icon
                    size={100}
                    className="text-white"
                    style={{ opacity: 0.07 }}
                  />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-5">
                  {/* Top: icon */}
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(255,255,255,0.12)' }}
                  >
                    <Icon size={18} className="text-white" aria-hidden="true" />
                  </div>

                  {/* Bottom: name + arrow */}
                  <div className="flex items-end justify-between">
                    <h3
                      className="text-[15px] font-semibold text-white leading-tight"
                      style={{ letterSpacing: '-0.01em' }}
                    >
                      {cat.name}
                    </h3>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 0 }}
                      className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 flex-shrink-0"
                      style={{ background: '#C7FF33' }}
                    >
                      <ArrowRight size={14} className="text-[#0D1F14]" aria-hidden="true" />
                    </motion.div>
                  </div>
                </div>

                {/* Hover arrow overlay - separate from above */}
                <div className="absolute bottom-5 right-5 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200"
                  style={{ background: '#C7FF33' }}
                  aria-hidden="true"
                >
                  <ArrowRight size={14} className="text-[#0D1F14]" />
                </div>

                {/* Shadow overlay at bottom */}
                <div
                  className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
                  }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
