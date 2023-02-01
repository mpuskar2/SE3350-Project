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
      <div>Professor Home {user?.email}
        <button onClick={() => signOut(auth)}>Log Out</button>
      </div>
      <div>
        <button>Class 1</button>
      </div>
      <div>
        <button>Class 2</button>
      </div>
      <div>
        <button>Class 3</button>
      </div>
    </>
  )
}