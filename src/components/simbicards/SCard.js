import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';

class SCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      label: '',
      topic_title: '',
      name: '',
      desc: ''
    };
    // this.routeChange = this.routeChange.bind(this);

  }

  routeChange = () => {
    // return <Redirect to="/scommunity"/> 
  }


  render() {


    
    const {
      imageScr,
      label,
      topic_title,
      name,
      desc,
      btnColor
    } = this.props.cardDetails;
    const btnStyle = `btn mt-1 s-label ${btnColor}`;
    return (
      // <div className='col-lg-2 col-md-4 col-sm-6 mb-5'>
      <div
        className='card scard-container col-lg-3 col-md-3 col-sm-6 mx-3 mb-3'
        style={{
          background: 'rgba(255, 255, 255, 0.0)'
        }}
      >
        <div>
          <Link to={`/${label}`}>
              <img alt='' className='img-responsive img-height' src={imageScr} />
          </Link>
          
        </div>
        <div className='card-body p-0'>

          

          <Link to={`/${label}`}
            className={btnStyle}
            onClick={this.routeChange}
            style={{padding: '0 8px', color:"#fff"}}
            type='button'
            value={label}
          > {label} </Link>
          <h6 className=' body-text my-1'>{topic_title}</h6>
          <h6 className='body-text header mt-2  text-warning font-italic'>
            {/* <i className= 'mr-2 fas fa-user'></i> */}
            {name}</h6> 
          <p className=' body-text fades short-title'>{desc}</p>
        </div>
      </div>
      // </div>
    );
  }
}

export default SCard;
