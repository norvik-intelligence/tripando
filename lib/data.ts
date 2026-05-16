// ─── Types ───────────────────────────────────────────────────────────────────

export interface NavItem {
  label: string
  href: string
}

export interface TrustCard {
  icon: string
  title: string
  description: string
}

export interface ProblemCard {
  title: string
  description: string
  highlighted?: boolean
}

export interface FeatureCard {
  icon: string
  title: string
  description: string
}

export interface HowItWorksStep {
  number: string
  title: string
  description: string
}

export interface Category {
  name: string
  icon: string
  gradient: string
}

export interface BookingRow {
  event: string
  institution: string
  date: string
  participants: number
  status: 'Bestätigt' | 'Zahlung offen' | 'Angefragt' | 'Durchgeführt'
  amount: string
}

export interface BenefitItem {
  text: string
}

export interface ProviderBenefit {
  title: string
  description: string
}

export interface PricingPlan {
  name: string
  price: string
  period?: string
  tagline: string
  features: string[]
  highlighted?: boolean
  cta: string
}

export interface Testimonial {
  quote: string
  name: string
  role: string
  organization: string
  stars: number
}

export interface FAQItem {
  question: string
  answer: string
}

export interface FooterColumn {
  title: string
  links: { label: string; href: string }[]
}

// ─── Data ────────────────────────────────────────────────────────────────────

export const navItems: NavItem[] = [
  { label: 'Lösung', href: '#loesung' },
  { label: 'Für Einrichtungen', href: '#einrichtungen' },
  { label: 'Anbieter', href: '#anbieter' },
  { label: 'Preise', href: '#preise' },
  { label: 'Demo', href: '#demo' },
]

export const trustCards: TrustCard[] = [
  {
    icon: '🏥',
    title: 'Pflegeheime & Tagespflege',
    description: 'Aktivitäten zentral planen und buchen',
  },
  {
    icon: '⛪',
    title: 'Diakonie & Caritas',
    description: 'Trägerweite Übersicht über alle Buchungen',
  },
  {
    icon: '🤝',
    title: 'AWO & Sozialverbände',
    description: 'Mehrere Standorte, ein System',
  },
  {
    icon: '🎯',
    title: 'Anbieter & Ausflugsziele',
    description: 'Geprüfte B2B-Anfragen direkt erhalten',
  },
]

export const problemCards: ProblemCard[] = [
  {
    title: 'Zu viel Suche',
    description:
      'Angebote werden über Google, Telefonlisten und alte Kontakte zusammengesucht. Kein zentrales Verzeichnis, keine klaren Daten.',
  },
  {
    title: 'Keine klare Eignung',
    description:
      'Barrierefreiheit, Gruppengrößen, Begleitpersonen und Mobilitätsanforderungen sind oft unklar oder nicht dokumentiert.',
    highlighted: true,
  },
  {
    title: 'Manuelle Abrechnung',
    description:
      'Anfragen, Rechnungen, Bestätigungen und Zahlungen laufen über viele einzelne Kanäle – E-Mail, Telefon, Fax.',
  },
]

export const featureCards: FeatureCard[] = [
  {
    icon: 'Search',
    title: 'Angebotskatalog',
    description:
      'Hunderte geprüfte Gruppenangebote durchsuchen, filtern und vergleichen.',
  },
  {
    icon: 'ClipboardList',
    title: 'Gruppenbuchung',
    description:
      'Teilnehmerzahl, Begleitpersonen und Anforderungen digital erfassen und senden.',
  },
  {
    icon: 'CheckCircle',
    title: 'Freigabeprozesse',
    description:
      'Buchungen intern prüfen und genehmigen – für Heimleitung und Verwaltung.',
  },
  {
    icon: 'Receipt',
    title: 'Rechnungen & Zahlungen',
    description:
      'Automatische Rechnungsstellung und transparente Zahlungsübersicht.',
  },
]

export const howItWorksSteps: HowItWorksStep[] = [
  {
    number: '01',
    title: 'Angebot finden',
    description:
      'Filtern Sie nach Kategorie, Ort, Gruppengröße, Barrierefreiheit und Preis.',
  },
  {
    number: '02',
    title: 'Buchung anfragen',
    description:
      'Teilnehmerzahl, Begleitpersonen und besondere Anforderungen digital erfassen.',
  },
  {
    number: '03',
    title: 'Intern freigeben',
    description:
      'Heimleitung oder Verwaltung können Buchungen vorab prüfen und genehmigen.',
  },
  {
    number: '04',
    title: 'Bestätigung erhalten',
    description:
      'Klare Buchungsbestätigung, Rechnung und alle Details per E-Mail.',
  },
]

