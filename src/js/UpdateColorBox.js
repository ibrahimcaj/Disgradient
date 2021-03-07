import Colors from './Colors';

function UpdateColorBox() {
    var inputWrapper = document.getElementById('input-wrapper').children.item(0).children.item(1);
    
    var rawColors = Colors.prototype.getColors(true);

    for (let index = 0; index < inputWrapper.children.length; index++) {
        if (index === inputWrapper.children.length - 1) return;

        const colorElement = inputWrapper.children.item(index).children.item(0),
            colorBox = colorElement.children.item(0),
            colorInput = colorElement.children.item(1);
        
        if (colorInput.value === '') {
            rawColors[index] = '#4f5660';
            colorBox.setAttribute('style', `background-color: #4f5660;`);
        } else {
            rawColors[index] = colorInput.value;
            colorBox.setAttribute('style', `background-color: ${colorInput.value};`);
        }
    }

    Colors.prototype.updateRawColors(rawColors);
}
export default UpdateColorBox;
