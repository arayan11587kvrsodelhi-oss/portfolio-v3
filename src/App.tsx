import { useState, useEffect, useRef, type ReactNode } from 'react'
import aryanpic from '@/imports/aryanpic.jpeg'

// ─── Contact / Social Links ─────────────────────────────────────────────────
// Centralized so they're easy to find and update in one place later.

const LINKS = {
  github: 'https://github.com/arayan11587kvrsodelhi-oss/',
  linkedin: 'https://www.linkedin.com/in/aryan-sharma-7681a3380/',
  instagram: 'https://www.instagram.com/aryan._.5harma/',
  email: 'arayan11587kvrsodelhi@gmail.com',
  phoneDisplay: '+91 80762 33501',
  phoneHref: 'tel:+918076233501',
  // Individual repos
  repoAryan: 'https://github.com/arayan11587kvrsodelhi-oss/aryan',
  liveAryan: 'https://aryan-sable.vercel.app',
  repoAuthClient: 'https://github.com/arayan11587kvrsodelhi-oss/auth-client',
  liveAuthClient: 'https://arayan11587kvrsodelhi-oss.github.io/auth-client/',
}

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

const SKILLS = [
  { name: 'HTML & CSS', level: 85, category: 'Frontend' },
  { name: 'JavaScript', level: 72, category: 'Frontend' },
  { name: 'React', level: 65, category: 'Frontend' },
  { name: 'Node.js', level: 58, category: 'Backend' },
  { name: 'PHP', level: 57, category: 'Backend' },
  { name: 'SQL / MySQL', level: 62, category: 'Database' },
  { name: 'Git & GitHub', level: 70, category: 'Tooling' },
  { name: 'Figma', level: 60, category: 'Design' },
]

const TECH_BADGES = [
  'React', 'TypeScript', 'Node.js', 'PHP', 'MySQL', 'MongoDB',
  'HTML5', 'CSS3', 'Tailwind', 'Git', 'GitHub', 'Figma',
  'REST APIs', 'Responsive Design', 'Vite',
]

const PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A fully responsive shopping frontend with product filtering, cart management, and dynamic checkout flow built with vanilla JavaScript.',
    problem: 'Shoppers need a clean, distraction-free way to browse products and check out on any device.',
    role: 'Designed and built the full frontend — layout, cart logic, and checkout flow — solo.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop&auto=format',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Frontend',
    liveUrl: LINKS.liveAryan,
    githubUrl: LINKS.repoAryan,
  },
  {
    id: 2,
    title: 'Developer Portfolio',
    description: 'A sleek portfolio card component with animated reveals, responsive layout, and elegant typographic hierarchy for professional identity.',
    problem: 'Recruiters and clients needed a quick, visually polished snapshot of my work and identity.',
    role: 'Designed the layout and typography, and implemented the reveal animations.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop&auto=format',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Design',
    liveUrl: LINKS.liveAryan,
    githubUrl: LINKS.repoAryan,
  },
  {
    id: 3,
    title: 'Password Strength Checker',
    description: 'Real-time password strength analyzer with visual feedback indicators, entropy scoring, and actionable security suggestions.',
    problem: 'People often pick weak passwords without realizing it — this gives instant, actionable feedback as they type.',
    role: 'Built the scoring logic and the real-time visual feedback UI.',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=500&fit=crop&auto=format',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Tool',
    liveUrl: LINKS.liveAryan,
    githubUrl: LINKS.repoAryan,
  },
  {
    id: 4,
    title: 'Animated Loading System',
    description: 'A polished page transition component with dynamic initialization sequence, progress tracking, and configurable animation timing.',
    problem: 'Abrupt page loads feel jarring — this smooths the transition with a configurable, on-brand loading sequence.',
    role: 'Built the animation timing system and progress tracking from scratch.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop&auto=format',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'UI Component',
    liveUrl: LINKS.liveAryan,
    githubUrl: LINKS.repoAryan,
  },
  {
    id: 5,
    title: 'Auth UI Kit',
    description: 'A complete login, registration, and forgot-password flow with a clean, modern interface and consistent visual language across all three screens.',
    problem: 'Auth screens are often the first thing a user sees — this kit makes login, sign-up, and password recovery feel considered rather than bolted-on.',
    role: 'Designed and coded all three screens (login, register, forgot password) and the shared stylesheet.',
    image: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=800&h=500&fit=crop&auto=format',
    tags: ['HTML', 'CSS'],
    category: 'Auth',
    liveUrl: LINKS.liveAuthClient,
    githubUrl: LINKS.repoAuthClient,
  },
]

