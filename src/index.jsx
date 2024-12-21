import './style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Scene from './Scene.jsx';

document.addEventListener('contextmenu', (event) => event.preventDefault());

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <Scene />
  </React.StrictMode>
);
