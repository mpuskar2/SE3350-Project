import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default function Home() {
  const [user, setUser] = useState(undefined);
  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) setUser(currentUser);
    else navigate("/")
  });

  const takeClass1 = (()=>{
    navigate("/professorcourse");
  });

  const activeClass = ((setActive) => {
    localStorage.setItem("courseName", setActive);
  });

  const nextPage = ((className) => {
    activeClass(className);
    takeClass1();
  });

  return (
    <>
      <div>Professor Home {user?.email}
        <button onClick={() => signOut(auth)}>Log Out</button>
      </div>
      <div>
        <button onClick={() =>nextPage("SE3350")}>se3350</button>
      </div>
      <div>
        <button onClick={() =>nextPage("SE3310")}>se3310</button>
      </div>
      <div>
        <button>Class 3</button>
      </div>
    </>
  )
}