const EXPERIENCE = [
  {
    type: 'education',
    title: 'Bachelor of Computer Applications (BCA)',
    org: 'Trinity Institute of Professional Studies',
    location: 'Delhi, India',
    period: '2025 – Present',
    description: 'Studying core computer science fundamentals, web development, databases, and software engineering principles.',
  },
  {
    type: 'education',
    title: 'Higher Secondary (PCM)',
    org: 'Kendriya Vidyalaya Vikaspuri',
    location: 'New Delhi, India',
    period: '2023 – 2025',
    description: 'Physics, Chemistry, Mathematics. Developed strong analytical foundations and problem-solving skills.',
  },
  {
    type: 'education',
    title: 'Secondary Education',
    org: 'Kendriya Vidyalaya Vikaspuri',
    location: 'New Delhi, India',
    period: '2021 – 2023',
    description: 'Strong academic foundation across sciences and humanities with early interest in computers.',
  },
]

const SERVICES = [
  {
    icon: '⬡',
    title: 'Frontend Development',
    description: 'Pixel-perfect, responsive interfaces built with modern HTML, CSS, and JavaScript. Clean code, fast load times, cross-browser compatible.',
  },
  {
    icon: '◈',
    title: 'Backend Integration',
    description: 'Server-side logic, database design, and API integration using PHP, MySQL, and Node.js. Secure and scalable architecture.',
  },
  {
    icon: '◎',
    title: 'UI/UX Design',
    description: 'User-centered design with a focus on clarity, accessibility, and visual hierarchy. Prototypes to production-ready layouts.',
  },
  {
    icon: '⬘',
    title: 'Performance Optimization',
    description: 'Audit and improve web performance — asset optimization, lazy loading, caching strategies, and Core Web Vitals tuning.',
  },
  {
    icon: '◇',
    title: 'Open Source Contribution',
    description: 'Active GitHub contributor and open-source collaborator. Code reviews, documentation, and community-driven development.',
  },
  {
    icon: '⬙',
    title: 'Mentorship & Consulting',
    description: 'Peer mentoring and technical consulting for students and early-career developers navigating the web dev ecosystem.',
  },
]

// ─── Hooks ───────────────────────────────────────────────────────────────────

function useIntersection(ref: React.RefObject<Element | null>, threshold = 0.15) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        obs.disconnect()
      }
    }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [ref, threshold])
  return visible
}

// ─── Components ──────────────────────────────────────────────────────────────

function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const visible = useIntersection(ref)
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: visible ? `${delay}s` : '0s' }}
    >
      {children}
    </div>
  )
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS.map(l => l.href.slice(1))
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id)
      })
    }, { threshold: 0.4 })
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0 2rem',
        transition: 'background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
        background: scrolled ? 'rgba(5,5,8,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#home" style={{ textDecoration: 'none' }}>
          <span className="font-display gradient-text" style={{ fontSize: '1.4rem', fontWeight: 700 }}>NOVA</span>
          <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.7rem', fontFamily: 'JetBrains Mono', marginLeft: 6 }}>portfolio</span>
        </a>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link ${active === l.href.slice(1) ? 'active' : ''}`}
              style={{ fontSize: '0.875rem', fontWeight: 500 }}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>
            Hire Me
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          className="mobile-menu-btn"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, color: 'var(--foreground)' }}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div style={{
          background: 'rgba(5,5,8,0.97)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          padding: '1.5rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
        }}>
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link"
              style={{ fontSize: '1rem', fontWeight: 500 }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary" style={{ textAlign: 'center' }} onClick={() => setMenuOpen(false)}>
            Hire Me
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) { .mobile-menu-btn { display: none !important; } }
        @media (max-width: 767px) { .desktop-nav { display: none !important; } }
      `}</style>
    </nav>
  )
}

