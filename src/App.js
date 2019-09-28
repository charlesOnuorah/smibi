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
              {/* <Route exact path='/profile' component={Profile} /> */}
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
