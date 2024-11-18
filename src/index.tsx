import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './Utils/Fonts/DTHULUTH.TTF'; 
import './Utils/Fonts/DTNASKH0.TTF';
import './Utils/Fonts/DTNASKH1.TTF';
import './Utils/Fonts/DTNASKH2.TTF';
import './Utils/Fonts/DTNASKH3.TTF';
import './Utils/Fonts/DTNASKH4.TTF';
import './Utils/Fonts/IRANSans1.ttf';
import './Utils/Fonts/IRANSans3.ttf';
import './Utils/Fonts/IRANSans4.ttf';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
