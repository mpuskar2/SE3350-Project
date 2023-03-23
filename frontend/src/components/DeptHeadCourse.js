import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { getDatabase, ref, set, onValue } from "firebase/database";

export default function Home() {
  const [user, setUser] = useState(undefined);
  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) setUser(currentUser);
    else navigate("/")
  });

  return (
    <>
      <div>Home {user?.email}
        <button onClick={() => signOut(auth)}>Log Out</button>
      </div>
      <div>
        <Link to="/deptheadhome">
          <button>Back</button>
        </Link>
      </div>
      <div>
        <h3>COURSE NAME HERE</h3>
      </div>
      <div>
        <h5>Select Option Below</h5>
      </div>
      <div>
        <button>Add Comments</button>
      </div>
      <div>
        <button>Return to Instructor</button>
      </div>
      <div>
        <button onClick={() => approve("SE3350v1")}>Approve</button>
      </div>
      <div>
        <button>View Previous Outlines</button>
      </div>
    </>
  )

  function approve(id) {
    const db = getDatabase();
    const oRef = ref(db, 'Outlines/' + id);

    onValue(oRef, (snapshot) => {
      const data = snapshot.val();

      set(oRef, {
        approvalStatus: "approved",
        comments: data.comments,
        contents: data.contents,
        courseName: data.courseName,
        modifiedTime: data.modifiedTime,
        versionNum: data.versionNum,
        whoModified: data.whoModified
      });
    });
  }
}
