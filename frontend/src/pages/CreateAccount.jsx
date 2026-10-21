import country from "world-countries";
import { Link, useNavigate } from "react-router-dom";
import "../css/CreateAccount.css";
import { useState } from "react";

function CreateAccount() {
  const navigate = useNavigate();

  const countryList = country.map((country) => {
    return country.name.common;
  });

  const [selectedCountry, setSelectedCountry] = useState("");

  return (
    <section className="createAccountMainContainer">
      <div className="backButton">
        <button type="button" onClick={() => navigate(-1)} aria-label="Go back">
          {
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M15 6l-6 6 6 6" />
            </svg>
          }
        </button>
      </div>
      <div className="createAccountCont">
        <h1>Create your account</h1>
        <h3>Start &mdash; 3 plays a day </h3>
      </div>

      <div className="CreateformContainer">
        <form>
          <div className="accountinputGroup">
            <label className="accountusername" htmlFor="username">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter display username"
            />
          </div>
          <div className="accountinputGroup">
            <label className="accountemail" htmlFor="email">
              EMAIL
            </label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="accountinputGroup">
            <label className="accountpassword" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="accountinputGroup">
            <label className="Country" htmlFor="country">
              COUNTRY
              <select
                name="country"
                id="country"
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                {countryList.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="agreeTermsContainer">
            <input type="checkbox" id="agreeTerms" />
            <label htmlFor="agreeTerms">
              I agree to the <span style={{ color: "#0f2f8f" }}>Terms</span> and{" "}
              <span style={{ color: "#0f2f8f" }}>Privacy Policy</span>
            </label>
          </div>

          <button className="createAccountButton" type="submit">
            Create account
          </button>
        </form>
        <span className="AlreadyPlaying">
          Already Playing?{" "}
          <Link className="LoginforCreate" to="/login">
            Log in
          </Link>
        </span>
      </div>
    </section>
  );
}

export default CreateAccount;
