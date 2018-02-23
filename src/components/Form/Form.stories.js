import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Dropdown from './Dropdown/Dropdown';
import EmailField from './Email/Emailfield';
import PasswordField from './Password/Passwordfield';
import TextArea from './Textarea/Textarea';
import TextField from './Text/Textfield';

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
  .addWithDoc('Normal Text Field', EmailField,
    'Text input form element', () => <TextField state='default' size='normal' />
  )
  .addWithDoc('Long Text Field', EmailField,
    'Text input form element', () => <TextField state='default' size='long' />
  );