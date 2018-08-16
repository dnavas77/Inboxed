import React from 'react';
import './Single.css';

const Single = props => {
  const data = props.data;
  const direction = data.direction;
  const id = data.id;
  const _from = data.from;
  const _to = data.to.map(item => item.number).join(', ');
  const text = data.text;
  const isNew = data.is_new;
  const createdAt = new Date(data.created_at).toLocaleDateString();
  const inboundMessage = direction === 'in';

  return (
    <div
      onClick={isNew ? _ => props.markRead(id) : _ => props.markUnread(id)}
      className={"Single Cursor " + (isNew ? "Unread" : "")}
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
      <div className="Date">{createdAt}</div>
      <div className={inboundMessage ? "ArrowLeft" : "ArrowRight"}></div>
    </div>
  );
}

export default Single;
