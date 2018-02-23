import React from 'react';
import './Emailfield.css';

const EmailField = ({ state }) => {
  return (
    <div id="email-input" className={state}>
      <label htmlFor="register-email">이메일</label>
      <input type="email" id="register-email" placeholder="example@mail.com" />
    </div>
  );
};

export default EmailField;