export const categories: Category[] = [
  { name: 'Zoo & Tierparks', icon: 'PawPrint', gradient: 'from-emerald-400 to-teal-500' },
  { name: 'Museen & Kultur', icon: 'Landmark', gradient: 'from-violet-400 to-purple-500' },
  { name: 'Theater & Musik', icon: 'Music', gradient: 'from-rose-400 to-pink-500' },
  { name: 'Gesundheitskurse', icon: 'Heart', gradient: 'from-red-400 to-orange-400' },
  { name: 'Schwimmbäder', icon: 'Waves', gradient: 'from-blue-400 to-cyan-500' },
  { name: 'Wandervereine', icon: 'Mountain', gradient: 'from-green-500 to-emerald-600' },
  { name: 'Busunternehmen', icon: 'Bus', gradient: 'from-amber-400 to-yellow-500' },
  { name: 'Tagesausflüge', icon: 'MapPin', gradient: 'from-orange-400 to-red-400' },
  { name: 'Präventionskurse', icon: 'Shield', gradient: 'from-indigo-400 to-blue-500' },
]

export const bookingRows: BookingRow[] = [
  {
    event: 'Zoo Duisburg',
    institution: 'AWO Köln-Süd',
    date: '24.05.2026',
    participants: 32,
    status: 'Bestätigt',
    amount: '640 €',
  },
  {
    event: 'Museum Ludwig',
    institution: 'Caritas Bonn',
    date: '31.05.2026',
    participants: 28,
    status: 'Zahlung offen',
    amount: '560 €',
  },
  {
    event: 'Gesundheitswandern',
    institution: 'DRK Düsseldorf',
    date: '07.06.2026',
    participants: 20,
    status: 'Angefragt',
    amount: '280 €',
  },
  {
    event: 'Theater am Dom',
    institution: 'Diakonie Aachen',
    date: '14.06.2026',
    participants: 45,
    status: 'Durchgeführt',
    amount: '900 €',
  },
]

export const institutionBenefits: BenefitItem[] = [
  { text: 'Weniger Telefonieren und E-Mails' },
  { text: 'Zentrale Buchungsübersicht für alle Standorte' },
  { text: 'Klare Barrierefreiheitsdaten zu jedem Angebot' },
  { text: 'Automatische Rechnungsstellung' },
  { text: 'Freigabeprozesse für Heimleitung und Verwaltung' },
  { text: 'Mehrere Einrichtungen und Träger verwalten' },
]

export const upcomingActivities = [
  {
    name: 'Zoo Duisburg',
    date: '24. Mai 2026',
    participants: 32,
    status: 'Bestätigt' as const,
  },
  {
    name: 'Museum Ludwig',
    date: '31. Mai 2026',
    participants: 28,
    status: 'Zahlung offen' as const,
  },
  {
    name: 'Gesundheitswandern',
    date: '7. Juni 2026',
    participants: 20,
    status: 'Angefragt' as const,
  },
]

export const providerBenefits: ProviderBenefit[] = [
  {
    title: 'Digitale Anfrageverwaltung',
    description: 'Alle Gruppenanfragen zentral und strukturiert an einem Ort.',
  },
  {
    title: 'Bessere Auslastung',
    description: 'Geprüfte B2B-Kunden aus sozialen Einrichtungen direkt erreichen.',
  },
  {
    title: 'Planbare Gruppenbuchungen',
    description: 'Verlässliche Anfragen mit klaren Teilnehmerzahlen und Terminen.',
  },
  {
    title: 'Saubere automatische Abrechnung',
    description: 'Rechnungsstellung und Zahlungsabwicklung ohne Aufwand.',
  },
  {
    title: 'Zugang zu hunderten Einrichtungen',
    description: 'Direkte Reichweite zu Pflegeheimen, Trägern und Verbänden.',
  },
]

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '149',
    period: '/Monat',
    tagline: 'Für einzelne Einrichtungen',
    features: [
      '1 Standort',
      'Angebotskatalog',
      'Gruppenbuchungen',
      'Rechnungsübersicht',
      'E-Mail-Support',
    ],
    cta: 'Jetzt starten',
  },
  {
    name: 'Professional',
    price: '299',
    period: '/Monat',
    tagline: 'Für größere Einrichtungen',
    features: [
      'Bis zu 5 Standorte',
      'Unbegrenzte Buchungsanfragen',
      'Freigabeprozesse',
      'Rollen & Rechte',
      'Reporting & Auswertungen',
      'Priorisierter Support',
    ],
    highlighted: true,
    cta: 'Demo anfragen',
  },
  {
    name: 'Enterprise',
    price: 'Individuell',
    tagline: 'Für Dachverbände',
    features: [
      'Unbegrenzte Standorte',
      'Zentrale Trägerverwaltung',
      'Individuelle Konditionen',
      'API & Datenexport',
      'Persönliches Onboarding',
    ],
    cta: 'Kontakt aufnehmen',
  },
]

