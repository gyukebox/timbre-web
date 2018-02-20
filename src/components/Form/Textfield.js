import React from 'react';

const TextField = (props) => {
  return (
    <div id="username-input" className="form-component">
      <label htmlFor="register-username">닉네임</label>
      <input type="text" id="register-username" placeholder="닉네임을 입력해주세요" />
    </div>
  );
};

export default TextField;