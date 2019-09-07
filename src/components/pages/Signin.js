import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';
import FormField from '../utils/FormField';

class Signin extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className='container'>
                <div className='row justify-content-center mt-5'>
                    <form className='col-md-4 mt-5'>
                        <div class='text-start mt-4'>
                            <h2 className='text-light'>Welcome to</h2>
                            <h2 className='text-light '>SIMBIHealth</h2>
                            <h6 className='text-light font-weight-lighter'>An educative, informative and entertaining platform for Teens, Youths and young africans. An exciting way of expressing yourself amd leraning new things medically</h6>
                        </div>
                        <FormField id='name' placeholder='Username' type='text' />
                        <FormField id='pass' placeholder='Password' type='password' />
                        <input className='btn btn-success my-2' type='button' value='Sign In'/>
                        <div>
                            <i className='fab fa-facebook-square fa-2x text-light mr-5'></i>
                            <i className='fas fa-envelope fa-2x text-danger'></i>
                        </div>
                    </form>
                </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Signin;
