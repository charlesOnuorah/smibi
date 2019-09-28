import React, { Component, Fragment } from "react";
import { UserReplyCard, BotReplyCard } from "../../simbicards/ReplyCard";
// import "./chatbot.css";

export default class ChatBotComponent extends Component {
  state = {
    chat: false
  };
  chat = () => {
    this.setState(previousState => ({
      chat: !previousState.chat
    }));
  };

  render() {
    return (
      <Fragment>
        <div className="chat-container">
          <div className="bot-reply-section">
            <BotReplyCard
              text={
                "For God so loved the world that he gave his only begotten son"
              }
            />
          </div>
          <UserReplyCard text="Ye" />

          <div className="bot-reply-section">
            <BotReplyCard
              text={
                "For God so loved the world that he gave his only begotten son"
              }
            />
          </div>

          <UserReplyCard text="Ye" />
        </div>
      </Fragment>
    );
  }
}
