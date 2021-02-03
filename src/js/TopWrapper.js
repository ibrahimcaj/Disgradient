import React from 'react';

//import Folders from './Folders';
//import Util from './Util';

const Folders = React.lazy(() => import('./Folders'));
const Util = React.lazy(() => import('./Util'));

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
                                <div className="button-content-item-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 16 16">
                                        <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.117 8.117 0 0 1-3.078.132 3.658 3.658 0 0 1-.563-.135 1.382 1.382 0 0 1-.465-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.393-.197.625-.453.867-.826.094-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.2-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.175-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default TopWrapper;