export const testimonials: Testimonial[] = [
  {
    quote:
      'Wir haben unsere Buchungszeit für Gruppenausflüge von zwei Tagen auf unter eine Stunde reduziert.',
    name: 'Maria K.',
    role: 'Hauswirtschaftsleitung',
    organization: 'Seniorenzentrum Bergheim',
    stars: 5,
  },
  {
    quote:
      'Endlich haben wir eine Plattform, die unsere Anforderungen als Träger wirklich versteht. Tripando denkt in Einrichtungsstrukturen, nicht in Reiseportalen.',
    name: 'Thomas W.',
    role: 'Einrichtungsleitung',
    organization: 'AWO Rheinland',
    stars: 5,
  },
  {
    quote:
      'Seit wir bei Tripando gelistet sind, kommen unsere Gruppenanfragen digital und strukturiert. Das spart uns jeden Monat mehrere Stunden.',
    name: 'Sandra L.',
    role: 'Museumspädagogik',
    organization: 'Museum der Arbeit Hamburg',
    stars: 5,
  },
]

export const faqItems: FAQItem[] = [
  {
    question: 'Müssen Anbieter bereits angebunden sein?',
    answer:
      'Nein. Sie können Angebote direkt anfragen, auch wenn der Anbieter noch nicht registriert ist. Tripando übernimmt die Vermittlung.',
  },
  {
    question: 'Können wir auch per Rechnung bezahlen?',
    answer:
      'Ja. Für Einrichtungen und Träger ist Zahlung per Rechnung standardmäßig möglich.',
  },
  {
    question: 'Ist Tripando für mehrere Standorte geeignet?',
    answer:
      'Ja. Ab dem Professional-Paket können Sie bis zu 5 Standorte verwalten. Im Enterprise-Paket gibt es keine Begrenzung.',
  },
  {
    question: 'Können Buchungen intern freigegeben werden?',
    answer:
      'Ja. Tripando unterstützt Freigabe-Workflows für Heimleitung und Verwaltung.',
  },
  {
    question: 'Gibt es Barrierefreiheitsfilter?',
    answer:
      'Ja. Jedes Angebot ist mit Barrierefreiheitsdaten hinterlegt: Rollstuhlgerechtigkeit, Begleitpersonenbedarf, Mobilitätsanforderungen.',
  },
  {
    question: 'Können Anbieter eigene Angebote einstellen?',
    answer:
      'Ja. Anbieter können ihr Angebot inkl. Preisen, Verfügbarkeit und Barrierefreiheitsdaten direkt im System pflegen.',
  },
  {
    question: 'Wie funktioniert die Transaktionsgebühr?',
    answer:
      'Tripando berechnet 1,5 % bis 3 % des Buchungswerts pro erfolgreicher Transaktion. Die genaue Höhe hängt vom Paket und Vertragsvolumen ab.',
  },
]

export const footerColumns: FooterColumn[] = [
  {
    title: 'Produkt',
    links: [
      { label: 'Angebotskatalog', href: '#' },
      { label: 'Buchungsverwaltung', href: '#' },
      { label: 'Freigabeprozesse', href: '#' },
      { label: 'Rechnungen & Zahlung', href: '#' },
    ],
  },
  {
    title: 'Für Einrichtungen',
    links: [
      { label: 'Pflegeheime', href: '#' },
      { label: 'Tagespflege', href: '#' },
      { label: 'Dachverbände', href: '#' },
      { label: 'AWO & Sozialverbände', href: '#' },
    ],
  },
  {
    title: 'Für Anbieter',
    links: [
      { label: 'Jetzt registrieren', href: '#' },
      { label: 'Angebot einstellen', href: '#' },
      { label: 'Preismodell', href: '#' },
      { label: 'Anfrageverwaltung', href: '#' },
    ],
  },
  {
    title: 'Rechtliches',
    links: [
      { label: 'Impressum', href: '#' },
      { label: 'Datenschutz', href: '#' },
      { label: 'AGB', href: '#' },
      { label: 'Barrierefreiheit', href: '#' },
    ],
  },
]