function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  return (
    <section
      id="home"
      className="mesh-bg"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: 80,
      }}
    >
      {/* Parallax orbs */}
      <div
        className="orb"
        style={{
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)',
          top: `calc(${mousePos.y * -40 + 10}px + 10%)`,
          left: `calc(${mousePos.x * -40 + 5}px + -5%)`,
          transition: 'top 0.4s ease, left 0.4s ease',
        }}
      />
      <div
        className="orb"
        style={{
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)',
          bottom: `calc(${mousePos.y * 30 - 10}px + 10%)`,
          right: `calc(${mousePos.x * 30 - 10}px + 5%)`,
          transition: 'bottom 0.4s ease, right 0.4s ease',
        }}
      />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '5rem 2rem', position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div className="reveal visible" style={{ marginBottom: '1.5rem' }}>
              <span className="section-eyebrow">Available for opportunities</span>
            </div>
            <h1
              className="font-display reveal visible reveal-delay-1"
              style={{
                fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
                fontWeight: 700,
                lineHeight: 1.08,
                marginBottom: '1.5rem',
                letterSpacing: '-0.02em',
              }}
            >
              <span style={{ display: 'block', color: 'var(--foreground)' }}>Aryan</span>
              <span className="gradient-text" style={{ display: 'block' }}>Sharma.</span>
            </h1>
            <p
              className="reveal visible reveal-delay-2"
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                color: 'var(--muted-foreground)',
                maxWidth: 520,
                marginBottom: '0.75rem',
                lineHeight: 1.7,
              }}
            >
              Full-Stack Developer & Creative Technologist
            </p>
            <p
              className="reveal visible reveal-delay-3"
              style={{
                fontSize: '0.95rem',
                color: 'var(--muted-foreground)',
                maxWidth: 480,
                marginBottom: '2.5rem',
                lineHeight: 1.75,
                opacity: 0.75,
              }}
            >
              I craft seamless web experiences where thoughtful engineering meets elegant design.
              Currently pursuing BCA while building real-world projects and contributing to open source.
            </p>
            <div className="reveal visible reveal-delay-4" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="#contact" className="btn-outline">Get in Touch</a>
            </div>

            {/* Quick stats */}
            <div
              className="reveal visible"
              style={{
                display: 'flex',
                gap: '2.5rem',
                marginTop: '3.5rem',
                flexWrap: 'wrap',
              }}
            >
              {[
                { value: '4+', label: 'Projects Shipped' },
                { value: '2+', label: 'Years Coding' },
                { value: '100%', label: 'Open Source' },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="font-display" style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--foreground)', lineHeight: 1 }}>{stat.value}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)', marginTop: 4, fontFamily: 'JetBrains Mono', letterSpacing: '0.06em' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Avatar */}
          <div
            className="hero-avatar reveal visible"
            style={{ position: 'relative', flexShrink: 0 }}
          >
            {/* Glow behind the card */}
            <div style={{
              position: 'absolute',
              inset: -20,
              borderRadius: 36,
              background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.25) 0%, transparent 70%)',
              filter: 'blur(20px)',
              zIndex: 0,
            }} />
            <div style={{
              width: 260,
              height: 340,
              borderRadius: 28,
              border: '1px solid rgba(124,58,237,0.35)',
              position: 'relative',
              overflow: 'hidden',
              zIndex: 1,
              boxShadow: '0 24px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
            }}>
              <img
                src={aryanpic}
                alt="Aryan Sharma"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
              />
              {/* Bottom gradient overlay */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '35%',
                background: 'linear-gradient(to top, rgba(5,5,8,0.7) 0%, transparent 100%)',
              }} />
            </div>
            {/* Orbit ring around card */}
            <div style={{
              position: 'absolute',
              inset: -16,
              borderRadius: 40,
              border: '1px dashed rgba(124,58,237,0.2)',
              zIndex: 0,
              animation: 'spin 25s linear infinite',
            }} />
            <div style={{
              position: 'absolute',
              bottom: 16,
              right: -14,
              zIndex: 2,
              padding: '0.45rem 0.85rem',
              background: 'rgba(6,182,212,0.12)',
              border: '1px solid rgba(6,182,212,0.25)',
              borderRadius: 8,
              backdropFilter: 'blur(10px)',
              fontSize: '0.72rem',
              fontFamily: 'JetBrains Mono',
              color: '#06b6d4',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#06b6d4', display: 'inline-block', animation: 'pulse 2s ease-in-out infinite' }} />
              Available
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{ marginTop: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8 }}>
          <span style={{ fontSize: '0.7rem', fontFamily: 'JetBrains Mono', color: 'var(--muted-foreground)', letterSpacing: '0.1em' }}>SCROLL</span>
          <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, rgba(124,58,237,0.6), transparent)' }} />
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        @media (max-width: 768px) {
          .hero-avatar { display: none !important; }
        }
      `}</style>
    </section>
  )
}

function About() {
  return (
    <section id="about" style={{ padding: '7rem 2rem', position: 'relative' }}>
      <div className="orb" style={{ width: 300, height: 300, background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)', top: '20%', right: '10%' }} />
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <span className="section-eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>01 — About</span>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, marginBottom: '4rem', letterSpacing: '-0.02em' }}>
            The person <span className="gradient-text">behind the code</span>
          </h2>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <Reveal delay={0.1}>
            <div className="glass" style={{ borderRadius: 20, overflow: 'hidden', aspectRatio: '4/5', position: 'relative' }}>
              <img
                src={aryanpic}
                alt="Aryan Sharma"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(5,5,8,0.8) 0%, transparent 60%)',
              }} />
              <div style={{
                position: 'absolute',
                bottom: 24,
                left: 24,
                right: 24,
                padding: '1rem 1.25rem',
                background: 'rgba(5,5,8,0.7)',
                backdropFilter: 'blur(12px)',
                borderRadius: 12,
                border: '1px solid rgba(255,255,255,0.1)',
              }}>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: 'var(--accent)', marginBottom: 4 }}>CURRENTLY BUILDING</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 500 }}>NOVA Portfolio Template</div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.15}>
              <p style={{ fontSize: '1.1rem', color: 'var(--muted-foreground)', lineHeight: 1.85, marginBottom: '1.5rem' }}>
                I'm a passionate developer and BCA student who believes great software is equal parts engineering and design thinking. I build for the web — creating experiences that feel fast, look beautiful, and work for everyone.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--muted-foreground)', lineHeight: 1.85, marginBottom: '2.5rem', opacity: 0.8 }}>
                Beyond writing code, I actively mentor peers, contribute to open-source projects, and stay curious about emerging technologies. I'm always open to new opportunities, collaborations, and conversations.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                {[
                  { label: 'Name', value: 'Aryan Sharma' },
                  { label: 'Based in', value: 'Delhi, India' },
                  { label: 'Email', value: 'arayan11587kvrsodelhi@gmail.com' },
                  { label: 'Status', value: 'Open to work' },
                ].map(item => (
                  <div key={item.label} className="glass" style={{ padding: '1rem 1.25rem', borderRadius: 10 }}>
                    <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: 4 }}>
                      {item.label.toUpperCase()}
                    </div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--foreground)' }}>{item.value}</div>
                  </div>
                ))}
              </div>
              <a href="#contact" className="btn-primary">Let's Connect</a>
            </Reveal>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            #about > div > div:last-child { grid-template-columns: 1fr !important; gap: 2rem !important; }
          }
        `}</style>
      </div>
    </section>
  )
}

