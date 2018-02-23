import React, { Component } from 'react';

import './Chartbody.css';

class ChartBody extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const dueDate = `D - ${this.props.dueDate}`;
    const prize = `${this.props.prize} 만원`;

    return (
      <div id="chart-content">
        <p className="due-date">{dueDate}</p>
        <p className="title">{this.props.title}</p>
        <p className="prize">{prize}</p>
        <p className="category">{this.props.category}</p>
      </div>
    );
  }
}

export default ChartBody;