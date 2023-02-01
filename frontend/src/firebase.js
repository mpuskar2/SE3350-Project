import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAQGHrc_OgGqpK_sLXFIljlAlX8HWkUrQo",
  authDomain: "course-outline-manager.firebaseapp.com",
  projectId: "course-outline-manager",
  storageBucket: "course-outline-manager.appspot.com",
  messagingSenderId: "787623733149",
  appId: "1:787623733149:web:6115dac376f09bd089b174",
  measurementId: "G-667WRYR7PW"
};
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
