import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function About() {
  const [selectedTeam, setSelectedTeam] = useState('art')

  const teams = {
    art: {
      name: 'Art',
      members: [
        { id: 1, name: 'Name', role: 'role', role2: 'role' },
        { id: 2, name: 'Name', role: 'role', role2: 'role' },
        { id: 3, name: 'Name', role: 'role', role2: 'role' },
        { id: 4, name: 'Name', role: 'role', role2: 'role' },
        { id: 5, name: 'Name', role: 'role', role2: 'role' }
      ]
    },
    narrative: {
      name: 'Narrative',
      members: [
        { id: 1, name: 'Name', role: 'role', role2: 'role' },
        { id: 2, name: 'Name', role: 'role', role2: 'role' },
        { id: 3, name: 'Name', role: 'role', role2: 'role' },
        { id: 4, name: 'Name', role: 'role', role2: 'role' },
        { id: 5, name: 'Name', role: 'role', role2: 'role' }
      ]
    },
    programming: {
      name: 'Programming',
      members: [
        { id: 1, name: 'Name', role: 'role', role2: 'role' },
        { id: 2, name: 'Name', role: 'role', role2: 'role' },
        { id: 3, name: 'Name', role: 'role', role2: 'role' },
        { id: 4, name: 'Name', role: 'role', role2: 'role' },
        { id: 5, name: 'Name', role: 'role', role2: 'role' }
      ]
    },
    'music-sound': {
      name: 'Music/Sound',
      members: [
        { id: 1, name: 'Name', role: 'role', role2: 'role' },
        { id: 2, name: 'Name', role: 'role', role2: 'role' },
        { id: 3, name: 'Name', role: 'role', role2: 'role' },
        { id: 4, name: 'Name', role: 'role', role2: 'role' },
        { id: 5, name: 'Name', role: 'role', role2: 'role' }
      ]
    },
    marketing: {
      name: 'Marketing',
      members: [
        { id: 1, name: 'Name', role: 'role', role2: 'role' },
        { id: 2, name: 'Name', role: 'role', role2: 'role' },
        { id: 3, name: 'Name', role: 'role', role2: 'role' },
        { id: 4, name: 'Name', role: 'role', role2: 'role' },
        { id: 5, name: 'Name', role: 'role', role2: 'role' }
      ]
    },
    production: {
      name: 'Production',
      members: [
        { id: 1, name: 'Name', role: 'role', role2: 'role' },
        { id: 2, name: 'Name', role: 'role', role2: 'role' },
        { id: 3, name: 'Name', role: 'role', role2: 'role' },
        { id: 4, name: 'Name', role: 'role', role2: 'role' },
        { id: 5, name: 'Name', role: 'role', role2: 'role' }
      ]
    },
    'game-design': {
      name: 'Game Design',
      members: [
        { id: 1, name: 'Name', role: 'role', role2: 'role' },
        { id: 2, name: 'Name', role: 'role', role2: 'role' },
        { id: 3, name: 'Name', role: 'role', role2: 'role' },
        { id: 4, name: 'Name', role: 'role', role2: 'role' },
        { id: 5, name: 'Name', role: 'role', role2: 'role' }
      ]
    }
  }

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
      const offset = 100 // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
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
                    <div className="member-image-placeholder"></div>
                  </div>
                  <p className="member-name">{member.name}</p>
                  <p className="member-role">{member.role}</p>
                  <p className="member-role">{member.role2}</p>
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
        </div>
      </footer>
    </main>
  )
}

export default About
