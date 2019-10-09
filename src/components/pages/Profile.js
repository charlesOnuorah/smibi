import React, { Component } from 'react';
<<<<<<< HEAD
import SCommunityCard from '../simbicards/SCommunityCard';
import { Consumer } from '../../context';

class SCommunity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          id: 1,
          title: 'Painful Sex',
          nameLabel: 'Adeosun Timothy',
          date: '26-08',
          post:
            'Mental Health Awareness Month (also referred to as "Mental Health Month") has been observed in May in the United States since 1949, reaching millions of people in the country.',
          like: 24,
          comment: 16
        }
      ]
    };
  }

  render() {
    const { cards } = this.state;
=======
import FormField from '../utils/FormField';
import { Consumer } from '../../context';

class Profile extends Component {
  render() {
>>>>>>> 40c3c2b8323eeaa6205876f453b3f8f98ed6df87
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
<<<<<<< HEAD
            <div className='container pt-4' style={{ background: 'rgba(255, 255, 255, 0.6)' }}>
              <h2 className='text-center mb-4 font-weight-bold '>sCOMMUNITY</h2>
              <div className='row'>
                <div className='col-sm-1 order-sm-2' style={{ fontSize: '4rem', color: '#00b0f3', marginTop: '-3rem' }}>
                  <i className='fas fa-plus-circle'></i>
                  <p className='font-weight-light' style={{fontSize: '1rem', marginTop:'-1rem', color: '#000'}}>Ask a question</p>
                </div>
                <div className='col-sm-11'>
                  {cards.map(card => (
                    <SCommunityCard key={card.id} cardDetails={card} />
                  ))}
=======
            <div className='container'>
              <div className='row justify-content-center mt-5'>
                <div className='col-sm-1' style={{ fontSize: '4rem', color: '#00b0f3' }}>
                  <i className='fas fa-plus-circle'></i>
                  <p className='font-weight-light' style={{fontSize: '1rem', marginTop:'-1rem', color: '#000'}}>Ask a question</p>
                </div>
                <div className='col-sm-5'>
                  <div className='circle-parent mx-auto'>
                    <div className='circle p-0'>
                        <img src='../abuse.jpg' alt='domestic'/>
                    </div>
                  </div>
                  <h6 className='text-light font-weight-bold text-center'>Adeosun Adeoye</h6>
                  <form className='col-md-11 mx-auto mt-5'>
                        <FormField id='status' placeholder="Type a status" type='text' />
                        <label className='text-warning' htmlFor='username'>Username</label>
                        <FormField id='username' placeholder='Adekinging' type='text' />
                        <label className='text-warning' htmlFor='quote'>Favourite Quote</label>
                        <div className='group'>
                          <textarea id='quote' placeholder='In the new world of fame and glory, would love to imagine the'/>
                          <span class="bar"></span>
                        </div>
                        <label className='text-warning col-md-11 p-0'>Latest Activities</label>
                        <input className='btn btn-danger mt-2' type='button' value='Logout'/>
                    </form>
>>>>>>> 40c3c2b8323eeaa6205876f453b3f8f98ed6df87
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

<<<<<<< HEAD
export default SCommunity;
=======
export default Profile;
>>>>>>> 40c3c2b8323eeaa6205876f453b3f8f98ed6df87
