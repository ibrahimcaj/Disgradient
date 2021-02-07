import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Codes from './Codes';

var folderArray = [
    (
        <CopyToClipboard id="folder-element0" text="#4f5660" key="0">
            <div className="folder-item" tag="clickable-item" onClick={(event) => { var currentTarget = event.currentTarget; currentTarget.style.border = '#4f5660 solid 1px'; setTimeout(() => { currentTarget.style.border = '#4f5660 solid 0px'; }, 1000); }}>
                <div className="folder-color" style={{ backgroundColor: "#4f5660" }}>
                    <div className="folder-icon">
                        <svg width="25" height="25" viewBox="0 0 25 25">
                            <path fill="currentColor" d="M20 7H12L10.553 5.106C10.214 4.428 9.521 4 8.764 4H3C2.447 4 2 4.447 2 5V19C2 20.104 2.895 21 4 21H20C21.104 21 22 20.104 22 19V9C22 7.896 21.104 7 20 7Z"></path>
                        </svg>
                    </div>
                </div>
                <div className="folder-text">#4f5660</div>
            </div>
        </CopyToClipboard>
    )
];
var parentObject = null;

class Folders extends React.Component {
    addFolder(folder) {
        folderArray.push((folder));

        return folderArray;
    }
    displayFolders() {
        if (parentObject) {
            parentObject.forceUpdate();

            Codes.insert();
        }

        return folderArray;
    }
    resetFolders() {
        folderArray = [];

        return folderArray;
    }
    getFolders() {
        return folderArray;
    }

    render() {
        parentObject = this.props.parentObject;

        return folderArray;
    }
}
export default Folders;