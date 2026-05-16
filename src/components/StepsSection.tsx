import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STEPS = [
  {
    num: '01',
    title: 'TELL US\nYOUR DREAM',
    body: "A mountain ridge at dawn. A fishing village no one visits. A grandmother’s recipe town in the hills. You bring the feeling — we handle the rest.",
  },
  {
    num: '02',
    title: 'WE BUILD\nYOUR JOURNEY',
    body: 'Our travellers and local guides shape every detail: hidden paths, seasonal timing, real meals, honest pacing. No cookie-cutter itineraries.',
  },
  {
    num: '03',
    title: 'GO BEYOND\nTHE OBVIOUS',
    body: "Show up. The rest unfolds. Tripando trips are designed to surprise — the kind of stories you're still telling a decade later.",
  },
]

export default function StepsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const stepRefs = useRef<(HTMLLIElement | null)[]>([])
  const dividerRefs = useRef<(HTMLDivElement | null)[]>([])

  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      if (prefersReduced) {
        // Skip all animation — just make everything visible
        gsap.set([headerRef.current, ...stepRefs.current], { autoAlpha: 1, y: 0 })
        gsap.set(dividerRefs.current, { scaleX: 1 })
        return
      }

      // Header slides in
      gsap.from(headerRef.current, {
        autoAlpha: 0,
        y: 56,
        duration: 1.1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
      })

      // Each step staggers in from below
      stepRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.from(el, {
          autoAlpha: 0,
          y: 64,
          duration: 1,
          ease: 'power4.out',
          delay: i * 0.12,
          scrollTrigger: {
            trigger: el,
            start: 'top 86%',
            toggleActions: 'play none none none',
          },
        })
      })

      // Dividers grow in from the left
      dividerRefs.current.forEach((el) => {
        if (!el) return
        gsap.from(el, {
          scaleX: 0,
          transformOrigin: 'left center',
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      aria-labelledby="steps-heading"
      style={{ backgroundColor: '#0f2d1e' }}
      className="relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-8 md:px-16 py-32 md:py-40">

        {/* ── Section header ───────────────────────────────────────────── */}
        <div ref={headerRef} className="mb-20 md:mb-28">
          <p
            className="uppercase mb-6"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '10px',
              letterSpacing: '0.42em',
              color: '#ddeade',
              opacity: 0.5,
            }}
          >
            The Tripando way
          </p>
          <h2
            id="steps-heading"
            className="leading-none select-none"
            style={{
              fontFamily: '"Bebas Neue", sans-serif',
              fontSize: 'clamp(52px, 9vw, 130px)',
              color: '#f5f0e8',
              letterSpacing: '-0.01em',
            }}
          >
            HOW IT WORKS
          </h2>
        </div>

        {/* ── Step list ─────────────────────────────────────────────────── */}
        <ol className="list-none" aria-label="Three steps to your Tripando journey">
          {STEPS.map((step, i) => (
            <li
              key={step.num}
              ref={(el) => { stepRefs.current[i] = el }}
            >
              {/* Divider above each step */}
              <div
                ref={(el) => { dividerRefs.current[i] = el }}
                style={{
                  height: '1px',
                  backgroundColor: '#f5f0e8',
                  opacity: 0.12,
                  marginBottom: i === 0 ? '0' : undefined,
                }}
              />

              <div
                className="grid grid-cols-1 md:grid-cols-[120px_1fr_1fr] gap-8 md:gap-16 py-12 md:py-16 items-start"
              >
                {/* Step number */}
                <span
                  aria-hidden="true"
                  style={{
                    fontFamily: '"Bebas Neue", sans-serif',
                    fontSize: 'clamp(40px, 5vw, 64px)',
                    color: '#f5f0e8',
                    opacity: 0.18,
                    lineHeight: 1,
                  }}
                >
                  {step.num}
                </span>

                {/* Step title */}
                <h3
                  className="leading-none select-none"
                  style={{
                    fontFamily: '"Bebas Neue", sans-serif',
                    fontSize: 'clamp(32px, 4vw, 56px)',
                    color: '#f5f0e8',
                    letterSpacing: '-0.005em',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {step.title}
                </h3>

                {/* Step body */}
                <p
                  className="leading-relaxed"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '15px',
                    color: '#ddeade',
                    opacity: 0.7,
                    maxWidth: '38ch',
                    paddingTop: '6px',
                  }}
                >
                  {step.body}
                </p>
              </div>
            </li>
          ))}

          {/* Closing divider */}
          <li aria-hidden="true">
            <div
              style={{
                height: '1px',
                backgroundColor: '#f5f0e8',
                opacity: 0.12,
              }}
            />
          </li>
        </ol>

        {/* ── Bottom CTA ────────────────────────────────────────────────── */}
        <div className="mt-20 md:mt-24 flex flex-col sm:flex-row items-start sm:items-center gap-8">
          <a
            href="#"
            className="inline-block px-10 py-4 uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f2d1e] focus-visible:ring-[#ddeade] rounded-sm"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              letterSpacing: '0.22em',
              fontWeight: 600,
              backgroundColor: '#f5f0e8',
              color: '#0f2d1e',
              borderRadius: '2px',
              textDecoration: 'none',
            }}
          >
            Plan My Trip
          </a>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
              color: '#ddeade',
              opacity: 0.45,
              letterSpacing: '0.04em',
            }}
          >
            No sign-up required to browse
          </p>
        </div>
      </div>
    </section>
  )
}
