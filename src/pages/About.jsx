import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import { TEAM_MEMBERS, buildTeamsFromMembers } from '../data/teamData'

// Team member photos (CSV name -> imported image)
import imgAmelie from '../assets/img/Amelie Zhao.PNG'
import imgAndrew from '../assets/img/Andrew Park.jpg'
import imgAphena from '../assets/img/Aphena Sov.jpeg'
import imgArbaz from '../assets/img/Arbaz Khan.jpeg'
import imgAriane from '../assets/img/Ariane Marchese.JPG'
import imgAshley from '../assets/img/Ashley Celidon.jpg'
import imgCharlie from '../assets/img/Charlie des Robert.png'
import imgDaniel from '../assets/img/Daniel Fornell.jpg'
import imgGeno from '../assets/img/Geno Jones.png'
import imgIsaiah from '../assets/img/Isaiah Hogue.jpeg'
import imgIvy from '../assets/img/Ivy Immediato.png'
import imgJack from '../assets/img/Jack Goulden.JPG'
import imgJamari from '../assets/img/Jamari Miller.jpg'
import imgJonas from '../assets/img/Jonas Ma.jpg'
import imgJoey from '../assets/img/Joey Matsumoto.jpeg'
import imgJoshua from '../assets/img/Joshua Villanueva.JPG'
import imgKaley from '../assets/img/Kaley Akemann.jpeg'
import imgKylie from '../assets/img/Kylie Kwon.jpg'
import imgLily from '../assets/img/Lily Vengco.jpeg'
import imgMichael from '../assets/img/Michael Fritz.jpg'
import imgOlivia from '../assets/img/Olivia Bascombe.jpeg'
import imgQuentin from '../assets/img/Quentin Higgins.png'
import imgRosalie from '../assets/img/Rosalie Fong.jpeg'
import imgTabea from '../assets/img/Tabea Kavayé.png'
import imgVictoriaCho from '../assets/img/Victoria Cho.png'
import imgVictoriaLing from '../assets/img/Victoria Ling.jpg'
import imgVivian from '../assets/img/Vivian Lu.JPG'
import imgYao from '../assets/img/Yao Chang.jpg'
import imgYiyi from '../assets/img/Yiyi Fang.jpeg'

const NAME_TO_IMAGE = {
  'Amelie Zhao': imgAmelie,
  'Andrew Park': imgAndrew,
  'Aphena Sov': imgAphena,
  'Arbaz M. Khan': imgArbaz,
  'Ariane Marchese': imgAriane,
  'Ashley C': imgAshley,
  'Charlie des Robert': imgCharlie,
  'Daniel Fornell': imgDaniel,
  'Geno C. Jones': imgGeno,
  'Isaiah Lee Hogue': imgIsaiah,
  'Ivy Immediato': imgIvy,
  'Jack Goulden': imgJack,
  'Jamari Miller': imgJamari,
  'Jonas Ma': imgJonas,
  'Joey Matsumoto': imgJoey,
  'Josh Villanueva': imgJoshua,
  'Kaley Akemann': imgKaley,
  'Kylie Kwon': imgKylie,
  'Lily Vengco': imgLily,
  'Michael Fritz': imgMichael,
  'Olivia Bascombe': imgOlivia,
  'Quentin Higgins': imgQuentin,
  'Rosalie Fong': imgRosalie,
  'Tabea Kavayé': imgTabea,
  'Victoria Cho': imgVictoriaCho,
  'Victoria Ling': imgVictoriaLing,
  'Vivian Lu': imgVivian,
  'Yao Chang': imgYao,
  'Yiyi Fang': imgYiyi
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
