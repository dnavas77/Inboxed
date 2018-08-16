import React from 'react';
import './TotalUnread.css';

const TotalUnread = props => {
  return (
    <div className="">Total Unread: {props.total}</div>
  );
}

export default TotalUnread;
