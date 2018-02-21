import React from 'react';
import './Textfield.css';

const TextField = ({ size, state }) => {
  const className = `${size} ${state}`;

  return (
    <div id="text-input" className={className}>
      <label htmlFor="register-username">닉네임</label>
      <input type="text" id="register-username" placeholder="닉네임을 입력해주세요" />
    </div>
  );
};

export default TextField;