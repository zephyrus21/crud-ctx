import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import { GlobalProvider } from "./context/GlobalState";

import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  return (
    <div style={{ maxWidth: "40rem", margin: "1rem auto" }}>
      <GlobalProvider>
        <Router>
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
