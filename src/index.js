import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
<<<<<<< HEAD
  <Router>
    <App />
  </Router>,
=======
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>,
>>>>>>> b9d26d699de0a8d9f4129956f8a6c01060d0435a
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
