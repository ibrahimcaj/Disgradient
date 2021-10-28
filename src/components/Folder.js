import React from 'react';
import HexAlpha from "hex-alpha";

import '../index.css';
import '../stylesheets/Folders.css';

class Folder extends React.Component {
    render() {
        return (
            <div class="folder-item" key={this.props.index}>
                <div class="folder-item-servers" style={{ backgroundColor: HexAlpha(this.props.color, .4) }}>
                    <div class="folder-item-server" style={{ backgroundColor: this.props.theme }}></div>
                    <div class="folder-item-server" style={{ backgroundColor: this.props.theme }}></div>
                    <div class="folder-item-server" style={{ backgroundColor: this.props.theme }}></div>
                    <div class="folder-item-server" style={{ backgroundColor: this.props.theme }}></div>
                </div>
            </div>
        );
    }
}
export default Folder;