import logo from "../assets/tap-phoneicon.png";
import { Link } from "react-router-dom";
import "../css/Login.css";

function Login() {
  return (
    <>
      <section className="loginMainContainer">
        {/* header section - with icon and company name */}
        <div className="headerRow">
          <div className="iconContainer">
            <img className="tap-icon" src={logo} alt="" />
          </div>
          <div className="companyName">
            <h1>
              Tap Mun<span className="yellowQuote">'</span>n
            </h1>
          </div>
        </div>

        {/* Welcome back and login text */}

        <div className="welcomeSection">
          <h1>Welcome back</h1>
          <h3>Log in to keep playing</h3>
        </div>

        {/* form section */}
        <div className="formContainer">
          <form>
            <div className="inputGroup">
              <label className="emailoruser" htmlFor="email">
                EMAIL&nbsp;OR&nbsp;USERNAME
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter email or username"
              />
            </div>
            <div className="inputGroup">
              <label className="password" htmlFor="password">
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
              />
              <span className="forgotPassword">Forgot password?</span>
            </div>

            <button className="loginButton" type="submit">
              Log in
            </button>

            <div className="newHere">
              New here?{" "}
              <Link className="createAccountLink" to="/create-account">
                Create an account
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
export default Login;
