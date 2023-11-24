/* eslint-disable */
import "./menuburger.scss"; // Assurez-vous d'importer votre fichier CSS

function MenuBurger({ isActive, setIsActive }) {
  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="menuburger-contain">
      <button
        type="button"
        id="menu-toggle"
        className={`menu-burger ${isActive ? "menu-burger--is-active" : ""}`}
        onClick={toggleMenu}
      >
        <i>Show Menu</i>
      </button>
    </div>
  );
}

export default MenuBurger;
