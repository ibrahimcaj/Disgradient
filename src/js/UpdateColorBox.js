function UpdateColorBox() {
    var inputWrapper = document.getElementById('input-wrapper').children.item(0).children.item(1);
    
    for (let index = 0; index < inputWrapper.children.length; index++) {
        if (index === inputWrapper.children.length - 1) return;

        const colorElement = inputWrapper.children.item(index).children.item(0),
            colorBox = colorElement.children.item(0),
            colorInput = colorElement.children.item(1);

        if (colorInput.value === '') colorBox.setAttribute('style', `background-color: #4f5660;`);
        else colorBox.setAttribute('style', `background-color: ${colorInput.value};`);
    }
}
export default UpdateColorBox;
