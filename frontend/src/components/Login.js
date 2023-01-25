import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <ul>
        <li>
        <label>Username </label>
        <input type="text"></input>
        </li>
        <li>
        <label>Password </label>
        <input type="password"></input>
        </li>
        <li>
          <Link to="/home"><button>Submit</button></Link>
        </li>
      </ul>
    </div>
  )
}
