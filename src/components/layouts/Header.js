import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ menu: !this.state.menu });
  }

  render() {
    const show = this.state.menu ? 'show' : '';
    return (
      <nav className='navbar navbar-expand-lg navbar-dark App-header'>
        <Link to='/' className='navbar-brand'>
          <img alt='' src='/favicon.ico' width='30px' height='30px' />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          onClick={this.toggleMenu}
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className={'collapse navbar-collapse ' + show}>
          <div className='navbar-nav'>
            <Link className='nav-item nav-link  mr-2' to='/scommunity'>
              <i className=' fa fa-users fa fa-bell' /> sCommunity
            </Link>
            <Link className='nav-item nav-link mr-2 ' to='sinfo'>
              <i className='fa fa-info-circle' /> sInformation
            </Link>
            <Link className='nav-item nav-link  mr-2' to='sgist'>
              <i className='fa fa-comments' /> sGist
            </Link>
          </div>

          <div className='navbar-nav ml-auto'>
            <Link className='nav-item nav-link' to='#'>
              <i className='fa fa-bell' />
            </Link>
            <Link className='nav-item nav-link' to='#'>
              <i className='fa fa-cog ' />
            </Link>
            <Link className='nav-item nav-link' to='#'>
              <i className='fa fa-smile' />
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
