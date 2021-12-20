import googleIcon from "../assets/images/google-icon.svg";
import { useNavigate } from "react-router-dom";
import EvolutionTrackerLogo from "../components/EvolutionTrackerLogo";
import { useAuth } from "../hooks/useAuth";

export default function EvolutionTrackerLogIn() {
  const navigate = useNavigate();
  const { user, signInWithGoogle } = useAuth;

  async function handleNavigateToEvo() {
    if (!user) {
      await signInWithGoogle();
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
