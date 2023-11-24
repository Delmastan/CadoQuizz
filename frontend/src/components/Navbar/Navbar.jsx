import { useState } from "react";
import { Link } from "react-router-dom";
import MenuBurger from "./menuburger/menuburger";
import logo from "../../assets/icons/cadoquiz.svg";
import "./Navbar.scss";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="navbar-container">
        <MenuBurger isActive={isActive} setIsActive={setIsActive} />
        <div className="navbar-logo">
          <img src={logo} alt="christmas tree logo" />
          <p>CadoQuiz</p>
        </div>
      </div>
      {/* <div className="menuburger-contain-modal"> */}
      <button
        type="button"
        className={`menuburger-modal ${isActive ? "open" : ""}`}
        onClick={() => setIsActive(!isActive)}
      >
        {/* <div className={`menuburger-modal ${isActive ? "open" : ""}`}> */}
        <div className="menuburger-contain-pages">
          <h3>Menu</h3>
          <ul className="menuburger-conatain-list">
            <li className="menuburger-conatain-list-details">
              <Link to="/">Accueil</Link>
            </li>
            <li className="menuburger-conatain-list-details">
              <Link to="/regles">Régles</Link>
            </li>
          </ul>
        </div>
        {/* </div> */}
      </button>
      {/* </div> */}
    </>
  );
}

export default Navbar;
