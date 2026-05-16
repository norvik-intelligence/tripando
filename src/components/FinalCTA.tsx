import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      if (prefersReduced) {
        gsap.set(innerRef.current, { autoAlpha: 1, y: 0 })
        return
      }

      gsap.from(innerRef.current, {
        autoAlpha: 0,
        y: 64,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: { trigger: innerRef.current, start: 'top 80%', toggleActions: 'play none none none' },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section
      ref={sectionRef}
      aria-labelledby="cta-heading"
      style={{ backgroundColor: '#0f2d1e' }}
      className="overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-8 md:px-16 py-32 md:py-40">
        <div ref={innerRef} className="max-w-2xl">
          <p className="uppercase mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', letterSpacing: '0.42em', color: '#ddeade', opacity: 0.5 }}>
            Join the waitlist
          </p>
          <h2
            id="cta-heading"
            className="leading-none select-none mb-8"
            style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(52px, 9vw, 120px)', color: '#f5f0e8', letterSpacing: '-0.01em' }}
          >
            TRAVEL BEYOND
            <br />
            LIMITS
          </h2>
          <p className="mb-12" style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#ddeade', opacity: 0.65, lineHeight: 1.65, maxWidth: '42ch' }}>
            Early access to new routes, departure dates, and the occasional very good travel recommendation.
          </p>

          {submitted ? (
            <p
              role="status"
              aria-live="polite"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#ddeade', opacity: 0.7, letterSpacing: '0.04em' }}
            >
              You're on the list. We'll be in touch.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
              aria-label="Waitlist signup"
            >
              <label htmlFor="waitlist-email" className="sr-only">Email address</label>
              <input
                id="waitlist-email"
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ddeade] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f2d1e] rounded-sm"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  color: '#f5f0e8',
                  border: '1px solid rgba(245,240,232,0.2)',
                  padding: '14px 16px',
                  borderRadius: '2px',
                }}
              />
              <button
                type="submit"
                className="shrink-0 px-8 py-4 uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ddeade] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f2d1e] rounded-sm"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '11px',
                  letterSpacing: '0.22em',
                  fontWeight: 600,
                  backgroundColor: '#f5f0e8',
                  color: '#0f2d1e',
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: '2px',
                }}
              >
                Join
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
