import React, { Component } from 'react';
import { Consumer } from '../../context';
import FormField from '../utils/FormField';

class Landing extends Component {
  render() {
    
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className='container'>
                <div className='row justify-content-center mt-5'>
                    <form className='col-md-4 mt-5'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <input className='mr-2' type='checkbox' id='personal'/>
                                <label className='text-light' for='personal'>Personal</label>
                            </div>
                            <div className='col-md-6'>
                                <input className='mr-2' type='checkbox' id='behalf'/>
                                <label className='text-light' for='behalf'>On Behalf</label>
                            </div>
                        </div>

                        <FormField id='name' placeholder="Reporter's Name" type='text' />
                        <FormField id='abused' placeholder='Name Of Abused' type='text' />
                        <FormField id='location' placeholder='Location' type='text' />
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
                        <FormField id='mail' placeholder='Email' type='email' />
                        <div className='col-md-3 p-0'>
                            <FormField id='age' placeholder='Age' type='text' />
                        </div>
                        <input className='btn btn-success mt-2' type='button' value='Submit'/>
                    </form>
                </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Landing;
