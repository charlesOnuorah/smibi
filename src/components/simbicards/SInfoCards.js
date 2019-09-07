import React, { Component } from 'react';

class SInfoCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      image: '',
      title: '',
      timeLabel: '',
      gist: '',
      commentCount: ''
    };
  }
  render() {
    const { imageScr, title, desc } = this.props.cardDetails;

    return (
      <div className='row justify-content-center'>
        <div className='card' style={{background: 'rgba(255, 255, 255, 0.0)', border: 'none'}}>
        <div>
          <img className='img-height' src={imageScr} alt='' />
        </div>

        <div className='card-body p-0'>
          <h5 className='text-warning'>{title}</h5>
          <h6 className='text-grey'>{desc}</h6>
        </div>
        </div>
      </div>
    );
  }
}

export default SInfoCards;
