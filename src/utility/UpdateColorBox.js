import RGBtoHEX from 'rgb-hex';

import ColorsManager from './ColorsManager.js';

var UpdateColorBox = (updateInputValue = false) => {
    var inputWrapper = document.getElementsByClassName('input-wrapper').item(0).children.item(0).children.item(2);
    
    var rawColorArray = ColorsManager.prototype.getColors(true);

    for (let index = 0; index < inputWrapper.children.length; index++) {
        if (index === inputWrapper.children.length - 1) return;

        const colorElement = inputWrapper.children.item(index);

        if (colorElement.children.item(0)) {
            var colorBox = colorElement.children.item(0),
                colorInput = colorElement.children.item(1).children.item(0),
                colorInputColor = colorElement.children.item(1).children.item(1);

            if (updateInputValue) {
                colorInput.value = `#${RGBtoHEX(colorBox.getAttribute('style').replace('background-color: ', ''))}`;
            } else {
                if (!colorInput.value.startsWith('#') && colorInput.value !== '') colorInput.value = `#${colorInput.value.slice(0, 6).replace(/\W/g, '')}`;

                var colorToChange = (colorInput.value === '') ? '#000000' : colorInput.value;
                rawColorArray[index] = colorToChange;
                colorBox.setAttribute('style', `background-color: ${colorToChange};`);
                colorInputColor.setAttribute('style', `background-color: ${colorToChange};`);
            }
        }
    }

    ColorsManager.prototype.updateColors(rawColorArray, true);
}
export default UpdateColorBox;