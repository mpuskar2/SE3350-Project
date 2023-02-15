import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase, set, ref} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAQGHrc_OgGqpK_sLXFIljlAlX8HWkUrQo",
  authDomain: "course-outline-manager.firebaseapp.com",
  projectId: "course-outline-manager",
  storageBucket: "course-outline-manager.appspot.com",
  messagingSenderId: "787623733149",
  appId: "1:787623733149:web:6115dac376f09bd089b174",
  measurementId: "G-667WRYR7PW",
  databaseURL: "https://course-outline-manager-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const addOutline = (id, courseName, whoModified, modifiedTime, versionNum, approvalStatus, filePath ) => {
  set(ref(db, `Outlines/${id}`), {courseName:courseName, whoModified:whoModified, 
    modifiedTime:modifiedTime, versionNum:versionNum, approvalStatus:approvalStatus, filePath:filePath});
}
export const auth = getAuth(app);
export default app;
