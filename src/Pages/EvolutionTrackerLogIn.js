import googleIcon from "../assets/google-icon.svg";

export default function EvolutionTrackerLogIn() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "75vh" }}
    >
      <button
        type="button"
        className="btn btn-danger btn-lg d-flex justify-content-center align-items-center"
      >
        <img src={googleIcon} alt="google icon" className="pe-3" />
        Entre com sua conta Google
      </button>
    </div>
  );
}
