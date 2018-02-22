import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainPage from './Pages/Mainpage/Mainpage';

const App = () => (
  <BrowserRouter>
    <MainPage />
  </BrowserRouter>
);

export default App;
