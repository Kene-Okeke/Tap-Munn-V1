import "../css/Dashboard.css";
import { NavLink } from "react-router-dom";
import NameAndLogo from "../components/NameAndLogo";

import logo from "../assets/tap-phoneicon.png";
import messageIcon from "../assets/message-ink.png";
import bellIcon from "../assets/bell-ink.png";
import searchIcon from "../assets/search-muted.png";
import chevronDown from "../assets/chevron-down-ink.png";
import clockIcon from "../assets/clock-white.png";
import playDark from "../assets/play-dark.png";
import coinIcon from "../assets/coin.png";
import lockIcon from "../assets/lock-ink.png";
import rowPlay from "../assets/row-play.png";
import rowReceived from "../assets/row-received.png";
import rowWithdrawal from "../assets/row-withdrawal.png";
import fabPlay from "../assets/fab-play.png";

import homeOn from "../assets/home-on.png";
import homeOff from "../assets/home-off.png";
import playOn from "../assets/play-on.png";
import playOff from "../assets/play-off.png";
import trophyOn from "../assets/trophy-on.png";
import trophyOff from "../assets/trophy-off.png";
import usersOn from "../assets/users-on.png";
import usersOff from "../assets/users-off.png";
import messageOn from "../assets/message-on.png";
import messageOff from "../assets/message-off.png";
import walletOn from "../assets/wallet-on.png";
import walletOff from "../assets/wallet-off.png";
import settingsOn from "../assets/settings-on.png";
import settingsOff from "../assets/settings-off.png";

