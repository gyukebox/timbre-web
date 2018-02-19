import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Background from './Background';

storiesOf('Background', module)
  .addWithDoc('Background Type 1, not logged in', Background,
    'Should render type 1 background, with not-logged-in navagation bar',
    () => <Background type={1} logedIn={false} />
  )
  .addWithDoc('Background Type 2, not loggd in', Background,
    'Should render type 2 background, with not-logged-in navagation bar',
    () => <Background type={2} loggedIn={false} />
  )
  .addWithDoc('Background Type 1, logged in', Background,
    'Should render type 1 background, with logged-in navagation bar',
    () => <Background type={1} loggedIn={true} />
  )
  .addWithDoc('Background Type 2, loggd in', Background,
    'Should render type 2 background, with logged-in navagation bar',
    () => <Background type={2} loggedIn={true} />
  );