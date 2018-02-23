import React, { Component } from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import { Selector, RecruitListChart, RecruitDetailCard } from './RecruitList.subcomponents';

class RecruitList extends Component {
  render() {
    return (
      <div className='content'>
        <Navbar status='logged-in' />
        <Selector />
        <RecruitListChart />

        <div id='recruit-card-wrapper'>
          <RecruitDetailCard category='더빙' mood='웃긴'
            title='배틀그라운드 해설 더빙 모집'
            description='배틀그라운드 대회 해설을 더욱 맛깔나게 더빙하실 수 있는 분을 모집합니다요!'
            prize={69} people={12} dueDate={8} />

          <RecruitDetailCard category='더빙' mood='활기찬'
            title='바디랭귀지 교육용 영상 성인 남자 배우역 더빙'
            description='지적장애인(7~8세 지능)들의 의사소통을 원할하게 하기 위해 개발한 바디랭귀지 교육용 영상입니다.'
            prize={1000} people={100} dueDate={23} />

          <RecruitDetailCard category='더빙' mood='웃긴'
            title='배틀그라운드 해설 더빙 모집'
            description='배틀그라운드 대회 해설을 더욱 맛깔나게 더빙하실 수 있는 분을 모집합니다요!'
            prize={69} people={12} dueDate={8} />

          <RecruitDetailCard category='더빙' mood='웃긴'
            title='배틀그라운드 해설 더빙 모집'
            description='배틀그라운드 대회 해설을 더욱 맛깔나게 더빙하실 수 있는 분을 모집합니다요!'
            prize={69} people={12} dueDate={8} />

          <RecruitDetailCard category='더빙' mood='웃긴'
            title='배틀그라운드 해설 더빙 모집'
            description='배틀그라운드 대회 해설을 더욱 맛깔나게 더빙하실 수 있는 분을 모집합니다요!'
            prize={69} people={12} dueDate={8} />
        </div>
      </div>
    );
  }
}

export default RecruitList;