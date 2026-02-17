import igIcon from "../assets/img/Social Icons.png";
import discordIcon from "../assets/img/Social Icons-1.png";
import bonfireImg from "../assets/img/Bonfire.png";
import '../App.css'

function Apply() {
  return (
    <div className="apply-page">
      <div className="apply-content">
        <img className="apply-image" src={bonfireImg} alt="Bonfire" />

        <p className="apply-note">Want to join our team?</p>

        {/* NEW CONTACT BOX */}
        <div className="contact-box">
          <p className="contact-title">Send a message to our founder, Jonas!</p>

          <div className="contact-grid">
            <a
              className="contact-card"
              href="https://instagram.com/jonas_art_jonart"
              target="_blank"
              rel="noreferrer"
            >
              <img className="contact-icon" src={igIcon} alt="Instagram" />
              <div className="contact-text">
                <div className="contact-label">Instagram</div>
                <div className="contact-sub">@jonas_art_jonart</div>
              </div>
            </a>

            <a
              className="contact-card"
              target="_blank"
              rel="noreferrer"
            >
              <img className="contact-icon" src={discordIcon} alt="Discord" />
              <div className="contact-text">
                <div className="contact-label">Discord</div>
                <div className="contact-sub">jonanasmama</div>
              </div>
            </a>
          </div>
        </div>
        {/* END NEW CONTACT BOX */}
      </div>
    </div>
  );
}

export default Apply;