import React from 'react';
import HexAlpha from "hex-alpha";

import '../index.css';
import '../stylesheets/Folders.css';

class Folder extends React.Component {
    render() {
        return (
            <div className="folder-item" key={this.props.index}>
                <div className="folder-item-servers" style={{ backgroundColor: HexAlpha(this.props.color, .4) }}>
                    <div className="folder-item-server" style={{ backgroundColor: this.props.theme }}></div>
                    <div className="folder-item-server" style={{ backgroundColor: this.props.theme }}></div>
                    <div className="folder-item-server" style={{ backgroundColor: this.props.theme }}></div>
                    <div className="folder-item-server" style={{ backgroundColor: this.props.theme }}></div>
                </div>
            </div>
        );
    }
}
export default Folder;