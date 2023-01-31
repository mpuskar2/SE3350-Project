import React from 'react';
import '../styles.css';

export default function Login() {
  return (
    <div className="login">
      <ul className="loginList">
        <li className="listElemText">
        <label>Email </label>
        <input id="emailField" type="text"></input>
        </li>
        <li className="listElemText">
        <label>Password </label>
        <input id="passwordField" type="password"></input>
        </li>
        <li className="listElemBtn">
          <button id="loginBtn" >Log In</button>
        </li>
      </ul>
    </div>
  )
}
