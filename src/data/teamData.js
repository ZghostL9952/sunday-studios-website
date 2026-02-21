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

function normalizeRole(str = '') {
  return String(str).toLowerCase()
}

function sortByPreferredNames(preferred = []) {
  const index = new Map(preferred.map((n, i) => [n, i]))
  return (a, b) => {
    const ai = index.has(a.name) ? index.get(a.name) : 9999
    const bi = index.has(b.name) ? index.get(b.name) : 9999
    if (ai !== bi) return ai - bi
    return a.name.localeCompare(b.name)
  }
}

function narrativeSort(a, b) {
  const top = ['Hudson Janow', 'Yao Chang', 'Lily Vengco']
  const topIndex = new Map(top.map((n, i) => [n, i]))

  const aTop = topIndex.has(a.name) ? topIndex.get(a.name) : null
  const bTop = topIndex.has(b.name) ? topIndex.get(b.name) : null
  if (aTop !== null || bTop !== null) {
    if (aTop === null) return 1
    if (bTop === null) return -1
    return aTop - bTop
  }

  const ar = normalizeRole(a.role)
  const br = normalizeRole(b.role)

  const aIsWriter = ar.includes('writer')
  const bIsWriter = br.includes('writer')

  const aIsND = ar.includes('narrative designer')
  const bIsND = br.includes('narrative designer')

  // Writers first, then Narrative Designers
  if (aIsWriter !== bIsWriter) return aIsWriter ? -1 : 1
  if (aIsND !== bIsND) return aIsND ? 1 : -1

  return a.name.localeCompare(b.name)
}

export const TEAM_MEMBERS = [
  { name: 'Jonas Ma', role: 'Game Director, Art Director, Character Designer', teams: ['Art', 'Programming', 'Marketing', 'Production', 'Game Design'] },
  { name: 'Ashley C', role: 'Narrative Designer (Implementation), Writer', teams: ['Narrative'] },
  { name: 'Arbaz M. Khan', role: 'Narrative Designer', teams: ['Narrative'] },
  { name: 'Geno C. Jones', role: 'Voice Actor', teams: ['Music/Sound'] },
  { name: 'Yao Chang', role: 'Narrative Designer, Game Writing, Implementation', teams: ['Narrative'] },
  { name: 'Kaley Akemann', role: 'Programmer', teams: ['Programming'] },
  { name: 'Ivy Immediato', role: 'Texture Artist, Digital Artist', teams: ['Art'] },
  { name: 'Jack Goulden', role: 'programmer, sound designer, composer', teams: ['Programming', 'Music/Sound'] },
  { name: 'Olivia Bascombe', role: 'Writer', teams: ['Narrative'] },
  { name: 'Joey Matsumoto', role: '2d artist', teams: ['Art', 'Game Design'] },
  { name: 'Amelie Zhao', role: 'Environment artist, 2d generalist', teams: ['Art'] },
  { name: 'Jamari Miller', role: 'Music Composer', teams: ['Music/Sound'] },
  { name: 'Ariane Marchese', role: 'Audio Lead, Casting Director, Voice Director', teams: ['Music/Sound', 'Production'] },
  { name: 'Quentin Higgins', role: '2d Generalist, Character Artist, Illustrator', teams: ['Art'] },
  { name: 'Rosalie Fong', role: 'Environment artist, UI artist', teams: ['Art'] },
  { name: 'Isaiah Lee Hogue', role: 'Concept Artist', teams: ['Art'] },
  { name: 'Aphena Sov', role: 'Concept artist', teams: ['Art'] },
  { name: 'Victoria Cho', role: 'Social Media Director, Writer', teams: ['Narrative', 'Marketing'] },
  { name: 'Kiara Tyler-Cooper', role: '3D animator', teams: ['Art'] },
  { name: 'Andrew Park', role: 'Lead QA Engineer, Game designer, Website designer', teams: ['Programming', 'Game Design'] },
  { name: 'Lily Vengco', role: 'Narrative Editor', teams: ['Narrative'] },
  { name: 'Josh Villanueva', role: 'Programming, Debugging', teams: ['Programming', 'Game Design'] },
  { name: 'Michael Fritz', role: 'Game Writer', teams: ['Narrative'] },
  { name: 'Vivian Lu', role: 'UI/UX Designer, Frontend Developer', teams: ['Art', 'Game Design'] },
  { name: 'Daniel Fornell', role: 'Game Designer, Level Designer, Programmer', teams: ['Programming', 'Game Design'] },
  { name: 'Victoria Ling', role: 'Visual Designer, Digital Marketing Manager', teams: ['Art', 'Marketing'] },
  { name: 'Tabea Kavayé', role: 'concept artist (or character artist), technical artist or 3d artist', teams: ['Art'] },
  { name: 'Kylie Kwon', role: 'Bunny Girl/Extras Voices', teams: ['Music/Sound'] },
  { name: 'Charlie des Robert', role: 'Producer, Publishing', teams: ['Production'] },
  { name: 'Yiyi Fang', role: 'Marketing Artist', teams: ['Art'] },
  { name: 'Amaya A.K.A Lexie Dreamstate', role: 'Bartender Voice Actor', teams: ['Music/Sound'] },
  { name: 'keygen aka jenny schumann', role: 'Music producer', teams: ['Music/Sound'] },
  { name: 'Forest Wong', role: 'Concept artist', teams: ['Art'] },
  { name: 'Nimra Farhan', role: 'Voice Actor', teams: ['Music/Sound'] },
  { name: 'Rachel Gao', role: 'Texture Artist, Prop Modeler', teams: ['Art'] },
  { name: 'Wes Haas', role: 'Voice Actor', teams: ['Music/Sound'] },
  { name: 'Hudson Janow', role: 'Narrative Lead, Producer', teams: ['Narrative', 'Marketing', 'Production'] },
  { name: 'Christina Ou', role: 'Programmer', teams: ['Programming'] },
  { name: 'Brooke Johnson', role: 'Voice Actor, Sorority Girl 2/Extras', teams: ['Music/Sound'] },
  { name: 'Matthew Shwe', role: 'Programmer', teams: ['Programming'] },
  { name: 'Jules Tobler', role: '2D Artist, Writer', teams: ['Art', 'Narrative'] },
  { name: 'Kai Goldfein', role: 'Level designer, Environment Art Lead', teams: ['Art'] },
  { name: 'Maganda Marie', role: 'Voice Actor - Angel', teams: ['Music/Sound'] },
  { name: 'Pedro Saravia-Castillo', role: 'DJ, walla/background', teams: ['Music/Sound'] },
  { name: 'Kelvin Melendez', role: 'Voice Actor of Caleb', teams: ['Music/Sound'] },
  { name: 'Tasmin Singh', role: 'Voice Actor (Nora)', teams: ['Music/Sound'] },
  { name: 'Brian Ren-Sawyer', role: 'Writer', teams: ['Narrative'] },
  // NEW: Programming Lead placeholder (no image)
{
  name: 'Pedro P',
  role: 'Programming Lead',
  teams: ['Programming']
},
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

  // --- TEAM MEMBER ORDERING OVERRIDES ---

  // Art: put Kai right after Jonas
  teams['art'].members.sort(sortByPreferredNames(['Jonas Ma', 'Kai Goldfein']))

  // Programming: Pedro first
  teams['programming'].members.sort(sortByPreferredNames(['Pedro P']))

  // Narrative: Hudson, Yao, Lily first; then Writers; then Narrative Designers
  teams['narrative'].members.sort(narrativeSort)

  return teams
}