import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/App/App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import "font-awesome/css/font-awesome.min.css"

ReactDOM.render(<App />,document.getElementById('root'));
registerServiceWorker();
