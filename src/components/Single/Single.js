import React from 'react';
import './Single.css';

const Single = props => {
    const data = props.data;
    return (
      <div className="Single">
        From: {data.from}
      </div>
    );
}

export default Single;
