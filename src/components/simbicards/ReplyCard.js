import React from "react";

export function BotReplyCard({ text }) {
  return (
    <>
      <div className="chat-card-container add-margin">
        <div className="simbi-avatar" />
        <div className="chat-text add-color-1">{text}</div>
        <div className="chat-semi-circle" />
      </div>
    </>
  );
}

export function UserReplyCard({ text }) {
  return (
    <div className="chat-card-container add-margin">
      <div className="chat-semi-circle-2" />
      <div className="chat-text add-color-2">{text}</div>
      <div className="simbi-avatar adjust-simbi-avatar" />
    </div>
  );
}
