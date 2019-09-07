import React, { Component } from 'react';

class SCard extends Component {
  render() {
    const { placeholder, id, type } = this.props;
    return (
      <div className='group my-2'>
            <input id={id} type={type} placeholder={placeholder}/>
            <span class="bar"></span>
      </div>
    );
  }
}

export default SCard;
