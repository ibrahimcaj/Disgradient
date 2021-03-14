import React from 'react';

import PointsManager from './PointsManager.js';
import GradientManager from './GradientManager.js';
import UpdateColorBox from './UpdateColorBox.js';

var currentComponent = null;

class ColorsManager extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            colorArray: [
                (
                    <div className="colors-wrapper-item" key="0">
                        <div className="colors-wrapper-item-color"></div>
                        <input className="colors-wrapper-item-input" onChange={ () => { UpdateColorBox(); GradientManager.prototype.generateGradient(); } } placeholder="#000000" maxLength="7" />
                    </div>
                ),
                (
                    <div className="colors-wrapper-item" key="1">
                        <div className="colors-wrapper-item-color"></div>
                        <input className="colors-wrapper-item-input" onChange={ () => { UpdateColorBox(); GradientManager.prototype.generateGradient(); } } placeholder="#000000" maxLength="7" />
                    </div>
                )
            ],
            rawColorArray: [
                '#000000',
                '#000000'
            ]
        };
        currentComponent = this;

        this.setState = this.setState.bind(this);
    }

    getColors(rawColors = false) {
        // ...

        if (rawColors) return currentComponent.state.rawColorArray;
        else return currentComponent.state.colorArray;
    }
    addColor(hexColor) {
        // ...

        var colorArray = currentComponent.state.colorArray,
            rawColorArray = currentComponent.state.rawColorArray;

        if (currentComponent.state.colorArray.length === 25) return currentComponent.state.colorArray;

        colorArray.push(
            <div className="colors-wrapper-item" key={ colorArray.length }>
                <div className="colors-wrapper-item-color" style={{ backgroundColor: hexColor }}></div>
                <input className="colors-wrapper-item-input" onChange={ () => { UpdateColorBox(); GradientManager.prototype.generateGradient(); } } placeholder="#000000" maxLength="7" />
            </div>
        );
        rawColorArray.push(hexColor);

        if (PointsManager.prototype.getPointAmount() < currentComponent.state.colorArray.length) PointsManager.prototype.setPointAmount(currentComponent.state.colorArray.length);

        currentComponent.setState(() => ({
            colorArray: colorArray,
            rawColorArray: rawColorArray
        }));

        return currentComponent.state.colorArray;
    }
    removeColor() {
        // ...

        var colorArray = currentComponent.state.colorArray,
            rawColorArray = currentComponent.state.rawColorArray;

        if (colorArray.length === 2) return currentComponent.state.colorArray;
        
        colorArray.pop();
        rawColorArray.pop();

        currentComponent.setState(() => ({
            colorArray: colorArray,
            rawColorArray: rawColorArray
        }));

        return currentComponent.state.colorArray;
    }
    updateColors(newColorArray, rawColors = false) {
        // ...

        if (rawColors) {
            currentComponent.setState((stateObject) => ({
                colorArray: stateObject.colorArray,
                rawColorArray: newColorArray
            }));

            return currentComponent.state.rawColorArray;
        } else {
            currentComponent.setState((stateObject) => ({
                colorArray: newColorArray,
                rawColorArray: stateObject.rawColorArray
            }));

            return currentComponent.state.colorArray;
        }
    }

    render() {
        // ...

        return currentComponent.state.colorArray;
    }
}
export default ColorsManager;
