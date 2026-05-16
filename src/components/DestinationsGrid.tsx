import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TRIPS = [
  {
    id: 'morocco',
    label: 'Morocco',
    tag: 'North Africa',
    desc: 'Ancient medinas, Saharan silence, and mint tea at midnight.',
    days: '12 days',
    bg: '#c8b89a',
    fg: '#1a0e05',
  },
  {
    id: 'patagonia',
    label: 'Patagonia',
    tag: 'South America',
    desc: 'Wind-scoured granite towers, glaciers, and zero phone signal.',
    days: '16 days',
    bg: '#b8cec8',
    fg: '#0a1f1c',
  },
  {
    id: 'japan',
    label: 'Japan',
    tag: 'East Asia',
    desc: 'Ryokan breakfasts, cedar forests, and cities that never sleep.',
    days: '14 days',
    bg: '#d4b8b8',
    fg: '#200a0a',
  },
  {
    id: 'georgia',
    label: 'Georgia',
    tag: 'Caucasus',
    desc: 'Monastery ridges, amber wine, and hospitality that embarrasses you.',
    days: '10 days',
    bg: '#c4c8a8',
    fg: '#141a05',
  },
]

export default function DestinationsGrid() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      if (prefersReduced) {
        gsap.set([headerRef.current, ...cardRefs.current], { autoAlpha: 1, y: 0 })
        return
      }

      gsap.from(headerRef.current, {
        autoAlpha: 0,
        y: 48,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: { trigger: headerRef.current, start: 'top 82%', toggleActions: 'play none none none' },
      })

      cardRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.from(el, {
          autoAlpha: 0,
          y: 72,
          duration: 1,
          ease: 'power4.out',
          delay: i * 0.08,
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      aria-labelledby="destinations-heading"
      style={{ backgroundColor: '#f5f0e8' }}
      className="overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-8 md:px-16 py-32 md:py-40">
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <div>
            <p className="uppercase mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', letterSpacing: '0.42em', color: '#1a3a2a', opacity: 0.5 }}>
              Current departures
            </p>
            <h2
              id="destinations-heading"
              className="leading-none select-none"
              style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(52px, 9vw, 130px)', color: '#0f2d1e', letterSpacing: '-0.01em' }}
            >
              WHERE TO NEXT
            </h2>
          </div>
          <a
            href="#"
            className="self-start md:self-auto shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f2d1e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f0e8] rounded-sm"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.2em', fontWeight: 600, color: '#0f2d1e', opacity: 0.5, textDecoration: 'none', textTransform: 'uppercase', paddingBottom: '2px', borderBottom: '1px solid currentColor' }}
          >
            View all trips
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TRIPS.map((trip, i) => (
            <div
              key={trip.id}
              ref={(el) => { cardRefs.current[i] = el }}
              className="group relative flex flex-col justify-between overflow-hidden cursor-pointer"
              style={{ backgroundColor: trip.bg, borderRadius: '4px', padding: '28px 24px', minHeight: '320px' }}
              tabIndex={0}
              role="article"
              aria-label={`${trip.label} — ${trip.days}`}
            >
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '9px', letterSpacing: '0.36em', textTransform: 'uppercase', color: trip.fg, opacity: 0.45, marginBottom: '12px' }}>
                  {trip.tag}
                </p>
                <h3
                  className="leading-none select-none"
                  style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(42px, 6vw, 64px)', color: trip.fg, letterSpacing: '-0.01em' }}
                >
                  {trip.label}
                </h3>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: trip.fg, opacity: 0.6, lineHeight: 1.6, marginBottom: '20px' }}>
                  {trip.desc}
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 600, color: trip.fg, opacity: 0.5 }}>
                  {trip.days}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
