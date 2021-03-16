import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { MuiThemeProvider } from '@material-ui/core';
import briidgeTheme from './themes'

function App() {
  return (
    <MuiThemeProvider theme={briidgeTheme}>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
