import React, { Component } from 'react';

class SCommunityCard extends Component {
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
      nameLabel,
      date,
      title,
      post,
      like,
      comment
    } = this.props.cardDetails;
    return (
      <div className='container mb-5'>
        <div className='row justify-content-center'>
          <i className='col-sm-1 fas fa-user fa-3x'></i>
          
          <div className='col-sm-10'>
            <h5 className='text-warning'>{nameLabel}</h5>
            <h6 className='text-grey'>{date}</h6>
            <h4 className='text-grey font-weight-bold mb-4'><u>{title}</u></h4>
            <h7 className='text-grey'> {post}</h7>
            <div className='row justify-content-between p-3 pr-5'>
              <span>
                <i className='far fa-thumbs-up fa-2x'></i>
                {like}
              </span>
              <span>
                <i className='fas fa-comment-alt fa-2x'></i>
                {comment}
              </span>
              <i className='fas fa-reply fa-flip-horizontal fa-2x'></i>
              <i className='far fa-flag fa-2x'></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SCommunityCard;
