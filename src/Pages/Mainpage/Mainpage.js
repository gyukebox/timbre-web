import React from 'react';

import Background from '../../components/Background/Background';
import Button from '../../components/Button/Button';
import { MiddleCard, MainpageChart } from './Mainpage.subcomponents';

class MainPage extends React.Component {
  render() {
    return (
      <div className='content'>
        <Background type={1} loggedIn={false} />
        <MiddleCard />
        <MainpageChart />
        <div className='more-button-wrapper'>
          <Button value='구인 더보기' />
        </div>
      </div>
    );
  }
}

export default MainPage;