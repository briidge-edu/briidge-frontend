import logo from './logo.svg';
import './App.css';
import { Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
