import bonfireImg from "../assets/img/Bonfire.png"

function Apply() {
  return (
    <div className="apply-page">
      <div className="apply-content">
        <img className="apply-image" src={bonfireImg} alt="Bonfire" />
        <p className="apply-note">
          Nothing here just yet. Keep an eye out for more opportunities!
        </p>
      </div>
    </div>
  );
}

export default Apply;
