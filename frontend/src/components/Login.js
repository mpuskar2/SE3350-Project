import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../login.css';

export default function Login() {
  return (
    <div className="login">
      <ul className="loginList">
        <li className="listElemText">
        <label>Username </label>
        <input type="text"></input>
        </li>
        <li className="listElemText">
        <label>Password </label>
        <input type="password"></input>
        </li>
        <li className="listElemBtn">
          <Link to="/home"><button>Submit</button></Link>
        </li>
      </ul>
    </div>
  )
}
