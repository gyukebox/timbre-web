import React from 'react';
import './Dropdown.css';

const Dropdown = ({ state }) => {
  return (
    <select id="recruit-genre" className={state} name="recruit-genre" defaultValue='카테고리 선택'>
      <option value="choose">카테고리 선택</option>
      <option value="narration">나레이션</option>
      <option value="dubbing">더빙</option>
      <option value="bookread">책읽기</option>
      <option value="ad">광고</option>
      <option value="ars">ARS</option>
      <option value="other">기타</option>
    </select>
  );
};

export default Dropdown;