import React from 'react';
import './Single.css';

const Single = props => {
  const data = props.data;
  const id = data.id;
  const _from = data.from;
  const _to = data.to.map(item => item.number).join(', ');
  const text = data.text;
  const isNew = data.is_new;

  return (
    <div
      onClick={isNew ? _ => props.markRead(id) : _ => props.markUnread(id)}
      className={"Single Cursor " + (isNew ? "BoldText" : "")}
    >
      <table>
        <tbody>
          <tr>
            <td>From:</td>
            <td>{_from}</td>
          </tr>
          <tr>
            <td>To:</td>
            <td>{_to}</td>
          </tr>
          <tr>
            <td>Message:</td>
            <td>{text}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Single;
