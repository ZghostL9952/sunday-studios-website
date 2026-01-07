import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import '../App.css'
import logoWhite from '../assets/img/sundaystudioswhitelogo_title.png'

function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isUsFiveForever = location.pathname === '/us-five-forever'
  const isAbout = location.pathname === '/about'
  const isApply = location.pathname === '/apply'
  const [isScrolled, setIsScrolled] = useState(false)
  const [isGamesOpen, setIsGamesOpen] = useState(false)
  const dropdownRef = useRef(null)
  const logoButtonRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


useEffect(() => {
  if (isGamesOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }

  return () => {
    document.body.style.overflow = ''
  }
}, [isGamesOpen])


  useEffect(() => {
    setIsGamesOpen(false)
  }, [location.pathname])



  useEffect(() => {
  const onKeyDown = (e) => {
    if (!isGamesOpen) return
    if (e.key === 'Escape') setIsGamesOpen(false)
  }

  document.addEventListener('keydown', onKeyDown)
  return () => {
    document.removeEventListener('keydown', onKeyDown)
  }
}, [isGamesOpen])


  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isGamesOpen ? 'menu-open' : ''}`}>
        <div className="nav-left">
          <button
            ref={logoButtonRef}
            type="button"
            className="logo-link logo-button"
            aria-haspopup="dialog"
            aria-expanded={isGamesOpen}
            aria-controls="games-dropdown"
            onClick={() => setIsGamesOpen((v) => !v)}
          >
            <img src={logoWhite} alt="Sunday Studios" className="logo-img" />
          </button>

        </div>

        <div className="nav-right">
          <Link to="/" className={`nav-link ${isHome ? 'active' : ''}`}>HOME</Link>
          <Link to="/us-five-forever" className={`nav-link ${isUsFiveForever ? 'active' : ''}`}>US FIVE FOREVER</Link>
          <Link to="/about" className={`nav-link ${isAbout ? 'active' : ''}`}>ABOUT</Link>
          <Link to="/apply" className={`nav-link ${isApply ? 'active' : ''}`}>
              WORK WITH US
            </Link>

          <a href="https://www.instagram.com/sundaystudiosgames/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>

          <a href="https://www.linkedin.com/company/sunday-studios-games/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>

          <a href="https://discord.gg/WqhGAnZWCq" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="social-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
          </a>

          <a href="https://www.tiktok.com/@sundaystudios__" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="social-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
        </div>
      </nav>

      <div
        id="games-dropdown"
        ref={dropdownRef}
        className={`games-dropdown ${isGamesOpen ? 'open' : ''}`}
        role="dialog"
        aria-label="Games menu"
      >
        <div className="games-dropdown-inner">
          <div className="games-dropdown-header">
            <div className="games-dropdown-title">GAMES</div>
          </div>

          <div className="games-grid">
            <Link to="/us-five-forever" className="games-item">
              <div className="games-item-name">Us Five Forever</div>
              <div className="games-item-sub">Screenshots • Story • Media</div>
            </Link>

            <a
              href="https://store.steampowered.com/curator/45892041"
              target="_blank"
              rel="noopener noreferrer"
              className="games-item"
            >
              <div className="games-item-name">Coming Soon</div>
              <div className="games-item-sub">Wishlist / Updates</div>
            </a>
          </div>
        </div>
      </div>

      {isGamesOpen && (
  <button
    type="button"
    className="games-backdrop"
    aria-label="Close games menu"
    onClick={() => setIsGamesOpen(false)}
  />
)}

    </>
  )
}

export default Navbar
