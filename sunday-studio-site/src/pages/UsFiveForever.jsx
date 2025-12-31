import { Link } from 'react-router-dom'
import '../App.css'
import groupImage from '../assets/img/group.png'
import logoImage from '../assets/img/logo.png'
import gameCoverImage from '../assets/img/game_cover.png'
import libraryHeroImage from '../assets/img/libraryhero.png'
import steamLogo from '../assets/img/steam.png'

function UsFiveForever() {
  return (
    <main className="us-five-forever-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img src={groupImage} alt="Us Five Forever" className="hero-background-image" />
        </div>
        <div className="hero-content">
          <img src={logoImage} alt="US FIVE FOREVER" className="hero-title-image" />
          <a href="https://store.steampowered.com/app/4125820/Us_Five_Forever/" target="_blank" rel="noopener noreferrer" className="hero-download-button">DOWNLOAD NOW</a>
        </div>
      </section>

      {/* Game Overview Section */}
      <section className="game-overview-section">
        <div className="overview-container">
          <div className="game-cover-container">
            <img src={gameCoverImage} alt="US FIVE FOREVER Game Cover" className="game-cover-image" />
          </div>
          <div className="overview-content">
            <div className="steam-availability">
              <p className="available-text">AVAILABLE ON</p>
              <a href="https://store.steampowered.com/app/4125820/Us_Five_Forever/" target="_blank" rel="noopener noreferrer" className="steam-logo-container">
                <img src={steamLogo} alt="Steam" className="steam-logo-image" />
              </a>
            </div>
            <p className="game-description">
            US FIVE FOREVER is the first episode of a narrative mystery game that follows a group of former friends who share a strange connection with each other. Find your missing friend while at a party in the frat mansion he disappeared in, and solve the mystery of your entanglement before the sun rises.
            </p>
            <div className="features-section">
              <h3 className="features-heading">FEATURES</h3>
              <ul className="features-list">
                <li>Original Art And Soundtrack</li>
                <li>Puzzle Mechanics</li>
                <li>NO Generative AI</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Episode 1 Section */}
      <section className="episode-section">
        <div className="episode-background">
          <img src={libraryHeroImage} alt="Episode 1" className="episode-background-image" />
        </div>
        <div className="episode-container">
          <div className="episode-content">
            <h2 className="episode-heading">EPISODE 1</h2>
            <div className="episode-description">
              <p>
                Olivia Herrera is the opposite of a socialite. But on Halloween, she finds herself investigating a rowdy party at the DIE frat in a converted mansion – the same one her best friend disappeared in two years ago. She's got a half-baked costume, her trusty camera, and a strange feeling that this house holds more than just secrets.   
              </p>
              <p>
                In the midst of the party, Olivia and her (former) friends must work together, pulling back the curtains on the frat house to reveal a multigenerational mystery filled with arcane secrets.
              </p>
              <p>
                Will you overcome your differences and reconnect before the party is over? Or will the ties that bind you drag you all deeper into the mystery of the old Durand mansion?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Game Trailer Section */}
      <section className="trailer-section">
        <h2 className="trailer-heading">GAME TRAILOR</h2>
        <div className="video-placeholder">
          <div className="video-placeholder-content">
            <svg className="play-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="screenshots-section">
        <h2 className="screenshots-heading">SCREENSHOTS</h2>
        <div className="screenshots-grid">
          <div className="screenshot-item">
            <img src={gameCoverImage} alt="Screenshot 1" className="screenshot-image" />
          </div>
          <div className="screenshot-item">
            <img src={gameCoverImage} alt="Screenshot 2" className="screenshot-image" />
          </div>
          <div className="screenshot-item">
            <img src={gameCoverImage} alt="Screenshot 3" className="screenshot-image" />
          </div>
          <div className="screenshot-item">
            <img src={gameCoverImage} alt="Screenshot 4" className="screenshot-image" />
          </div>
          <div className="screenshot-item">
            <img src={gameCoverImage} alt="Screenshot 5" className="screenshot-image" />
          </div>
          <div className="screenshot-item">
            <img src={gameCoverImage} alt="Screenshot 6" className="screenshot-image" />
          </div>
        </div>
      </section>
      <footer className="landing-footer">
        <p className="footer-copyright">© Sunday Studios, 2025</p>
        <div className="footer-links">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/about" className="footer-link">About</Link>
        </div>
      </footer>
    </main>
  )
}

export default UsFiveForever

