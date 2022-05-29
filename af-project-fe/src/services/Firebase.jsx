import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBYuHzG0OweN-TBVvZzglvTkRshY8iv7ZY',
  authDomain: 'af-project-68e8f.firebaseapp.com',
  projectId: 'af-project-68e8f',
  storageBucket: 'af-project-68e8f.appspot.com',
  messagingSenderId: '1074099261945',
  appId: '1:1074099261945:web:fb84affb41bde84e14ad28',
  measurementId: 'G-QFP0MSG3B4'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
