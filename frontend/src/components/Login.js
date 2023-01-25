import React, { useState } from 'react';

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
          <button>Submit</button>
        </li>
      </ul>
    </div>
  )
}
