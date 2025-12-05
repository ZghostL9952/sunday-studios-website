import { useState } from 'react'
import '../App.css'

function TeamSideMenu() {
  const [isHovered, setIsHovered] = useState(false)

  const teams = [
    { id: 'art', name: 'Art' },
    { id: 'game-design', name: 'Game Design' },
    { id: 'narrative', name: 'Narrative' },
    { id: 'programming', name: 'Programming' },
    { id: 'music-sound', name: 'Music & Sound' },
    { id: 'marketing', name: 'Marketing' }
  ]

  const scrollToTeam = (teamId) => {
    const element = document.getElementById(teamId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div 
      className="team-side-menu"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="side-menu-content">
        {teams.map((team, index) => (
          <div
            key={team.id}
            className="side-menu-item"
            onClick={() => scrollToTeam(team.id)}
          >
            {isHovered ? (
              <span className="team-name">{team.name}</span>
            ) : (
              <div className="menu-line" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeamSideMenu

