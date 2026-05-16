'use client'

import { motion } from 'framer-motion'
import {
  LayoutDashboard, BookOpen, Search, FileText, Settings,
  Bell, ChevronRight, Users, TrendingUp, Calendar, Euro, Filter,
} from 'lucide-react'
import { bookingRows } from '@/lib/data'

type BookingStatus = 'Bestätigt' | 'Zahlung offen' | 'Angefragt' | 'Durchgeführt'

const statusConfig: Record<BookingStatus, { bg: string; text: string; label: string }> = {
  Bestätigt: { bg: 'rgba(16,185,129,0.12)', text: '#059669', label: 'Bestätigt' },
  'Zahlung offen': { bg: 'rgba(245,158,11,0.12)', text: '#D97706', label: 'Zahlung offen' },
  Angefragt: { bg: 'rgba(107,114,128,0.12)', text: '#6B7280', label: 'Angefragt' },
  Durchgeführt: { bg: 'rgba(199,255,51,0.18)', text: '#173D2B', label: 'Durchgeführt' },
}

const prefersReduced =
  typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

export default function DashboardPreview() {
  return (
    <section
      id="demo"
      aria-labelledby="dashboard-heading"
      className="py-28 px-4 sm:px-6"
      style={{ background: '#F5F5F2' }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 text-center"
        >
          <p
            className="text-[13px] font-semibold uppercase mb-4"
            style={{ color: '#6B7280', letterSpacing: '0.08em' }}
          >
            Das Produkt
          </p>
          <h2
            id="dashboard-heading"
            className="font-bold leading-tight mb-4 mx-auto"
            style={{
              fontSize: 'clamp(36px, 5vw, 60px)',
              letterSpacing: '-0.04em',
              color: '#111111',
              maxWidth: 600,
            }}
          >
            Ihr Buchungscenter –{' '}
            <span className="text-lime-gradient">übersichtlich</span> und effizient.
          </h2>
          <p className="text-[17px] text-[#6B7280] max-w-xl mx-auto">
            Alle Buchungen, Einrichtungen und Rechnungen auf einen Blick.
          </p>
        </motion.div>

        {/* Dashboard wrapper with perspective */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          animate={prefersReduced ? {} : { y: [0, -8, 0] }}
          // @ts-ignore - framer motion types
          transition2={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="relative"
          style={{
            transform: 'perspective(1200px) rotateX(3deg) rotateY(-1deg)',
            transition: 'transform 0.4s ease',
          }}
          whileHover={prefersReduced ? {} : {
            rotateX: 0,
            rotateY: 0,
          }}
        >
          {/* Outer browser chrome */}
          <div
            className="overflow-hidden"
            style={{
              borderRadius: 16,
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 40px 120px rgba(0,0,0,0.35)',
            }}
          >
            {/* Browser bar */}
            <div
              className="px-4 py-3 flex items-center gap-3"
              style={{ background: '#1a1a1a', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="flex gap-1.5" aria-hidden="true">
                <div className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: '#FEBC2E' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: '#28C840' }} />
              </div>
              <div className="flex-1 max-w-xs mx-auto">
                <div
                  className="rounded-full px-4 py-1.5 flex items-center gap-2"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" aria-hidden="true" />
                  <span className="text-[11px] font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    app.tripando.de/buchungen
                  </span>
                </div>
              </div>
            </div>

            {/* App layout */}
            <div className="flex bg-white" style={{ minHeight: 560 }}>
              {/* Sidebar */}
              <div
                className="flex-shrink-0 flex flex-col p-4 gap-1"
                style={{ width: 220, background: '#111111' }}
              >
                {/* Logo */}
                <div className="flex items-center gap-2 px-3 py-3 mb-3">
                  <div
                    className="w-6 h-6 rounded-lg flex items-center justify-center"
                    style={{ background: '#C7FF33' }}
                  >
                    <span className="text-[10px] font-bold" style={{ color: '#0D1F14' }}>T</span>
                  </div>
                  <span className="text-[13px] font-bold text-white">Tripando</span>
                </div>

                {/* Nav items */}
                {[
                  { icon: LayoutDashboard, label: 'Übersicht', active: false },
                  { icon: BookOpen, label: 'Buchungen', active: true },
                  { icon: Search, label: 'Angebote', active: false },
                  { icon: FileText, label: 'Rechnungen', active: false },
                  { icon: Settings, label: 'Einstellungen', active: false },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg cursor-pointer transition-colors"
                      style={{
                        background: item.active ? 'rgba(199,255,51,0.12)' : 'transparent',
                        borderLeft: item.active ? '2px solid #C7FF33' : '2px solid transparent',
                        color: item.active ? '#C7FF33' : 'rgba(255,255,255,0.45)',
                      }}
                      aria-current={item.active ? 'page' : undefined}
                    >
                      <Icon size={15} aria-hidden="true" />
                      <span className="text-[13px] font-medium">{item.label}</span>
                    </div>
                  )
                })}

                {/* Bottom user */}
                <div
                  className="mt-auto px-3 pt-4 flex items-center gap-2.5"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(199,255,51,0.15)' }}
                  >
                    <span className="text-[10px] font-bold text-[#C7FF33]">AK</span>
                  </div>
                  <div>
                    <div className="text-[11px] font-medium text-white leading-tight">AWO Köln-Süd</div>
                    <div className="text-[10px]" style={{ color: 'rgba(255,255,255,0.35)' }}>Admin</div>
                  </div>
                </div>
              </div>

              {/* Main content */}
              <div className="flex-1 flex flex-col min-w-0" style={{ background: '#FAFAFA' }}>
                {/* Topbar */}
                <div
                  className="px-6 py-4 flex items-center justify-between"
                  style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}
                >
                  <h3 className="text-[18px] font-bold text-[#111]" style={{ letterSpacing: '-0.02em' }}>
                    Buchungen
                  </h3>
                  <div className="flex items-center gap-3">
                    <div
                      className="flex items-center gap-2 px-3 py-2 rounded-xl"
                      style={{ background: '#F0F0F0', border: '1px solid rgba(0,0,0,0.06)' }}
                    >
                      <Search size={12} className="text-gray-400" aria-hidden="true" />
                      <span className="text-[12px] text-gray-400">Suchen …</span>
                    </div>
                    <div
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl cursor-pointer text-[12px] font-medium text-gray-500"
                      style={{ background: '#F0F0F0', border: '1px solid rgba(0,0,0,0.06)' }}
                    >
                      <Filter size={12} aria-hidden="true" />
                      Filter
                    </div>
                    <div className="relative">
                      <Bell size={17} className="text-gray-400" aria-hidden="true" />
                      <div
                        className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center"
                        style={{ background: '#C7FF33' }}
                      >
                        <span className="text-[8px] font-bold text-[#0D1F14]">3</span>
                      </div>
                    </div>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ background: '#173D2B' }}
                    >
                      <span className="text-[10px] font-bold text-[#C7FF33]">MK</span>
                    </div>
                  </div>
                </div>

                {/* KPI Cards */}
                <div className="px-6 py-4 grid grid-cols-4 gap-3">
                  {[
                    {
                      label: 'Aktive Buchungen',
                      value: '24',
                      badge: '+3 diese Woche',
                      badgeBg: 'rgba(16,185,129,0.12)',
                      badgeText: '#059669',
                      icon: BookOpen,
                      accentBorder: true,
                    },
                    {
                      label: 'Offene Anfragen',
                      value: '7',
                      badge: 'Antwort ausstehend',
                      badgeBg: 'rgba(245,158,11,0.12)',
                      badgeText: '#D97706',
                      icon: TrendingUp,
                      accentBorder: false,
                    },
                    {
                      label: 'Buchungsvolumen',
                      value: '18.450 €',
                      badge: '+12 % vs. Vormonat',
                      badgeBg: 'rgba(16,185,129,0.12)',
                      badgeText: '#059669',
                      icon: Euro,
                      accentBorder: false,
                    },
                    {
                      label: 'Nächste Veranstaltung',
                      value: 'Morgen',
                      badge: 'Zoo Duisburg, 32 Pers.',
                      badgeBg: 'rgba(199,255,51,0.15)',
                      badgeText: '#173D2B',
                      icon: Calendar,
                      accentBorder: false,
                      valueLime: true,
                    },
                  ].map((kpi) => {
                    const Icon = kpi.icon
                    return (
                      <div
                        key={kpi.label}
                        className="p-4 rounded-xl"
                        style={{
                          background: '#FFFFFF',
                          border: kpi.accentBorder
                            ? '1px solid rgba(199,255,51,0.4)'
                            : '1px solid rgba(0,0,0,0.06)',
                          borderLeft: kpi.accentBorder ? '3px solid #C7FF33' : undefined,
                        }}
                      >
                        <div className="flex items-center gap-1.5 mb-2">
                          <Icon size={12} className="text-gray-400" aria-hidden="true" />
                          <span className="text-[10px] text-gray-400 font-medium">{kpi.label}</span>
                        </div>
                        <div
                          className="text-[20px] font-bold leading-none mb-2 tabular"
                          style={{
                            color: kpi.valueLime ? '#C7FF33' : '#111111',
                            letterSpacing: '-0.03em',
                          }}
                        >
                          {kpi.value}
                        </div>
                        <span
                          className="text-[10px] font-medium px-2 py-0.5 rounded-full inline-block"
                          style={{ background: kpi.badgeBg, color: kpi.badgeText }}
                        >
                          {kpi.badge}
                        </span>
                      </div>
                    )
                  })}
                </div>

                {/* Table */}
                <div className="px-6 pb-4 flex-1 overflow-hidden">
                  <div
                    className="rounded-xl overflow-hidden"
                    style={{ border: '1px solid rgba(0,0,0,0.06)' }}
                  >
                    <table className="w-full">
                      <thead>
                        <tr style={{ background: '#F5F5F5', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                          {['Veranstaltung', 'Einrichtung', 'Datum', 'Pers.', 'Status', 'Betrag'].map((h) => (
                            <th
                              key={h}
                              className="px-4 py-2.5 text-left text-[10px] font-semibold text-gray-400 uppercase"
                              style={{ letterSpacing: '0.05em' }}
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {bookingRows.map((row, i) => {
                          const status = statusConfig[row.status]
                          return (
                            <tr
                              key={i}
                              className="transition-colors"
                              style={{ borderBottom: '1px solid rgba(0,0,0,0.04)' }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(0,0,0,0.015)'
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'transparent'
                              }}
                            >
                              <td className="px-4 py-3 text-[12px] font-semibold text-[#111]">
                                {row.event}
                              </td>
                              <td className="px-4 py-3 text-[12px] text-gray-500">{row.institution}</td>
                              <td className="px-4 py-3 text-[12px] text-gray-500 font-medium tabular">
                                {row.date}
                              </td>
                              <td className="px-4 py-3 text-[12px] text-gray-500">{row.participants}</td>
                              <td className="px-4 py-3">
                                <span
                                  className="px-2.5 py-1 rounded-full text-[10px] font-semibold"
                                  style={{ background: status.bg, color: status.text }}
                                >
                                  {status.label}
                                </span>
                              </td>
                              <td className="px-4 py-3 text-[12px] font-bold text-[#111] tabular">
                                {row.amount}
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Right detail panel */}
              <div
                className="flex-shrink-0 flex flex-col gap-4 p-5"
                style={{
                  width: 256,
                  background: '#FFFFFF',
                  borderLeft: '1px solid rgba(0,0,0,0.06)',
                }}
              >
                <div
                  className="text-[11px] font-semibold uppercase"
                  style={{ color: '#6B7280', letterSpacing: '0.08em' }}
                >
                  Buchungsdetails
                </div>

                {/* Event card */}
                <div
                  className="p-3 rounded-xl"
                  style={{ background: '#F5F5F2', border: '1px solid rgba(0,0,0,0.06)' }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #1a3d1a, #4a8c3f)' }}
                    >
                      <span className="text-[9px] text-white font-bold">ZD</span>
                    </div>
                    <div>
                      <div className="text-[13px] font-bold text-[#111]">Zoo Duisburg</div>
                      <div className="text-[10px] text-gray-400">AWO Seniorenzentrum Köln</div>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-col gap-2.5">
                  {[
                    { label: 'Datum', value: '24. Mai 2026' },
                    { label: 'Personen', value: '50' },
                    { label: 'Preis', value: '1.000 €' },
                    { label: 'Gebühr', value: '25 € (2,5 %)' },
                  ].map((d) => (
                    <div key={d.label} className="flex justify-between items-center">
                      <span className="text-[11px] text-gray-400">{d.label}</span>
                      <span className="text-[12px] font-semibold text-[#111] tabular">{d.value}</span>
                    </div>
                  ))}
                </div>

                {/* Status badge */}
                <div
                  className="flex items-center justify-between p-3 rounded-xl"
                  style={{
                    background: 'rgba(199,255,51,0.1)',
                    border: '1px solid rgba(199,255,51,0.25)',
                  }}
                >
                  <span className="text-[11px] text-gray-500">Status</span>
                  <span
                    className="text-[11px] font-bold px-2.5 py-1 rounded-full"
                    style={{ background: '#C7FF33', color: '#0D1F14' }}
                  >
                    Bestätigt
                  </span>
                </div>

                {/* Action buttons */}
                <button
                  className="w-full py-2.5 rounded-full text-[12px] font-semibold flex items-center justify-center gap-1.5 focus-ring"
                  style={{ background: '#C7FF33', color: '#0D1F14' }}
                >
                  Details ansehen
                  <ChevronRight size={13} aria-hidden="true" />
                </button>
                <button
                  className="w-full py-2.5 rounded-full text-[12px] font-semibold flex items-center justify-center focus-ring"
                  style={{
                    background: 'transparent',
                    color: '#6B7280',
                    border: '1px solid rgba(0,0,0,0.1)',
                  }}
                >
                  Stornieren
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
