import React from 'react';

import ColorsManager from '../utility/ColorsManager.js';

var currentComponent = null;

class PointsManager extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            pointsAmount: 2
        };
        currentComponent = this;

        this.setState = this.setState.bind(this);
    }

    getPointAmount() {
        // ...
        
        return currentComponent.state.pointsAmount;
    }
    addPointAmount() {
        // ...

        if (currentComponent.state.pointsAmount >= 100) return currentComponent.state.pointsAmount;
        else if (currentComponent.state.pointsAmount === 1) return currentComponent.state.pointsAmount;
        else {
            currentComponent.setState((stateObject) => ({ pointsAmount: stateObject.pointsAmount + 1 }));
            
            return currentComponent.state.pointsAmount;
        }
    }
    removePointAmount() {
        // ...

        if (currentComponent.state.pointsAmount === ColorsManager.prototype.getColors().length) return currentComponent.state.pointsAmount;
        else {
            currentComponent.setState((stateObject) => ({ pointsAmount: stateObject.pointsAmount - 1 }));

            return currentComponent.state.pointsAmount;
        }
    }
    setPointAmount(pointsAmount = currentComponent.state.pointsAmount) {
        // ...

        currentComponent.setState(() => ({ pointsAmount: pointsAmount }));
        return currentComponent.state.pointsAmount;
    }

    render() {
        // ...

        return currentComponent.state.pointsAmount;
    }
}
export default PointsManager;
