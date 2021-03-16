import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import axios from 'axios';
import https from 'https';

import PointsManager from './PointsManager.js';
import ColorsManager from '../utility/ColorsManager.js';
import GradientManager from '../utility/GradientManager.js';

var currentComponent = null;

class CodeManager extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            currentCode: '2PtIBsqlpkaY4vx',
            lastGradientConfiguration: {
                colorArray: [],
                pointsAmount: 0,
                outputArray: []
            }
        };
        currentComponent = this;

        this.setState = this.setState.bind(this);
    }

    fetchCodes(id) {
        // ...

        return new Promise((resolve, reject) => {
            const Agent = new https.Agent({  
                rejectUnauthorized: false
            });
            axios.get(`https://disgradient-api.vanished.live/codes/${id}`, { httpsAgent: Agent }).then((responseObject) => {
                // ...
                
                resolve(responseObject.data);
            }).catch(console.error);
        });
    }
    insertCode() {
        // ...

        var colorArray = ColorsManager.prototype.getColors(true),
            pointsAmount = PointsManager.prototype.getPointAmount(),
            outputArray = GradientManager.prototype.getGradients();

        if (JSON.stringify({ colorArray: colorArray, pointsAmount: pointsAmount, outputArray: outputArray }) === JSON.stringify(currentComponent.state.lastGradientConfiguration)) return;

        currentComponent.setState(() => ({
            colorArray: colorArray,
            pointsAmount: pointsAmount,
            outputArray: outputArray
        }));

        const Agent = new https.Agent({  
            rejectUnauthorized: false
        });
        axios.post('https://disgradient-api.vanished.live/codes', {
            colors: colorArray,
            points: pointsAmount,
            codes: outputArray
        }, { httpsAgent: Agent }).then((responseObject) => {
            // ...

            currentComponent.setState(() => ({ currentCode: responseObject.data.id }));
            
            return responseObject.data;
        }).catch(console.error);
    }
    setCode(newCode) {
        // ...

        currentComponent.setState(() => ({ currentCode: newCode }));
        return currentComponent.state.currentCode;
    }

    render() {
        if (currentComponent.state.currentCode) {
            return (
                <CopyToClipboard text={ currentComponent.state.currentCode }>
                    <p className="code-wrapper-button-text">
                        { currentComponent.state.currentCode }
                    </p>
                </CopyToClipboard>
            )
        } else {
            return null;
        }
    }
}
export default CodeManager;
