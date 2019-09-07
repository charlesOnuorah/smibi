import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div>
        <hr style={{ background: 'white', marginTop: '10%', width: '70%' }} />

        <footer className='page-footer font-small teal'>
          <div className='footer-copyright text-center py-3'>
            <Link to='/' className='mr-3'>
              Home
            </Link>
            <Link to='/contact' className='mr-3'>
              Contact Us
            </Link>
            <Link to='/projects' className='mr-3'>
              Projects
            </Link>
            <Link to='/help' className='mr-3'>
              Help
            </Link>
            <Link to='/privacy' className='mr-3'>
              Privacy
            </Link>
            <Link to='terms'>Terms and Conditions</Link>
            <div className='footer-copyright text-center py-3 text-white '>
              © Copyright:
              <Link href='/' className='ml-1'>
                Simbi Health Initiative
              </Link>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
