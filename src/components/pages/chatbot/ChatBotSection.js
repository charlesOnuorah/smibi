import React from "react";
// import ChatBotComponent from "./Chatbot";

const ChatSection = ({ children }) => (
  <>
    <section className="chat-section">
      <div className="chat-header">
        <h6 style={{ textAlign: "center", fontSize: "16px" }}>
          CHAT-WITH-A-CHATBOT
        </h6>
        <div style={{ border: "1px solid #fff", marginTop: "10px" }} />
      </div>

      <div>{children}</div>
    </section>
  </>
);

export default ChatSection;
