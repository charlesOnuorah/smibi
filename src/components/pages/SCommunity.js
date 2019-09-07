import React, { Component } from 'react';
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
        },
        {
          id: 2,
          title: 'Painful Sex',
          nameLabel: 'Adeosun Timothy',
          date: '26-08',
          post:
            'Mental Health Awareness Month (also referred to as "Mental Health Month") has been observed in May in the United States since 1949, reaching millions of people in the country.',
          like: 24,
          comment: 16
        },

        {
          id: 3,
          title: 'Painful Sex',
          nameLabel: 'Adeosun Timothy',
          date: '26-08',
          post:
            'Mental Health Awareness Month (also referred to as "Mental Health Month") has been observed in May in the United States since 1949, reaching millions of people in the country.',
          like: 24,
          comment: 16
        },
        {
          id: 4,
          title: 'Painful Sex',
          nameLabel: 'Adeosun Timothy',
          date: '26-08',
          post:
            'Mental Health Awareness Month (also referred to as "Mental Health Month") has been observed in May in the United States since 1949, reaching millions of people in the country.',
          like: 24,
          comment: 16
        },
        {
          id: 5,
          title: 'Painful Sex',
          nameLabel: 'Adeosun Timothy',
          date: '26-08',
          post:
            'Mental Health Awareness Month (also referred to as "Mental Health Month") has been observed in May in the United States since 1949, reaching millions of people in the country.',
          like: 24,
          comment: 16
        },
        {
          id: 6,
          title: 'Painful Sex',
          nameLabel: 'Adeosun Timothy',
          date: '26-08',
          post:
            'Mental Health Awareness Month (also referred to as "Mental Health Month") has been observed in May in the United States since 1949, reaching millions of people in the country.',
          like: 24,
          comment: 16
        },
        {
          id: 7,
          title: 'Painful Sex',
          nameLabel: 'Adeosun Timothy',
          date: '26-08',
          post:
            'Mental Health Awareness Month (also referred to as "Mental Health Month") has been observed in May in the United States since 1949, reaching millions of people in the country.',
          like: 24,
          comment: 16
        },
        {
          id: 8,
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
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
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
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default SCommunity;
