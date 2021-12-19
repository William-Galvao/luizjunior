import { Routes, Route } from "react-router-dom";
import { AuthContextComponent } from "./AuthContext";

import Navbar from "./Navbar";
import Home from "../Pages/Home";
import Planos from "../Pages/Planos";
import Galeria from "../Pages/Galeria";
import EvolutionTrackerLogIn from "../Pages/EvolutionTrackerLogIn";
import EvolutionTracker from "../Pages/EvolutionTracker";

function App() {
  return (
    <div className="App">
      <AuthContextComponent>
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
      </AuthContextComponent>
    </div>
  );
}

export default App;
