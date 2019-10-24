import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import ChatBotComponent from "../pages/chatbot/Chatbot";
import ChatSection from "../pages/chatbot/ChatBotSection";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      chat: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  chat = () => {
    this.setState(previousState => ({
      chat: !previousState.chat
    }));
  };

  toggleMenu() {
    this.setState({ menu: !this.state.menu });
  }

  handleClose = () => {
    this.setState({
      chat: false
    });
  };

  render() {
    const { chat } = this.state;

    const show = this.state.menu ? "show" : "";
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark App-header">
          <Link to="/" className="navbar-brand">
            <img alt="" src="/favicon.ico" width="30px" height="30px" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.toggleMenu}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={"collapse navbar-collapse " + show}>
            <div className="navbar-nav">
              <Link className="nav-item nav-link  mr-2" to="/scommunity">
                <i className=" fa fa-users fa fa-bell" /> sCommunity
              </Link>
              <Link className="nav-item nav-link mr-2 " to="sinfo">
                <i className="fa fa-info-circle" /> sInformation
              </Link>
              <Link className="nav-item nav-link  mr-2" to="sgist">
                <i className="fa fa-comments" /> sGist
              </Link>
            </div>

            <div className="navbar-nav ml-auto">
              <Link className="nav-item nav-link" to="#">
                <i className="fa fa-bell" />
              </Link>
              <Link className="nav-item nav-link" to="#">
                <i className="fa fa-cog " />
              </Link>
              <Link className="nav-item nav-link" to="#">
                <i className="fa fa-smile" />
              </Link>
            </div>
          </div>
        </nav>

        <section
          className={chat ? "show-overlay" : "hide-overlay"}
          aria-hidden="true"
        >
          {chat && (
            <span className="close-icon-section">
              <div className={"close-icon"} onClick={this.handleClose}>
                <span style={{ cursor: "pointer" }}>&times;</span>
              </div>

              <ChatSection>
                <ChatBotComponent />
              </ChatSection>
            </span>
          )}
        </section>
      </Fragment>
    );
  }
}
{
  /* <nav
          id="navbar"
          className="navbar navbar-expand-lg navbar-dark App-header"
        >
          <Link to="/" className="navbar-brand">
            <img alt="" src="/favicon.ico" width="30px" height="30px" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.toggleMenu}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={"collapse navbar-collapse " + show}>
            <div className="navbar-nav">
              <Link className="nav-item nav-link  mr-2" to="/scommunity">
                <i className=" fa fa-users fa fa-bell" /> sCommunity
              </Link>
              <Link className="nav-item nav-link mr-2 " to="sinfo">
                <i className="fa fa-info-circle" /> sInformation
              </Link>
              <Link className="nav-item nav-link  mr-2" to="sgist">
                <i className="fa fa-comments" /> sGist
              </Link>
            </div>

            <div className="navbar-nav ml-auto">
              <Link className="nav-item nav-link" to="#">
                <i onClick={this.chat} className="fas fa-comment-alt" />
              </Link>
              <Link className="nav-item nav-link" to="#">
                <i className="fa fa-bell" />
              </Link>
              <Link className="nav-item nav-link" to="#">
                <i className="fa fa-cog " />
              </Link>
              <Link className="nav-item nav-link" to="#">
                <i className="fa fa-smile" />
              </Link>
            </div>
          </div>
        </nav> */
}

export default Header;
