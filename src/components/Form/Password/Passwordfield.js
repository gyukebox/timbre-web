import React from 'react';
import './Passwordfield.css';

const PasswordField = ({ state }) => {
  return (
    <div id='password-input' className={state}>
      <label htmlFor='register-password'>비밀번호</label>
      <input type='password' id='register-password' placeholder='10자 이상 영문, 숫자 필수 및 특수문자 가능' />
    </div>
  );
};

export default PasswordField;