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

  const activeClass = ((setActive) => {
    var activeCourse = setActive;
    localStorage.setItem("courseName", activeCourse);
  });

  return (
    <>
      <div>
        <h2>Department Head</h2>
      </div>
      <div>Home {user?.email}
        <button onClick={() => signOut(auth)}>Log Out</button>
      </div>
      <div>
        <h3>SE Courses</h3>
        <Link to="/deptheadcourse">
          <button onClick={() =>activeClass("SE3350")}>SE3350</button>
          <button onClick={() =>activeClass("SE3310")}>SE3310</button>
          <button onClick={() =>activeClass("SE3313")}>SE3313</button>

        </Link>
      </div>
      <div>
        <h3>ECE Courses</h3>
        <Link to="/deptheadcourse">
        <button onClick={() =>activeClass("ECE3375")}>ECE3375</button>
        <button onClick={() =>activeClass("ECE4436")}>ECE4436</button>
        <button onClick={() =>activeClass("ECE2277")}>ECE2277</button>

        </Link>
      </div>
      <div>
        <h3>MSE Courses</h3>
        <Link to="/deptheadcourse">
        <button onClick={() =>activeClass("MSE3301")}>MSE3301</button>
        <button onClick={() =>activeClass("MSE3380")}>MSE3380</button>
        <button onClick={() =>activeClass("MSE3381")}>MSE3381</button>

        </Link>
      </div>
    </>
  )
}
