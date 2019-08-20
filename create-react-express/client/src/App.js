import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Members from "./components/pages/Members";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/Members" component={Members} />
        <Route exact path="/" component={Login} />
        <Route path="/Signup" component={Signup} />
      </div>
    </Router>
  );
}

export default App;
