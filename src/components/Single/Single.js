import React from 'react';
import './Single.css';

const Single = props => {
    const data = props.data;
    const _from = data.from;
    const _to = data.to.map(item => item.number).join(', ');
    const text = data.text;

    return (
      <div className="Single">
        <p>From: {_from}</p>
        <p>To: {_to}</p>
        <p>Message: {text}</p>
      </div>
    );
}

export default Single;
