// Application entrypoint.

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './src/routes.jsx'

ReactDOM.render(
<Router>
  <App>
    <Routes />
  </App>
</Router>, document.getElementById('react-root'));