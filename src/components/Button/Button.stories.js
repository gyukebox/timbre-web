import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';

storiesOf('Button', module)
  .addWithDoc('Normal, disabled', Button,
    'Should render a normal, disabled style button',
    () => <Button size='normal' state='disabled' value='의뢰 더보기' />
  )
  .addWithDoc('Normal, enabled-gradient', Button,
    'Should render a normal, enabled, and gradient style button',
    () => <Button size='normal' state='enabled-gradient' value='의뢰 더보기' />
  )
  .addWithDoc('Normal, enabled-solid', Button,
    'Should render a normal, enabled, and solid style button',
    () => <Button size='normal' state='enabled-solid' value='의뢰 더보기' />
  )
  .addWithDoc('Large, disabled', Button,
    'Should render a large, disabled style button',
    () => <Button size='large' state='disabled' value='로그인' />
  )
  .addWithDoc('Large, enabled-gradient', Button,
    'Should render a large, enabled, and gradient style button',
    () => <Button size='large' state='enabled-gradient' value='로그인' />
  )
  .addWithDoc('Large, enabled-solid', Button,
    'Should render a large, enabled, and solid style button',
    () => <Button size='large' state='enabled-solid' value='로그인' />
  );
