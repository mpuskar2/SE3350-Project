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

  return (
    <>
      <div>
        <h2>Department Head</h2>
      </div>
      <div>Home {user?.email}
        <button onClick={() => signOut(auth)}>Log Out</button>
      </div>
      <div>
        <h2>Disciplines</h2>
      </div>
      <div>
        <button>ECE</button>
      </div>
      <div>
        <button>MSC</button>
      </div>
      <div>
        <Link to="/deptheadcourse">
          <button>SE</button>
        </Link>
      </div>
    </>
  )
}