function SkillBar({ name, level, category, animate }: { name: string; level: number; category: string; animate: boolean }) {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontWeight: 500, fontSize: '0.9rem' }}>{name}</span>
          <span className="tag" style={{ fontSize: '0.6rem' }}>{category}</span>
        </div>
        <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: 'var(--accent)' }}>{level}%</span>
      </div>
      <div style={{ height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden' }}>
        <div
          style={{
            height: '100%',
            width: animate ? `${level}%` : '0%',
            background: 'linear-gradient(90deg, #7c3aed, #06b6d4)',
            borderRadius: 2,
            transition: animate ? `width 1s cubic-bezier(0.16,1,0.3,1) ${level * 3}ms` : 'none',
          }}
        />
      </div>
    </div>
  )
}

function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const visible = useIntersection(ref)

  return (
    <section id="skills" style={{ padding: '7rem 2rem', background: 'rgba(255,255,255,0.01)', position: 'relative' }} ref={ref}>
      <div className="orb" style={{ width: 350, height: 350, background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)', bottom: '10%', left: '5%' }} />
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <span className="section-eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>02 — Skills</span>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            What I <span className="gradient-text">work with</span>
          </h2>
          <p style={{ color: 'var(--muted-foreground)', maxWidth: 480, marginBottom: '4rem', lineHeight: 1.7 }}>
            A growing toolkit of technologies and methodologies I use to build for the web.
          </p>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <Reveal delay={0.1}>
            <div>
              {SKILLS.map((s, i) => (
                <SkillBar key={s.name} {...s} animate={visible} />
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div>
              <h3 style={{ fontSize: '0.875rem', fontFamily: 'JetBrains Mono', color: 'var(--muted-foreground)', letterSpacing: '0.08em', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
                Full Tech Stack
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {TECH_BADGES.map(tech => (
                  <span key={tech} className="tag glass-hover" style={{ cursor: 'default', transition: 'background 0.2s, border-color 0.2s' }}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="glass" style={{ borderRadius: 16, padding: '2rem', marginTop: '2.5rem' }}>
                <div className="section-eyebrow" style={{ marginBottom: '1rem' }}>Current focus</div>
                <p style={{ color: 'var(--muted-foreground)', fontSize: '0.9rem', lineHeight: 1.75 }}>
                  Deepening expertise in React ecosystems and modern backend patterns while exploring cloud deployment and DevOps fundamentals.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <style>{`
          @media (max-width: 768px) {
            #skills > div > div:last-child { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          }
        `}</style>
      </div>
    </section>
  )
}

function ProjectCard({ project, delay = 0 }: { project: typeof PROJECTS[0]; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <article
        className="glass glass-hover"
        style={{ borderRadius: 16, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column', cursor: 'default' }}
      >
        <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/9' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          />
          <div style={{ position: 'absolute', top: 12, right: 12 }}>
            <span style={{
              padding: '0.25rem 0.7rem',
              background: 'rgba(5,5,8,0.8)',
              backdropFilter: 'blur(8px)',
              borderRadius: 6,
              fontSize: '0.65rem',
              fontFamily: 'JetBrains Mono',
              color: 'var(--accent)',
              border: '1px solid rgba(6,182,212,0.2)',
            }}>
              {project.category}
            </span>
          </div>
        </div>
        <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.6rem' }}>{project.title}</h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', lineHeight: 1.7, marginBottom: '0.9rem' }}>
            {project.description}
          </p>
          <div style={{ fontSize: '0.78rem', color: 'var(--muted-foreground)', lineHeight: 1.65, opacity: 0.85, marginBottom: '1.25rem', flex: 1 }}>
            <div style={{ marginBottom: '0.4rem' }}>
              <span style={{ color: '#c4b5fd', fontFamily: 'JetBrains Mono', fontSize: '0.68rem', letterSpacing: '0.04em' }}>PROBLEM  </span>
              {project.problem}
            </div>
            <div>
              <span style={{ color: 'var(--accent)', fontFamily: 'JetBrains Mono', fontSize: '0.68rem', letterSpacing: '0.04em' }}>MY ROLE  </span>
              {project.role}
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
            {project.tags.map(tag => <span key={tag} className="tag" style={{ fontSize: '0.65rem' }}>{tag}</span>)}
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', flex: 1, textAlign: 'center' }}
            >
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', flex: 1, textAlign: 'center' }}
            >
              GitHub
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

function Projects() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))]
  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter)

  return (
    <section id="projects" style={{ padding: '7rem 2rem', position: 'relative' }}>
      <div className="orb" style={{ width: 400, height: 400, background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)', top: '15%', right: '-5%' }} />
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <span className="section-eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>03 — Projects</span>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Featured <span className="gradient-text">work</span>
          </h2>
          <p style={{ color: 'var(--muted-foreground)', maxWidth: 480, marginBottom: '2.5rem', lineHeight: 1.7 }}>
            A selection of projects that showcase my skills across frontend, backend, and tool development.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: '0.4rem 1rem',
                  borderRadius: 8,
                  border: `1px solid ${filter === cat ? 'rgba(124,58,237,0.5)' : 'rgba(255,255,255,0.1)'}`,
                  background: filter === cat ? 'rgba(124,58,237,0.15)' : 'transparent',
                  color: filter === cat ? '#c4b5fd' : 'var(--muted-foreground)',
                  fontFamily: 'JetBrains Mono',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  letterSpacing: '0.05em',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {filtered.map((p, i) => <ProjectCard key={p.id} project={p} delay={i * 0.1} />)}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" style={{ padding: '7rem 2rem', background: 'rgba(255,255,255,0.01)', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <span className="section-eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>04 — Experience</span>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, marginBottom: '4rem', letterSpacing: '-0.02em' }}>
            Education & <span className="gradient-text">background</span>
          </h2>
        </Reveal>

        <div style={{ position: 'relative', paddingLeft: 40 }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute',
            left: 7,
            top: 12,
            bottom: 0,
            width: 1,
            background: 'linear-gradient(to bottom, #7c3aed, rgba(6,182,212,0.3), transparent)',
          }} />

          {EXPERIENCE.map((item, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
                {/* Dot */}
                <div style={{
                  position: 'absolute',
                  left: -40,
                  top: 8,
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                  border: '2px solid var(--background)',
                  boxShadow: '0 0 12px rgba(124,58,237,0.5)',
                }} />

                <div className="glass glass-hover" style={{ borderRadius: 14, padding: '1.75rem 2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.25rem' }}>{item.title}</h3>
                      <div style={{ fontSize: '0.875rem', color: '#c4b5fd', fontWeight: 500 }}>{item.org}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: 'var(--accent)', marginBottom: 4 }}>{item.period}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)' }}>{item.location}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', lineHeight: 1.7 }}>{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" style={{ padding: '7rem 2rem', position: 'relative' }}>
      <div className="orb" style={{ width: 400, height: 400, background: 'radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)', top: '30%', left: '10%' }} />
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <span className="section-eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>05 — Services</span>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            What I can do <span className="gradient-text">for you</span>
          </h2>
          <p style={{ color: 'var(--muted-foreground)', maxWidth: 480, marginBottom: '4rem', lineHeight: 1.7 }}>
            I bring a combination of technical depth and design sensitivity to every project I take on.
          </p>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.08}>
              <div className="glass glass-hover" style={{ borderRadius: 14, padding: '2rem' }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.1))',
                  border: '1px solid rgba(124,58,237,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  marginBottom: '1.25rem',
                }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.6rem' }}>{service.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', lineHeight: 1.7 }}>{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.875rem 1rem',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 10,
    color: 'var(--foreground)',
    fontFamily: 'Outfit, sans-serif',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  }

  return (
    <section id="contact" style={{ padding: '7rem 2rem', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: 500, height: 500, background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)', top: '20%', right: '-10%' }} />
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <span className="section-eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>06 — Contact</span>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Let's build something <span className="gradient-text">together</span>
          </h2>
          <p style={{ color: 'var(--muted-foreground)', maxWidth: 480, marginBottom: '4rem', lineHeight: 1.7 }}>
            Whether it's a project collaboration, internship opportunity, or just a conversation — I'm always open.
          </p>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '4rem', alignItems: 'start' }}>
          <Reveal delay={0.1}>
            <div>
              <div style={{ marginBottom: '3rem' }}>
                {[
                  { icon: '✉', label: 'Email', value: LINKS.email, href: `mailto:${LINKS.email}` },
                  { icon: '📞', label: 'Phone', value: LINKS.phoneDisplay, href: LINKS.phoneHref },
                  { icon: '📍', label: 'Location', value: 'Delhi, India', href: null },
                ].map(item => (
                  <div key={item.label} className="glass" style={{ borderRadius: 12, padding: '1.25rem', marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{
                      width: 40,
                      height: 40,
                      borderRadius: 8,
                      background: 'rgba(124,58,237,0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.1rem',
                      flexShrink: 0,
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.65rem', fontFamily: 'JetBrains Mono', color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: 2 }}>
                        {item.label.toUpperCase()}
                      </div>
                      {item.href ? (
                        <a href={item.href} style={{ color: 'var(--foreground)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>{item.value}</a>
                      ) : (
                        <span style={{ color: 'var(--foreground)', fontSize: '0.9rem', fontWeight: 500 }}>{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', fontFamily: 'JetBrains Mono', color: 'var(--muted-foreground)', letterSpacing: '0.08em', marginBottom: '1rem', textTransform: 'uppercase' }}>
                  Social Links
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {[
                    { name: 'GitHub', href: LINKS.github, icon: 'GH' },
                    { name: 'LinkedIn', href: LINKS.linkedin, icon: 'in' },
                    { name: 'Instagram', href: LINKS.instagram, icon: 'IG' },
                  ].map(social => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass glass-hover"
                      style={{
                        padding: '0.6rem 1rem',
                        borderRadius: 8,
                        textDecoration: 'none',
                        color: 'var(--foreground)',
                        fontSize: '0.8rem',
                        fontWeight: 500,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}
                    >
                      <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: 'var(--accent)' }}>{social.icon}</span>
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="glass" style={{ borderRadius: 20, padding: '2.5rem' }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✓</div>
                  <h3 className="font-display" style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--muted-foreground)', fontSize: '0.9rem' }}>Thanks for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <label style={{ fontSize: '0.75rem', fontFamily: 'JetBrains Mono', color: 'var(--muted-foreground)', display: 'block', marginBottom: 6, letterSpacing: '0.06em' }}>NAME</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        placeholder="Your name"
                        required
                        style={inputStyle}
                        onFocus={e => (e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)')}
                        onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.75rem', fontFamily: 'JetBrains Mono', color: 'var(--muted-foreground)', display: 'block', marginBottom: 6, letterSpacing: '0.06em' }}>EMAIL</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        placeholder="your@email.com"
                        required
                        style={inputStyle}
                        onFocus={e => (e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)')}
                        onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                      />
                    </div>
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ fontSize: '0.75rem', fontFamily: 'JetBrains Mono', color: 'var(--muted-foreground)', display: 'block', marginBottom: 6, letterSpacing: '0.06em' }}>SUBJECT</label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                      placeholder="What's this about?"
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                    />
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ fontSize: '0.75rem', fontFamily: 'JetBrains Mono', color: 'var(--muted-foreground)', display: 'block', marginBottom: 6, letterSpacing: '0.06em' }}>MESSAGE</label>
                    <textarea
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Tell me about your project or idea..."
                      required
                      rows={5}
                      style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                      onFocus={e => (e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                    />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        <style>{`
          @media (max-width: 768px) {
            #contact > div > div:last-child { grid-template-columns: 1fr !important; gap: 2rem !important; }
          }
        `}</style>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '3rem 2rem 2rem',
      position: 'relative',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <span className="font-display gradient-text" style={{ fontSize: '1.4rem', fontWeight: 700 }}>NOVA</span>
              <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.7rem', fontFamily: 'JetBrains Mono', marginLeft: 6 }}>portfolio</span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', lineHeight: 1.75, maxWidth: 280 }}>
              A premium developer portfolio template built for engineers, designers, and digital creatives.
            </p>
          </div>

          <div>
            <div style={{ fontSize: '0.7rem', fontFamily: 'JetBrains Mono', letterSpacing: '0.1em', color: 'var(--muted-foreground)', marginBottom: '1rem', textTransform: 'uppercase' }}>
              Navigation
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {NAV_LINKS.map(l => (
                <a key={l.href} href={l.href} className="nav-link" style={{ fontSize: '0.875rem' }}>{l.label}</a>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.7rem', fontFamily: 'JetBrains Mono', letterSpacing: '0.1em', color: 'var(--muted-foreground)', marginBottom: '1rem', textTransform: 'uppercase' }}>
              Connect
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { name: 'GitHub', href: LINKS.github },
                { name: 'LinkedIn', href: LINKS.linkedin },
                { name: 'Instagram', href: LINKS.instagram },
                { name: 'Email', href: `mailto:${LINKS.email}` },
              ].map(s => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="nav-link" style={{ fontSize: '0.875rem' }}>{s.name}</a>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)', fontFamily: 'JetBrains Mono' }}>
            © 2026 NOVA Portfolio. Built by Aryan Sharma.
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)', fontFamily: 'JetBrains Mono' }}>
            Built with React + Vite
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div > div:first-child { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </footer>
  )
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div style={{ background: 'var(--background)', minHeight: '100vh', color: 'var(--foreground)' }}>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}
