import React, { useState } from 'react';
import { createRoom } from '../services/gameService';

CreateRoom = ({hostId}) => {
    const [difficulty, setDifficulty] = useState('easy');
    const [roomId, setRoomId] = useState('');

    const handleCreateRoom = async () => {
        try {
            const id = await createRoom(hostId, difficulty);
            setRoomId(id);
        } catch (error) {
            console.error('Error creating room: ', error);
        }

    }


return (
        <div>
            <h1>Host a Room</h1>
            <label>Difficulty:</label>
            <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
            <option value="easy">Easy</option>
            {/* Add more rooms here if needed */}
            {difficulty === "easy" && <p>Easy mode: Win the hand by being the first to create your sets. 1 point added for each Kong</p>}
            </select>
            <button onClick={handleCreateRoom}>Host Room</button>
            {roomId && <p>Your room is: {roomId}</p>}
        </div>
    );
}
export default CreateRoom;