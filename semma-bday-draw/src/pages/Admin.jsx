import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../firebase";

function Admin() {
  const [winner, setWinner] = useState(null);
  const [loading, setLoading] = useState(false);
  const [authReady, setAuthReady] = useState(false);
  const [user, setUser] = useState(null);

  // ✅ Wait for Firebase Auth to initialize
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      console.log("Auth state:", currentUser);
      setUser(currentUser);
      setAuthReady(true);
    });

    return () => unsubscribe();
  }, []);

  async function pickWinner() {
    if (!user) {
      alert("You must be logged in as admin.");
      return;
    }

    setLoading(true);

    try {
      const snapshot = await getDocs(collection(db, "entries"));

      const entries = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      if (entries.length === 0) {
        alert("No entries found.");
        return;
      }

      const selected =
        entries[Math.floor(Math.random() * entries.length)];

      setWinner(selected);

      await addDoc(collection(db, "winner"), {
        ...selected,
        pickedAt: serverTimestamp(),
      });

    } catch (error) {
      console.error("Error picking winner:", error);
      alert("Failed to pick winner.");
    } finally {
      setLoading(false);
    }
  }

  // ⏳ Wait until auth is ready
  if (!authReady) {
    return (
      <div className="background">
        <div className="title">
          <h1>Checking admin access…</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="background">
      <div className="title">
        <h1>Admin — Pick Winner</h1>
      </div>

      <div className="form-card">
        <button
          className="enter-draw-button"
          onClick={pickWinner}
          disabled={loading}
        >
          {loading ? "Picking..." : "Pick Winner"}
        </button>

        {winner && (
          <div className="success-message">
            <h2>🎉 Winner Selected!</h2>
            <p><b>Name:</b> {winner.firstName} {winner.lastName}</p>
            <p><b>Contact:</b> {winner.emailOrInstagram}</p>
            <p><b>Phone:</b> {winner.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;
