import logo from "../assets/Logo.png";

export default function EvolutionTrackerLogo() {
  return (
    <div className="d-flex justify-content-center align-items-center m-2">
      <img src={logo} alt="Luiz Junior Logo" width="70px" className="me-3" />
      <h1>Evolution Tracker</h1>
    </div>
  );
}
