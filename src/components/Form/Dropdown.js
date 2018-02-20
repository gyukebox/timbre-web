import React from 'react';

const Dropdown = (props) => {
  return (
    <select id="recruit-genre" name="recruit-genre">
      <option value="narration">나레이션</option>
      <option value="dubbing">더빙</option>
      <option value="bookread">책읽기</option>
      <option value="ad">광고</option>
      <option value="ars">ARS</option>
      <option value="other" selected>기타</option>
    </select>
  );
};

export default Dropdown;