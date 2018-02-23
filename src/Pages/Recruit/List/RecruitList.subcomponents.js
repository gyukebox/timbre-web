import React, { Component } from 'react';
import axios from 'axios';

import './Selector.css';
import './Recruitlistchart.css';
import './Recruitdetailcard.css';

import deadline from './deadline.png';
import money from './money.png';
import participant from './participant.png';
import serious from './face-serious.png';

import ChartBody from '../../../components/Chart/Chartbody';

export class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doingEnabled: true,
      doneEnabled: false
    };
  }

  getClassName(idName) {
    const idState = idName === 'doing' ? this.state.doingEnabled : this.state.doneEnabled;
    return idState ? 'selector-selected' : 'selector-default';
  }

  // TODO add onclick listener

  render() {
    return (
      <div id='selector-wrapper'>
        <p id='selector-doing' className={this.getClassName('doing')}>진행 중인 구인</p>
        <p id='selector-done' className={this.getClassName('done')}>종료된 구인</p>
      </div>
    );
  }
}

const RecruitListChartTitle = ({ order, value }) => {
  const images = [deadline, participant, money];
  return (
    <div id='recruit-chart-title'>
      <img src={images[order - 1]} />
      <h5>{value}</h5>
    </div>
  );
};

export class RecruitListChart extends Component {
  constructor(props) {
    super(props);
    this.ajax = axios.create({
      baseURL: 'http://localhost:8080/',
      timeout: 1000
    });
    this.state = {
      immediate: [],
      prize: [],
      recent: []
    };
  }

  calculateDate(date) {
    return Math.trunc((date - Date.now()) / (1000 * 60 * 60 * 24));
  }

  componentWillMount() {
    this.ajax
      .get('/chart')
      .then(response => {
        this.setState({
          immediate: response.data.immediate,
          prize: response.data.prize,
          recent: response.data.recent
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div id='recruit-chart-wrapper'>
        <div id='recruit-chart'>
          <RecruitListChartTitle order={1} value='마감이 코 앞인 구인' />
          <div id='recruit-chart-content'>
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

        <div id='recruit-chart' className='center'>
          <RecruitListChartTitle order={2} value='가장 최근 등록된 구인' />
          <div id='recruit-chart-content'>
            {
              this.state.recent
                .map((element) => <ChartBody
                  dueDate={this.calculateDate(new Date(element.recruit_due_date))}
                  title={element.title}
                  prize={element.amount / 10000}
                  category={element.category} />
                )
            }
          </div>
        </div>

        <div id='recruit-chart'>
          <RecruitListChartTitle order={3} value='상금이 가장 많은 구인' />
          <div id='recruit-chart-content'>
            {
              this.state.prize
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

export const RecruitDetailCard = (props) => {
  const prize = `${props.prize} 만원`;
  const people = `${props.people} 명`;
  const dueDate = `D - ${props.dueDate}`;

  return (
    <div id='recruit-card'>
      <div id='recruit-card-image'>
        <img src={serious} />
      </div>

      <div id='recruit-card-detail'>
        <div className='category-mood'>
          <div className='category'>
            <p>{props.category}</p>
          </div>
          <div className='mood'>
            <p>{props.mood}</p>
          </div>
        </div>

        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>

      <div id='recruit-card-stat'>
        <div>
          <img src={money} />
          <p>작업비용</p>
          <h4>{prize}</h4>
        </div>

        <div>
          <img src={participant} />
          <p>참여자</p>
          <h4>{people}</h4>
        </div>

        <div>
          <img src={deadline} />
          <p>마감까지</p>
          <h4>{dueDate}</h4>
        </div>
      </div>
    </div>
  );
};
