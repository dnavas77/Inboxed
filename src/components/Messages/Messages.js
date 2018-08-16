import React, { Component } from 'react';
import './Messages.css';

// API
import API from '../../api/MessagesAPI';

// Components
import TotalUnread from '../TotalUnread/TotalUnread';
import MessagesContainer from '../MessagesContainer/MessagesContainer';

// Class
class Messages extends Component {
  api = new API('some/api/url');

  componentDidMount() {
    this.setState({ isLoading: true });

    this.api.getMessages().then(data => {
      this.setState({ messages: data });
      this.setState({ isLoading: false });
    });
  }

  render() {
    return (
      <div className="Messages">
        <TotalUnread />
        Hello from Messages
        <MessagesContainer />
      </div>
    );
  }
}

export default Messages;
