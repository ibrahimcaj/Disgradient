import React from 'react';

import Folder from '../images/Folder.png';
import FolderRick from '../images/FolderRick.png';

import '../stylesheets/Theme.css';
import '../stylesheets/HeaderContainer.css';

class Header extends React.Component {
    render() {
        return (
            <div className="header-container">
                <div className="header-container-item">
                    <img className="header-container-icon" src={ Folder } width="60px" onClick={ () => document.body.setAttribute('class', (document.body.getAttribute('class') === 'dark-theme') ? 'light-theme' : 'dark-theme') } onMouseOver={(event) => ((event).currentTarget.src = FolderRick)} onMouseOut={(event) => ((event).currentTarget.src = Folder)} alt="Disgradient Logo" />
                    <span className="header-container-title">
                        Disgradient
                    </span>
                    <span className="header-container-description">
                        Create a gradient for your Discord folders, roles and more!
                    </span>
                </div>
            </div>
        );
    }
}
export default Header;
