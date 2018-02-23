import { configure, setAddon } from '@storybook/react';
import addWithDoc from 'storybook-addon-props';

// automatically import all files ending in *.stories.js
const req = require.context(
  '../src',
  true,
  /\.stories\.(js|jsx)$/,
);

setAddon(addWithDoc);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
