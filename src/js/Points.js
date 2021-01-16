import React from 'react';

import Colors from './Colors';

var parentObject = null,
    pointsAmount = 2;

class Points extends React.Component {
    addPoint() {
        if (pointsAmount <= 0 || (pointsAmount + 1) <= 0) pointsAmount = 1;
        else pointsAmount += 1;

        if (parentObject) parentObject.forceUpdate();

        return pointsAmount;
    }
    removePoint() {
        if ((pointsAmount - 1) < Colors.prototype.getColors().length) pointsAmount = Colors.prototype.getColors().length;
        else if (pointsAmount <= 0 || (pointsAmount - 1) <= 0) pointsAmount = 1;
        else pointsAmount -= 1;

        if (parentObject) parentObject.forceUpdate();

        return pointsAmount;
    }
    getPoints() {
        return pointsAmount;
    }

    render() {
        parentObject = this.props.parentObject;

        return (
            <div className="input-content-item-text">
                {pointsAmount.toString()}
            </div>
        );
    }
}
export default Points;
