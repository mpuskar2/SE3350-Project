import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { getDatabase, ref, onValue } from "firebase/database";

export default function Home() {
  const [user, setUser] = useState(undefined);
  //const [outlinesData, setData] = useState([]);

  const outlinesData = useRef([]);
  const needData = useRef(true);
  const navigate = useNavigate();

  const activeCourse = localStorage.getItem("courseName");

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser){
      setUser(currentUser);
    } 
    else navigate("/")
  });
  
  useEffect(() => {
    if (needData.current) {
      needData.current = false;
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
        //needData.current = false;
        //setData(arr);
      });
    }
    else {
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
        //needData.current = false;
        //setData(arr);
      });
    }
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
      <div>
        <Link to="/professorcourse">
          <button>Back</button>
        </Link>
      </div>
      <div>
        <h3>All Course Outlines</h3>
      </div>
      <div id="courseOutlines">
        <GetOutlines/>
      </div>
    </>
  )
}
