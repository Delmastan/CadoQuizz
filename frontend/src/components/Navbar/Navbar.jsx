import navBurger from "../../assets/icons/burger.svg";
import logo from "../../assets/icons/cadoquiz.svg";

import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar-container">
      <button type="button">
        <img src={navBurger} alt="navigation logo" />
      </button>
      <div className="navbar-logo">
        <img src={logo} alt="christmas tree logo" />
        <p>CadoQuiz</p>
      </div>
    </div>
  );
}

export default Navbar;
