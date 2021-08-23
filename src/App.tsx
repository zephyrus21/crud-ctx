import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Home from "./components/Home";

import "bootstrap/dist/css/bootstrap.min.css";

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  return (
    <div style={{ maxWidth: "30rem", margin: "1rem 2rem" }}>
      <Router>
        <h1>NavBar</h1>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/edit/:id' component={EditUser} />
          <Route path='/add' component={AddUser} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
