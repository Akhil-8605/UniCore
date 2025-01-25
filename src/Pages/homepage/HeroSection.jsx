import { useEffect, useRef } from 'react'
import './HeroSection.css'
import { Link } from 'react-router-dom'

export default function Hero() {
  const parallaxRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!parallaxRef.current) return
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX - innerWidth / 2) / 50
      const y = (clientY - innerHeight / 2) / 50

      parallaxRef.current.style.transform = `translate(${x}px, ${y}px)`
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const animate = () => {
      time += 0.002
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const gridSize = 30
      const amplitude = 2

      ctx.strokeStyle = 'rgba(99, 102, 241, 0.15)'
      ctx.lineWidth = 1

      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const distanceFromCenter = Math.sqrt(
            Math.pow(x - canvas.width / 2, 2) +
            Math.pow(y - canvas.height / 2, 2)
          )

          const offsetX = Math.sin(time + distanceFromCenter * 0.01) * amplitude
          const offsetY = Math.cos(time + distanceFromCenter * 0.01) * amplitude

          ctx.beginPath()
          ctx.arc(x + offsetX, y + offsetY, 1, 0, Math.PI * 2)
          ctx.stroke()
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    resize()
    window.addEventListener('resize', resize)
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="hero-section-container">
      <canvas ref={canvasRef} className="hero-section-grid-background"></canvas>

      <div className="hero-section-content">
        <div className="hero-section-text-content fade-in">
          <h1 className="hero-section-title">
            Welcome to
            <span className="hero-section-gradient-text"> UniCore</span>
          </h1>
          <p className="hero-section-subtitle">
            The Next Generation University Management System
          </p>

          <div className="hero-section-cta-container">
            <Link to={'/student-portal'}>
              <button className="hero-section-primary-button">
                Get Started
                <svg className="hero-section-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </Link>
          </div>
        </div>

        <div ref={parallaxRef} className="hero-section-floating-elements">
          <div className="hero-section-floating-card hero-section-card1">
            <svg className="hero-section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
            <h3>Smart Learning</h3>
            <p>AI-Powered Education</p>
          </div>

          <div className="hero-section-floating-card hero-section-card2">
            <svg className="hero-section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <h3>Community</h3>
            <p>Connected Campus</p>
          </div>

          <div className="hero-section-floating-card card3">
            <svg className="hero-section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <h3>Schedule</h3>
            <p>Smart Timetabling</p>
          </div>
        </div>
      </div>
    </div >
  )
}
