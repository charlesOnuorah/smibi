import React, { Component } from 'react';

class SGistCard extends Component {
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
    const {
      imageScr,
      title,
      timeLabel,
      gist,
      commentCount,
      width
    } = this.props.cardDetails;

    const cardWidth = width
      ? 'col-lg-8 col-md-8 col-sm-6 mb-4'
      : 'col-lg-4 col-md-4 col-sm-6 mb-4';
    const imgHeight = width ? '20rem' : '13rem';
    return (
      <div className={cardWidth}>
        <div
          className='card'
          style={{
            background: 'rgba(255, 255, 255, 0.0)',
            border: 'none'
          }}
        >
          <div>
          <img
            alt=''
            className='img-height'
            style={{ height: imgHeight }}
            src={imageScr}
          />
          </div>
          <div className='card-body p-0'>
            <h5 className='text-light'>{title}</h5>
            <h6 className='text-warning font-italic'>{timeLabel}</h6>
            <h6 className='text-light'>{gist}</h6>
            <p>
              <h6 className='text-light'>
                <i class='fas fa-comment-alt text-dark' /> {commentCount}
              </h6>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SGistCard;
