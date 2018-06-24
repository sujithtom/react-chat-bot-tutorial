import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow';

class App extends Component {
    constructor (props) {
        super(props);

        this.state = {
            chatMessages: []
        };

        this.userChatInput = this.userChatInput.bind(this);
    }

     userChatInput(e) {
        if (this._chatInput.value !== "") {
            var chatEntry = {
                text: this._chatInput.value,
                user: "user",
                key: Date.now()
            };
        };

        this.setState( (prevState) => {
            return {
                chatMessages: prevState.chatMessages.concat(chatEntry)
            };

        });
        console.log(this.state.chatMessages);

        this._chatInput.value = "";

        e.preventDefault();
     }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
        <div className="chatWindowClass">
            <ChatWindow chatMessages={this.state.chatMessages}/>
        </div>
        <div className="chat-input-form-class">
          <form onSubmit={this.userChatInput}>
            <input ref={(a) => this._chatInput = a}
                className="chat-input" placeholder="Enter you question here...">
                </input>
            <button className="submit-button" type="submit">Go</button>

          </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