function Dashboard() {
  return (
    <div className="dashboardMainContainer">
      {/* Desktop and tablet sidebar */}
      <nav className="sideBar">
        <div className="sideLogo">
          <NameAndLogo />
        </div>
        <img className="sideLogoSmall" src={logo} alt="Tap Mun'n" />

        <NavLink to="/dashboard" className="sideLink">
          <img className="iconOn" src={homeOn} alt="" />
          <img className="iconOff" src={homeOff} alt="" />
          <span>Home</span>
        </NavLink>
        <NavLink to="/play" className="sideLink">
          <img className="iconOn" src={playOn} alt="" />
          <img className="iconOff" src={playOff} alt="" />
          <span>Play</span>
        </NavLink>
        <NavLink to="/leaderboard" className="sideLink">
          <img className="iconOn" src={trophyOn} alt="" />
          <img className="iconOff" src={trophyOff} alt="" />
          <span>Leaderboard</span>
        </NavLink>
        <NavLink to="/friends" className="sideLink">
          <img className="iconOn" src={usersOn} alt="" />
          <img className="iconOff" src={usersOff} alt="" />
          <span>Friends</span>
        </NavLink>
        <NavLink to="/messages" className="sideLink">
          <img className="iconOn" src={messageOn} alt="" />
          <img className="iconOff" src={messageOff} alt="" />
          <span>Messages</span>
          <span className="badge">2</span>
        </NavLink>
        <NavLink to="/wallet" className="sideLink">
          <img className="iconOn" src={walletOn} alt="" />
          <img className="iconOff" src={walletOff} alt="" />
          <span>Wallet</span>
        </NavLink>
        <NavLink to="/settings" className="sideLink">
          <img className="iconOn" src={settingsOn} alt="" />
          <img className="iconOff" src={settingsOff} alt="" />
          <span>Settings</span>
        </NavLink>
      </nav>

      {/* Desktop and tablet top bar */}
      <div className="topBar">
        <div className="searchBox">
          <img src={searchIcon} alt="" />
          <input
            type="text"
            placeholder="Search players"
            aria-label="Search players"
          />
        </div>

        <div className="topBarRight">
          <div className="bellContainer">
            <img src={bellIcon} alt="Notifications" />
            <span className="badge">3</span>
          </div>
          <div className="accountMenu">
            <span className="avatar">AK</span>
            <h3>Ama K.</h3>
            <img src={chevronDown} alt="" />
          </div>
        </div>
      </div>

      {/* Mobile header */}
      <div className="mobileHeader">
        <NameAndLogo />
        <div className="iconsLeftSide">
          <div className="messageContainer">
            <img src={messageIcon} alt="Messages" />
            <span className="badge">2</span>
          </div>
          <div className="messageContainer">
            <img src={bellIcon} alt="Notifications" />
            <span className="badge">3</span>
          </div>
        </div>
      </div>

      <div className="welcomeName">
        Welcome back, <span>Ama</span>
      </div>

      <div className="dashContent">
        {/* Left column: hero, stats, chart */}
        <div className="dashLeft">
          <div className="blueBackgroudWidget">
            <div className="dashCoins" aria-hidden="true">
              <span className="dashCoin dashCoin1"></span>
              <span className="dashCoin dashCoin2"></span>
              <span className="dashCoin dashCoin3"></span>
              <span className="dashCoin dashCoin4"></span>
              <span className="dashCoin dashCoin5"></span>
              <span className="dashCoin dashCoin6"></span>
              <span className="dashCoin dashCoin7"></span>
            </div>

            <h1>
              <span className="mobileOnly">TODAY'S FREE PLAYS</span>
              <span className="desktopOnly">DAILY FREE PLAYS</span>
            </h1>
            <span className="bignumberLeft">
              2
              <span className="smallnumberLeft">
                <span className="mobileOnly">/ 3 left</span>
                <span className="desktopOnly">of 3 left</span>
              </span>
            </span>

            <div className="clockAndReset">
              <img className="clock" src={clockIcon} alt="" />
              <h1>
                Resets in <span className="timeLeft">06:12:40</span>
                <span className="desktopOnly"> · 5-minute sessions</span>
              </h1>
            </div>

            <button className="yellowPlaynow">
              <img src={playDark} alt="" />
              <h1>Play now</h1>
            </button>
          </div>

          <div className="gameDataCont">
            <div className="bestScoreCont">
              <h1>BEST SCORE</h1>
              <h3 className="bestScore">4,820</h3>
              <p className="statNote">38 games played</p>
            </div>
            <div className="Tokens">
              <h1>
                <span className="mobileOnly">TOKENS</span>
                <span className="desktopOnly">TOKEN BALANCE</span>
              </h1>
              <h3>
                <img src={coinIcon} alt="tokenIcon" />
                12,480
              </h3>
              <p className="statNote">Game tokens</p>
            </div>
            <div className="Withdrawable">
              <h1>WITHDRAWABLE</h1>
              <h3>
                <img src={lockIcon} alt="" />
                <span>
                  Paid plan<span className="desktopOnly"> required</span>
                </span>
              </h3>
              <p className="statNote">100 eligible tokens = $1</p>
            </div>
          </div>

          {/* Scores chart - desktop and tablet only */}
          <div className="scoresChart">
            <div className="scoresChartHeader">
              <h1>Scores · last 7 days</h1>
              <span className="avgPill">Avg 2,140</span>
            </div>
            <div className="scoresBars">
              <div className="barColumn">
                <div className="bar bar1"></div>
                <h3>MON</h3>
              </div>
              <div className="barColumn">
                <div className="bar bar2"></div>
                <h3>TUE</h3>
              </div>
              <div className="barColumn">
                <div className="bar bar3"></div>
                <h3>WED</h3>
              </div>
              <div className="barColumn">
                <div className="bar bar4"></div>
                <h3>THU</h3>
              </div>
              <div className="barColumn">
                <div className="bar bar5"></div>
                <h3>FRI</h3>
              </div>
              <div className="barColumn">
                <div className="bar bar6"></div>
                <h3>SAT</h3>
              </div>
              <div className="barColumn">
                <div className="bar bar7 barToday"></div>
                <h3>TODAY</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: rank, social, recent activity */}
        <div className="dashRight">
          <div className="gamerankData">
            <h1 className="yourRankLabel">YOUR RANK</h1>
            <div className="games">
              <h1>GAMES</h1>
              <h3 className="amountOfGames">38</h3>
            </div>
            <div className="GlobalRank">
              <h1>GLOBAL</h1>
              <h3 className="globalRankNumber">#214</h3>
            </div>
            <div className="CountryRank">
              <h1>GHANA</h1>
              <h3 className="globalRankNumber">#12</h3>
            </div>
          </div>

          {/* Social card - desktop and tablet only */}
          <div className="socialCard">
            <h1>Social</h1>
            <div className="socialRow">
              <h3>Friend requests</h3>
              <span className="badge">2</span>
            </div>
            <div className="socialRow">
              <h3>Unread messages</h3>
              <span className="badge">2</span>
            </div>
          </div>

          <div className="recentActivityCont">
            <div className="recentActivity">
              <h1>Recent activity</h1>
              <h3>View all</h3>
            </div>
            <section className="recentActivitySection">
              <div className="recentColumns">
                <div className="recentColumnLeft">
                  <img className="playArrow" src={rowPlay} alt="" />
                  <div className="TodayScore">
                    <h1>Game finished</h1>
                    <h3>
                      Score 1,860<span className="mobileOnly"> · Today</span>
                    </h3>
                  </div>
                </div>
                <div className="recentColumnRight">
                  <h1>+186</h1>
                </div>
              </div>

              <div className="recentColumns">
                <div className="recentColumnLeft">
                  <img className="playArrow" src={rowReceived} alt="" />
                  <div className="TodayScore">
                    <h1>Tokens received</h1>
                    <h3>From Kwame B.</h3>
                  </div>
                </div>
                <div className="recentColumnRight">
                  <h1>+100</h1>
                </div>
              </div>

              {/* Third row - desktop and tablet only */}
              <div className="recentColumns desktopRow">
                <div className="recentColumnLeft">
                  <img className="playArrow" src={rowWithdrawal} alt="" />
                  <div className="TodayScore">
                    <h1>Withdrawal</h1>
                    <h3>Pending review</h3>
                  </div>
                </div>
                <div className="recentColumnRight">
                  <h1>$5.00</h1>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Mobile bottom bar */}
      <footer className="bottomNav">
        <NavLink to="/dashboard" className="tabLink">
          <img className="iconOn" src={homeOn} alt="" />
          <img className="iconOff" src={homeOff} alt="" />
          <span>Home</span>
        </NavLink>
        <NavLink to="/leaderboard" className="tabLink">
          <img className="iconOn" src={trophyOn} alt="" />
          <img className="iconOff" src={trophyOff} alt="" />
          <span>Ranks</span>
        </NavLink>
        <NavLink to="/play" className="playTab" aria-label="Play">
          <img src={fabPlay} alt="" />
        </NavLink>
        <NavLink to="/friends" className="tabLink">
          <img className="iconOn" src={usersOn} alt="" />
          <img className="iconOff" src={usersOff} alt="" />
          <span>Friends</span>
        </NavLink>
        <NavLink to="/wallet" className="tabLink">
          <img className="iconOn" src={walletOn} alt="" />
          <img className="iconOff" src={walletOff} alt="" />
          <span>Wallet</span>
        </NavLink>
      </footer>
    </div>
  );
}
export default Dashboard;
