const NAV = ['Explore', 'Stories', 'About', 'Contact']
const LEGAL = ['Privacy', 'Terms']

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{ backgroundColor: '#0f2d1e', borderTop: '1px solid rgba(245,240,232,0.08)' }}
    >
      <div className="max-w-6xl mx-auto px-8 md:px-16 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <span
          className="uppercase"
          style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.35em', fontWeight: 600, color: '#f5f0e8', opacity: 0.9 }}
        >
          Tripando
        </span>

        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-8 gap-y-3">
          {NAV.map((item) => (
            <a
              key={item}
              href="#"
              className="uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ddeade] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f2d1e] rounded-sm"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', letterSpacing: '0.22em', color: '#ddeade', opacity: 0.45, textDecoration: 'none' }}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          {LEGAL.map((item) => (
            <a
              key={item}
              href="#"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ddeade] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f2d1e] rounded-sm"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', letterSpacing: '0.08em', color: '#ddeade', opacity: 0.3, textDecoration: 'none' }}
            >
              {item}
            </a>
          ))}
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: '#ddeade', opacity: 0.25 }}>
            © 2026 Tripando
          </span>
        </div>
      </div>
    </footer>
  )
}
