import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles.css';
import auth from '../firebase';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, onValue, query, orderByChild, equalTo } from "firebase/database";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogIn = async () => {
    if (document.getElementById("emailField").value !== "" && document.getElementById("passwordField").value !== "") {
      try{
        await signInWithEmailAndPassword(auth, email, password);
      }
      catch(e){
        alert("Login failed, please try again");
        console.log(e);
      }
    }
    else {
      alert("Please enter a valid email and password");
    }

  };

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser){
      if (currentUser.displayName === "P") {
        const db = getDatabase();
        const cref = ref(db, 'Courses');
        const q = query(cref, orderByChild('professor'), equalTo(email));
    
        onValue(q, (snapshot) => {
          const data = snapshot.val();
          let arr = Object.keys(data);
          localStorage.setItem('profCourses', arr);
        });

        setTimeout(() => {
          navigate("/professorhome")
        }, 500);
      }
      else if (currentUser.displayName === "A") {
        navigate("/adminhome");
      }
      else if (currentUser.displayName === "D") {
        navigate("/deptheadhome");
      }
    }
  });

  return (
    <div className="login">
      <h2 className='loginHeader'>Log In</h2>
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
          <span className='transition'>
            Don't have an account?
          </span> <br></br>
          <Link to="/signup"><button className='tBtn'>Sign up</button></Link>
        </li>
      </ul>
    </div>
  )
}
