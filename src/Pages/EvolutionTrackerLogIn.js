import googleIcon from "../assets/google-icon.svg";

import { useNavigate } from "react-router-dom";
import EvolutionTrackerLogo from "../components/EvolutionTrackerLogo";
import { useContext } from "react";
import { AuthContext } from "../components/AuthContext";

export default function EvolutionTrackerLogIn() {
  const navigate = useNavigate();

  const { user, signInWithGoogle } = useContext(AuthContext);

  function handleNavigateToEvo() {
    if (!user) {
      signInWithGoogle();
    }
    navigate("/evolutiontracker");
  }

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "75vh" }}
    >
      <EvolutionTrackerLogo />
      <button
        onClick={handleNavigateToEvo}
        type="button"
        className="btn btn-danger btn-lg d-flex justify-content-center align-items-center m-2"
      >
        <img src={googleIcon} alt="google icon" className="me-3" />
        Entre com sua conta Google
      </button>
    </div>
  );
}
