import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StoreProvider } from "./utils/GlobalState";
import Members from "./components/pages/Members";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";

function App() {
  return (
    <Router>
      
      <div>
      <StoreProvider>
        <Route exact path="/Members" component={Members} />
        <Route exact path="/" component={Login} />
        <Route path="/Signup" component={Signup} />
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;