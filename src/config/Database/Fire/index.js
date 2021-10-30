// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDcMFJ2vXBJLP9VjhdzAQFjdSqnaCLB8b8',
  authDomain: 'imkpengaturjadwal.firebaseapp.com',
  projectId: 'imkpengaturjadwal',
  storageBucket: 'imkpengaturjadwal.appspot.com',
  messagingSenderId: '561872852333',
  appId: '1:561872852333:web:ec7128395409ada5cb7664',
  measurementId: 'G-E3VJ8NY17W',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
