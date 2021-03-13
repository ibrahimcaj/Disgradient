import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import HeaderContainer from './components/HeaderContainer';
import InputWrapper from './components/InputWrapper';
import PreviewWrapper from './components/PreviewWrapper';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './other/reportWebVitals';

import './index.css';
import './stylesheets/Theme.css';
import './stylesheets/Content.css';

const RenderLoader = () => <p>Loading... Please wait.</p>;

ReactDOM.render(
    <React.StrictMode>
        <Suspense callback={ RenderLoader() }>
            <HeaderContainer />
            <div className="content-container">
                <div className="content-container-item">
                    <InputWrapper />
                </div>
                <div className="content-container-item">
                    <PreviewWrapper />
                </div>
            </div>
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorkerRegistration.register();

reportWebVitals();
