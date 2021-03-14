import React from 'react';

import GradientManager from './GradientManager.js';

var currentComponent = null;

class PointsManager extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            switchValue: true
        };
        currentComponent = this;

        this.setState = this.setState.bind(this);
    }

    getValue() {
        // ...
        
        if (currentComponent) return currentComponent.state.switchValue;
        else return false;
    }
    switchValue(newValue) {
        // ...

        if (currentComponent) currentComponent.setState(() => ({ switchValue: newValue }));
        return currentComponent.state.switchValue;
    }

    render() {
        // ...

        var switchElement = null;
        
        if (currentComponent.state.switchValue) {
            switchElement = (
                <div className="preview-wrapper-item-switch">
                    <div className="preview-wrapper-item-switch-item" style={{ border: '2px solid var(--preview-switch-border)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="preview-wrapper-item-switch-item-icon" viewBox="0 0 24 24">
                            <path d="M20 7H12L10.553 5.106C10.214 4.428 9.521 4 8.764 4H3C2.447 4 2 4.447 2 5V19C2 20.104 2.895 21 4 21H20C21.104 21 22 20.104 22 19V9C22 7.896 21.104 7 20 7Z"></path>
                        </svg>
                    </div>
                    <div className="preview-wrapper-item-switch-item" onClick={ () => this.switchValue(false) }>
                        <svg xmlns="http://www.w3.org/2000/svg" className="preview-wrapper-item-switch-item-icon" viewBox="0 0 20 23">
                            <path d="M19.487 5.126L10.487 0.126C10.184 -0.042 9.81798 -0.042 9.51498 0.126L0.514977 5.126C0.197977 5.302 0.000976562 5.636 0.000976562 5.999C0.000976562 6.693 0.114977 22.999 10.001 22.999C19.887 22.999 20.001 6.693 20.001 5.999C20.001 5.636 19.804 5.302 19.487 5.126ZM10.001 5.999C11.382 5.999 12.501 7.118 12.501 8.499C12.501 9.88 11.382 10.999 10.001 10.999C8.61998 10.999 7.50098 9.88 7.50098 8.499C7.50098 7.118 8.61998 5.999 10.001 5.999ZM6.25098 16C6.25098 13.699 7.69998 12.25 10.001 12.25C12.302 12.25 13.751 13.699 13.751 16H6.25098Z"></path>
                        </svg>
                    </div>
                </div>
            )
        } else {
            switchElement = (
                <div className="preview-wrapper-item-switch">
                    <div className="preview-wrapper-item-switch-item" onClick={ () => this.switchValue(true) }>
                        <svg xmlns="http://www.w3.org/2000/svg" className="preview-wrapper-item-switch-item-icon" viewBox="0 0 24 24">
                            <path d="M20 7H12L10.553 5.106C10.214 4.428 9.521 4 8.764 4H3C2.447 4 2 4.447 2 5V19C2 20.104 2.895 21 4 21H20C21.104 21 22 20.104 22 19V9C22 7.896 21.104 7 20 7Z"></path>
                        </svg>
                    </div>
                    <div className="preview-wrapper-item-switch-item" style={{ border: '2px solid var(--preview-switch-border)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="preview-wrapper-item-switch-item-icon" viewBox="0 0 20 23">
                            <path d="M19.487 5.126L10.487 0.126C10.184 -0.042 9.81798 -0.042 9.51498 0.126L0.514977 5.126C0.197977 5.302 0.000976562 5.636 0.000976562 5.999C0.000976562 6.693 0.114977 22.999 10.001 22.999C19.887 22.999 20.001 6.693 20.001 5.999C20.001 5.636 19.804 5.302 19.487 5.126ZM10.001 5.999C11.382 5.999 12.501 7.118 12.501 8.499C12.501 9.88 11.382 10.999 10.001 10.999C8.61998 10.999 7.50098 9.88 7.50098 8.499C7.50098 7.118 8.61998 5.999 10.001 5.999ZM6.25098 16C6.25098 13.699 7.69998 12.25 10.001 12.25C12.302 12.25 13.751 13.699 13.751 16H6.25098Z"></path>
                        </svg>
                    </div>
                </div>
            )
        }

        return (
            <div className="preview-wrapper">
                <p className="preview-wrapper-title">
                    Preview
                </p>
                <p className="preview-wrapper-description">
                    The Discord Folder and Role previews of your generated gradient.
                    <br />
                    Click on one of the items to copy it's HEX color.
                </p>
                <div className="preview-wrapper-item" onClick={ () => GradientManager.prototype.generateGradient() }>
                    { switchElement }
                </div>
                <div className="preview-wrapper-item">
                    <GradientManager />
                </div>
            </div>
        )
    }
}
export default PointsManager;
