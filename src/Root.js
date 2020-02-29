import React, { Component } from "react";

import {  Route, Switch } from 'react-router-dom';
import Landing from '../src/components/pages/Landing';
import SGist from '../src/components/pages/SGist';
import SCommunity from '../src/components/pages/SCommunity';
import SInfo from '../src/components/pages/SInfo';
import Profile from '../src/components/pages/Profile';
import Notification from '../src/components/pages/notification';
import SAlert from '../src/components/pages/SAlert';
import AlertForm from '../src/components/pages/AlertForm';
import Signup from '../src/components/pages/Signup';
import Signin from '../src/components/pages/Signin';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import loading from './assets/loading.svg';
import { connect } from "react-redux";
import * as actions from "./actions";
import AuthRoute from "./components/Hoc/AuthRoute";

class Root extends Component{
    render(){
        return (
            <div>
                <div className='App body-background '>
          <Header />
          <div className='container-fluid '>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/sgist' component={SGist} />
              <Route exact path='/scommunity' component={SCommunity} />
              <Route exact path='/sInformation' component={SInfo} />
              <Route exact path='/profile' component={Profile} />
              <Route exact path='/salert' component={SAlert} />
              <Route exact path='/alert-form' component={AlertForm} />
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/signin' component={Signin} />
              <Route exact path='/notification' component={Notification} />
            </Switch>
          </div>
          {
              this.props.loading ? (
                    <div className='spinnerMother'>
                    <div className='spinner'>
                    <img src={loading} alt="spinner" style={{ height: '80px', width: '80px' }} />
                    </div>
                </div>
                )
                : null
          }
          
          <Footer />
        </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    const {home: {loading}} = state;
    return {loading}
}
export default connect(mapStateToProps, actions)(Root);