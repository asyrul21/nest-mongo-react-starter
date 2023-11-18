import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import Navbar from './Containers/Navbar/Navbar';
import AboutPage from './Pages/About';
import HomePage from './Pages/Home';
import LoginPage from './Pages/Login';
import SignUpPage from './Pages/SignUp';
import AdminPage from './Pages/Admin';
import RequireLoginPage from './Pages/RequireLogin';
import UnauthorizedPage from './Pages/Unauthorized';
import NotFoundPage from './Pages/NotFound';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="app_main">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/admin" component={AdminPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/protected" component={RequireLoginPage} />
          <Route path="/unauthorized" component={UnauthorizedPage} />
          <Route path="*" component={NotFoundPage} exact />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
