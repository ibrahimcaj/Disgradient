import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import TinyGradient from 'tinygradient';

import ColorsManager from './ColorsManager.js';
import PointsManager from './PointsManager.js';
import SwitchManager from './SwitchManager.js';

import '../stylesheets/FolderPreview.css';
import '../stylesheets/RolePreview.css';

var currentComponent = null;

class GradientManager extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            gradientArray: [
                '#000000',
                '#000000'
            ]
        };
        currentComponent = this;

        this.setState = this.setState.bind(this);
    }

    getGradients() {
        // ...

        return currentComponent.state.gradientArray;
    }
    generateGradient() {
        // ...
        
        var colorArray = ColorsManager.prototype.getColors(true);
        
        var pointsAmount = PointsManager.prototype.getPointAmount(),
            gradientArray = [];

        TinyGradient(colorArray).rgb(pointsAmount).forEach((colorObject) => {
            gradientArray.push(`#${colorObject.toHex()}`);
        });

        // ---

        currentComponent.setState(() => ({ gradientArray: gradientArray }));
    }
    
    render() {
        // ...

        if (currentComponent.state.gradientArray.length > 0) {
            if (SwitchManager.prototype.getValue()) {
                var folderPreviewArray = [];

                currentComponent.state.gradientArray.forEach((gradientColor, gradientIndex) => {
                    folderPreviewArray.push(
                        <CopyToClipboard key={ gradientIndex } text={ gradientColor }>
                            <div className="folder-preview-wrapper-item" style={{ backgroundColor: gradientColor }}>
                                <div className="folder-preview-wrapper-item-child"></div>
                                <div className="folder-preview-wrapper-item-child"></div>
                                <div className="folder-preview-wrapper-item-child"></div>
                                <div className="folder-preview-wrapper-item-child"></div>
                            </div>
                        </CopyToClipboard>
                    );
                });

                return (
                    <div className="folder-preview-wrapper">
                        { folderPreviewArray }
                    </div>
                );
            } else {
                var rolePreviewArray = [];

                currentComponent.state.gradientArray.forEach((gradientColor, gradientIndex) => {
                    rolePreviewArray.push(
                        <CopyToClipboard key={ gradientIndex } text={ gradientColor }>
                            <div className="role-preview-wrapper-item">
                                <svg className="role-preview-wrapper-drag-icon" viewBox="0 0 4 14">
                                    <g>
                                        <ellipse cx="3.75" cy="1" rx="1.125" ry="1.08333333"></ellipse>
                                        <ellipse cx="3.75" cy="4.61111107" rx="1.125" ry="1.08333333"></ellipse>
                                        <ellipse cx="0" cy="4.61111107" rx="1.125" ry="1.08333333"></ellipse>
                                        <ellipse cx="3.75" cy="8.22222227" rx="1.125" ry="1.08333333"></ellipse>
                                        <ellipse cx="0" cy="8.22222227" rx="1.125" ry="1.08333333"></ellipse>
                                        <ellipse cx="3.75" cy="11.83333337" rx="1.125" ry="1.08333333"></ellipse>
                                        <ellipse cx="0" cy="11.83333337" rx="1.125" ry="1.08333333"></ellipse>
                                        <ellipse cx="0" cy="1" rx="1.125" ry="1.08333333"></ellipse>
                                    </g>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill={ gradientColor } className="role-preview-wrapper-role-icon" viewBox="0 0 20 23">
                                    <path d="M19.487 5.126L10.487 0.126C10.184 -0.042 9.81798 -0.042 9.51498 0.126L0.514977 5.126C0.197977 5.302 0.000976562 5.636 0.000976562 5.999C0.000976562 6.693 0.114977 22.999 10.001 22.999C19.887 22.999 20.001 6.693 20.001 5.999C20.001 5.636 19.804 5.302 19.487 5.126ZM10.001 5.999C11.382 5.999 12.501 7.118 12.501 8.499C12.501 9.88 11.382 10.999 10.001 10.999C8.61998 10.999 7.50098 9.88 7.50098 8.499C7.50098 7.118 8.61998 5.999 10.001 5.999ZM6.25098 16C6.25098 13.699 7.69998 12.25 10.001 12.25C12.302 12.25 13.751 13.699 13.751 16H6.25098Z"></path>
                                </svg>
                                <p className="role-preview-wrapper-role-name">
                                    #{ gradientIndex + 1 } - { gradientColor }
                                </p>
                                <div className="role-preview-wrapper-member">
                                    <p className="role-preview-wrapper-member-amount">
                                        1
                                    </p>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="role-preview-wrapper-member-icon" viewBox="0 0 24 24">
                                        <path d="M16.002 8.00598C16.002 10.211 14.208 12.006 12.002 12.006C9.79695 12.006 8.00195 10.211 8.00195 8.00598C8.00195 5.80098 9.79595 4.00598 12.002 4.00598C14.208 4.00598 16.002 5.80098 16.002 8.00598ZM4.00195 19.006C4.00195 15.473 7.29195 13.006 12.002 13.006C16.713 13.006 20.002 15.473 20.002 19.006V20.006H4.00195V19.006Z"></path>
                                    </svg>
                                </div>
                                <div className="role-preview-wrapper-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="role-preview-wrapper-button-icon" viewBox="0 0 24 24">
                                    <path d="M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z"></path>
                                    </svg>
                                </div>
                                <div className="role-preview-wrapper-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="role-preview-wrapper-button-icon" viewBox="0 0 24 24">
                                        <path d="M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z"></path>
                                    </svg>
                                </div>
                            </div>
                        </CopyToClipboard>
                    );
                });

                return (
                    <div className="role-preview-wrapper">
                        { rolePreviewArray }
                    </div>
                );
            }
        } else {
            return (
                <p>Please click generate to update your preview.</p>
            );
        }
    }
}
export default GradientManager;
