import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
