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

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      messages: [],
      totalUnread: 0
    };
    this.markRead = this.markRead.bind(this);
    this.markUnread = this.markUnread.bind(this);
  }

  componentDidMount() {
    this.getMessages();
  }

  getMessages() {
    this.setState({ isLoading: true });

    this.api.getMessages().then(data => {
      this.setState({ messages: data.items });
      this.setState({ isLoading: false });
      this.setTotalUnread();
    });
  }

  setTotalUnread() {
    const count = this.state.messages.reduce((acc, curr) => {
      const tmp = curr.is_new ? 1 : 0;
      return acc + tmp;
    }, 0);
    this.setState({ totalUnread: count });
  }

  markRead(id) {
    this.api.markRead(id).then(_ => {
      this.updateReadStatus(id, true);
    });
  }

  markUnread(id) {
    this.api.markUnread(id).then(_ => {
      this.updateReadStatus(id, false);
    });
  }

  updateReadStatus(id, wasRead) {
    this.setTotalUnread();
  }

  render() {
    return (
      <div className="Messages">
        <TotalUnread total={this.state.totalUnread}/>
        <MessagesContainer
          isLoading={this.state.isLoading}
          markRead={this.markRead}
          markUnread={this.markUnread}
          messages={this.state.messages}/>
      </div>
    );
  }
}

export default Messages;
