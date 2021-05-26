import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import StudentSignup from './pages/StudentSignup';
import TutorSignup from './pages/TutorSignup';
import PlansPage from './pages/PlansPage';
import TutorsPage from './pages/TutorsPage';
import SocialNetworkPage from './pages/SocialNetworkPage';
import { MuiThemeProvider } from '@material-ui/core';
import briidgeTheme from './themes'
import StudentDashboard from './pages/StudentDashboard';

function App() {
  return (
    <MuiThemeProvider theme={briidgeTheme}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/studentsignup">
          <StudentSignup />
        </Route>
        <Route path="/tutorsignup">
          <TutorSignup />
        </Route>
        <Route path="/planspage">
          <PlansPage />
        </Route>
        <Route path="/aboutus">
          <AboutUs />
        </Route>
        <Route path="/tutors">
          <TutorsPage />
        </Route>
        <Route path="/socialnetworkpage">
          <SocialNetworkPage />
        </Route>
        <Route path="/studentdashboard">
          <StudentDashboard />
        </Route>
      </Switch>
    </Router>
    </MuiThemeProvider>
  );
};

export default App;
