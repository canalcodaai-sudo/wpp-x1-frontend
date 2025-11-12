// client/src/components/MessageInput.js - VERSÃO FINAL

import React, { useState } from 'react';
import './MessageInput.css';

function MessageInput({ onSendMessage, inputEnabled, buttons }) {
  const [text, setText] = useState('');

  const handleTextSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      onSendMessage({ text: text.trim() });
      setText('');
    }
  };

  const handleButtonClick = (button) => {
    onSendMessage({
      text: button.text,
      payload: button.payload
    });
  };

  if (buttons && buttons.length > 0) {
    return (
      <div className="button-options-container">
        {buttons.map((button, index) => (
          <button
            key={index}
            className="choice-button"
            onClick={() => handleButtonClick(button)}
          >
            {button.text}
          </button>
        ))}
      </div>
    );
  }

export default MessageInput;
