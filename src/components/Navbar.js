import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <Link to="/">
          <img src={logo} alt="Luiz Junior Logo" width="70px" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100 d-flex justify-content-around">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/planos">
                Planos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/galeria">
                Galeria
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/evolutiontrackerlogin">
                Evolution Tracker
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
