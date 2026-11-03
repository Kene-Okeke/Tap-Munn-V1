import logo from "../assets/tap-phoneicon.png";

function NameAndLogo() {
  return (
    <div className="iconAndName">
      <img src={logo} alt="" />

      <h1>
        Tap Mun<span className="yellowQuoteLanding">’</span>n
      </h1>
    </div>
  );
}

export default NameAndLogo;
