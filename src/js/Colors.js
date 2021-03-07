import React from 'react';

import Points from './Points';
import UpdateColorBox from './UpdateColorBox';

var colorArray = [
    (
        <div className="input-content-item-double-column" key="0">
            <div className="input-content-item-double-child">
                <div className="input-color-box" style={{ backgroundColor: '#4f5660' }}></div>
                <input className="input-color-hex" onChange={UpdateColorBox} placeholder="#000000" maxLength="7"></input>
            </div>
        </div>
    ),
    (
        <div className="input-content-item-double-column" key="1">
            <div className="input-content-item-double-child">
                <div className="input-color-box" style={{ backgroundColor: '#4f5660' }}></div>
                <input className="input-color-hex" onChange={UpdateColorBox} placeholder="#000000" maxLength="7"></input>
            </div>
        </div>
    )
];
var rawColorArray = [
    '#4f5660',
    '#4f5660'
];

var parentObject = null;

class Colors extends React.Component {
    addColor(color, rawColor) {
        colorArray.push((color));
        rawColorArray.push(rawColor);

        if (parentObject) parentObject.forceUpdate();

        if (Points.prototype.getPoints() < colorArray.length) Points.prototype.addPoint();

        return colorArray;
    }
    getColors(raw = false) {
        if (raw) return rawColorArray;
        else return colorArray;
    }
    updateRawColors(newRawArray) {
        rawColorArray = newRawArray;
    }

    render() {
        parentObject = this.props.parentObject;

        return colorArray;
    }
}
export default Colors;