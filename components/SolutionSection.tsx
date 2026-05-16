'use client'

import { motion } from 'framer-motion'
import { Search, ClipboardList, CheckCircle, Receipt } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.09 } },
}

const features = [
  {
    icon: Search,
    title: 'Angebotskatalog',
    description:
      'Hunderte geprüfte Gruppenangebote durchsuchen, filtern und vergleichen. Mit Barrierefreiheitsfiltern und transparenten Preisen.',
    wide: true,
    mockup: true,
  },
  {
    icon: ClipboardList,
    title: 'Gruppenbuchung',
    description:
      'Teilnehmerzahl, Begleitpersonen und Anforderungen digital erfassen und senden.',
    wide: false,
    mockup: false,
  },
  {
    icon: CheckCircle,
    title: 'Freigabeprozesse',
    description:
      'Buchungen intern prüfen und genehmigen – für Heimleitung und Verwaltung.',
    wide: false,
    mockup: false,
  },
  {
    icon: Receipt,
    title: 'Rechnungen & Zahlungen',
    description:
      'Automatische Rechnungsstellung und transparente Zahlungsübersicht.',
    wide: true,
    mockup: false,
  },
]

function SearchMockup() {
  const results = [
    { name: 'Zoo Duisburg', cat: 'Tiere & Natur', price: '18 €', tag: 'Rollstuhl geeignet' },
    { name: 'Museum Ludwig', cat: 'Kultur & Kunst', price: '14 €', tag: 'Gruppenrabatt' },
    { name: 'Theater Bonn', cat: 'Theater & Musik', price: '22 €', tag: 'Begleitung frei' },
  ]
  return (
    <div
      className="mt-5 rounded-xl overflow-hidden"
      style={{ border: '1px solid rgba(0,0,0,0.07)' }}
    >
      <div
        className="px-3 py-2 flex items-center gap-2"
        style={{ background: '#F5F5F2', borderBottom: '1px solid rgba(0,0,0,0.06)' }}
      >
        <Search size={12} className="text-gray-400" aria-hidden="true" />
        <span className="text-[11px] text-gray-400">Zoo, Museum, Theater …</span>
      </div>
      {results.map((r, i) => (
        <div
          key={r.name}
          className="px-3 py-2.5 flex items-center justify-between hover:bg-gray-50 transition-colors"
          style={{
            borderBottom: i < results.length - 1 ? '1px solid rgba(0,0,0,0.04)' : undefined,
          }}
        >
          <div>
            <div className="text-[12px] font-semibold text-[#111]">{r.name}</div>
            <div className="text-[10px] text-gray-400">{r.cat}</div>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="text-[10px] font-medium px-2 py-0.5 rounded-full"
              style={{ background: 'rgba(199,255,51,0.15)', color: '#173D2B' }}
            >
              {r.tag}
            </span>
            <span className="text-[12px] font-bold text-[#111]">{r.price}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function SolutionSection() {
  return (
    <section
      id="loesung"
      aria-labelledby="solution-heading"
      className="py-28 px-4 sm:px-6"
      style={{ background: '#F5F5F2' }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-16 text-center"
        >
          <p
            className="text-[13px] font-semibold uppercase mb-4"
            style={{ color: '#6B7280', letterSpacing: '0.08em' }}
          >
            Die Lösung
          </p>
          <h2
            id="solution-heading"
            className="font-bold leading-tight max-w-[640px] mx-auto"
            style={{
              fontSize: 'clamp(36px, 5vw, 60px)',
              letterSpacing: '-0.04em',
              color: '#111111',
            }}
          >
            Eine Plattform für Planung, Buchung und Abrechnung.
          </h2>
          <p className="text-[17px] text-[#6B7280] mt-4 max-w-xl mx-auto leading-relaxed">
            Tripando bündelt alle Schritte der Aktivitätsplanung in einem System – von der Suche bis zur Rechnung.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {/* Wide hero card - spans 2 cols */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.2, ease: 'easeOut' } }}
            className="md:col-span-2 p-8 rounded-3xl bg-white cursor-default group"
            style={{
              border: '1px solid rgba(0,0,0,0.06)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
              style={{ background: 'rgba(199,255,51,0.15)' }}
            >
              <Search
                size={20}
                aria-hidden="true"
                style={{ color: '#173D2B', transition: 'color 0.2s' }}
                className="group-hover:text-[#C7FF33]"
              />
            </div>
            <h3
              className="text-[22px] font-bold mb-2"
              style={{ letterSpacing: '-0.02em', color: '#111111' }}
            >
              Angebotskatalog
            </h3>
            <p className="text-[15px] text-[#6B7280] leading-relaxed max-w-md">
              Hunderte geprüfte Gruppenangebote durchsuchen, filtern und vergleichen.
              Mit Barrierefreiheitsfiltern und transparenten Preisen.
            </p>
            <SearchMockup />
          </motion.div>

          {/* Single col: Gruppenbuchung */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.2, ease: 'easeOut' } }}
            className="p-8 rounded-3xl bg-white cursor-default group"
            style={{
              border: '1px solid rgba(0,0,0,0.06)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
              style={{ background: 'rgba(199,255,51,0.15)' }}
            >
              <ClipboardList size={20} aria-hidden="true" style={{ color: '#173D2B' }} />
            </div>
            <h3
              className="text-[20px] font-bold mb-2"
              style={{ letterSpacing: '-0.02em', color: '#111111' }}
            >
              Gruppenbuchung
            </h3>
            <p className="text-[15px] text-[#6B7280] leading-relaxed">
              Teilnehmerzahl, Begleitpersonen und Anforderungen digital erfassen und senden.
            </p>
          </motion.div>

          {/* Single col: Freigabeprozesse */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.2, ease: 'easeOut' } }}
            className="p-8 rounded-3xl bg-white cursor-default group"
            style={{
              border: '1px solid rgba(0,0,0,0.06)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
              style={{ background: 'rgba(199,255,51,0.15)' }}
            >
              <CheckCircle size={20} aria-hidden="true" style={{ color: '#173D2B' }} />
            </div>
            <h3
              className="text-[20px] font-bold mb-2"
              style={{ letterSpacing: '-0.02em', color: '#111111' }}
            >
              Freigabeprozesse
            </h3>
            <p className="text-[15px] text-[#6B7280] leading-relaxed">
              Buchungen intern prüfen und genehmigen – für Heimleitung und Verwaltung.
            </p>
          </motion.div>

          {/* Wide: Rechnungen - spans 2 cols */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.2, ease: 'easeOut' } }}
            className="md:col-span-2 p-8 rounded-3xl bg-white cursor-default group"
            style={{
              border: '1px solid rgba(0,0,0,0.06)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
              style={{ background: 'rgba(199,255,51,0.15)' }}
            >
              <Receipt size={20} aria-hidden="true" style={{ color: '#173D2B' }} />
            </div>
            <h3
              className="text-[20px] font-bold mb-2"
              style={{ letterSpacing: '-0.02em', color: '#111111' }}
            >
              Rechnungen & Zahlungen
            </h3>
            <p className="text-[15px] text-[#6B7280] leading-relaxed max-w-lg">
              Automatische Rechnungsstellung und transparente Zahlungsübersicht – komplett digitalisiert ohne manuelle Schritte.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
