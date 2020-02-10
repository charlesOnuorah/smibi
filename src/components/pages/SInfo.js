import React, { Component } from 'react';
import { connect } from "react-redux";
import SInfoCards from '../simbicards/SInfoCards';
import * as actions from "../../actions";

class SInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      cards: [
        {
          id: 1,
          imageScr: '../picture.jpg',
          title: 'Painful Sex',
          desc:
            ' It was the voice of a young girl thanking the writer for her words and the strength they gave her.'
        },
        {
          id: 2,
          imageScr: '../picture.jpg',
          title: 'Painful Sex',
          desc:
            ' It was the voice of a young girl thanking the writer for her words and the strength they gave her.'
        },
        {
          id: 3,
          imageScr: '../picture.jpg',
          title: 'Painful Sex',
          desc:
            ' It was the voice of a young girl thanking the writer for her words and the strength they gave her.'
        },
        {
          id: 4,
          imageScr: '../picture.jpg',
          title: 'Painful Sex',
          desc:
            ' It was the voice of a young girl thanking the writer for her words and the strength they gave her.'
        },
        {
          id: 5,
          imageScr: '../picture.jpg',
          title: 'Painful Sex',
          desc:
            ' It was the voice of a young girl thanking the writer for her words and the strength they gave her.'
        }
      ]
    };
    this.handleClick = this.handleClick.bind(this);
    this.handlePuberty = this.handlePuberty.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.props.stopLoading()
  }

  handleClick() {
    this.setState({show: false});
  }

  handlePuberty() {
    this.setState({show: false});
  }

  handleClose() {
    this.setState({show: true});
  }

  render() {
    const { cards, show } = this.state;

    return (
            <div className='container'>
              <h3 className='text-center text-light mt-4'>sINFORMATION</h3>
              <h5 className='text-center text-light font-weight-light mb-3'>
                GET LATEST INFORMATION ON VARIOUS TOPICS
              </h5>
              <div className='row' style={{display: show ? "": "none"}}>
                <div className='col-lg-3 col-sm-8'>

                  <h4 className='text-warning text-center'>SEXUAL <br/><u>HEALTH</u></h4>
                  <div className='row justify-content-center mt-4'>

                  <input  onClick={this.handlePuberty} className='btn btn-success p-0 m-2 mx-5' style={{width : 1000}} type='button' value='Puberty'/>
                  <input  onClick={this.handleClick} className='btn btn-danger w-100 p-0 m-2 mx-5' type='button' value='Negotiation & Decision Skills'/>
                  <input  onClick={this.handleClick} className='btn btn-success w-100 p-0 m-2 mx-5' type='button' value='Consent and Privacy'/>
                  <input  onClick={this.handleClick} className='btn btn-warning w-100 p-0 m-2 mx-5' type='button' value='STIs'/>
                  <input  onClick={this.handleClick} className='btn btn-warning w-100 p-0 m-2 mx-5 fs-12' type='button' value='Human Body & Dev'/>
                  <input onClick={this.handleClick} className='btn btn-danger w-100 p-0 m-2 mx-5' type='button' value='HIV/AIDS Stigma & Care'/>
                  <input onClick={this.handleClick} className='btn btn-success w-100 p-0 m-2 mx-5' type='button' value='Sexual Violence & Safety'/>
                  <input onClick={this.handleClick} className='btn btn-warning w-100 p-0 m-2 mx-5' type='button' value='Sexual Value and Sexuality'/>
                  <input onClick={this.handleClick} className='btn btn-danger w-100 p-0 m-2 mx-5' type='button' value='Abstinence'/>
                  <input onClick={this.handleClick} className='btn btn-success w-100 p-0 m-2 mx-5' type='button' value='Pregnancy'/>
                  <input onClick={this.handleClick} className='btn btn-warning w-100 p-0 m-2 mx-5' type='button' value='Family Planning'/>
                  <input onClick={this.handleClick} className='btn btn-success w-100 p-0 m-2 mx-5' type='button' value='Emergency Contraceptives'/>
                  <input onClick={this.handleClick} className='btn btn-danger w-100 p-0 m-2 mx-5' type='button' value='Friendship Skills'/>
                  <input onClick={this.handleClick} className='btn btn-success w-100 p-0 m-2 mx-5' type='button' value='Loving Relationship skills'/>
                  <input onClick={this.handleClick} className='btn btn-warning w-100 p-0 m-2 mx-5' type='button' value='Gender Roles'/>
                  <input onClick={this.handleClick} className='btn btn-danger w-100 p-0 m-2 mx-5' type='button' value='Sexual Laws and Rights'/>
                  <input  onClick={this.handleClick}className='btn btn-success w-100 p-0 m-2 mx-5' type='button' value='Unsafe Abortion'/>
                  <input onClick={this.handleClick} className='btn btn-warning w-100 p-0 m-2 mx-5' type='button' value='Sexting & Safe Use of ICT'/>
                  </div>
                </div>
                <hr className='vl'/>
                
                <div className='col-lg-3 col-sm-8'>
                  <h4 className='text-danger text-center'>MENTAL <br/><u>HEALTH</u></h4>
                  <div className='row justify-content-center mt-4'>
                  <input  onClick={this.handlePuberty} className='btn btn-success p-0 m-2 mx-5' style={{width : 1000}} type='button' value='Puberty'/>
                  <input  onClick={this.handleClick} className='btn btn-danger w-100 p-0 m-2 mx-5' type='button' value='Negotiation & Decision Skills'/>
                  <input  onClick={this.handleClick} className='btn btn-success w-100 p-0 m-2 mx-5' type='button' value='Consent and Privacy'/>
                  <input  onClick={this.handleClick} className='btn btn-warning w-100 p-0 m-2 mx-5' type='button' value='STIs'/>
                  <input  onClick={this.handleClick} className='btn btn-warning w-100 p-0 m-2 mx-5 fs-12' type='button' value='Human Body & Dev'/>
                  <input onClick={this.handleClick} className='btn btn-danger w-100 p-0 m-2 mx-5' type='button' value='HIV/AIDS Stigma & Care'/>
                  <input onClick={this.handleClick} className='btn btn-success w-100 p-0 m-2 mx-5' type='button' value='Sexual Violence & Safety'/>
                  <input onClick={this.handleClick} className='btn btn-warning w-100 p-0 m-2 mx-5' type='button' value='Sexual Value and Sexuality'/>
                  <input onClick={this.handleClick} className='btn btn-danger w-100 p-0 m-2 mx-5' type='button' value='Abstinence'/>
                  <input onClick={this.handleClick} className='btn btn-success w-100 p-0 m-2 mx-5' type='button' value='Pregnancy'/>
                  <input onClick={this.handleClick} className='btn btn-warning w-100 p-0 m-2 mx-5' type='button' value='Family Planning'/>
                  <input onClick={this.handleClick} className='btn btn-success w-100 p-0 m-2 mx-5' type='button' value='Emergency Contraceptives'/>
                  <input onClick={this.handleClick} className='btn btn-danger w-100 p-0 m-2 mx-5' type='button' value='Friendship Skills'/>
                  <input onClick={this.handleClick} className='btn btn-success w-100 p-0 m-2 mx-5' type='button' value='Loving Relationship skills'/>
                  <input onClick={this.handleClick} className='btn btn-warning w-100 p-0 m-2 mx-5' type='button' value='Gender Roles'/>
                  <input onClick={this.handleClick} className='btn btn-danger w-100 p-0 m-2 mx-5' type='button' value='Sexual Laws and Rights'/>
                  <input  onClick={this.handleClick}className='btn btn-success w-100 p-0 m-2 mx-5' type='button' value='Unsafe Abortion'/>
                  <input onClick={this.handleClick} className='btn btn-warning w-100 p-0 m-2 mx-5' type='button' value='Sexting & Safe Use of ICT'/>
                  
                  </div>
                </div>
                <hr className='vl'/>
                <div className='col-lg-3 col-sm-8'>
                  <h4 className='text-warning text-center'>SOCIAL & <br/>PHYSICAL <br/><u>HEALTH</u></h4>
                  <div className='row justify-content-center'>

                  <input  onClick={this.handlePuberty} className='btn btn-success p-0 m-2 mx-5' style={{width : 1000}} type='button' value='Puberty'/>
                  <input  onClick={this.handleClick} className='btn btn-danger w-100 p-0 m-2 mx-5' type='button' value='Negotiation & Decision Skills'/>
                  <input  onClick={this.handleClick} className='btn btn-success w-100 p-0 m-2 mx-5' type='button' value='Consent and Privacy'/>
                  <input  onClick={this.handleClick} className='btn btn-warning w-100 p-0 m-2 mx-5' type='button' value='STIs'/>
                  <input  onClick={this.handleClick} className='btn btn-warning w-100 p-0 m-2 mx-5 fs-12' type='button' value='Human Body & Dev'/>
                  <input onClick={this.handleClick} className='btn btn-danger w-100 p-0 m-2 mx-5' type='button' value='HIV/AIDS Stigma & Care'/>
                  <input onClick={this.handleClick} className='btn btn-success w-100 p-0 m-2 mx-5' type='button' value='Sexual Violence & Safety'/>
                  <input onClick={this.handleClick} className='btn btn-warning w-100 p-0 m-2 mx-5' type='button' value='Sexual Value and Sexuality'/>
                  <input onClick={this.handleClick} className='btn btn-danger w-100 p-0 m-2 mx-5' type='button' value='Abstinence'/>
                  <input onClick={this.handleClick} className='btn btn-success w-100 p-0 m-2 mx-5' type='button' value='Pregnancy'/>
                  <input onClick={this.handleClick} className='btn btn-warning w-100 p-0 m-2 mx-5' type='button' value='Family Planning'/>
                  <input onClick={this.handleClick} className='btn btn-success w-100 p-0 m-2 mx-5' type='button' value='Emergency Contraceptives'/>
                  <input onClick={this.handleClick} className='btn btn-danger w-100 p-0 m-2 mx-5' type='button' value='Friendship Skills'/>
                  <input onClick={this.handleClick} className='btn btn-success w-100 p-0 m-2 mx-5' type='button' value='Loving Relationship skills'/>
                  <input onClick={this.handleClick} className='btn btn-warning w-100 p-0 m-2 mx-5' type='button' value='Gender Roles'/>
                  <input onClick={this.handleClick} className='btn btn-danger w-100 p-0 m-2 mx-5' type='button' value='Sexual Laws and Rights'/>
                  <input  onClick={this.handleClick}className='btn btn-success w-100 p-0 m-2 mx-5' type='button' value='Unsafe Abortion'/>
                  <input onClick={this.handleClick} className='btn btn-warning w-100 p-0 m-2 mx-5' type='button' value='Sexting & Safe Use of ICT'/>
                  
                  </div>
                </div>
                
              </div>
              <div className='container' style={{display: show ? "none" : ""}} >
                <div className='row justify-content-end'>
                  <div className='order-2 col-sm-4'>
                <i onClick={this.handleClose} className='fas fa-window-close fa-2x'></i>
                  </div>
                  <div className='col-sm-8'>
                {cards.map(card => (
                  <SInfoCards key={card.id} cardDetails={card} />
                ))}

                  </div>
                </div>
              </div>
            </div>
    );
  }
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps, actions)(SInfo);
