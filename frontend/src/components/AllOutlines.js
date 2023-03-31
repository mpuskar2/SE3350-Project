import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { getDatabase, ref, onValue } from "firebase/database";

export default function Home() {
  const [user, setUser] = useState(undefined);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isDeptHead, setIsDeptHead] = useState(false);
  const [isProf, setIsProf] = useState(false);
  const outlinesData = useRef([]);
  const navigate = useNavigate();

  const activeCourse = localStorage.getItem("courseName");

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser){
      setUser(currentUser);
      if (currentUser.displayName === "A") {
        setIsAdmin(true);
      } else if (currentUser.displayName === "D") {
        setIsDeptHead(true);
      } else if (currentUser.displayName === "P") {
        setIsProf(true);
      }
    } 
    else navigate("/")
  });
  
  useEffect(() => {
    const db = getDatabase();
    const oRef = ref(db, 'Outlines/');
  
    onValue(oRef, (snapshot) => {
      const data = snapshot.val();

      let arr = [];
      Object.values(data).forEach(e => {
        if (e.courseName === activeCourse){
          arr.push(e);
        }
      });
      outlinesData.current = arr;
    });
  });

  function setCAV(courseName, versionNum) {
    localStorage.setItem('cNameAndVer', `${courseName}v${versionNum}`);
  }

  function GetOutlines() {
    let arr = [];
    Object.values(outlinesData.current).forEach(e => {
      let div = (
        <div>
        <p>Version Num: {e.versionNum}</p>
        <p>Modified By: {e.whoModified}</p>
        <p>Modified Date: {e.modifiedTime}</p>
        <p>Approval Status: {e.approvalStatus}</p>
        <Link to="/previewoutline">
          <button onClick={() => {setCAV(e.courseName, e.versionNum)}}>Preview</button>
        </Link>
      </div>
      );
      arr.push(div);
    });
    return (
      <ul>{arr}</ul>
    )
  }

  return (
    <>
      <div>Home {user?.email}
        <button onClick={() => signOut(auth)}>Log Out</button>
      </div>
      {isProf && 
        <div>
          <Link to="/professorcourse">
            <button>Back</button>
          </Link>
        </div>
      }
      {isAdmin && 
        <div>
          <Link to="/admincourse">
            <button>Back</button>
          </Link>
        </div>
      }
      {isDeptHead && 
        <div>
          <Link to="/deptheadcourse">
            <button>Back</button>
          </Link>
        </div>
      }
      <div>
        <h3>All Course Outlines</h3>
      </div>
      <div id="courseOutlines">
        <GetOutlines/>
      </div>
    </>
  )
}
