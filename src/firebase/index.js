import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import firebaseConfig from './firebase.config';

const firebaseApp = initializeApp(firebaseConfig)
const storage = getStorage();

export async function uploadImage(file) {
    const storageRef = ref(storage, `images/${file.name}`);

    try {
        await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(storageRef);

        console.log("Image uploaded successfully! URL:", downloadURL);
        return downloadURL;
    } catch (error) {
        console.error("Error uploading image:", error);
    }
}

export default firebaseApp