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
        <button>Course Selection</button>
      </div>
      <div>
        <button>Assign Professor</button>
      </div>
      <div>
        <button>Remove Professor</button>
      </div>
    </>
  )
}
