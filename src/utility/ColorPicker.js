import React from 'react';
import ColorPalette, { useColor } from 'react-color-palette';

export const ColorPicker = () => {
    const [color, setColor] = useColor("hex", "#121212");

    var showColorPicker = false;
    
    var handleChange = (newColor) => {
        setColor(newColor);
    }

    var handleClick = () => {
        showColorPicker = true;
    };
    var handleClose = () => {
        showColorPicker = false;
    };

    return (
        <div className="colors-wrapper-item-input-color" style={{ zIndex: '2' }} onClick={ handleClick }>
            <div style={{ width: '15px' }}>
                { (showColorPicker) ? (<ColorPalette width={150} height={100} color={color} onChange={handleChange} hideHSB dark />) : null }
            </div>
        </div>
    );
};
export default ColorPicker;