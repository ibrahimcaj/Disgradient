import rgb2hex from 'rgb2hex';

var UpdateColorValue = () => {
    var inputWrapper = document.getElementsByClassName('input-wrapper').item(0).children.item(0).children.item(2);
    
    for (let index = 0; index < inputWrapper.children.length; index++) {
        if (index === inputWrapper.children.length - 1) return;

        const colorElement = inputWrapper.children.item(index);

        if (colorElement.children.item(0)) {
            var colorBox = colorElement.children.item(0),
                colorInput = colorElement.children.item(1),
                colorToChange = (colorBox.getAttribute('style') === '') ? '#000000' : colorBox.getAttribute('style').replace('background-color: ', '').replace(';', '');
            
            colorToChange = rgb2hex(colorToChange).hex;
            
            colorInput.value = colorToChange;
        }
    }
}
export default UpdateColorValue;