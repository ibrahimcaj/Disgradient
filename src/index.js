import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import HeaderContainer from './components/HeaderContainer';
import InputWrapper from './components/InputWrapper';
import PreviewWrapper from './components/PreviewWrapper';

import ColorsManager from './utility/ColorsManager.js';
import PointsManager from './utility/PointsManager.js';
import CodeManager from './utility/CodeManager.js';
import GradientManager from './utility/GradientManager.js';
import UpdateColorValue from './utility/UpdateColorValue.js';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './other/reportWebVitals';

import './index.css';
import './stylesheets/Theme.css';
import './stylesheets/Content.css';

const RenderLoader = () => <p>Loading... Please wait.</p>;

// ---

const URLParameters = new URLSearchParams(window.location.search);

if (URLParameters.get('code')) {
    CodeManager.prototype.fetchCodes(URLParameters.get('code')).then((codeObject) => {
        if (codeObject) {
            ColorsManager.prototype.updateColors(codeObject.colors);
            PointsManager.prototype.setPointAmount(codeObject.points);
            
            CodeManager.prototype.setCode(codeObject.id);
            GradientManager.prototype.generateGradient();

            UpdateColorValue();
        }
    });
}

// ---

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
