import React from 'react';
import './TotalUnread.css';

const TotalUnread = props => {
  return (
    <div className="Main">
      Unread: <div className="Number">{props.total}</div>
    </div>
  );
}

export default TotalUnread;
