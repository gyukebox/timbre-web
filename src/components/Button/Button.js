import React from 'react';
import './Button.css';

class Button extends React.Component {
  render() {
    const className = `${this.props.size} ${this.props.state}`;
    return <button className={className}>{this.props.value}</button>;
  }
}

Button.defaultProps = {
  size: 'normal',
  state: 'enabled-gradient'
};

export default Button;