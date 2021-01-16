import React from 'react';

import Points from './Points';

import TinyGradient from 'tinygradient';

class Gradient extends React.Component {
    generateGradient() {
        var colorArray = Array.prototype.slice.call(document.getElementById('colors-menu').children.item(1).children);
            colorArray.pop();
            colorArray = colorArray.map((colorElement) => colorElement.children.item(0).children.item(1).value);
        
        var pointsAmount = Points.prototype.getPoints(),
            gradientArray = [];

        TinyGradient(colorArray).rgb(pointsAmount).forEach((colorObject) => {
            gradientArray.push(`#${colorObject.toHex()}`);
        });

        return gradientArray;   
    }
}
export default Gradient;
