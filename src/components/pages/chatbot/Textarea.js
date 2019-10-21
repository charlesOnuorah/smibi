import React from "react";
import "./chatbot.css";
export class TextAreaComponent extends React.Component {
  state = {
    message: ""
  };
  render() {
    const { message } = this.props;
    return (
      <React.Fragment>
        <span>
          <textarea
            placeholder="Enter your message..."
            className="text-area"
            value={message}
            name="message"
            onChange={this.onSendMessage}
          ></textarea>
          <span className="send-chat" onClick={() => this.sendMessageHandler()}>
            <i className="fa fa-paper-plane" aria-hidden="true"></i>
          </span>
        </span>
      </React.Fragment>
    );
  }

  sendMessageHandler = () => {
    this.props.receivemessage(this.state.message, true);
    // this.setState({
    //   message: ""
    // });
  };

  onSendMessage = ({ target: { value, name } }) => {
    this.setState({
      [name]: value
    });
  };
}
