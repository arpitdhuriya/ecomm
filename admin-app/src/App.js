import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
        </switch>
        </Router>
      </div>
  );
}

export default App;
