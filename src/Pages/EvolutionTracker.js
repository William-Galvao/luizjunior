import { useContext } from "react";
import { AuthContext } from "../components/App";

export default function EvolutionTracker() {
  const { user } = useContext(AuthContext);

  return <div>Bem vindo, {`${user?.name}`}!</div>;
}
