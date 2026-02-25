import "../App.css";
import groupImage from "@/assets/group.png";
import logoImage from "@/assets/logo.png";
import libraryHeroImage from "@/assets/libraryhero.png";
import gameCoverImage from "@/assets/game_cover.png";
// Set VITE_TRAILER_VIDEO_URL in .env (or .env.local) after hosting Trailer long.mov (e.g. YouTube, Vimeo, or CDN)
const trailerVideo = import.meta.env.VITE_TRAILER_VIDEO_URL ?? "";
import gameSS1 from "@/assets/GameSS1.png";
import gameSS2 from "@/assets/GameSS2.png";
import gameSS3 from "@/assets/GameSS3.png";
import gameSS4 from "@/assets/GameSS4.png";
import gameSS5 from "@/assets/GameSS5.png";
import gameSS6 from "@/assets/GameSS6.png";

import oliviaChar from "@/assets/olivia.png";
import kyleChar from "@/assets/kyle-BsgX-FGm.png";
import rowanChar from "@/assets/rowan.png";
import samChar from "@/assets/sam.png";
import noraChar from "@/assets/nora.png";

import { useMemo, useState, useEffect } from "react";

function UsFiveForever() {
  const [lightbox, setLightbox] = useState(null); // { src, alt }

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape" && lightbox) setLightbox(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [lightbox]);

  useEffect(() => {
    if (lightbox) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

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
          {[
            { src: gameSS1, alt: "Us Five Forever screenshot 1" },
            { src: gameSS2, alt: "Us Five Forever screenshot 2" },
            { src: gameSS3, alt: "Us Five Forever screenshot 3" },
            { src: gameSS4, alt: "Us Five Forever screenshot 4" },
            { src: gameSS5, alt: "Us Five Forever screenshot 5" },
            { src: gameSS6, alt: "Us Five Forever screenshot 6" },
          ].map((shot, n) => (
            <div
              key={n}
              className="screenshot-item screenshot-item-clickable"
              onClick={() => setLightbox({ src: shot.src, alt: shot.alt })}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setLightbox({ src: shot.src, alt: shot.alt })}
              aria-label={`View screenshot ${n + 1} full size`}
            >
              <img src={shot.src} alt={shot.alt} className="screenshot-image" />
            </div>
          ))}
        </div>
      </section>

      {/* Characters Grid Section (ALL VISIBLE, NO CLICKING) */}
      <section className="characters-grid-section">
        <h2 className="characters-grid-heading">GET TO KNOW THE CHARACTERS</h2>

        <div className="characters-grid">
          {characters.map((character) => (
            <div key={character.id} className="character-card">
              <div
                className="character-card-image-wrap character-card-image-wrap-clickable"
                onClick={() => setLightbox({ src: character.image, alt: character.name })}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setLightbox({ src: character.image, alt: character.name })}
                aria-label={`View ${character.name} full size`}
              >
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

      {/* Game Trailer Section */}
      <section className="trailer-section">
        <h2 className="trailer-heading">GAME TRAILER</h2>
        <div className="trailer-video-box">
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
        </div>
      </section>

      {/* Image lightbox (screenshots + character cards) */}
      {lightbox && (
        <div
          className="image-lightbox-backdrop"
          onClick={() => setLightbox(null)}
          onKeyDown={(e) => e.key === "Enter" && setLightbox(null)}
          role="button"
          tabIndex={0}
          aria-label="Close full size image"
        >
          <button
            type="button"
            className="image-lightbox-close"
            onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
            aria-label="Close"
          >
            ×
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="image-lightbox-image"
            onClick={(e) => e.stopPropagation()}
            draggable={false}
          />
        </div>
      )}

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
