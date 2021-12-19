import googleIcon from "../assets/google-icon.svg";
import { auth, firebase } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import EvolutionTrackerLogo from "../components/EvolutionTrackerLogo";

export default function EvolutionTrackerLogIn() {
  const navigate = useNavigate();
  function signIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then((response) => {
      console.log(response.user);
      navigate("/");
    });
  }

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "75vh" }}
    >
      <EvolutionTrackerLogo />
      <button
        onClick={signIn}
        type="button"
        className="btn btn-danger btn-lg d-flex justify-content-center align-items-center m-2"
      >
        <img src={googleIcon} alt="google icon" className="me-3" />
        Entre com sua conta Google
      </button>
    </div>
  );
}
