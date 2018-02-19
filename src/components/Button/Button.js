import React from 'react';
import './Button.css';

const Button = ({ size, state, value }) => {
  const className = `${size} ${state}`;
  return <button className={className}>{value}</button>;
};

Button.defaultProps = {
  size: 'normal',
  state: 'enabled-gradient'
};

export default Button;