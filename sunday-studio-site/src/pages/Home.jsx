import { Link } from 'react-router-dom'
import '../App.css'
import groupImage from '../assets/img/group.png'
import logoImage from '../assets/img/logo.png'

function Home() {
  return (
    <main className="landing-page">
      <div className="landing-background">
        <img src={groupImage} alt="Us Five Forever" className="background-image" />
      </div>
      <div className="landing-content">
        <img src={logoImage} alt="US FIVE FOREVER" className="landing-title-image" />
        <div className="landing-buttons">
          <Link to="/us-five-forever" className="cta-button">LEARN MORE</Link>
          <a href="https://store.steampowered.com/app/4125820/Us_Five_Forever/" target="_blank" rel="noopener noreferrer" className="cta-button">DOWNLOAD NOW</a>
        </div>
      </div>
      <footer className="landing-footer">
        <p className="footer-copyright">© Sunday Studios, 2025</p>
      </footer>
    </main>
  )
}

export default Home

