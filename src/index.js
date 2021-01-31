import React from 'react';
import ReactDOM from 'react-dom';

import TopWrapper from './js/TopWrapper';
import BottomWrapper from './js/BottomWrapper';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './other/reportWebVitals';

import './css/index.css';

ReactDOM.render(
    <React.StrictMode>
        <TopWrapper />
        <BottomWrapper />
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorkerRegistration.register();

reportWebVitals();
