import { createContext, useState } from "react";
import { auth, firebase } from "../services/firebase";

const AuthContext = createContext({});

function AuthContextComponent(props) {
  const [user, setUser] = useState();

  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then((response) => {
      if (response.user) {
        const { displayName, photoURL, uid } = response.user;

        if (!displayName || !photoURL) {
          throw new Error(
            "You will need to provide name and photo for your Google account."
          );
        }

        setUser({
          id: uid,
          name: displayName,
          photo: photoURL,
        });
      }
    });
  }

  return (
    <AuthContext.Provider value={{ user, setUser, signInWithGoogle }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContextComponent, AuthContext };
