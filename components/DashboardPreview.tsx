'use client'

import { motion } from 'framer-motion'
import {
  LayoutDashboard, BookOpen, Search, FileText, Settings,
  Bell, ChevronRight, Users, TrendingUp, Calendar, Euro,
} from 'lucide-react'
import { bookingRows } from '@/lib/data'

type BookingStatus = 'Bestätigt' | 'Zahlung offen' | 'Angefragt' | 'Durchgeführt'

const statusStyles: Record<BookingStatus, string> = {
  Bestätigt: 'bg-emerald-100 text-emerald-700',
  'Zahlung offen': 'bg-amber-100 text-amber-700',
  Angefragt: 'bg-gray-100 text-gray-600',
  Durchgeführt: 'bg-lime/30 text-dark-green',
}

export default function DashboardPreview() {
  return (
    <section
      id="demo"
      aria-labelledby="dashboard-heading"
      className="py-24 px-4 sm:px-6 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center"
        >
          <h2
            id="dashboard-heading"
            className="text-[38px] sm:text-[52px] md:text-[60px] font-bold text-primary leading-tight tracking-tight mb-4"
          >
            Ihr Buchungscenter –{' '}
            <span className="text-dark-green">übersichtlich und effizient.</span>
          </h2>
          <p className="text-[17px] text-secondary max-w-xl mx-auto">
            Alle Buchungen, Einrichtungen und Rechnungen auf einen Blick.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Browser Frame */}
          <div className="rounded-[24px] overflow-hidden shadow-[0_32px_100px_rgba(0,0,0,0.15)] border border-black/[0.08]">
            {/* Browser Chrome */}
            <div className="bg-[#F0F0EE] px-4 py-3 flex items-center gap-3 border-b border-black/[0.06]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 max-w-sm mx-auto">
                <div className="bg-white rounded-full px-4 py-1.5 flex items-center gap-2 border border-black/[0.06]">
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-[12px] text-secondary font-medium">app.tripando.de/buchungen</span>
                </div>
              </div>
            </div>

            {/* App Layout */}
            <div className="flex bg-white min-h-[560px]">
              {/* Sidebar */}
              <div className="w-56 bg-dark-green flex-shrink-0 flex flex-col p-4 gap-1">
                {/* Logo */}
                <div className="flex items-center gap-2.5 px-3 py-3 mb-4">
                  <div className="w-7 h-7 rounded-lg bg-lime flex items-center justify-center">
                    <span className="text-[10px] font-bold text-dark-green">T</span>
                  </div>
                  <span className="text-[13px] font-bold text-white">Tripando</span>
                </div>

                {[
                  { icon: <LayoutDashboard size={15} />, label: 'Übersicht', active: false },
                  { icon: <BookOpen size={15} />, label: 'Buchungen', active: true },
                  { icon: <Search size={15} />, label: 'Angebote', active: false },
                  { icon: <FileText size={15} />, label: 'Rechnungen', active: false },
                  { icon: <Settings size={15} />, label: 'Einstellungen', active: false },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-colors ${
                      item.active
                        ? 'bg-lime text-dark-green'
                        : 'text-white/60 hover:bg-white/10 hover:text-white'
                    }`}
                    aria-current={item.active ? 'page' : undefined}
                  >
                    {item.icon}
                    <span className="text-[13px] font-medium">{item.label}</span>
                  </div>
                ))}

                <div className="mt-auto px-3 py-3 flex items-center gap-2.5 border-t border-white/10 pt-4">
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-white">AK</span>
                  </div>
                  <div>
                    <div className="text-[11px] font-medium text-white leading-tight">AWO Köln</div>
                    <div className="text-[10px] text-white/40">Administrator</div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 flex flex-col min-w-0">
                {/* Topbar */}
                <div className="px-6 py-4 border-b border-black/[0.05] flex items-center justify-between">
                  <h3 className="text-[18px] font-bold text-primary">Buchungen</h3>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-background rounded-full px-4 py-2 border border-black/[0.06]">
                      <Search size={13} className="text-secondary" />
                      <span className="text-[12px] text-secondary">Suchen...</span>
                    </div>
                    <div className="relative">
                      <Bell size={18} className="text-secondary" />
                      <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-lime flex items-center justify-center">
                        <span className="text-[9px] font-bold text-dark-green">3</span>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-dark-green flex items-center justify-center">
                      <span className="text-[10px] font-bold text-lime">MK</span>
                    </div>
                  </div>
                </div>

                {/* KPI Cards */}
                <div className="px-6 py-4 grid grid-cols-4 gap-3">
                  {[
                    { label: '24 Aktive Buchungen', sub: 'aktuell', icon: <BookOpen size={14} />, lime: true },
                    { label: '7 Offene Anfragen', sub: 'ausstehend', icon: <TrendingUp size={14} />, lime: false },
                    { label: '€ 18.450', sub: 'Buchungsvolumen', icon: <Euro size={14} />, lime: false },
                    { label: 'Zoo Duisburg', sub: 'Morgen, 32 Pers.', icon: <Calendar size={14} />, lime: false },
                  ].map((kpi, i) => (
                    <div
                      key={i}
                      className={`p-3 rounded-2xl border ${
                        kpi.lime
                          ? 'bg-lime border-lime/50'
                          : 'bg-background border-black/[0.06]'
                      }`}
                    >
                      <div className={`flex items-center gap-1.5 mb-1.5 ${kpi.lime ? 'text-dark-green' : 'text-secondary'}`}>
                        {kpi.icon}
                        <span className="text-[10px] font-medium">{kpi.sub}</span>
                      </div>
                      <div className={`text-[13px] font-bold leading-tight ${kpi.lime ? 'text-dark-green' : 'text-primary'}`}>
                        {kpi.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Table */}
                <div className="px-6 pb-4 flex-1 overflow-hidden">
                  <div className="rounded-2xl border border-black/[0.06] overflow-hidden">
                    <table className="w-full text-[12px]">
                      <thead>
                        <tr className="bg-background border-b border-black/[0.05]">
                          {['Veranstaltung', 'Einrichtung', 'Datum', 'Teiln.', 'Status', 'Betrag'].map((h) => (
                            <th key={h} className="px-4 py-2.5 text-left text-[11px] font-semibold text-secondary uppercase tracking-wide">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {bookingRows.map((row, i) => (
                          <tr key={i} className="border-b border-black/[0.04] hover:bg-background/60 transition-colors">
                            <td className="px-4 py-3 font-semibold text-primary">{row.event}</td>
                            <td className="px-4 py-3 text-secondary">{row.institution}</td>
                            <td className="px-4 py-3 text-secondary font-medium">{row.date}</td>
                            <td className="px-4 py-3 text-secondary">{row.participants}</td>
                            <td className="px-4 py-3">
                              <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold ${statusStyles[row.status as BookingStatus]}`}>
                                {row.status}
                              </span>
                            </td>
                            <td className="px-4 py-3 font-semibold text-primary">{row.amount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Right detail panel */}
              <div className="w-56 border-l border-black/[0.05] p-4 flex-shrink-0 flex flex-col gap-3">
                <div className="text-[11px] font-semibold text-secondary uppercase tracking-wide mb-1">Details</div>
                <div className="bg-background rounded-2xl p-4 flex flex-col gap-3">
                  <div>
                    <div className="text-[10px] text-secondary mb-0.5">Einrichtung</div>
                    <div className="text-[12px] font-semibold text-primary leading-tight">AWO Seniorenzentrum Köln</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-secondary mb-0.5">Veranstaltung</div>
                    <div className="text-[12px] font-semibold text-primary">Zoo Duisburg</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-secondary mb-0.5">Teilnehmer</div>
                    <div className="text-[12px] font-medium text-primary flex items-center gap-1">
                      <Users size={11} />
                      50 Personen
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-secondary mb-0.5">Datum</div>
                    <div className="text-[12px] font-medium text-primary">24. Mai 2026</div>
                  </div>
                  <div className="border-t border-black/[0.06] pt-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] text-secondary">Gesamt</span>
                      <span className="text-[13px] font-bold text-primary">1.000 €</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] text-secondary">Tripando-Gebühr</span>
                      <span className="text-[10px] text-secondary font-medium">2,5 %</span>
                    </div>
                  </div>
                  <button className="w-full py-2 rounded-full bg-lime text-dark-green text-[11px] font-semibold flex items-center justify-center gap-1 mt-1 hover:bg-lime/90 transition-colors focus-ring">
                    Details ansehen
                    <ChevronRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
