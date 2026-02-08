// Parsed from Contact Information (Responses) - Form Responses 1.csv
// Each person can be in multiple teams; they will appear in each team section.
// Team IDs: art, narrative, programming, music-sound, marketing, production, game-design

function normalizeTeam(teamStr) {
  const map = {
    'Art': 'art',
    'Narrative': 'narrative',
    'Programming': 'programming',
    'Music/Sound': 'music-sound',
    'Marketing': 'marketing',
    'Production': 'production',
    'Game Design': 'game-design'
  }
  return map[teamStr.trim()] || teamStr.trim().toLowerCase().replace(/\s+/g, '-')
}

export const TEAM_MEMBERS = [
  { name: 'Jonas Ma', role: 'Game Director, Art Director, Character Designer', teams: ['Art', 'Programming', 'Marketing', 'Production', 'Game Design'] },
  { name: 'Ashley C', role: 'Narrative Designer (Implementation), Writer', teams: ['Narrative'] },
  { name: 'Arbaz M. Khan', role: 'Narrative Designer', teams: ['Narrative'] },
  { name: 'Geno C. Jones', role: 'Voice Actor', teams: ['Music/Sound'] },
  { name: 'Yao Chang', role: 'Narrative Designer, Game Writing, Implementation', teams: ['Narrative'] },
  { name: 'Kaley Akemann', role: 'Programmer', teams: ['Programming'] },
  { name: 'Ivy Immediato', role: 'Texture Artist, Digital Artist', teams: ['Art'] },
  { name: 'Jack Goulden', role: 'Programmer, Sound Designer, Composer', teams: ['Programming', 'Music/Sound'] },
  { name: 'Olivia Bascombe', role: 'Writer', teams: ['Narrative'] },
  { name: 'Joey Matsumoto', role: '2D Artist', teams: ['Art', 'Game Design'] },
  { name: 'Amelie Zhao', role: 'Environment Artist, 2D Generalist', teams: ['Art'] },
  { name: 'Jamari Miller', role: 'Music Composer', teams: ['Music/Sound'] },
  { name: 'Ariane Marchese', role: 'Audio Lead, Casting Director, Voice Director', teams: ['Music/Sound', 'Production'] },
  { name: 'Quentin Higgins', role: '2D Generalist, Character Artist, Illustrator', teams: ['Art'] },
  { name: 'Rosalie Fong', role: 'Environment Artist, UI Artist', teams: ['Art'] },
  { name: 'Isaiah Lee Hogue', role: 'Concept Artist', teams: ['Art'] },
  { name: 'Aphena Sov', role: 'Concept Artist', teams: ['Art'] },
  { name: 'Victoria Cho', role: 'Social Media Director, Writer', teams: ['Narrative', 'Marketing'] },
  { name: 'Kiara Tyler-Cooper', role: '3D Animator', teams: ['Art'] },
  { name: 'Andrew Park', role: 'Lead QA Engineer, Game Designer, Website Designer', teams: ['Programming', 'Game Design'] },
  { name: 'Lily Vengco', role: 'Narrative Editor', teams: ['Narrative'] },
  { name: 'Josh Villanueva', role: 'Programming, Debugging', teams: ['Programming', 'Game Design'] },
  { name: 'Michael Fritz', role: 'Game Writer', teams: ['Narrative'] },
  { name: 'Vivian Lu', role: 'UI/UX Designer, Frontend Developer', teams: ['Art', 'Game Design'] },
  { name: 'Daniel Fornell', role: 'Game Designer, Level Designer, Programmer', teams: ['Programming', 'Game Design'] },
  { name: 'Victoria Ling', role: 'Visual Designer, Digital Marketing Manager', teams: ['Art', 'Marketing'] },
  { name: 'Tabea Kavayé', role: 'Concept Artist, Technical Artist, 3D Artist', teams: ['Art'] },
  { name: 'Kylie Kwon', role: 'Voice Actor (Bunny Girl/Extras)', teams: ['Music/Sound'] },
  { name: 'Charlie des Robert', role: 'Publishing Producer', teams: ['Production'] },
  { name: 'Yiyi Fang', role: 'Marketing Artist', teams: ['Art'] }
]

export function buildTeamsFromMembers(members, nameToImage) {
  const teamIds = ['art', 'narrative', 'programming', 'music-sound', 'marketing', 'production', 'game-design']
  const teamNames = {
    art: 'Art',
    narrative: 'Narrative',
    programming: 'Programming',
    'music-sound': 'Music/Sound',
    marketing: 'Marketing',
    production: 'Production',
    'game-design': 'Game Design'
  }
  const teams = {}
  teamIds.forEach(id => {
    teams[id] = { name: teamNames[id], members: [] }
  })

  let memberId = 0
  members.forEach((person) => {
    const image = nameToImage[person.name] || null
    const teamIdsForPerson = person.teams.map(normalizeTeam).filter(Boolean)
    teamIdsForPerson.forEach((teamId) => {
      if (teams[teamId]) {
        teams[teamId].members.push({
          id: `${teamId}-${person.name}-${memberId}`,
          name: person.name,
          role: person.role,
          image
        })
      }
    })
    memberId++
  })

  return teams
}
