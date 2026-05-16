'use client'

import { Grid3X3 } from 'lucide-react'
import { footerColumns } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-[#111111] px-4 sm:px-6" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-5 gap-10 border-b border-white/[0.08]">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="/" className="flex items-center gap-2.5 mb-4 focus-ring rounded-xl w-fit" aria-label="Tripando Startseite">
              <div className="w-8 h-8 rounded-full bg-lime flex items-center justify-center">
                <Grid3X3 size={14} className="text-dark-green" strokeWidth={2.5} />
              </div>
              <span className="text-[15px] font-bold text-white">Tripando</span>
            </a>
            <p className="text-[13px] text-white/40 leading-relaxed max-w-[180px]">
              Gruppenaktivitäten. Einfach organisiert.
            </p>
          </div>

          {/* Footer columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[12px] font-semibold text-white/50 uppercase tracking-widest mb-4">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2.5" role="list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[14px] text-white/60 hover:text-white transition-colors focus-ring rounded-md"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px] text-white/30">
          <span>© 2026 Tripando GmbH · Alle Rechte vorbehalten</span>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white/60 transition-colors focus-ring rounded-md">
              Impressum
            </a>
            <a href="#" className="hover:text-white/60 transition-colors focus-ring rounded-md">
              Datenschutz
            </a>
            <a href="#" className="hover:text-white/60 transition-colors focus-ring rounded-md">
              AGB
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
