import { Link } from 'react-router-dom'
import '../App.css'
import groupImage from '../assets/img/group.png'
import logoImage from '../assets/img/logo.png'
import gameCoverImage from '../assets/img/game_cover.png'
import libraryHeroImage from '../assets/img/libraryhero.png'
import steamLogo from '../assets/img/steam.png'
import oliviaChar from '../assets/img/olivia.png'
import kyleChar from '../assets/img/kyle.png'
import rowanChar from '../assets/img/rowan.png'
import samChar from '../assets/img/sam.png'
import noraChar from '../assets/img/nora.png'
import { useState, useMemo } from "react";

function UsFiveForever() {

const [charactersOpen, setCharactersOpen] = useState(false);
const [activeIndex, setActiveIndex] = useState(0);
const characters = useMemo(
  () => [
    {
      id: "olivia",
      name: "Olivia Herrera",
      va: "Ariana Rosario",
      description:
        "A one-track mind, hungry to solve a mystery. Olivia's desire to get answers stops at nothing even if it takes stepping on those around her to get what she needs.",
      image: oliviaChar,
    },
    {
      id: "char2",
      name: "Kyle",
      va: "Geno c. Jones",
      description: "Easygoing and bright, with the energy of a golden retriever, Kyle was a central presence in the friend group until he want missing freshman year.",
      image: kyleChar,
    },
    {
      id: "char3",
      name: "Rowan",
      va: "Wes Haas",
      description: "Originally an engineering major, Rowan realized they weren't happy and switched to theater instead. They're trying to keep everyone together for a good time at this party.",
      image: rowanChar,
    },
    {
      id: "char4",
      name: "Sam",
      va: "Wonseok Lee",
      description: "A hard and heavily tatted exterior helps Sam avoid unwanted social interactions. If you get to know him, though, he'll be one of the most loyal friends you'll ever meet.",
      image: samChar,
    },
    {
      id: "char5",
      name: "Nora",
      va: "Tasmin Singh",
      description: "Nora is a driven, but overly cautios architecture major and Olivia's childhood friend. She had to miss a year of college after her accident, but is back and determined to make up for lost time.",
      image: noraChar,
    },
  ],
  []
);


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


      {/* Get To Know The Characters */}
      <section className="characters-cta-section">
        <button
          className="characters-cta-button"
          onClick={() => { setActiveIndex(0); setCharactersOpen(true); }}
        >
          GET TO KNOW THE CHARACTERS
        </button>
      </section>


      {/* Game Trailer Section */}
      <section className="trailer-section">
        <h2 className="trailer-heading">GAME TRAILER</h2>
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
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="footer-back-to-top">
          Back to top
        </button>
      </footer>





      {charactersOpen && (
        <div
          className="characters-modal-backdrop"
          onClick={() => setCharactersOpen(false)}
        >
          <div
            className="characters-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="characters-modal-header">
              <h3 className="characters-modal-title">GET TO KNOW THE CHARACTERS</h3>
              <button
                className="characters-modal-close"
                onClick={() => setCharactersOpen(false)}
              >
                ×
              </button>
            </div>

            <div className="characters-slider">
            <button
              className="slider-arrow left"
              onClick={() => setActiveIndex((prev) => (prev - 1 + characters.length) % characters.length)}
              aria-label="Previous character"
              type="button"
            >
              ‹
            </button>

            <div className="character-focus">
              <div className="character-focus-image-wrap">
                <img
                  src={characters[activeIndex].image}
                  alt={characters[activeIndex].name}
                  className="character-focus-image"
                />
              </div>

              <div className="character-focus-meta">
                <h4 className="character-focus-name">{characters[activeIndex].name}</h4>
                <p className="character-focus-va">VA: {characters[activeIndex].va}</p>
                <p className="character-focus-desc">{characters[activeIndex].description}</p>
              </div>
            </div>

            <button
              className="slider-arrow right"
              onClick={() => setActiveIndex((prev) => (prev + 1) % characters.length)}
              aria-label="Next character"
              type="button"
            >
              ›
            </button>
          </div>

          <div className="slider-dots" aria-label="Character selection">
            {characters.map((c, i) => (
              <button
                key={c.id}
                className={`slider-dot ${i === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to ${c.name}`}
                type="button"
              />
            ))}
          </div>
          </div>
        </div>
      )}





    </main>
  )
}

export default UsFiveForever

