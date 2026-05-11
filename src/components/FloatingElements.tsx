import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Compass, Ticket, Backpack, Globe, type LucideIcon } from 'lucide-react'
import React from 'react'

gsap.registerPlugin(ScrollTrigger)

type FloatCard = {
  id: string
  Icon: LucideIcon
  label: string
  sub: string
  bg: string
  color: string
  iconSize: number
  from: { x: number; y: number; rotation: number }
  pos: React.CSSProperties
}

const CARDS: FloatCard[] = [
  {
    id: 'compass',
    Icon: Compass,
    label: 'Navigate',
    sub: 'Freely',
    bg: '#ddeade',
    color: '#0f2d1e',
    iconSize: 40,
    from: { x: -380, y: -180, rotation: -28 },
    pos: { left: '7%', top: '18%' },
  },
  {
    id: 'ticket',
    Icon: Ticket,
    label: 'Fly',
    sub: 'Anywhere',
    bg: '#0f2d1e',
    color: '#f5f0e8',
    iconSize: 34,
    from: { x: 400, y: -200, rotation: 32 },
    pos: { right: '8%', top: '10%' },
  },
  {
    id: 'backpack',
    Icon: Backpack,
    label: 'Pack',
    sub: 'Light',
    bg: '#f5f0e8',
    color: '#0f2d1e',
    iconSize: 36,
    from: { x: -320, y: 220, rotation: 22 },
    pos: { left: '14%', bottom: '20%' },
  },
  {
    id: 'globe',
    Icon: Globe,
    label: 'Explore',
    sub: 'Unknown',
    bg: '#1a3a2a',
    color: '#ddeade',
    iconSize: 44,
    from: { x: 360, y: 170, rotation: -24 },
    pos: { right: '7%', top: '50%' },
  },
]

export default function FloatingElements() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ── Title slides up on scroll-enter ──────────────────────────────
      gsap.from(titleRef.current, {
        autoAlpha: 0,
        y: 70,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      // ── Cards orbit in from outside the viewport via scrub ────────────
      CARDS.forEach((card, i) => {
        const el = cardRefs.current[i]
        if (!el) return

        // Plant them at their "outside" position before scroll starts
        gsap.set(el, { autoAlpha: 0, x: card.from.x, y: card.from.y, rotation: card.from.rotation })

        gsap.to(el, {
          x: 0,
          y: 0,
          rotation: 0,
          autoAlpha: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            end: 'top 5%',
            scrub: 1.5,
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: '#f5f0e8' }}
    >
      {/* ── Centre editorial block ──────────────────────────────────── */}
      <div ref={titleRef} className="relative z-10 text-center max-w-xl px-8">
        <p
          className="uppercase mb-5"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '10px',
            letterSpacing: '0.42em',
            color: '#1a3a2a',
            opacity: 0.5,
          }}
        >
          For the bold & curious
        </p>

        <h2
          className="select-none leading-none"
          style={{
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: 'clamp(60px, 11vw, 150px)',
            color: '#0f2d1e',
            letterSpacing: '-0.01em',
          }}
        >
          ADVENTURES
          <br />
          AWAIT
        </h2>

        <p
          className="mt-8 leading-relaxed max-w-sm mx-auto"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '15px',
            color: '#1a3a2a',
            opacity: 0.65,
          }}
        >
          From misty mountain trails to hidden coastal gems — Tripando connects adventurous souls with the journeys that define them.
        </p>

        <button
          className="mt-10 px-10 py-4 uppercase"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.22em',
            fontWeight: 600,
            backgroundColor: '#0f2d1e',
            color: '#f5f0e8',
            borderRadius: '2px',
            cursor: 'pointer',
            border: 'none',
          }}
        >
          Start Exploring
        </button>
      </div>

      {/* ── Floating cards ─────────────────────────────────────────────── */}
      {CARDS.map((card, i) => (
        <div
          key={card.id}
          ref={(el) => { cardRefs.current[i] = el }}
          className="absolute z-20 flex flex-col items-center gap-3"
          style={{
            ...card.pos,
            backgroundColor: card.bg,
            color: card.color,
            padding: '26px 30px',
            borderRadius: '14px',
            boxShadow: '0 10px 48px rgba(15,45,30,0.14)',
            minWidth: '120px',
          }}
        >
          <card.Icon size={card.iconSize} strokeWidth={1.4} color={card.color} />
          <div className="text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              {card.label}
            </p>
            <p style={{ fontSize: '10px', opacity: 0.65, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              {card.sub}
            </p>
          </div>
        </div>
      ))}

      {/* Bottom breathing room */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-10">
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '9px',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#1a3a2a',
            opacity: 0.3,
          }}
        >
          © 2026 Tripando
        </p>
      </div>
    </section>
  )
}
