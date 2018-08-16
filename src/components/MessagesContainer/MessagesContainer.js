import React from 'react';
import './MessagesContainer.css';

// Components
import Single from '../Single/Single';

const MessagesContainer = props => {
    const list = props.messages.map(
      msg => <Single
              key={msg.id}
              data={msg}
              markRead={props.markRead}
              markUnread={props.markUnread}/>
    );

    return (
      <div className="">
        { props.isLoading
          ? <div className="lds-facebook"><div></div><div></div><div></div></div>
          : list
        }
      </div>
    );
}

export default MessagesContainer;
