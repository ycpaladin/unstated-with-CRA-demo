import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'unstated'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const supportsHistory = 'pushState' in window.history

ReactDOM.render((
  <Provider>
    <BrowserRouter basename='/' forceRefresh={!supportsHistory}>
      <App />
    </BrowserRouter>
  </Provider>), 
  document.getElementById('root'));
registerServiceWorker();
