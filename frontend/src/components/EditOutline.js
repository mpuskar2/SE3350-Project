import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { getDatabase, ref, set, onValue, increment, update } from "firebase/database";

export default function Home() {
  const [user, setUser] = useState(undefined);
  const navigate = useNavigate();

  let email;
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setUser(currentUser);
      email = currentUser.email;
    }
    else navigate("/")
  });

  return (
    <>
      <div>Home {user?.email}
        <button onClick={() => signOut(auth)}>Log Out</button>
      </div>
      <div>
        <h3>COURSE NAME HERE</h3>
      </div>
      <div>
        <Link to="/professorcourse">
          <button>Back</button>
        </Link>
      </div>
      <div>
        <button onClick={() => updateOutline("SE3350", email)}>Submit</button>
      </div>
    </>
  )
}

function updateOutline(id, email) {
  const db = getDatabase();
  
  const dbRef = ref(getDatabase());
  const updates = {};
  updates[`OutlineCount/${id}/count`] = increment(1);
  update(dbRef, updates);

  let today = new Date();
  let date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
  let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  let dateTime = date + ' ' + time;

  const ocRef = ref(db, 'OutlineCount/' + id);
  onValue(ocRef, (snapshot) => {
    const data = snapshot.val();
    
    const oRef = ref(db, `Outlines/${id}v${data.count}`);
    set(oRef, {
      approvalStatus: "",
      courseName: id,
      filePath: "",
      modifiedTime: dateTime,
      versionNum: data.count,
      whoModified: email
    });
  });
}
