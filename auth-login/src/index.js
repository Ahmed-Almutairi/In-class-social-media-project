import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Contact from './Contact'
import Home from './Home'
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Link} from "react-router-dom";



ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Router>
    <Route exact path="/" component={App} />
    <Route  path="/home" component={Home} />
    <Route  path="/contact" component={Contact} />
    <Route  path="/logout" component={App} />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
