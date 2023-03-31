import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default function Home() {
  const [user, setUser] = useState(undefined);
  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) setUser(currentUser);
    else navigate("/")
  });

  function GetButtons() {
    let courses = localStorage.getItem('profCourses');
    let courseArr = courses.split(',');
    let arr = [];

    courseArr.forEach(e => {
      let div = (
        <div>
          <Link to="/professorcourse">
            <button onClick={() => activeClass(e)}>{e}</button>
          </Link>
        </div>
      );
      arr.push(div);
    });

    return (
      <div>{arr}</div>
    )
  }

  const activeClass = ((setActive) => {
    localStorage.setItem("courseName", setActive);
  });

  return (
    <>
      <div>Professor Home {user?.email}
        <button onClick={() => signOut(auth)}>Log Out</button>
      </div>
      <GetButtons/>
    </>
  )
}