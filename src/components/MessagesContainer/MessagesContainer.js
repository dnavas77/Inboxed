import React from 'react';
import './MessagesContainer.css';

// Components
import Single from '../Single/Single';

const MessagesContainer = props => {
    const list = props.messages.map(
      msg => <Single key={msg.id} data={msg} />
    );

    return (
      <div className="">
        { props.isLoading
          ? 'loading...'
          : list
        }
      </div>
    );
}

export default MessagesContainer;
