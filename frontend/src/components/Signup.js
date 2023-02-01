import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles.css';
import auth from '../firebase';
import { onAuthStateChanged, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try{
      const user = await createUserWithEmailAndPassword(auth, email, password);
      updateProfile(user.user, {displayName: type});
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
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        </li>
        <li className="listElemText">
        <label>Password </label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </li>
        <li className="listElemText">
        <input type="radio" value={"P"} onChange={(e) => setType(e.target.value)}></input>
        <label>Professor </label>
        <input type="radio" value={"A"} onChange={(e) => setType(e.target.value)}></input>
        <label>Administrator </label>
        <input type="radio" value={"D"} onChange={(e) => setType(e.target.value)}></input>
        <label>Department Chair</label>
        </li>
        <li className="listElemBtn">
          <button onClick={handleSignUp}>Sign up</button>
        </li>
        <li className="listElemBtn">
          <span>
            Already have an account?
            <Link to="/">Log In</Link>
          </span>
        </li>
      </ul>
    </div>
  )
}
