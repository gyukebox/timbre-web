import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import MainPage from './Pages/Mainpage/Mainpage';
import RecruitList from './Pages/Recruit/List/RecruitList';

const App = () => (
  <div>
    <Route exact path='/' component={MainPage} />
    <Route exact path='/recruits' component={RecruitList} />
  </div>
);

export default App;
