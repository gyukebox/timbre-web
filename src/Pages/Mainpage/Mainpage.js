import React from 'react';

import Background from '../../components/Background/Background';
import { MiddleCard, MainpageChart } from './Mainpage.subcomponents';

class MainPage extends React.Component {
  render() {
    return (
      <div className='content'>
        <Background type={1} loggedIn={false} />
        <MiddleCard />
        <MainpageChart />
      </div>
    );
  }
}

export default MainPage;