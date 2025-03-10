import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const createRoom = async (hostId, difficulty) => {
    try {
        const docRef = await addDoc(collection(db, 'rooms'), {
            hostId: hostId,
            difficulty,
            players: [hostId],
            gameState: 'waiting',
            createdAt: serverTimestamp(),
        });
        return docRef.id;
    } catch (error) {
        console.error('Error creating room: ', error);
        throw error;
    }
};