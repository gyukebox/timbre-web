import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import addonBackgrounds from '@storybook/addon-backgrounds';

import Navbar from './Navbar';

const background = addonBackgrounds([
  { name: 'pink', value: '#ff6283', default: true },
  { name: 'orange', value: '#f48354' }
]);

storiesOf('Navbar', module)
  .addWithDoc('black, not logged in', Navbar,
    'Should render a navbar with black background color, with login link at right',
    () => <Navbar backgroundColor='black' status='not-logged-in' />
  )
  .addWithDoc('black, logged in', Navbar,
    'Should render a navbar with black background color, with user info at right',
    () => <Navbar backgroundColor='black' status='logged-in' />
  )
  .addDecorator(background)
  .addWithDoc('transparent, not logged in', Navbar,
    'Should render a navbar with transparent background color, with login link at right',
    () => <Navbar backgroundColor='transparent' status='not-logged-in' />
  )
  .addWithDoc('transparent, logged in', Navbar,
    'Should render a navbar with transparent background color, with user info at right',
    () => <Navbar backgroundColor='transparent' status='logged-in' />
  );