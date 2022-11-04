import React from 'react';
import ReactDOM from 'react-dom/client';
import "swiper/css/bundle";
import './index.css';
import App from './App';
// get acces token set default value with feth data
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);