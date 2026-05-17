'use client'

import { Grid3X3 } from 'lucide-react'
import { footerColumns } from '@/lib/data'

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden noise"
      style={{ background: '#0D0D0B' }}
      role="contentinfo"
    >
      {/* Subtle noise texture via ::after (from globals.css .noise class) */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top section */}
        <div
          className="py-16 grid grid-cols-1 md:grid-cols-5 gap-10"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          {/* Brand */}
          <div className="md:col-span-1">
            <a
              href="/"
              className="flex items-center gap-2.5 mb-5 focus-ring rounded-xl w-fit"
              aria-label="Tripando Startseite"
            >
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{ background: '#C7FF33' }}
              >
                <Grid3X3 size={13} style={{ color: '#173D2B' }} strokeWidth={2.5} aria-hidden="true" />
              </div>
              <span className="text-[15px] font-bold text-white" style={{ letterSpacing: '-0.01em' }}>
                Tripando
              </span>
            </a>
            <p className="text-[13px] leading-relaxed max-w-[200px]" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Gruppenaktivitäten. Einfach organisiert.
            </p>

            {/* Social links */}
            <div className="flex gap-2 mt-5">
              {[
                { label: 'LinkedIn', href: '#', char: 'in' },
                { label: 'Twitter/X', href: '#', char: 'X' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold transition-colors duration-200 focus-ring"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.4)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.12)'
                    e.currentTarget.style.color = 'rgba(255,255,255,0.8)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                    e.currentTarget.style.color = 'rgba(255,255,255,0.4)'
                  }}
                >
                  {s.char}
                </a>
              ))}
            </div>
          </div>

          {/* Footer columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3
                className="text-[11px] font-semibold uppercase mb-5"
                style={{ color: '#6B7280', letterSpacing: '0.1em' }}
              >
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2.5" role="list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[14px] transition-colors duration-150 focus-ring rounded-md"
                      style={{ color: '#9CA3AF' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#F5F5F2'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#9CA3AF'
                      }}
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
        <div
          className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ color: 'rgba(255,255,255,0.25)' }}
        >
          <span className="text-[13px]">© 2026 Tripando GmbH · Alle Rechte vorbehalten</span>
          <div className="flex items-center gap-6">
            {['Impressum', 'Datenschutz', 'AGB'].map((label) => (
              <a
                key={label}
                href="#"
                className="text-[13px] transition-colors duration-150 focus-ring rounded-md"
                style={{ color: 'rgba(255,255,255,0.25)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.25)'
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
