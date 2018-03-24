import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App myButt="too large" name="Dan" matingCall={function(){ return <strong>moooo</strong> } }/>, document.getElementById('root'));
registerServiceWorker();
