import { useAuth } from "../hooks/useAuth";

export default function EvolutionTracker() {
  const { user } = useAuth();

  return <div>Bem vindo, {`${user?.name}`}!</div>;
}
