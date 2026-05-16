'use client'

import { motion } from 'framer-motion'
import {
  PawPrint, Landmark, Music, Heart, Waves,
  Mountain, Bus, MapPin, Shield, ArrowRight,
} from 'lucide-react'
import { categories } from '@/lib/data'

const iconMap: Record<string, React.ReactNode> = {
  PawPrint: <PawPrint size={28} className="text-white" />,
  Landmark: <Landmark size={28} className="text-white" />,
  Music: <Music size={28} className="text-white" />,
  Heart: <Heart size={28} className="text-white" />,
  Waves: <Waves size={28} className="text-white" />,
  Mountain: <Mountain size={28} className="text-white" />,
  Bus: <Bus size={28} className="text-white" />,
  MapPin: <MapPin size={28} className="text-white" />,
  Shield: <Shield size={28} className="text-white" />,
}

export default function Categories() {
  return (
    <section
      id="kategorien"
      aria-labelledby="categories-heading"
      className="py-24 px-4 sm:px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <motion.h2
            id="categories-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[38px] sm:text-[52px] font-bold text-primary leading-tight tracking-tight max-w-2xl"
          >
            Alles, was Seniorengruppen erleben können – an einem Ort.
          </motion.h2>
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.04 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-lime text-dark-green text-[14px] font-semibold focus-ring flex-shrink-0"
          >
            Alle entdecken
            <ArrowRight size={16} aria-hidden="true" />
          </motion.a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {/* First 4 in full row, then 5 in second */}
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.2 } }}
              className={`relative overflow-hidden rounded-3xl aspect-square bg-gradient-to-br ${cat.gradient} flex flex-col items-center justify-center gap-3 cursor-pointer group`}
            >
              <div className="z-10 flex flex-col items-center gap-2 p-4 text-center">
                <div className="opacity-90">{iconMap[cat.icon]}</div>
                <span className="text-[13px] font-semibold text-white leading-tight">{cat.name}</span>
              </div>
              {/* Lime hover overlay */}
              <div className="absolute inset-0 bg-lime opacity-0 group-hover:opacity-90 transition-opacity duration-200 flex items-center justify-center">
                <div className="flex flex-col items-center gap-2 text-dark-green">
                  <span className="text-[13px] font-bold">{cat.name}</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
