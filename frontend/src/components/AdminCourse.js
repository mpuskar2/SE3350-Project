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
        <h3>COURSE NAME HERE</h3>
      </div>
      <div>
        <h5>Select Option Below</h5>
      </div>
      <div>
        <form>
          <label>
            Name:
            <input type="text" id="instructorName" placeholder="Enter instructor name"/>
          </label>
          <input type="submit" value="Assign Professor" onClick={() => assignCourse("SE3350")}></input>
        </form>   
      </div>
      <div>
        <Link to="/alloutlines">
          <button>View Previous Outlines</button>
        </Link>
      </div>
    </>
  )

  function assignCourse(id)
  {
  var input = document.getElementById("instructorName").value;
  const db = getDatabase();
    const oRef = ref(db, 'Courses/' + id);

    onValue(oRef, (snapshot) => {
      const data = snapshot.val();

      set(oRef, {
        courseName: data.courseName,
        professor: input,
      });
    });

    alert("You have successfully assigned this course to " + input + ".");
  }

}
