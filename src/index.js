import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/App/App';
import registerServiceWorker from './registerServiceWorker';
import Scrollbar from "react-smooth-scrollbar"

import './index.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import "font-awesome/css/font-awesome.min.css"

ReactDOM.render(
    <Scrollbar
        speed={1}
        damping={0.1}
        alwaysShowTracks={false}
        continuousScrolling={true}
        thumbMinSize={1}
        renderByPixels={true}    
    >
        <App />
    </Scrollbar>
    ,
    document.getElementById('root'));
registerServiceWorker();
