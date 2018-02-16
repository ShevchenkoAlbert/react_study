import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Content from './components/Content';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('root'));
ReactDOM.render(<Content />, document.getElementById('section1'));
registerServiceWorker();
