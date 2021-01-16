import React from 'react';

import Colors from './Colors';
import UpdateColorBox from './UpdateColorBox';

function AddBlankColor() {
    Colors.prototype.addColor((
        <div className="input-content-item-double-column" key={(Colors.prototype.getColors().length).toString()}>
            <div className="input-content-item-double-child">
                <div className="input-color-box" style={{ backgroundColor: '#4f5660' }}></div>
                <input className="input-color-hex" onChange={UpdateColorBox} placeholder="#000000" maxLength="7"></input>
            </div>
        </div>
    ));

    return;
}
export default AddBlankColor;
