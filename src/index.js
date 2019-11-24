import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import FuncApp from './FuncApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<FuncApp />, document.getElementById('root'));
registerServiceWorker();
