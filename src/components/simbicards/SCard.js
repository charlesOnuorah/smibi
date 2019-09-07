import React, { Component } from 'react';

class SCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      label: '',
      title: '',
      name: '',
      desc: ''
    };
  }
  render() {
    const {
      imageScr,
      label,
      title,
      name,
      desc,
      btnColor
    } = this.props.cardDetails;
    const btnStyle = `btn mt-1 p-0 rounded-pill ${btnColor}`;
    return (
      // <div className='col-lg-2 col-md-4 col-sm-6 mb-5'>
      <div
        className='card col-lg-2 col-md-4 col-sm-6 mb-5 mx-5'
        style={{
          height: '400px',
          background: 'rgba(255, 255, 255, 0.0)'
        }}
      >
        <div>
          <img alt='' className='img-responsive img-height' src={imageScr} />
        </div>
        <div className='card-body p-0'>
          <input
            className={btnStyle}
            style={{ width: '50%' }}
            type='button'
            value={label}
          />
          <h6 className='my-1 text-light'>{title}</h6>
          <h6 className='text-warning font-italic  font-weight-light'><i className= 'mr-2 fas fa-user'></i>{name}</h6>
          <h6 className='text-light font-weight-light'>{desc}</h6>
        </div>
      </div>
      // </div>
    );
  }
}

export default SCard;
