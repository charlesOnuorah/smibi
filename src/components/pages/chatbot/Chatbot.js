import React, { Component, Fragment } from "react";
import { UserReplyCard, BotReplyCard } from "../../simbicards/ReplyCard";
import ReactTextareaAutocomplete from "@webscopeio/react-textarea-autocomplete";
import { Picker, emojiIndex } from "emoji-mart";
import { Smile } from "react-feather";
import { TextAreaComponent } from "./Textarea";

// import "./chatbot.css";

export default class ChatBotComponent extends Component {
  state = {
    chat: false,
    showEmoji: false,
    user_id: 1,
    showMessage: false,
    message: "",
    messageArr: [
      {
        data_id: 1,
        // sender_id: 1,
        message: "Hi, I am Simbi Bot"
      }
    ]
  };

  chat = () => {
    this.setState(previousState => ({
      chat: !previousState.chat
    }));
  };

  showEmoji = () => {
    this.setState(previousState => ({
      showEmoji: !previousState.showEmoji
    }));
  };

  render() {
    const { showEmoji, message, messageArr } = this.state;
    return (
      <Fragment>
        <div className="chat-container">
          {/* <div className="bot-reply-section">
            <BotReplyCard
              text={
                "For God so loved the world that he gave his only begotten son"
              }
            />
          </div> */}
          {this.state.messageArr && (
            <React.Fragment>
              {this.state.messageArr.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    {this.state.user_id === item.sender_id ? (
                      <div className="user-reply-section">
                        <UserReplyCard text={item.message} />
                      </div>
                    ) : (
                      <div className="bot-reply-section">
                        <BotReplyCard text={item.message} />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </React.Fragment>
          )}

          <div className="textarea-container">
            <TextAreaComponent receivemessage={this._ReceiveMessage} />
          </div>
        </div>
      </Fragment>
    );
  }

  _ReceiveMessage = (message, showMessage) => {
    const { messageArr } = this.state;

    const newMessage = [...messageArr, { sender_id: 1, message: message }];
    this.setState({
      message,
      showMessage,
      messageArr: newMessage
    });

    setTimeout(() => {
      this.botReply();
    }, 3000);
  };

  botReply = () => {
    const { messageArr } = this.state;

    const newMessage = [
      ...messageArr,
      { bot: 1, message: "Hello how are you" }
    ];

    this.setState({
      messageArr: newMessage
    });
  };
}
