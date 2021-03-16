import React from 'react';

import ColorsWrapper from './ColorsWrapper.js';
import PointsWrapper from './PointsWrapper.js';
import CodeWrapper from './CodeWrapper.js';

import '../stylesheets/Theme.css';
import '../stylesheets/Tooltip.css';
import '../stylesheets/InputWrapper.css';

class InputWrapper extends React.Component {
    render() {
        return (
            <div className="input-wrapper" style="background-color: var(--secondary-background-color);">
                <div className="input-wrapper-item">
                    <p className="input-wrapper-title">
                        Colors
                    </p>
                    <p className="input-wrapper-description">
                        The colors that you want to create your gradient with.
                    </p>
                    <ColorsWrapper />
                </div>
                <div className="input-wrapper-item">
                    <p className="input-wrapper-title">
                        Points
                    </p>
                    <p className="input-wrapper-description">
                        The amount of colors you want your gradient to have.
                    </p>
                    <PointsWrapper />
                </div>
                <div className="input-wrapper-item">
                    <p className="input-wrapper-title">
                        Gradient Code
                    </p>
                    
                    <p className="input-wrapper-description">
                        Your code you can use to create gradient roles in your Discord server 
                        <br />
                        with our <a href="https://discord.com/api/oauth2/authorize?client_id=725639183246557254&permissions=0&scope=bot%20applications.commands">Discord bot</a>! Click below to generate your code. To copy it, 
                        <br />
                        click the button again.
                    </p>
                    <CodeWrapper />
                </div>
                <div className="input-wrapper-item">
                    <p className="input-wrapper-copyright">
                        © 2020/21 Vanished (<a href="https://github.com/vanishedvan">GitHub</a>)
                    </p>
                    <p className="input-wrapper-note">
                        Disgradient is not affiliated with Discord.
                    </p>
                </div>
            </div>
        );
    }
}
export default InputWrapper;
