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

  return (
    <>
      <div>Home {user?.email}
        <button onClick={() => signOut(auth)}>Log Out</button>
      </div>
      <div>
        <h3>COURSE NAME HERE</h3>
        <h5>Select option below</h5>
      </div>
      <div>
        <button>Edit Outline</button>
      </div>
      <div>
        <button>View Previous Outlines</button>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </>
  )
}