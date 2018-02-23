import React from 'react';

const TextArea = (props) => {
  return (
    <div className="form-row">
      <label htmlFor="recruit-description">상세 의뢰 내용</label>
      <textarea id="recruit-description"></textarea>
    </div>
  );
};

export default TextArea;