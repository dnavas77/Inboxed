import React, { Component } from 'react';
import './Messages.css';

// API
import API from '../api/MessagesAPI';

// Components
import TotalUnread from '../TotalUnread/TotalUnread';
import MessagesContainer from '../MessagesContainer/MessagesContainer';

class Messages extends Component {
  componentDidMount() {
    this.setState({ isLoading: true });
  }

  render() {
    return (
      <div className="MessagesContainer">
        <TotalUnread/>
        Hello from Messages
        <MessagesContainer todos/>
      </div>
    );
  }
}

export default Messages;
