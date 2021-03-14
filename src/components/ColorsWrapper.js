import React from 'react';

import ColorsManager from '../utility/ColorsManager.js';

import '../stylesheets/Theme.css';
import '../stylesheets/ColorsWrapper.css';

class ColorsWrapper extends React.Component {
    render() {
        // ...

        return (
            <div className="colors-wrapper">
                <ColorsManager />
                <div className="horizontal-separator"></div>
                <div className="points-wrapper-button-wrapper">
                    <div className="points-wrapper-button" onClick={ () => ColorsManager.prototype.addColor('#000000') }>
                        <div className="points-wrapper-button-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" className="points-wrapper-button-icon" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                            </svg>
                        </div>
                    </div>
                    <div className="points-wrapper-button" onClick={ () => ColorsManager.prototype.removeColor() }>
                        <div className="points-wrapper-button-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ColorsWrapper;
