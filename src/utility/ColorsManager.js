import React from 'react';

import PointsManager from './PointsManager.js';
import GradientManager from './GradientManager.js';
import UpdateColorBox from './UpdateColorBox.js';

import ColorPicker from './ColorPicker.js';

var currentComponent = null;

class ColorsManager extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            colorArray: [
                '#000000',
                '#000000'
            ],
            displayColorPicker: false
        };
        currentComponent = this;

        this.setState = this.setState.bind(this);
    }

    getColors() {
        // ...

        return currentComponent.state.colorArray;
    }
    addColor(hexColor) {
        // ...

        var colorArray = currentComponent.state.colorArray;

        if (currentComponent.state.colorArray.length === 25) return currentComponent.state.colorArray;

        colorArray.push(hexColor);

        if (PointsManager.prototype.getPointAmount() < currentComponent.state.colorArray.length) PointsManager.prototype.setPointAmount(currentComponent.state.colorArray.length);

        currentComponent.setState(() => ({
            colorArray: colorArray
        }));

        return currentComponent.state.colorArray;
    }
    removeColor() {
        // ...

        var colorArray = currentComponent.state.colorArray;

        if (colorArray.length === 2) return currentComponent.state.colorArray;
        
        colorArray.pop();

        currentComponent.setState(() => ({
            colorArray: colorArray
        }));

        return currentComponent.state.colorArray;
    }
    updateColors(newColorArray) {
        // ...

        currentComponent.setState(() => ({
            colorArray: newColorArray
        }));

        return currentComponent.state.colorArray;
    }

    render() {
        // ...

        var colorArray = [];
        
        currentComponent.state.colorArray.forEach((hexColor) => {
            colorArray.push(
                <div className="colors-wrapper-item" key={ colorArray.length }>
                    <div className="colors-wrapper-item-color" style={{ backgroundColor: hexColor }}></div>
                    <div className="colors-wrapper-item-input-wrapper">
                        <input className="colors-wrapper-item-input" onChange={ () => { UpdateColorBox(); GradientManager.prototype.generateGradient(); } } placeholder="#000000" maxLength="7" />
                        <ColorPicker />
                    </div>
                </div>
            );
        });

        return colorArray;
    }
}
export default ColorsManager;
