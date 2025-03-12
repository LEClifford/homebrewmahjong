import React from "react";
import { db } from "../config/firebase";
import { doc, setDoc } from "firebase/firestore";

const SaveGame = ({ userId, gameId, gameState }) => {
  const handleSaveGame = async () => {
    if (!userId) {
      console.error("Only logged-in users can save games.");
      return;
    }

    try {
      await setDoc(doc(db, "savedGames", userId, "games", gameId), {
        gameState: gameState,
        timestamp: new Date(),
      });
      console.log("Game saved successfully.");
    } catch (error) {
      console.error("Error saving game:", error);
    }
  };

  return (
    <div>
      <button onClick={handleSaveGame}>Save Game</button>
    </div>
  );
};

export default SaveGame;

