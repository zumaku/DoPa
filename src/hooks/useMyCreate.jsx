import { useState } from "react";
import { db } from "../firebase.config";
import { collection, addDoc } from "firebase/firestore";

function useMyCreate(collectionName) {
    const [isCreating, setIsCreating] = useState(false);
    const [error, setError] = useState(null);

    const createData = async (data) => {
        try {
            setIsCreating(true);
            setError(null);

            const collectionRef = collection(db, collectionName);
            await addDoc(collectionRef, data);

            setIsCreating(false);
        } catch (error) {
            setError(error);
            setIsCreating(false);
        }
    };

    return { isCreating, error, createData };
}

export default useMyCreate;
