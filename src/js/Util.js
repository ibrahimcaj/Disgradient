import React from 'react';

import Folders from './Folders';
import Gradient from './Gradient';

import { CopyToClipboard } from 'react-copy-to-clipboard';

var folderColors = [];

class Util extends React.Component {
    getFolderColors() {
        return folderColors;
    }
    generateFolders() {
        var gradientArray = Gradient.prototype.generateGradient();
    
        Folders.prototype.resetFolders();
    
        folderColors = [];
        gradientArray.forEach((gradientHex) => {
            var folderElement = (
                <CopyToClipboard id={`folder-element${Folders.prototype.getFolders().length}`} text={gradientHex} key={Folders.prototype.getFolders().length}>
                    <div className="folder-item" tag="clickable-item" onClick={(event) => { var currentTarget = event.currentTarget; currentTarget.style.border = `${gradientHex} solid 1px`; setTimeout(() => { currentTarget.style.border = `${gradientHex} solid 0px`; }, 1000); }}>
                        <div className="folder-color" style={{ backgroundColor: gradientHex }}>
                            <div className="folder-icon">
                                <svg width="25" height="25" viewBox="0 0 25 25">
                                    <path fill="currentColor" d="M20 7H12L10.553 5.106C10.214 4.428 9.521 4 8.764 4H3C2.447 4 2 4.447 2 5V19C2 20.104 2.895 21 4 21H20C21.104 21 22 20.104 22 19V9C22 7.896 21.104 7 20 7Z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="folder-text">{gradientHex}</div>
                    </div>
                </CopyToClipboard>
            );

            folderColors.push(gradientHex);
    
            Folders.prototype.addFolder(folderElement);
        });
    
        Folders.prototype.displayFolders();
    }
}
export default Util;