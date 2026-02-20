import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import { TEAM_MEMBERS, buildTeamsFromMembers } from '../data/teamData'

// Team member photos (CSV name -> imported image)
import imgAmelie from '@/assets/Amelie Zhao.PNG'
import imgAndrew from '@/assets/Andrew Park_.jpg'
import imgAphena from '@/assets/Aphena Sov.jpeg'
import imgArbaz from '@/assets/Arbaz Khan.jpeg'
import imgAriane from '@/assets/Ariane Marchese.JPG'
import imgAshley from '@/assets/Ashley Celidon.jpg'
import imgBrian from '@/assets/Brian Ren-Sawyer.jpg'
import imgBrooke from '@/assets/Brooke Johnson.jpeg'
import imgCharlie from '@/assets/Charlie des Robert.png'
import imgChristina from '@/assets/Christina Ou.png'
import imgDaniel from '@/assets/Daniel Fornell.jpg'
import imgForest from '@/assets/Forest Wong.jpeg'
import imgGeno from '@/assets/Geno Jones.png'
import imgHudson from '@/assets/Hudson Janow.jpg'
import imgIsaiah from '@/assets/Isaiah Hogue.jpeg'
import imgIvy from '@/assets/Ivy Immediato.png'
import imgJack from '@/assets/Jack Goulden.JPG'
import imgJamari from '@/assets/Jamari Miller.jpg'
import imgJonas from '@/assets/Jonas Ma.jpg'
import imgJoey from '@/assets/Joey Matsumoto.jpeg'
import imgJoshua from '@/assets/Joshua Villanueva.JPG'
import imgJules from '@/assets/Jules Tobler.jpg'
import imgKai from '@/assets/Kai Goldfein.jpeg'
import imgKaley from '@/assets/Kaley Akemann.jpeg'
import imgKelvin from '@/assets/Kelvin Melendez.jpg'
import imgKeygen from '@/assets/keygen aka jenny schumann.jpeg'
import imgKiara from '@/assets/Kiara Tyler Cooper.jpg'
import imgKylie from '@/assets/Kylie Kwon.jpg'
import imgLily from '@/assets/Lily Vengco.jpeg'
import imgMaganda from '@/assets/Maganda Marie.jpg'
import imgMatthew from '@/assets/Matthew Shwe.jpg'
import imgMichael from '@/assets/Michael Fritz.jpg'
import imgNimra from '@/assets/Nimra Farhan .jpg'
import imgOlivia from '@/assets/Olivia Bascombe.jpeg'
import imgPedro from '@/assets/Pedro Saravia.jpeg'
import imgQuentin from '@/assets/Quentin Higgins.png'
import imgRachel from '@/assets/Rachel Gao.png'
import imgRosalie from '@/assets/Rosalie Fong.jpeg'
import imgTabea from '@/assets/Tabea Kavayé.png'
import imgTasmin from '@/assets/Tasmin Singh.jpg'
import imgVictoriaCho from '@/assets/Victoria Cho.png'
import imgVictoriaLing from '@/assets/Victoria Ling.jpg'
import imgVivian from '@/assets/Vivian Lu.JPG'
import imgWes from '@/assets/Wes Haas.jpg'
import imgYao from '@/assets/Yao Chang.jpg'
import imgYiyi from '@/assets/Yiyi Fang.jpeg'
import imgAmaya from '@/assets/Amaya A.K.A Lexie Dreamstate.jpg'

