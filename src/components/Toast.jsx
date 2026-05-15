import React from 'react';
import '../styles/toast.css';

function Toast({ show, message }) {
  return (
    <div className={`toast-message ${show ? 'visible' : ''}`}>
      {message}
    </div>
  );
}

export default Toast;
