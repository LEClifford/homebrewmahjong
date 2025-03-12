import React, { useState } from "react";
import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";

const CreateRoom = ({ hostId }) => {
  const [difficulty, setDifficulty] = useState("easy");
  const [roomId, setRoomId] = useState("");

  const generateRoomCode = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase(); 
  };

  const handleCreateRoom = async () => {
    const newRoomId = generateRoomCode();

    try {
      await addDoc(collection(db, "rooms"), {
        id: newRoomId,
        hostId: hostId, 
        players: [hostId], 
        difficulty: difficulty,
        createdAt: new Date(),
        gameState: {}, 
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
      {/* More difficulty levels can be added later */}
    </select>

    {/* Show description when "Easy" is selected */}
    {difficulty === "easy" && (
      <p><strong>Easy mode:</strong> Win the hand by being the first to create your sets. 1 point added for each Kong.</p>
    )}

    <button onClick={handleCreateRoom}>Host Room</button>

    {roomId && <p>Your room code is: <strong>{roomId}</strong></p>}
  </div>
  );
};

export default CreateRoom;

