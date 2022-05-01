// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyCf5eEgnH9UfynrgfgVkJwe0sjV-Y9xAXc',
	authDomain: 'twitter-ish-38097.firebaseapp.com',
	projectId: 'twitter-ish-38097',
	storageBucket: 'twitter-ish-38097.appspot.com',
	messagingSenderId: '530846131744',
	appId: '1:530846131744:web:d1f5da4d27cb6b01ad3e45',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
