import React from "react";
import "./App.css";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "../src/components/pages/Landing";
import SGist from "../src/components/pages/SGist";
import SCommunity from "../src/components/pages/SCommunity";
import SInfo from "../src/components/pages/SInfo";
import Profile from "../src/components/pages/Profile";
import SAlert from "../src/components/pages/SAlert";
import AlertForm from "../src/components/pages/AlertForm";
import Signup from "../src/components/pages/Signup";
import Signin from "../src/components/pages/Signin";
import { Provider } from "./context";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App body-background ">
          <Header />
          <div className="container-fluid ">
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/sgist" component={SGist} />
              <Route exact path="/scommunity" component={SCommunity} />
              <Route exact path="/sinfo" component={SInfo} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/salert" component={SAlert} />
              <Route exact path="/alert-form" component={AlertForm} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/signin" component={Signin} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
