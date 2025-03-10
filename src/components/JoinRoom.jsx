import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

function JoinRoom() {
  const [roomCode, setRoomCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Function to check if the room exists
  const handleJoinRoom = async () => {
    setError(""); // Clear previous errors

    if (!roomCode) {
      setError("Please enter a room code.");
      return;
    }

    try {
      // Query Firestore to check if the room exists
      const roomsRef = collection(db, "rooms");
      const q = query(roomsRef, where("code", "==", roomCode));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // Room exists, navigate to the game room
        navigate(`/game/${roomCode}`);
      } else {
        setError("Invalid room code. Please try again.");
      }
    } catch (err) {
      console.error("Error checking room:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <h2>Join a Game Room</h2>
      <input
        type="text"
        placeholder="Enter Room Code"
        value={roomCode}
        onChange={(e) => setRoomCode(e.target.value)}
      />
      <button onClick={handleJoinRoom}>Join Room</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default JoinRoom;
