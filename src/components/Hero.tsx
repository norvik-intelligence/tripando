import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CHARS = 'TRIPANDO'.split('')

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const grandmaRef = useRef<HTMLDivElement>(null)
  const charsRef = useRef<(HTMLSpanElement | null)[]>([])

  useLayoutEffect(() => {
    const chars = charsRef.current.filter(Boolean) as HTMLSpanElement[]

    const ctx = gsap.context(() => {
      // Hide before first paint to prevent flash
      gsap.set(chars, { autoAlpha: 0, y: 130 })
      gsap.set(grandmaRef.current, { autoAlpha: 0, y: 300 })

      // ── Entry animations ──────────────────────────────────────────────
      gsap.to(chars, {
        autoAlpha: 1,
        y: 0,
        stagger: 0.055,
        duration: 1.4,
        ease: 'expo.out',
        delay: 0.25,
      })

      // Grandma rises from below — overflow:hidden on hero creates the
      // "emerging from ground" effect
      gsap.to(grandmaRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 1.7,
        ease: 'expo.out',
        delay: 0.45,
      })

      // ── Scroll parallax ───────────────────────────────────────────────
      // Text moves faster → feels further behind the camera
      gsap.to(titleRef.current, {
        y: -260,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      })

      // Grandma moves slower → she feels close and tangible
      gsap.to(grandmaRef.current, {
        y: -95,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative h-screen overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: '#f5f0e8' }}
    >
      {/* ── Nav strip ─────────────────────────────────────────────────── */}
      <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-10 py-7">
        <span
          className="uppercase tracking-[0.35em] text-xs font-inter"
          style={{ color: '#1a3a2a', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
        >
          Tripando
        </span>
        <nav className="hidden md:flex gap-10">
          {['Explore', 'Stories', 'About'].map((item) => (
            <a
              key={item}
              href="#"
              className="uppercase tracking-[0.2em] text-xs"
              style={{ color: '#1a3a2a', fontFamily: 'Inter, sans-serif', opacity: 0.6 }}
            >
              {item}
            </a>
          ))}
        </nav>
        <span
          className="uppercase tracking-[0.35em] text-xs"
          style={{ color: '#1a3a2a', fontFamily: 'Inter, sans-serif', opacity: 0.5 }}
        >
          Travel Beyond Limits
        </span>
      </div>

      {/* ── Layer 0 — TRIPANDO title (z-0, sits behind grandma) ─────── */}
      <div
        ref={titleRef}
        className="absolute inset-0 flex items-center justify-center z-0 select-none pointer-events-none"
        aria-label="Tripando"
      >
        <div className="flex items-baseline">
          {CHARS.map((char, i) => (
            <span
              key={i}
              ref={(el) => { charsRef.current[i] = el }}
              style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: 'clamp(68px, 17vw, 240px)',
                color: '#0f2d1e',
                letterSpacing: '-0.015em',
                lineHeight: 1,
                display: 'block',
              }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>

      {/* ── Layer 10 — Grandma (z-10, overlaps title) ───────────────── */}
      <div
        ref={grandmaRef}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none"
        style={{ height: '88vh' }}
      >
        <img
          src="/grandma.png"
          alt=""
          draggable={false}
          className="h-full w-auto object-contain object-bottom select-none"
          style={{
            maxWidth: 'none',
            filter: 'drop-shadow(0 24px 64px rgba(15,45,30,0.18))',
          }}
        />
      </div>

      {/* ── Scroll cue ─────────────────────────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div
          style={{
            width: '1px',
            height: '44px',
            backgroundColor: '#1a3a2a',
            opacity: 0.35,
            animation: 'scrollPulse 1.8s ease-in-out infinite',
          }}
        />
        <p
          className="uppercase"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '9px',
            letterSpacing: '0.3em',
            color: '#1a3a2a',
            opacity: 0.35,
          }}
        >
          Scroll
        </p>
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { transform: scaleY(1); opacity: 0.35; }
          50% { transform: scaleY(0.6); opacity: 0.15; }
        }
      `}</style>
    </section>
  )
}
