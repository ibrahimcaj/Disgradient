import React from 'react';
import ReactTooltip from 'react-tooltip';

import Folders from './Folders';
import Util from './Util';
import Code from './Code';

import logo from '../logo.png';
import rick from '../logo-rick.png';
import '../css/TopWrapper.css';

class TopWrapper extends React.Component {
    render() {
        return (
            <div id="top-wrapper">
                <img src={logo} onMouseOver={(event) => ((event).currentTarget.src = rick)} onMouseOut={(event) => ((event).currentTarget.src = logo)} alt="Logo" width="96" height="96px" />
                
                <h1 className="text-title">Disgradient</h1>
                <p className="text-description">Create a gradient for your Discord folders, roles and more!</p>

                <div id="folder-wrapper">
                    <Folders parentObject={this} />
                </div>
                <div id="button-wrapper">
                    <div className="button-item">
                        <div className="button-content">
                            <div className="button-content-item" tag="clickable-item" onClick={Util.prototype.generateFolders}>
                                <div className="button-content-item-icon" data-tip="Generate Gradient">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
                                        <path d="M8.20348 2.00378C9.46407 2.00378 10.5067 3.10742 10.6786 4.54241L19.1622 13.0259L11.384 20.8041C10.2124 21.9757 8.31291 21.9757 7.14134 20.8041L2.8987 16.5615C1.72713 15.3899 1.72713 13.4904 2.8987 12.3188L5.70348 9.51404V4.96099C5.70348 3.32777 6.82277 2.00378 8.20348 2.00378ZM8.70348 4.96099V6.51404L7.70348 7.51404V4.96099C7.70348 4.63435 7.92734 4.36955 8.20348 4.36955C8.47963 4.36955 8.70348 4.63435 8.70348 4.96099ZM8.70348 10.8754V9.34247L4.31291 13.733C3.92239 14.1236 3.92239 14.7567 4.31291 15.1473L8.55555 19.3899C8.94608 19.7804 9.57924 19.7804 9.96977 19.3899L16.3337 13.0259L10.7035 7.39569V10.8754C10.7035 10.9184 10.7027 10.9612 10.7012 11.0038H8.69168C8.69941 10.9625 8.70348 10.9195 8.70348 10.8754Z" />
                                        <path d="M16.8586 16.8749C15.687 18.0465 15.687 19.946 16.8586 21.1175C18.0302 22.2891 19.9297 22.2891 21.1013 21.1175C22.2728 19.946 22.2728 18.0465 21.1013 16.8749L18.9799 14.7536L16.8586 16.8749Z" />
                                    </svg>
                                </div>
                                <ReactTooltip place="top" effect="solid" className="generate-tooltip" backgroundColor="#4f5660" />
                            </div>
                            <Code parentObject={this} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default TopWrapper;
