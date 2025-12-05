import '../App.css'
import ex3Image from '../assets/img/ex3.png'

function Home() {
  // Sample game data - replace with your actual games
  const games = [
    {
      id: 1,
      title: "Us Five Forever",
      image: ex3Image
    },
    {
      id: 2,
      title: "Game Title 2",
      image: "https://via.placeholder.com/800x600/2d3748/ffffff?text=Game+2",
      description: "A puzzle game that challenges your mind and creativity."
    }
  ]

  return (
    <main className="main-content">
      <section id="games" className="games-gallery">
        {games.map((game) => (
          <div key={game.id} className="game-card">
            <div className="game-image-container">
              <img src={game.image} alt={game.title} className="game-image" />
              <h2 className="game-title">{game.title}</h2>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}

export default Home

