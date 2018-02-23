import React, { Component } from 'react';
import axios from 'axios';

import './Mainpage.css';
import clientImg from './client.png';
import creatorImg from './creator.png';
import banner from './banner.png';
import participant from './participant.png';
import deadline from './deadline.png';

import ChartBody from '../../components/Chart/Chartbody';

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

const MainChartTitle = ({ position }) => {
  const images = [participant, deadline];
  const chartTitles = [
    '이번 주 가장 인기있는 구인',
    '마감이 코 앞인 구인'
  ];
  return (
    <div className='main-chart-title'>
      <img src={images[position]} />
      <h3>{chartTitles[position]}</h3>
    </div>
  );
};

export class MainpageChart extends Component {
  constructor(props) {
    super(props);
    this.ajax = axios.create({
      baseURL: 'http://localhost:8080/',
      timeout: 1000
    });
    this.state = {
      popular: [],
      immediate: []
    };
    this.calculateDate = this.calculateDate.bind(this);
  }

  calculateDate(date) {
    return Math.trunc((date - Date.now()) / (1000 * 60 * 60 * 24));
  }

  componentWillMount() {
    this.ajax
      .get('/chart')
      .then(response => {
        this.setState({
          popular: response.data.prize,
          immediate: response.data.immediate
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className='main-chart-wrapper'>
        <div className='main-chart left'>
          <MainChartTitle position={0} />
          <div className='main-chart-body'>
            {
              this.state.popular
                .map((element) => <ChartBody
                  dueDate={this.calculateDate(new Date(element.recruit_due_date))}
                  title={element.title}
                  prize={element.amount / 10000}
                  category={element.category} />
                )
            }
          </div>
        </div>

        <div className='main-chart'>
          <MainChartTitle position={1} />
          <div className='main-chart-body'>
            {
              this.state.immediate
                .map((element) => <ChartBody
                  dueDate={this.calculateDate(new Date(element.recruit_due_date))}
                  title={element.title}
                  prize={element.amount / 10000}
                  category={element.category} />
                )
            }
          </div>
        </div>
      </div>
    );
  }
}
