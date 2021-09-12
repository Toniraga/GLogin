// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
	apiKey: 'AIzaSyC-cyJgfWNg0zc2PNoYM0t5fR-I1nMavmQ',
	authDomain: 'googlc.firebaseapp.com',
	projectId: 'googlc',
	storageBucket: 'googlc.appspot.com',
	messagingSenderId: '860355165656',
	appId: '1:860355165656:web:9a1f971e9edd32404906ad',
	measurementId: 'G-D8KBPY0ZKX',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


