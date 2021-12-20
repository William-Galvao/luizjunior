import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../Pages/Home";
import Planos from "../Pages/Planos";
import Galeria from "../Pages/Galeria";
import EvolutionTrackerLogIn from "../Pages/EvolutionTrackerLogIn";
import EvolutionTracker from "../Pages/EvolutionTracker";
import { createContext, useState } from "react";
import { firebase, auth } from "../services/firebase";

export const AuthContext = createContext();

function App() {
  const [user, setUser] = useState();

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);
    if (result.user) {
      const { displayName, photoURL, uid } = result.user;
      if (!displayName || !photoURL) {
        throw new Error("Missing name and/or photo from Google account.");
      }

      setUser({
        id: uid,
        name: displayName,
        photo: photoURL,
      });
    }
  }

  return (
    <div className="App">
      <AuthContext.Provider value={{ user, signInWithGoogle }}>
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
      </AuthContext.Provider>
    </div>
  );
}

export default App;
