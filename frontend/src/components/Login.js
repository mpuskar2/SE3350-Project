import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles.css';
import auth from '../firebase';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogIn = async () => {
    try{
      await signInWithEmailAndPassword(auth, email, password);
    }
    catch(e){
      console.log(e);
    }
  };

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) navigate("/home");
  });

  return (
    <div className="login">
      <ul className="loginList">
        <li className="listElemText">
        <label>Email </label>
        <input id="emailField" type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        </li>
        <li className="listElemText">
        <label>Password </label>
        <input id="passwordField" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </li>
        <li className="listElemBtn">
          <button id="loginBtn" onClick={handleLogIn}>Log In</button>
        </li>
        <li className="listElemBtn">
          <span>
            Don't have an account?
            <Link to="/signup">Sign Up</Link>
          </span>
        </li>
      </ul>
    </div>
  )
}
