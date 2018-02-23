import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import addonBackgrounds from '@storybook/addon-backgrounds';

import MainPage from './Mainpage/Mainpage';
import Register from './Register/Register';
import RecruitList from './Recruit/List/RecruitList';

// TODO add page stories

storiesOf('Pages', module)
  .addWithDoc('Main page', MainPage,
    'Main page(index.html)', () => <MainPage />
  )
  .add('Register first page', () => <Register />)
  .add('Recruit List Page', () => <RecruitList />);