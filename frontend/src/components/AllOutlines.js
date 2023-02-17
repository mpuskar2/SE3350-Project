import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { getDatabase, ref, onValue } from "firebase/database";


export default function Home() {
  const [user, setUser] = useState(undefined);
  const navigate = useNavigate();
    let dbcp = "";

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) setUser(currentUser);
    else navigate("/")
  });

  function getOutlines() {
    document.getElementById("load").disabled = true;
    
    const db = getDatabase();
    const oRef = ref(db, 'Outlines');

    onValue(oRef, (snapshot) => {
      dbcp = snapshot.val();

      Object.values(dbcp).forEach(e => {
        let list = document.getElementById('courseOutlines');
        let div = document.createElement('div');
        let versionNum = document.createElement('p');
        let modifiedBy = document.createElement('p');
        let modifiedDate = document.createElement('p');
        let download = document.createElement('button');

        versionNum.innerText = "Version Num: " + e.versionNum;
        modifiedBy.innerText = "Modified By: " + e.modifiedBy;
        modifiedDate.innerText = "Modified Date: " + e.modifiedDate;
        download.innerText = "Download";

        div.appendChild(versionNum);
        div.appendChild(modifiedBy);
        div.appendChild(modifiedDate);
        div.appendChild(download);
        list.appendChild(div);
      });
    });
  }

  function deleteList() {
    let list = document.getElementById('courseOutlines');
    while (list.firstChild) {
      list.removeChild(list.lastChild);
    }
  }

  return (
    <>
      <div>Home {user?.email}
        <button onClick={() => signOut(auth)}>Log Out</button>
      </div>
      <div>
        <Link to="/admincourse">
          <button onClick={deleteList}>Back</button>
        </Link>
      </div>
      <div>
        <h3>All Course Outlines</h3>
      </div>
      <div>
        <button id="load" onClick={getOutlines}>Load Outlines</button>
      </div>
      <div id="courseOutlines">

      </div>
    </>
  )
}