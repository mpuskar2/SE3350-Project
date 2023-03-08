import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import {activeCourse} from './ProfessorHome';

export default function Home() {
  const [user, setUser] = useState(undefined);
  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) setUser(currentUser);
    else navigate("/")
  });

  const download = ((url) => {
    const a = document.createElement('a')
    a.href = url
    a.download = url.split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  });
  const takeOutlines = (()=> {
    navigate("/alloutlines");
  });


  return (
    <>
      <div>Home {user?.email}
        <button onClick={() => signOut(auth)}>Log Out</button>
      </div>
      <div>
        <h3>{activeCourse}</h3>
        <h5>Select option below</h5>
      </div>
      <div>
        <button>Edit Outline</button>
      </div>
      <div>
        <button onClick={()=>{takeOutlines()}}>View Previous Outlines</button>
      </div>
      <div>
        <button>Submit</button>
      </div>
      <div>
        <button type="submit" onClick={()=> {download("resources/OutlineTemplate.docx")}}>Download template</button>
      </div>
    </>
  )
}
