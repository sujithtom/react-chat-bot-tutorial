import React, { Component } from "react";

class ChatWindow extends Component {
  renderChats(chatEntry) {
    if (chatEntry.user === "user"){
        return <p className="chatClass userChatClass">{chatEntry.text}</p>
    } else {
        return <p className="chatClass botChatClass">{chatEntry.text}</p>
    }
  }

  render() {
    var chatMsgs = this.props.chatMessages;
    var renderedChats = chatMsgs.map(this.renderChats);

    return (
      <div className="chatWindowInnerClass">
          {renderedChats}
      </div>
    );
  }
};

export default ChatWindow;