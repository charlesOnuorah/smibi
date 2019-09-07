import React, { Component } from 'react';
import { Consumer } from '../../context'; 

class Landing extends Component {
  render() {
    
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className='container pt-4'>
                <h1 style={{color: 'white'}} className='text-center'>sALERT</h1>
                <div className='row justify-content-center'>
                    <div className='col-sm-4 mx-auto'>
                        <div className='circle-parent'>
                               <img className='alert-Image' src='../abuse.png' alt='domestic'/>
                        </div>
                        <h6 className='text-light font-weight-bold'>Report Domestic Abuse</h6>
                    </div>
                    <div className='col-sm-4'>
                        <div className='circle-parent'>
                             <img className='alert-Image' src='../sexy.png' alt='domestic'/>
                        </div>
                        <h6 className='text-light font-weight-bold'>Report Sexual Abuse</h6>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-sm-2'>
                        <div className='circle-parent '>
                               
                               <img className='alert-Image' src='../helper.png' alt='domestic'/>
                        </div>
                        <h6 className='text-light font-weight-bold'>Call Our Help Line</h6>
                    </div>
                </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Landing;
