import React, { useCallback, useEffect, useState } from "react";
import { ChromePicker } from 'react-color';

import ColorsManager from './ColorsManager.js';
import UpdateColorBox from './UpdateColorBox.js';

function isChildOf(ref, selector) {
    let cursor = ref;
    do {
        if (cursor.matches(selector)) {
            return true;
        }
    
        cursor = cursor.parentElement;
    } while (cursor);
  
    return false;
}

// TODO: FIX COLOR PICKER BEING ACTIVE ON LOAD

export const ColorPicker = (props) => {
    const [openedColorPicker, setOpenedColorPicker] = useState(0);

    function toggleColorPicker(id) {
        if (openedColorPicker === id) {
            setOpenedColorPicker(0);
        } else {
            setOpenedColorPicker(id);
        }
    }
    
    const handleClick = useCallback(
        (ev) => {
            if (openedColorPicker === 0) {
                return;
            }
        
            if (isChildOf(ev.target, ".colors-wrapper-item-input-color")) {
                UpdateColorBox(true);

                return;
            }
        
            setOpenedColorPicker(0);
        },
        [openedColorPicker],
    );
    
    useEffect(() => {
            window.addEventListener("click", handleClick);

            return () => window.removeEventListener("click", handleClick);
    }, [handleClick]);

    return (
        <div className="colors-wrapper-item-input-color" style={{ backgroundColor: props.color, zIndex: 4 }}>
            {/* { (showColorPicker) ? (<ColorPalette width={ 150 } height={ 100 } color={ color } onChange={ handleChange } />) : null } */}
        
            <button onClick={() => toggleColorPicker(props.id)} style={{ width: "100%", height: "100%", border: "none", backgroundColor: "transparent", borderRadius: "25px", cursor: "pointer" }}></button>
            {openedColorPicker === props.id && (
                <ChromePicker disableAlpha={true} color={props.color} onChange={(colorValue) => ColorsManager.prototype.updateColorsIndex(props.id, colorValue.hex)} />
            )}
        </div>
    );
};
export default ColorPicker;