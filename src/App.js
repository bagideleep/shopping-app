import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from './Components/NavigationBar'
import React from 'react';
import './App.css';
import {HomePage} from './Components/HomePage'
import { Products } from './Components/Products';
import Register from './Components/Register';
import { NoMatch } from './Components/NoMatch';
import Sidebar from './Components/SideBar';
import LoginHome from './Components/LoginHome';
import { PrivateRoute } from './Components/PrivateRoute';

const test = 'home'
function App() {
  return (
        <React.Fragment>
      <Router>
        <NavigationBar name={test} />
        <Sidebar/>
        <Switch>
          <PrivateRoute exact path="/" component={HomePage} />
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/Products" component={Products} />
          <Route path="/Login" component={LoginHome} />
          <Route path="/Register" component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
