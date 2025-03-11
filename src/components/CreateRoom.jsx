import React, { useState } from "react";
import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";

const CreateRoom = ({ hostId }) => {
  const [difficulty, setDifficulty] = useState("easy");
  const [roomId, setRoomId] = useState("");

  const generateRoomCode = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase(); // Generates a random 6-character code
  };

  const handleCreateRoom = async () => {
    const newRoomId = generateRoomCode();

    try {
      await addDoc(collection(db, "rooms"), {
        id: newRoomId,
        hostId: hostId,
        difficulty: difficulty,
        createdAt: new Date(),
      });

      setRoomId(newRoomId);
    } catch (error) {
      console.error("Error creating room: ", error);
    }
  };

  return (
    <div>
      <h1>Host a Room</h1>
      <label>Difficulty:</label>
      <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
        <option value="easy">Easy</option>
        {/* Add more rooms here if needed */}
        {difficulty === "easy" && (
          <p>Easy mode: Win the hand by being the first to create your sets. 1 point added for each Kong</p>
        )}
      </select>
      <button onClick={handleCreateRoom}>Host Room</button>
      {roomId && <p>Your room code is: <strong>{roomId}</strong></p>}
    </div>
  );
};

export default CreateRoom;
