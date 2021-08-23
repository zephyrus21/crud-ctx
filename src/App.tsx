import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import Home from "./pages/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalProvider } from "./context/GlobalState";

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  return (
    <div style={{ maxWidth: "40rem", margin: "1rem auto" }}>
      <GlobalProvider>
        <Router>
          <h1>NavBar</h1>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/edit/:id' component={EditUser} />
            <Route path='/add' component={AddUser} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
};

export default App;
