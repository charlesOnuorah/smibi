import React, { Component, Fragment } from "react";
import { UserReplyCard, BotReplyCard } from "../../simbicards/ReplyCard";
import ReactTextareaAutocomplete from "@webscopeio/react-textarea-autocomplete";
import { Picker, emojiIndex } from "emoji-mart";
import { Smile } from "react-feather";

// import "./chatbot.css";

export default class ChatBotComponent extends Component {
  state = {
    chat: false,
    showEmoji: false
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
    const { showEmoji } = this.state;
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

          <div>
            <button onClick={() => this.showEmoji()}>
              <Smile />
            </button>

            {showEmoji && <Picker />}
            <ReactTextareaAutocomplete
              loadingComponent={() => <span>Loading</span>}
              trigger={{
                ":": {
                  dataProvider: token =>
                    emojiIndex.search(token).map(o => ({
                      colons: o.colons,
                      native: o.native
                    })),
                  component: ({ entity: { native, colons } }) => (
                    <div>{`${colons} ${native}`}</div>
                  ),
                  output: item => `${item.native}`
                }
              }}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}
