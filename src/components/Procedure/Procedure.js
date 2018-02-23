import React, { Component } from 'react';

import './Procedure.css';
import first from './numball-01.png';
import second from './numball-02.png';

class Procedure extends Component {
  constructor(props) {
    super(props);
    this.images = [first, second];
  }

  render() {
    return (
      <div className='procedure-header'>
        <div className="procedure-title">
          <img src={this.images[this.props.order - 1]} />
          <h3>{this.props.title}</h3>
        </div>

        <div className="procedure-description">
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default Procedure; 