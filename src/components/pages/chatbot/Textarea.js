import React from "react";
import "./chatbot.css";
export class TextAreaComponent extends React.Component {
  state = {
    message: ""
  };

  _handleKeyDown = e => {
    if (e.key === "Enter") {
      // alert("enter");
      if (this.state.message.trim().length > 0) {
        this.sendMessageHandler();
      }
    }
  };

  render() {
    const { message } = this.state;
    return (
      <React.Fragment>
        <span>
          <textarea
            placeholder="Enter your message..."
            className="text-area"
            value={message}
            name="message"
            onChange={this.onSendMessage}
            onKeyDown={this._handleKeyDown}
          ></textarea>
          <span className="send-chat" onClick={() => this.sendMessageHandler()}>
            <i className="fa fa-paper-plane" aria-hidden="true"></i>
          </span>
        </span>
      </React.Fragment>
    );
  }

  sendMessageHandler = () => {
    if (this.state.message.trim().length > 0) {
      this.props.receivemessage(this.state.message, true);
      this.setState({
        message: ""
      });
    }
  };

  onSendMessage = ({ target: { value, name } }) => {
    this.setState({
      [name]: value
    });
  };
}
