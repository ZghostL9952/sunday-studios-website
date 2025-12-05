import '../App.css'
import TeamSideMenu from '../components/TeamSideMenu'

function About() {
  // Sample team data - replace with actual team members
  const teams = {
    art: {
      name: 'Art',
      members: [
        { id: 1, name: 'John Doe', role: 'Lead Artist', image: 'https://via.placeholder.com/200/4a5568/ffffff?text=JD' },
        { id: 2, name: 'Jane Smith', role: 'Concept Artist', image: 'https://via.placeholder.com/200/2d3748/ffffff?text=JS' },
        { id: 3, name: 'Bob Johnson', role: '3D Artist', image: 'https://via.placeholder.com/200/1a202c/ffffff?text=BJ' },
        { id: 4, name: 'Alice Williams', role: 'UI/UX Designer', image: 'https://via.placeholder.com/200/2c5282/ffffff?text=AW' },
        { id: 5, name: 'Charlie Brown', role: 'Animator', image: 'https://via.placeholder.com/200/4a5568/ffffff?text=CB' },
        { id: 6, name: 'Diana Prince', role: 'Texture Artist', image: 'https://via.placeholder.com/200/2d3748/ffffff?text=DP' },
        { id: 7, name: 'Eve Adams', role: 'Environment Artist', image: 'https://via.placeholder.com/200/1a202c/ffffff?text=EA' },
        { id: 8, name: 'Frank Miller', role: 'Character Artist', image: 'https://via.placeholder.com/200/2c5282/ffffff?text=FM' },
        { id: 9, name: 'Grace Lee', role: 'VFX Artist', image: 'https://via.placeholder.com/200/4a5568/ffffff?text=GL' },
        { id: 10, name: 'Henry Ford', role: 'Technical Artist', image: 'https://via.placeholder.com/200/2d3748/ffffff?text=HF' }
      ]
    },
    'game-design': {
      name: 'Game Design',
      members: [
        { id: 1, name: 'Sarah Connor', role: 'Lead Designer', image: 'https://via.placeholder.com/200/4a5568/ffffff?text=SC' },
        { id: 2, name: 'Mike Tyson', role: 'Level Designer', image: 'https://via.placeholder.com/200/2d3748/ffffff?text=MT' },
        { id: 3, name: 'Lisa Simpson', role: 'Systems Designer', image: 'https://via.placeholder.com/200/1a202c/ffffff?text=LS' },
        { id: 4, name: 'Tom Hanks', role: 'Combat Designer', image: 'https://via.placeholder.com/200/2c5282/ffffff?text=TH' },
        { id: 5, name: 'Emma Watson', role: 'UI Designer', image: 'https://via.placeholder.com/200/4a5568/ffffff?text=EW' }
      ]
    },
    narrative: {
      name: 'Narrative',
      members: [
        { id: 1, name: 'David Lynch', role: 'Lead Writer', image: 'https://via.placeholder.com/200/4a5568/ffffff?text=DL' },
        { id: 2, name: 'Nora Roberts', role: 'Story Writer', image: 'https://via.placeholder.com/200/2d3748/ffffff?text=NR' },
        { id: 3, name: 'Oscar Wilde', role: 'Dialogue Writer', image: 'https://via.placeholder.com/200/1a202c/ffffff?text=OW' },
        { id: 4, name: 'Penelope Cruz', role: 'Narrative Designer', image: 'https://via.placeholder.com/200/2c5282/ffffff?text=PC' },
        { id: 5, name: 'Quentin Tarantino', role: 'Script Writer', image: 'https://via.placeholder.com/200/4a5568/ffffff?text=QT' }
      ]
    },
    programming: {
      name: 'Programming',
      members: [
        { id: 1, name: 'Ryan Gosling', role: 'Lead Programmer', image: 'https://via.placeholder.com/200/4a5568/ffffff?text=RG' },
        { id: 2, name: 'Sophie Turner', role: 'Gameplay Programmer', image: 'https://via.placeholder.com/200/2d3748/ffffff?text=ST' },
        { id: 3, name: 'Tyler Durden', role: 'Engine Programmer', image: 'https://via.placeholder.com/200/1a202c/ffffff?text=TD' },
        { id: 4, name: 'Uma Thurman', role: 'Tools Programmer', image: 'https://via.placeholder.com/200/2c5282/ffffff?text=UT' },
        { id: 5, name: 'Vincent Vega', role: 'AI Programmer', image: 'https://via.placeholder.com/200/4a5568/ffffff?text=VV' }
      ]
    },
    'music-sound': {
      name: 'Music & Sound',
      members: [
        { id: 1, name: 'Wade Wilson', role: 'Audio Director', image: 'https://via.placeholder.com/200/4a5568/ffffff?text=WW' },
        { id: 2, name: 'Xavier Woods', role: 'Composer', image: 'https://via.placeholder.com/200/2d3748/ffffff?text=XW' },
        { id: 3, name: 'Yara Shahidi', role: 'Sound Designer', image: 'https://via.placeholder.com/200/1a202c/ffffff?text=YS' },
        { id: 4, name: 'Zoe Saldana', role: 'Music Producer', image: 'https://via.placeholder.com/200/2c5282/ffffff?text=ZS' },
        { id: 5, name: 'Adam Sandler', role: 'Foley Artist', image: 'https://via.placeholder.com/200/4a5568/ffffff?text=AS' }
      ]
    },
    marketing: {
      name: 'Marketing',
      members: [
        { id: 1, name: 'Brandon Lee', role: 'Marketing Director', image: 'https://via.placeholder.com/200/4a5568/ffffff?text=BL' },
        { id: 2, name: 'Catherine Zeta', role: 'Social Media Manager', image: 'https://via.placeholder.com/200/2d3748/ffffff?text=CZ' },
        { id: 3, name: 'Daniel Craig', role: 'Community Manager', image: 'https://via.placeholder.com/200/1a202c/ffffff?text=DC' },
        { id: 4, name: 'Fiona Apple', role: 'PR Manager', image: 'https://via.placeholder.com/200/2c5282/ffffff?text=FA' },
        { id: 5, name: 'George Clooney', role: 'Brand Manager', image: 'https://via.placeholder.com/200/4a5568/ffffff?text=GC' }
      ]
    }
  }

  return (
    <main className="main-content about-page">
      <TeamSideMenu />
      <div className="about-content">
        <section className="about-intro">
          <h2>About Sunday Studios</h2>
          <p>We create innovative and engaging games that bring joy to players worldwide.</p>
        </section>

        {Object.entries(teams).map(([teamId, team]) => (
          <section key={teamId} id={teamId} className="team-section">
            <h3 className="team-section-title">{team.name}</h3>
            <div className="team-members-grid">
              {team.members.map((member) => (
                <div key={member.id} className="team-member">
                  <div className="member-image-container">
                    <img src={member.image} alt={member.name} className="member-image" />
                  </div>
                  <h4 className="member-name">{member.name}</h4>
                  <p className="member-role">{member.role}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}

export default About

