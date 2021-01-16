import React from 'react';

import { ChromePicker } from 'react-color';

class Gradient extends React.Component {
    state = {
        background: '#fff',
        displayColorPicker: false
    };

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };
    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };
    
    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
    };
    handleChange = (color, event) => {
        console.log(color)
    }
    
    render = () => {
        return (
            <div>
                { this.state.displayColorPicker ? <div>
                    <ChromePicker
                        color={this.state.background}
                        onChangeComplete={this.handleChangeComplete}
                        onChange={this.handleChange}
                        disableAlpha
                    />
                </div> : null }
            </div>
        );
    }
}
export default Gradient;
