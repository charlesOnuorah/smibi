import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';
import FormField from '../utils/FormField';

class Signup extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className='container'>
                <div className='row justify-content-center mt-5'>
                    <form className='col-md-4 mt-5'  style={{background: 'rgba(0, 0, 0, 0.3)'}}>
                        <div class='text-center mt-4'>
                            <img src='../favicon.ico'alt='logo'/>
                            <h6 className='text-light font-weight-bold mb-4'>SIMBIHealth</h6>
                        </div>
                        <FormField id='name' placeholder='Full Name' type='text' />
                        <FormField id='email' placeholder='Email' type='email' />
                        <FormField id='phone' placeholder='Phone Number' type='text' />
                        <div className='row mt-2 ml-1'>
                            <h6 className='text-light mr-2'>Gender</h6>
                            <div className='col-md-4'>
                                <input className='mr-2' type='checkbox' id='male'/>
                                <label className='text-light' for='male'>Male</label>
                            </div>
                            <div className='col-md-5'>
                                <input className='mr-2' type='checkbox' id='female'/>
                                <label className='text-light' for='female'>Female</label>
                            </div>
                        </div>
                        <FormField id='username' placeholder='Choose a Username' type='text' />
                        <FormField id='pass' placeholder='Password' type='password' />
                        <input className='btn btn-danger mt-2' type='button' value='Sign Up'/>
                        <div className='my-2'>
                            <Link>Back</Link>
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

export default Signup;
