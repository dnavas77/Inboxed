import React from 'react';
import './TotalUnread.css';

const TotalUnread = props => {
  const total = props.total;

  return (
    <div className="Main">
      <b>
        Unread: <div className={ total > 0 ? "SomeUnread" : "AllRead"}>{total}</div>
      </b>
    </div>
  );
}

export default TotalUnread;
