var UpdateColorValue = () => {
    var inputWrapper = document.getElementsByClassName('input-wrapper').item(0).children.item(0).children.item(2);
    
    for (let index = 0; index < inputWrapper.children.length; index++) {
        if (index === inputWrapper.children.length - 1) return;

        const colorElement = inputWrapper.children.item(index);

        if (colorElement.children.item(0)) {
            var colorInput = colorElement.children.item(1),
                colorToChange = (colorInput.value === '') ? '#000000' : colorInput.value;

            colorInput = colorToChange;
        }
    }
}
export default UpdateColorValue;