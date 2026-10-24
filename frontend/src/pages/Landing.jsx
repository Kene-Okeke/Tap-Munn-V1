import "../css/Landing.css";
import { Link } from "react-router-dom";
import logo from "../assets/tap-phoneicon.png";
import mobileMenu from "../assets/mobile-menu.png";

function Landing() {
  return (
    <section className="mainLandingContainer">
      {/* Mobile Navigation */}
      <nav className="mobileNav">
        <div className="iconAndName">
          <img src={logo} alt="" />

          <h1>
            Tap Mun<span className="yellowQuoteLanding">’</span>n
          </h1>
        </div>

        <div className="mobileMenuCont">
          <img
            className="mobileMenuLanding"
            src={mobileMenu}
            alt="Mobile menu"
          />
        </div>
      </nav>

      {/* Desktop Navigation */}
      <nav className="desktopNav">
        <div className="iconAndName">
          <img src={logo} alt="" />

          <h1>
            Tap Mun<span className="yellowQuoteLanding">’</span>n
          </h1>
        </div>

        <ul className="desktopLinks">
          <li>
            <a href="#how">How it works</a>
          </li>
          <li>
            <a href="#topPlayers">Leaderboard</a>
          </li>
          <li>
            <a href="#">Plans</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>

        <div className="desktopAuth">
          <Link className="desktopLogin" to="/login">
            Log in
          </Link>
          <Link className="desktopSignup" to="/create-account">
            Sign up free
          </Link>
        </div>
      </nav>

      {/* Main Landing Card */}
      <div className="landingCard">
        {/* Floating coins - phone */}
        <div className="heroCoins" aria-hidden="true">
          <span className="coin heroCoin1"></span>
          <span className="coin heroCoin2"></span>
          <span className="coin heroCoin3"></span>
          <span className="coin heroCoin4"></span>
          <span className="coin heroCoin5"></span>
          <span className="coin heroCoin6"></span>
          <span className="coin heroCoin7"></span>
        </div>

        <div className="tapAndFiveContainer">
          <span className="browserBadge">Browser game · No download</span>

          {/* Hero Heading */}
          <section className="tapBeatClimb">
            <h1>Tap the coins.</h1>
            <h1>Beat the clock.</h1>
            <h1 className="yellowClimbText">Climb the board.</h1>
          </section>

          {/* Hero Description */}
          <section className="paragraph text">
            <p>
              Five-minute tap sessions, daily free plays, friends and
              leaderboards.
            </p>
          </section>
        </div>

        {/* Landing Actions */}
        <div className="startAndLogin">
          <button className="startPlaying">Start playing free</button>
          <button className="logIn">Log in</button>
          <a className="seeHow" href="#how">
            See how it works
          </a>

          <p className="earningsParagraph">
            Earnings are not guaranteed. Withdrawals: eligible paid plans only.
          </p>
        </div>

        {/* Game preview - desktop only */}
        <div className="gamePreview" aria-hidden="true">
          <div className="previewHud">
            <span className="previewTimer">04:12</span>
            <span className="previewScore">1,240</span>
          </div>

          <span className="coin previewCoin1"></span>
          <span className="coin previewCoin2"></span>
          <span className="coin previewCoin3"></span>
          <span className="coin previewCoin4"></span>
          <span className="coin previewCoin5"></span>
          <span className="coin previewCoin6"></span>
          <span className="coin previewCoin7"></span>
          <span className="coin previewCoin8"></span>
          <span className="coin previewCoin9"></span>
          <span className="coin previewCoin10"></span>
        </div>
      </div>

      {/* Number and Action Section */}
      <section className="numberAndAction" id="how">
        <div className="numberndAction">
          <div className="numberText">1</div>

          <div className="columnSection">
            <h1>Tap</h1>
            <h3>Coins fall for five minutes</h3>
          </div>
        </div>

        <div className="numberndAction">
          <div className="numberText">2</div>

          <div className="columnSection">
            <h1>Earn</h1>
            <h3>Score points, collect tokens</h3>
          </div>
        </div>

        <div className="numberndAction">
          <div className="numberText">3</div>

          <div className="columnSection">
            <h1>Climb</h1>
            <h3>Global and country leaderboards</h3>
          </div>
        </div>

        {/* Top players - desktop only */}
        <div className="topPlayers" id="topPlayers">
          <div className="topPlayersLabel">Top players today</div>

          <div className="playerRow">
            <span className="playerRank">1</span>
            <span className="playerAvatar" style={{ background: "#2b55d6" }}>
              ZM
            </span>
            <span className="playerName">Zainab M.</span>
            <span className="playerScore">9,420</span>
          </div>

          <div className="playerRow">
            <span className="playerRank">2</span>
            <span className="playerAvatar" style={{ background: "#0f2f8f" }}>
              TA
            </span>
            <span className="playerName">Tunde A.</span>
            <span className="playerScore">9,105</span>
          </div>

          <div className="playerRow">
            <span className="playerRank">3</span>
            <span className="playerAvatar" style={{ background: "#5a7ce0" }}>
              ES
            </span>
            <span className="playerName">Efua S.</span>
            <span className="playerScore">8,870</span>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Landing;
