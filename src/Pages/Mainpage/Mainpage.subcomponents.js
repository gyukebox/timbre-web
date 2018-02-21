import React, { Component } from 'react';

import './Mainpage.css';
import clientImg from './client.png';
import creatorImg from './creator.png';
import banner from './banner.png';

export const MiddleCard = () => {
  return (
    <div className="middle">
      <div className="col-20">
        <img src={clientImg} className="client" />
      </div>
      <div className="col-20">
        <img src={creatorImg} className="creator" />
      </div>
      <div className="col-40">
        <img src={banner} className="banner" />
      </div>
    </div>
  );
};

export class MainpageChart extends Component {
  render() {
    return (
      <div className='main-chart'>
      </div>
    );
  }
}
