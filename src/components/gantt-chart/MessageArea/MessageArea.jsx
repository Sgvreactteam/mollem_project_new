import React from 'react';
import './MessageArea.css';

const MessageArea = ({ messages = [] }) => {
  const messageList = messages.map(({ message }) => (
    <li key={Math.random()}>{message}</li>
  ));

  return (
    <div className="message-area">
      <h3>Messages:</h3>
      <ul>{messageList}</ul>
    </div>
  );
};

MessageArea.defaultProps = {
  messages: []
};

export default MessageArea;
