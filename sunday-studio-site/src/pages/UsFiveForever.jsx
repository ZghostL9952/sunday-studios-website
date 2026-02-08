import "../App.css";
import groupImage from "../assets/img/group.png";
import logoImage from "../assets/img/logo.png";
import libraryHeroImage from "../assets/img/libraryhero.png";
import gameCoverImage from "../assets/img/game_cover.png"; // used in screenshots

import oliviaChar from "../assets/img/olivia.png";
import kyleChar from "../assets/img/kyle.png";
import rowanChar from "../assets/img/rowan.png";
import samChar from "../assets/img/sam.png";
import noraChar from "../assets/img/nora.png";

import { useMemo } from "react";

function UsFiveForever() {
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
        id: "kyle",
        name: "Kyle",
        va: "Geno c. Jones",
        description:
          "Easygoing and bright, with the energy of a golden retriever, Kyle was a central presence in the friend group until he want missing freshman year.",
        image: kyleChar,
      },
      {
        id: "rowan",
        name: "Rowan",
        va: "Wes Haas",
        description:
          "Originally an engineering major, Rowan realized they weren't happy and switched to theater instead. They're trying to keep everyone together for a good time at this party.",
        image: rowanChar,
      },
      {
        id: "sam",
        name: "Sam",
        va: "Wonseok Lee",
        description:
          "A hard and heavily tatted exterior helps Sam avoid unwanted social interactions. If you get to know him, though, he'll be one of the most loyal friends you'll ever meet.",
        image: samChar,
      },
      {
        id: "nora",
        name: "Nora",
        va: "Tasmin Singh",
        description:
          "Nora is a driven, but overly cautios architecture major and Olivia's childhood friend. She had to miss a year of college after her accident, but is back and determined to make up for lost time.",
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
          <img
            src={groupImage}
            alt="Us Five Forever"
            className="hero-background-image"
          />
        </div>
        <div className="hero-content">
          <img
            src={logoImage}
            alt="US FIVE FOREVER"
            className="hero-title-image"
          />
          <a
            href="https://store.steampowered.com/app/4125820/Us_Five_Forever/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-download-button"
          >
            DOWNLOAD NOW
          </a>
        </div>
      </section>

      {/* Episode 1 Section */}
      <section className="episode-section">
        <div className="episode-background">
          <img
            src={libraryHeroImage}
            alt="Episode 1"
            className="episode-background-image"
          />
        </div>
        <div className="episode-container">
          <div className="episode-content">
            <h2 className="episode-heading">EPISODE 1</h2>
            <div className="episode-description">
              <p>
                Olivia Herrera is the opposite of a socialite. But on Halloween, she finds herself
                investigating a rowdy party at the DIE frat in a converted mansion – the same one
                her best friend disappeared in two years ago. She's got a half-baked costume, her
                trusty camera, and a strange feeling that this house holds more than just secrets.
              </p>
              <p>
                In the midst of the party, Olivia and her (former) friends must work together,
                pulling back the curtains on the frat house to reveal a multigenerational mystery
                filled with arcane secrets.
              </p>
              <p>
                Will you overcome your differences and reconnect before the party is over? Or will
                the ties that bind you drag you all deeper into the mystery of the old Durand
                mansion?
              </p>
            </div>
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

      {/* Characters Grid Section (ALL VISIBLE, NO CLICKING) */}
      <section className="characters-grid-section">
        <h2 className="characters-grid-heading">GET TO KNOW THE CHARACTERS</h2>

        <div className="characters-grid">
          {characters.map((character) => (
            <div key={character.id} className="character-card">
              <div className="character-card-image-wrap">
                <img
                  src={character.image}
                  alt={character.name}
                  className="character-card-image"
                />
              </div>

              <div className="character-card-meta">
                <h4 className="character-card-name">{character.name}</h4>
                <p className="character-card-va">VA: {character.va}</p>
                <p className="character-card-desc">{character.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="landing-footer">
        <p className="footer-copyright">© Sunday Studios, 2025</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="footer-back-to-top"
        >
          Back to top
        </button>
      </footer>
    </main>
  );
}

export default UsFiveForever;
