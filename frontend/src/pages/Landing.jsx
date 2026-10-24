import "../css/Landing.css";
import logo from "../assets/tap-phoneicon.png";
import mobileMenu from "../assets/mobile-menu.png";

function Landing() {
  return (
    <section className="mainLandingContainer">
      {/* Mobile nav bar */}
      <nav className="mobileNav">
        <div className="iconAndName">
          <img src={logo} alt="" />
          <h1>
            Tap Mun<span className="yellowQuoteLanding">'</span>n
          </h1>
        </div>
        <div className="mobileMenuCont">
          <img
            className="mobileMenuLanding"
            src={mobileMenu}
            alt="mobilemenu"
          />
        </div>
      </nav>

      {/* Main Landing Card */}
      <div className="landingCard">
        <div className="tapAndFiveContainer">
          {/* Tap the coins, Beat the Clock, Climb the Board */}
          <section className="tapBeatClimb">
            <h1>Tap the coins.</h1>
            <br />
            <h1>Beat the Clock</h1>
            <br />
            <h1 className="yellowClimbText">Climb the Board</h1>
          </section>

          {/* Five-minute tap sessions, daily free plays, friends and leaderboards */}
          <section className="paragraph text">
            <p>
              Five-minute tap sessions, daily free plays, friends and
              leaderboards
            </p>
          </section>
        </div>
        <div className="startAndLogin">
          <button className="startPlaying">Start playing free</button>
          <button className="logIn">Log in</button>
          <p className="earningsParagraph">
            Earnings are not guaranteed. Withdrawals eligible paid plans only.
          </p>
        </div>
      </div>
      {/* Number and Action Section */}
      <section className="numberAndAction">
        <div className="numberndAction">
          <div className="numberText">1</div>
          <div className="columnSection">
            <h1>Tap</h1>
            <h3>Coins fall for five minutes </h3>
          </div>
        </div>
        <div className="numberndAction">
          <div className="numberText">2</div>
          <div className="columnSection">
            <h1>Earn</h1>
            <h3>Score Points, collect tokens </h3>
          </div>
        </div>
        <div className="numberndAction">
          <div className="numberText">3</div>
          <div className="columnSection">
            <h1>Climb</h1>
            <h3>Global & country leaderboards </h3>
          </div>
        </div>
      </section>
    </section>
  );
}
export default Landing;
