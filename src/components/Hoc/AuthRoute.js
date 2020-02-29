import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import * as actions from '../../actions';
import { Redirect } from "react-router-dom";

 export default function(ComposedClass, routeType, adminRoute = null){
    class AuthRoute extends Component {
        componentDidMount(){
            // this.props.authUser();
        }
        render() {
            if(!localStorage.getItem('token')){
                return (
                    <Redirect to="/signin" />
                )
            }
            if(localStorage.getItem('token')){
                return (
                    <Redirect to="/" />
                )
            }
            return (
                <div>
                    <ComposedClass 
                        {...this.props}
                    />
                </div>
            );
        }
    }
    // const mapStateToProps = state => {
    //     return {
    //     }
    // }
   return AuthRoute
}