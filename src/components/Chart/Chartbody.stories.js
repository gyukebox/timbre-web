import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import addonBackgrounds from '@storybook/addon-backgrounds';

import ChartBody from './Chartbody';

const background = addonBackgrounds([
  { name: 'grey', value: '#f7f7f7', default: true }
]);

storiesOf('Chart body', module)
  .addDecorator(background)
  .addWithDoc('Short chart body', ChartBody,
    'Short chart body: used for recruit list page',
    () => <ChartBody
      size='short'
      dueDate={8}
      title='배틀그라운드...'
      category='더빙'
      prize={100} />
  )
  .addWithDoc('Long chart body', ChartBody,
    'Long chart body: used for main page',
    () => <ChartBody
      size='long'
      dueDate={8}
      title='배틀그라운드 해설 더빙 모집'
      category='더빙'
      prize={100} />
  );