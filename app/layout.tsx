import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tripando – Gruppenaktivitäten für Senioren einfacher planen, buchen und abrechnen',
  description:
    'Tripando verbindet Pflegeeinrichtungen, soziale Träger und Vereine mit geprüften Freizeit-, Kultur- und Gesundheitsangeboten – zentral, barrierefrei und professionell organisiert.',
  keywords: [
    'Gruppenaktivitäten Senioren',
    'Pflegeheim Buchung',
    'Seniorenaktivitäten',
    'AWO Caritas Diakonie',
    'Tagespflege Ausflüge',
    'B2B Booking Senioren',
  ],
  authors: [{ name: 'Tripando GmbH' }],
  openGraph: {
    title: 'Tripando – Gruppenaktivitäten für Senioren',
    description:
      'Die Plattform für Pflegeeinrichtungen, soziale Träger und Vereine – Gruppenaktivitäten zentral planen, buchen und abrechnen.',
    type: 'website',
    locale: 'de_DE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