const NAME_TO_IMAGE = {
  'Jonas Ma': imgJonas,
  'Ashley C': imgAshley,
  'Arbaz M. Khan': imgArbaz,
  'Geno C. Jones': imgGeno,
  'Yao Chang': imgYao,
  'Kaley Akemann': imgKaley,
  'Ivy Immediato': imgIvy,
  'Jack Goulden': imgJack,
  'Olivia Bascombe': imgOlivia,
  'Joey Matsumoto': imgJoey,
  'Amelie Zhao': imgAmelie,
  'Jamari Miller': imgJamari,
  'Ariane Marchese': imgAriane,
  'Quentin Higgins': imgQuentin,
  'Rosalie Fong': imgRosalie,
  'Isaiah Lee Hogue': imgIsaiah,
  'Aphena Sov': imgAphena,
  'Victoria Cho': imgVictoriaCho,
  'Kiara Tyler-Cooper': imgKiara,
  'Andrew Park': imgAndrew,
  'Lily Vengco': imgLily,
  'Josh Villanueva': imgJoshua,
  'Michael Fritz': imgMichael,
  'Vivian Lu': imgVivian,
  'Daniel Fornell': imgDaniel,
  'Victoria Ling': imgVictoriaLing,
  'Tabea Kavayé': imgTabea,
  'Kylie Kwon': imgKylie,
  'Charlie des Robert': imgCharlie,
  'Yiyi Fang': imgYiyi,
  'Amaya A.K.A Lexie Dreamstate': imgAmaya,
  'keygen aka jenny schumann': imgKeygen,
  'Forest Wong': imgForest,
  'Nimra Farhan': imgNimra,
  'Rachel Gao': imgRachel,
  'Wes Haas': imgWes,
  'Hudson Janow': imgHudson,
  'Christina Ou': imgChristina,
  'Brooke Johnson': imgBrooke,
  'Matthew Shwe': imgMatthew,
  'Jules Tobler': imgJules,
  'Kai Goldfein': imgKai,
  'Maganda Marie': imgMaganda,
  'Pedro Saravia-Castillo': imgPedro,
  'Kelvin Melendez': imgKelvin,
  'Tasmin Singh': imgTasmin,
  'Brian Ren-Sawyer': imgBrian
}

function About() {
  const [selectedTeam, setSelectedTeam] = useState('art')

  const teams = useMemo(
    () => buildTeamsFromMembers(TEAM_MEMBERS, NAME_TO_IMAGE),
    []
  )

  const departments = [
    { id: 'art', name: 'Art' },
    { id: 'narrative', name: 'Narrative' },
    { id: 'programming', name: 'Programming' },
    { id: 'music-sound', name: 'Music/Sound' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'production', name: 'Production' },
    { id: 'game-design', name: 'Game Design' }
  ]

  const handleTeamClick = (teamId) => {
    setSelectedTeam(teamId)
    const element = document.getElementById(`team-${teamId}`)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <main className="about-page">
      <div className="about-content">
        <section className="about-intro">
          <h2>About Sunday Studios</h2>
          <p>
            We are a collective of students and alumni based around the world, united by a shared passion for storytelling and interactive media. Our studio is focused on developing an upcoming narrative-driven game that blends strong writing, immersive world-building, and player-led choice. We aim to create experiences that linger — stories that invite reflection long after the game ends.
          </p>
        </section>

        <section className="our-team-section">
          <h2 className="our-team-heading">Our Team</h2>
          <div className="department-buttons">
            {departments.map((dept, index) => (
              <button
                key={`${dept.id}-${index}`}
                className="department-button"
                onClick={() => handleTeamClick(dept.id)}
              >
                {dept.name}
              </button>
            ))}
          </div>
        </section>

        {Object.entries(teams).map(([teamId, team]) => (
          <section
            key={teamId}
            id={`team-${teamId}`}
            className="team-members-section"
          >
            <h3 className="team-section-title">{team.name}</h3>
            <div className="team-members-grid">
              {team.members.map((member) => (
                <div key={member.id} className="team-member">
                  <div className="member-image-container">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="member-image"
                      />
                    ) : (
                      <div className="member-image-placeholder" />
                    )}
                  </div>
                  <p className="member-name">{member.name}</p>
                  <div className="member-role">
                    {member.role.split(', ').map((part, i) => (
                      <span key={i} className="member-role-line">{part}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
      <footer className="landing-footer">
        <p className="footer-copyright">© Sunday Studios, 2025</p>
        <div className="footer-links">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/about" className="footer-link">About</Link>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="footer-back-to-top"
          >
            Back to top
          </button>
        </div>
      </footer>
    </main>
  )
}

export default About