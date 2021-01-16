import React from 'react';
import ReactDOM from 'react-dom';

import TopWrapper from './js/TopWrapper';
import BottomWrapper from './js/BottomWrapper';
import reportWebVitals from './other/reportWebVitals';

import './css/index.css';

ReactDOM.render(
    <React.StrictMode>
        <TopWrapper />
        <BottomWrapper />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
