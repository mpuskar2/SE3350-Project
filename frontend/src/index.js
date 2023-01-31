import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route index element={<App/>}/>
      <Route path="home" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
