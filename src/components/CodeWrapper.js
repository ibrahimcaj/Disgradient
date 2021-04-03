import React from 'react';

import CodeManager from '../utility/CodeManager.js';

import '../stylesheets/Theme.css';
import '../stylesheets/CodeWrapper.css';

class CodeWrapper extends React.Component {
    render() {
        return (
            <div className="code-wrapper" onClick={ () => CodeManager.prototype.insertCode() }>
                <div className="code-wrapper-button-wrapper">
                    <div className="code-wrapper-button-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M9.95263 16.9123L8.59323 18.3608L2.03082 12.2016L8.18994 5.63922L9.64826 7.00791L4.85783 12.112L9.95212 16.8932L9.95263 16.9123Z" />
                            <path d="M14.0474 16.9123L15.4068 18.3608L21.9692 12.2016L15.8101 5.63922L14.3517 7.00791L19.1422 12.112L14.0479 16.8932L14.0474 16.9123Z" />
                        </svg>
                    </div>
                    <CodeManager />
                </div>
            </div>
        );
    }
}
export default CodeWrapper;
