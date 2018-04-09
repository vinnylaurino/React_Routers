import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import './CSS/index.css';

import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';


const Home = () => {
    return(
    <Router>
      <div>
      <nav id="nav">
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/sleepy"> Sleepy </Link>
          </li>
          <li>
            <Link to="/happy"> Happy </Link>
          </li>
          <li>
            <Link to="/guilty"> Guilty </Link>
          </li>
        </ul>
      </nav>
      <Route path="/happy" component={Happy} />
      <Route path="/sleepy" component={Sleepy} />
      <Route path="/Guilty" component={Guilty} />
      </div>
    </Router>
  );
};
render( <Home />, document.querySelector('#root') );
