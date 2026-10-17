import { logo } from "../assets/tap-phoneicon.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <section className="loginMainContainer">
        {/* header section - with icon and company name */}
        <div className="headerRow">
          <div className="iconContainer">
            <img src={logo} alt="" />
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
              <label htmlFor="email">EMAIL OR USERNAME</label>
              <input
                type="text"
                id="email"
                placeholder="Enter email or username"
              />
            </div>
            <div className="inputGroup">
              <label htmlFor="password">PASSWORD</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>

            <button type="submit">Log in</button>

            <div>
              New here? <Link to="/create-account">Create an account</Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
export default Login;
