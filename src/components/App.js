import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../Pages/Home";
import Planos from "../Pages/Planos";
import Galeria from "../Pages/Galeria";
import EvolutionTrackerLogIn from "../Pages/EvolutionTrackerLogIn";
import EvolutionTracker from "../Pages/EvolutionTracker";
import { AuthContextProvider } from "../contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planos" element={<Planos />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route
            path="/evolutiontrackerlogin"
            element={<EvolutionTrackerLogIn />}
          />
          <Route path="/evolutiontracker" element={<EvolutionTracker />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
