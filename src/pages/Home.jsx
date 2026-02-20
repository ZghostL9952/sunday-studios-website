import { useRef } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import groupImage from "../assets/img/homePic.png";
import logoImage from "../assets/img/logo.png";

import gameCoverImage from "../assets/img/game_cover.png";
import steamLogo from "../assets/img/steam.png";
import trailerVideo from "../assets/UFF trailer long.mp4";

function Home() {
  const learnMoreRef = useRef(null);

  const handleLearnMore = () => {
    learnMoreRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="home-page">
      {/* HERO (same as your landing layout) */}
      <section className="landing-hero">
        <div className="landing-background">
          <img src={groupImage} alt="Us Five Forever" className="background-image" />
        </div>

        <div className="landing-content">
          <img src={logoImage} alt="US FIVE FOREVER" className="landing-title-image" />
          <div className="landing-buttons">
            {/* CHANGED: stays on page + scrolls */}
            <button type="button" onClick={handleLearnMore} className="cta-button cta-learn-more">
              LEARN MORE <span className="learn-more-arrow" aria-hidden="true">↓</span>
            </button>


            <a
              href="https://store.steampowered.com/app/4125820/Us_Five_Forever/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              DOWNLOAD NOW
            </a>
          </div>
        </div>

        <footer className="landing-footer">
          <p className="footer-copyright">© Sunday Studios, 2025</p>
        </footer>
      </section>

      {/* MOVED CONTENT TARGET */}
      <div ref={learnMoreRef} className="home-learn-more">
        {/* Game Overview Section (moved from UsFiveForever) */}
        <section className="game-overview-section">
          <div className="overview-container">
            <div className="game-cover-container">
              <img
                src={gameCoverImage}
                alt="US FIVE FOREVER Game Cover"
                className="game-cover-image"
              />
            </div>

            <div className="overview-content">
              <div className="steam-availability">
                <p className="available-text">AVAILABLE ON</p>
                <a
                  href="https://store.steampowered.com/app/4125820/Us_Five_Forever/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="steam-logo-container"
                >
                  <img src={steamLogo} alt="Steam" className="steam-logo-image" />
                </a>
              </div>

              <p className="game-description">
                US FIVE FOREVER is the first episode of a narrative mystery game that follows a
                group of former friends who share a strange connection with each other. Find your
                missing friend while at a party in the frat mansion he disappeared in, and solve
                the mystery of your entanglement before the sun rises.
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

        {/* Game Trailer Section (moved from UsFiveForever) */}
        <section className="trailer-section">
          <h2 className="trailer-heading">GAME TRAILER</h2>

          <video
            className="trailer-video"
            src={trailerVideo}
            controls
            controlsList="nodownload"
            playsInline
            preload="metadata"
            onContextMenu={(e) => e.preventDefault()}
            aria-label="Us Five Forever game trailer"
          >
            Your browser does not support the video tag.
          </video>
        </section>

        {/* Next Step CTA */}
        <section className="home-next-step">
          <h3 className="home-next-step-title">Want more?</h3>
          <p className="home-next-step-text">
            Check out Episode 1’s synopsis, gameplay screenshots, and meet the full cast on the Us Five Forever page.
          </p>

          <div className="home-next-step-actions">
            <Link to="/us-five-forever" className="cta-button">
              VIEW EPISODE 1 + SCREENSHOTS →
            </Link>
          </div>
        </section>


      </div>
    </main>
  );
}

export default Home;
