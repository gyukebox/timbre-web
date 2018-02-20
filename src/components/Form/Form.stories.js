import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Dropdown from './Dropdown';
import EmailField from './Emailfield';
import PasswordField from './Passwordfield';
import TextArea from './Textarea';
import TextField from './Textfield';

storiesOf('Form elements', module)
  .addWithDoc('Dropdown', Dropdown,
    'Dropdown form element', () => <Dropdown state='default' />
  )
  .addWithDoc('Email Field', EmailField,
    'Email input form element', () => <EmailField state='default' />
  )
  .addWithDoc('Password Field', PasswordField,
    'Password input form element', () => <PasswordField state='default' />
  )
  .addWithDoc('Text Area', TextArea,
    'Text area form element', () => <TextArea state='default' />
  )
  .addWithDoc('Text Field', EmailField,
    'Text input form element', () => <TextField state='default' />
  );