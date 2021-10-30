import React from 'react';
import TinyGradient from 'tinygradient';
import SmoothList from 'react-smooth-list';

import Color from './Color';
import Points from './Points';
import Output from './Output';

import '../index.css';
import '../stylesheets/Layout.css';
import '../stylesheets/Content.css';

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            colors: ['#000000', '#000000'],
            points: 2,
            overlay: null
        };
    }

    addColor = (color = '#000000') => {
        this.setState({
            colors: [...this.state.colors, color],
            points: this.state.points < this.state.colors.length + 1 ? this.state.colors.length + 1 : this.state.points
        });

        this.scrollElement.scrollIntoView({ behavior: 'smooth' });
    }
    removeColor = (index = undefined) => {
        if (this.state.colors.length === 2) return;

        this.setState({
            colors: (index !== undefined) ? this.state.colors.filter((_, i) => i !== index) : this.state.colors.slice(0, this.state.colors.length - 1),
            points: this.state.points < this.state.colors.length ? this.state.colors.length - 1 : this.state.points
        });
    }
    updateColor = (index, color) => {
        var colors = this.state.colors;
        colors[index] = color;

        this.setState({
            colors: colors
        });
    }
    moveColor = (index, direction) => {
        if (direction === 'up' && index === 0) return;
        if (direction === 'down' && index === this.state.colors.length - 1) return;

        if (direction === 'up') direction = index - 1;
        if (direction === 'down') direction = index + 1;

        this.setState({
            colors: this.state.colors.move(index, direction)
        });
    }

    addPoint = () => {
        if (this.state.points >= 150) return;

        this.setState({
            points: this.state.points + 1
        });
    }
    removePoint = () => {
        if (this.state.points === this.state.colors.length) return;

        this.setState({
            points: this.state.points - 1
        });
    }

    setOverlay = (overlay) => {
        this.setState({
            overlay: overlay
        }, () => {
            setTimeout(() => document.getElementById('overlay').style.opacity = '1', 5);
        });
    }
    removeOverlay = () => {
        document.getElementById('overlay').style.opacity = '0';

        setTimeout(() => {
            this.setState({
                overlay: null
            });
        }, 200);
    }

    render() {
        var colors = TinyGradient(this.state.colors).rgb(this.state.points).map((color) => `#${color.toHex()}`);

        return (
            <>
                <div className="content">
                    <div className="left container">
                        <div style={{ width: '100%' }}>
                            <div className="item">
                                <p className="item-title">Colors</p>
                                <p className="item-description">The colors that are a part of the gradient</p>
            
                                <div className="colors-container">
                                    <SmoothList className="colors-animated">
                                        {this.state.colors.map((color, index) => <Color color={color} index={index} disabled={{ remove: this.state.colors.length === 2, up: index === 0, down: index === this.state.colors.length - 1 }} update={this.updateColor} remove={this.removeColor} move={this.moveColor} />)}
                                    </SmoothList>
                                </div>
                                <div className="color-management box">
                                    <div className="color-button" onClick={() => this.addColor()}>
                                        <svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.1499 0.599976C16.028 0.599976 15.1187 1.50941 15.1187 2.63123V14.8187H2.93115C1.80933 14.8187 0.899902 15.7281 0.899902 16.85C0.899902 17.9718 1.80933 18.8812 2.93115 18.8812H15.1187V31.0687C15.1187 32.1906 16.028 33.1 17.1499 33.1C18.2718 33.1 19.1812 32.1906 19.1812 31.0687V18.8812H31.3687C32.4905 18.8812 33.3999 17.9718 33.3999 16.85C33.3999 15.7281 32.4905 14.8187 31.3687 14.8187H19.1812V2.63123C19.1812 1.50941 18.2718 0.599976 17.1499 0.599976Z" />
                                        </svg>
                                    </div>
                                    <div className="color-button" onClick={() => this.removeColor()}>
                                        <svg viewBox="0 0 34 5" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.93115 0.900024H15.1187H19.1812H31.3687C32.4905 0.900024 33.3999 1.80942 33.3999 2.93127C33.3999 4.05313 32.4905 4.96252 31.3687 4.96252H19.1812H15.1187H2.93115C1.80933 4.96252 0.899902 4.05313 0.899902 2.93127C0.899902 1.80942 1.80933 0.900024 2.93115 0.900024Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="item" ref={(element) => { this.scrollElement = element; }}>
                                <p className="item-title">Points</p>
                                <p className="item-description">The amount of colors in the gradient</p>
            
                                <Points points={this.state.points} add={this.addPoint} remove={this.removePoint} />
                            </div>
                        </div>
                    </div>
                    <div className="right container">
                        <div style={{ width: '100%' }}>
                            <Output colors={this.state.colors} points={this.state.points} output={colors} setOverlay={this.setOverlay} />
                        </div>
                    </div>
                </div>

                {this.state.overlay ? (
                    <div className="overlay" id="overlay">
                        <div className="overlay-content">
                            <SmoothList>
                                {this.state.overlay}
                            </SmoothList>
                            <div className="overlay-sidebar">
                                <svg className="overlay-button" onClick={() => this.removeOverlay()} viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 2.115L18.885 0L10.5 8.385L2.115 0L0 2.115L8.385 10.5L0 18.885L2.115 21L10.5 12.615L18.885 21L21 18.885L12.615 10.5L21 2.115Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                ) : null}
            </>
        );
    }
}
export default Content;