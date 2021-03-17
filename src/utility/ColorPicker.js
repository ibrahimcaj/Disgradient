import React from 'react';
import { ChromePicker } from 'react-color';

var currentComponent = null;

class ColorPicker extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            background: '#fff',
            displayColorPicker: false
        };
        currentComponent = this;

        this.setState = this.setState.bind(this);
    }

    handleChange = (color) => {
        currentComponent.setState({ background: color.hex });
    };
    handleChangeComplete = (color) => {
        currentComponent.setState({ background: color.hex });
    };

    handleClick = () => {
        currentComponent.setState({ displayColorPicker: true });
    };
    handleClose = () => {
        currentComponent.setState({ displayColorPicker: false });
    };

    render() {
        // ...

        return (
            <div className="colors-wrapper-item-input-color"></div>
        );
    }
}
export default ColorPicker;