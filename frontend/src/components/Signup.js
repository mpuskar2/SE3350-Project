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
    if (document.getElementById("email").value !== "" && document.getElementById("password").value !== "") {
      if (document.getElementById("p").checked || document.getElementById("a").checked || document.getElementById("d").checked) {
        try{
          const user = await createUserWithEmailAndPassword(auth, email, password);
          updateProfile(user.user, {displayName: type});
        }
        catch(e){
          alert("Account creation failed, please try again");
          console.log(e);
        }
      }
      else {
        alert("Please select one of the buttons");
      }
    }
    else {
      alert("Please enter a valid email and password");
    }
  };

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser){
      if (currentUser.displayName === "P") {
        navigate("/professorhome");
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
      <ul className="loginList">
        <li className="listElemText">
        <label>Email </label>
        <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        </li>
        <li className="listElemText">
        <label>Password </label>
        <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </li>
        <li className="listElemText">
        <input id="p" type="radio" name="buttons" value={"P"} onChange={(e) => setType(e.target.value)}></input>
        <label htmlFor="p">Professor </label>
        <input id="a" type="radio" name="buttons" value={"A"} onChange={(e) => setType(e.target.value)}></input>
        <label htmlFor="a">Administrator </label>
        <input id="d" type="radio" name="buttons" value={"D"} onChange={(e) => setType(e.target.value)}></input>
        <label htmlFor="d">Department Chair</label>
        </li>
        <li className="listElemBtn">
          <button onClick={handleSignUp}>Sign up</button>
        </li>
        <li className="listElemBtn">
          <span className='transition'>
            Don't have an account?
          </span> <br></br>
          <Link to="/"><button className='tBtn'>Log in</button></Link>
        </li>
      </ul>
    </div>
  )
}
