import { useState } from "react";
import { collection, getDocs, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

function Admin() {
  const [winner, setWinner] = useState(null);
  const [loading, setLoading] = useState(false);

  async function pickWinner() {
    setLoading(true);

    try {
      const snapshot = await getDocs(collection(db, "entries"));
      const entries = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      if (entries.length === 0) {
        alert("No entries found.");
        setLoading(false);
        return;
      }

      const randomIndex = Math.floor(Math.random() * entries.length);
      const selected = entries[randomIndex];

      setWinner(selected);

      // OPTIONAL: Save winner permanently
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
