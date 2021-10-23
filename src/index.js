import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Content from './components/Content';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './other/reportWebVitals';

import './index.css';

const RenderLoader = () => <p>Loading... Please wait.</p>;

// eslint-disable-next-line no-extend-native
Array.prototype.move = function(oldIndex, newIndex) {
    if (oldIndex >= this.length) {
        var k = newIndex - this.length + 1;

        while (k--) {
            this.push(undefined);
        }
    }
    
    this.splice(newIndex, 0, this.splice(oldIndex, 1)[0]);
    return this;
};

ReactDOM.render(
    <React.StrictMode>
        <Suspense callback={ RenderLoader() }>
            <Header />

            <Content />
        </Suspense>
    </React.StrictMode>,
    document.body
);

serviceWorkerRegistration.register();
reportWebVitals();