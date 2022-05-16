import "./sidebar.css";
import logo from "../../pic/logo.gif";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div>
      <nav className="menu" tabIndex={0}>
        <div className="smartphone-menu-trigger" />
        <header className="avatar">
          <img src={logo} alt="logo" />
          <br />
          <h2>El_fouladh</h2>
        </header>
        <ul>
          <li tabIndex={0} className="icon-dashboard">
            <span className="sideTxt">tableaux de bord </span>
          </li>
          {/* <li tabIndex={1} className="icon-customers">
            <span className="sideTxt">Années</span>
          </li>
          <li tabIndex={2} className="icon-users">
            <span className="sideTxt">jours</span>
          </li>
          <li tabIndex={3} className="icon-settings">
            <span className="sideTxt">mois</span>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}
