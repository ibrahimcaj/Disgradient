import React from 'react';

import '../stylesheets/Theme.css';
import '../stylesheets/FolderPreview.css';

class FolderPreview extends React.Component {
    render() {
        return (
            <div className="folder-preview-wrapper">
                <div className="folder-preview-wrapper-item" style={{ backgroundColor: '#845ec266' }}>
                    <div className="folder-preview-wrapper-item-child"></div>
                    <div className="folder-preview-wrapper-item-child"></div>
                    <div className="folder-preview-wrapper-item-child"></div>
                    <div className="folder-preview-wrapper-item-child"></div>
                </div>
                <div className="folder-preview-wrapper-item" style={{ backgroundColor: '#c267aa66' }}>
                    <div className="folder-preview-wrapper-item-child"></div>
                    <div className="folder-preview-wrapper-item-child"></div>
                    <div className="folder-preview-wrapper-item-child"></div>
                    <div className="folder-preview-wrapper-item-child"></div>
                </div>
                <div className="folder-preview-wrapper-item" style={{ backgroundColor: '#ff6f9166' }}>
                    <div className="folder-preview-wrapper-item-child"></div>
                    <div className="folder-preview-wrapper-item-child"></div>
                    <div className="folder-preview-wrapper-item-child"></div>
                    <div className="folder-preview-wrapper-item-child"></div>
                </div>
                <div className="folder-preview-wrapper-item" style={{ backgroundColor: '#fd9d8666' }}>
                    <div className="folder-preview-wrapper-item-child"></div>
                    <div className="folder-preview-wrapper-item-child"></div>
                    <div className="folder-preview-wrapper-item-child"></div>
                    <div className="folder-preview-wrapper-item-child"></div>
                </div>
                <div className="folder-preview-wrapper-item" style={{ backgroundColor: '#fbca7c66' }}>
                    <div className="folder-preview-wrapper-item-child"></div>
                    <div className="folder-preview-wrapper-item-child"></div>
                    <div className="folder-preview-wrapper-item-child"></div>
                    <div className="folder-preview-wrapper-item-child"></div>
                </div>
                <div className="folder-preview-wrapper-item" style={{ backgroundColor: '#f9f87166' }}>
                    <div className="folder-preview-wrapper-item-child"></div>
                    <div className="folder-preview-wrapper-item-child"></div>
                    <div className="folder-preview-wrapper-item-child"></div>
                    <div className="folder-preview-wrapper-item-child"></div>
                </div>
            </div>
        );
    }
}
export default FolderPreview;
