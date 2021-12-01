import logo from "../assets/Logo.png";
import {Link} from "react-router-dom";


export default function Navbar () {
    return ( 
    
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
  <div className="container-fluid">
    <Link to=""><img src={logo} alt="Luiz Junior Logo" width="70px"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item" style={{marginLeft: "70px"}}>
          <Link className="nav-link" to="">Planos</Link>
        </li>
        <li className="nav-item" style={{marginLeft: "70px"}}>
          <Link className="nav-link" to="">Galeria</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


   
    )
}

