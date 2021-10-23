import React from 'react';
import TinyGradient from 'tinygradient';
import SmoothList from 'react-smooth-list';

import Color from './Color';
import Points from './Points';
import OutputItem from './OutputItem';

import '../index.css';
import '../stylesheets/Layout.css';
import '../stylesheets/Content.css';

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            colors: ['#000000', '#000000'],
            points: 2
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

    render() {
        var colors = TinyGradient(this.state.colors).rgb(this.state.points).map((color) => `#${color.toHex()}`);

        return (
            <div class="content">
                <div class="left container">
                    <div style={{ width: '100%' }}>
                        <div class="item">
                            <p class="item-title">Colors</p>
                            <p class="item-description">The colors that are a part of the gradient</p>
        
                            <div class="colors-container">
                                <SmoothList className="colors-animated">
                                    {this.state.colors.map((color, index) => <Color color={color} index={index} disabled={{ remove: this.state.colors.length === 2, up: index === 0, down: index === this.state.colors.length - 1 }} update={this.updateColor} remove={this.removeColor} move={this.moveColor} />)}
                                </SmoothList>
                            </div>
                            <div class="color-management box">
                                <div class="color-button" onClick={() => this.addColor()}>
                                    <svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.1499 0.599976C16.028 0.599976 15.1187 1.50941 15.1187 2.63123V14.8187H2.93115C1.80933 14.8187 0.899902 15.7281 0.899902 16.85C0.899902 17.9718 1.80933 18.8812 2.93115 18.8812H15.1187V31.0687C15.1187 32.1906 16.028 33.1 17.1499 33.1C18.2718 33.1 19.1812 32.1906 19.1812 31.0687V18.8812H31.3687C32.4905 18.8812 33.3999 17.9718 33.3999 16.85C33.3999 15.7281 32.4905 14.8187 31.3687 14.8187H19.1812V2.63123C19.1812 1.50941 18.2718 0.599976 17.1499 0.599976Z" />
                                    </svg>
                                </div>
                                <div class="color-button" onClick={() => this.removeColor()}>
                                    <svg viewBox="0 0 34 5" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.93115 0.900024H15.1187H19.1812H31.3687C32.4905 0.900024 33.3999 1.80942 33.3999 2.93127C33.3999 4.05313 32.4905 4.96252 31.3687 4.96252H19.1812H15.1187H2.93115C1.80933 4.96252 0.899902 4.05313 0.899902 2.93127C0.899902 1.80942 1.80933 0.900024 2.93115 0.900024Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="item" ref={(element) => { this.scrollElement = element; }}>
                            <p class="item-title">Points</p>
                            <p class="item-description">The amount of colors in the gradient</p>
        
                            <Points points={this.state.points} add={this.addPoint} remove={this.removePoint} />
                        </div>
                    </div>
                </div>
                <div class="right container">
                    <div style={{ width: '100%' }}>
                        <div class="item">
                            <p class="item-title">Output</p>
                            <p class="item-description">The output of your provided colors and amount of gradient points</p>
        
                            <div class="output-container">
                                <div class="output-button output-button-selected">
                                    <svg viewBox="0 0 26 19" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.175537 2.63653C0.175537 1.48593 1.10836 0.553192 2.25887 0.553192H23.0922C24.2427 0.553192 25.1755 1.48593 25.1755 2.63653C25.1755 3.78712 24.2427 4.71986 23.0922 4.71986H2.25887C1.10836 4.71986 0.175537 3.78712 0.175537 2.63653Z" />
                                        <path d="M0.175537 9.58097C0.175537 8.43037 1.10836 7.49764 2.25887 7.49764H13.9255C15.0761 7.49764 16.0089 8.43037 16.0089 9.58097C16.0089 10.7316 15.0761 11.6643 13.9255 11.6643H2.25887C1.10836 11.6643 0.175537 10.7316 0.175537 9.58097Z" />
                                        <path d="M2.25887 14.4421C1.10836 14.4421 0.175537 15.3748 0.175537 16.5254C0.175537 17.676 1.10836 18.6087 2.25887 18.6087H17.9533C19.1038 18.6087 20.0366 17.676 20.0366 16.5254C20.0366 15.3748 19.1038 14.4421 17.9533 14.4421H2.25887Z" />
                                    </svg>
                                </div>
                                <div class="output-button" style={{ cursor: 'not-allowed' }}>
                                    <svg viewBox="0 0 26 30" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.9745 6.96069L13.7245 0.710692C13.3457 0.500692 12.8882 0.500692 12.5094 0.710692L1.25944 6.96069C0.863194 7.18069 0.616943 7.59819 0.616943 8.05194C0.616943 8.91944 0.759445 29.3019 13.117 29.3019C25.4745 29.3019 25.617 8.91944 25.617 8.05194C25.617 7.59819 25.3707 7.18069 24.9745 6.96069ZM13.117 8.05194C14.8432 8.05194 16.242 9.45069 16.242 11.1769C16.242 12.9032 14.8432 14.3019 13.117 14.3019C11.3907 14.3019 9.99195 12.9032 9.99195 11.1769C9.99195 9.45069 11.3907 8.05194 13.117 8.05194ZM8.42945 20.5532C8.42945 17.6769 10.2407 15.8657 13.117 15.8657C15.9932 15.8657 17.8045 17.6769 17.8045 20.5532H8.42945Z" />
                                    </svg>
                                </div>
                                <div class="output-button" style={{ cursor: 'not-allowed' }}>
                                    <svg viewBox="0 0 26 22" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.3083 4.30319H13.3083L11.4996 1.93569C11.0759 1.08819 10.2096 0.553192 9.26335 0.553192H2.05835C1.3671 0.553192 0.80835 1.11194 0.80835 1.80319V19.3032C0.80835 20.6832 1.9271 21.8032 3.30835 21.8032H23.3083C24.6883 21.8032 25.8083 20.6832 25.8083 19.3032V6.80319C25.8083 5.42319 24.6883 4.30319 23.3083 4.30319Z" />
                                    </svg>
                                </div>
                                <div class="output-button" style={{ cursor: 'not-allowed' }}>
                                    <svg viewBox="0 0 25 21" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 10.4255C12.7575 10.4255 15 8.18179 15 5.42551C15 2.66926 12.7575 0.425507 10 0.425507C7.2425 0.425507 5 2.66926 5 5.42551C5 8.18179 7.24375 10.4255 10 10.4255Z" />
                                        <path d="M10 11.6755C4.1125 11.6755 0 14.7593 0 19.1755V20.4255H20V19.1755C20 14.7593 15.8888 11.6755 10 11.6755Z" />
                                        <path d="M22.5 20.4255H25V19.1755C25 15.9722 22.837 13.4699 19.4015 12.337C21.3275 14.0589 22.5 16.4254 22.5 19.1755V20.4255Z" />
                                        <path d="M19.9999 5.42552C19.9999 7.80267 18.3319 9.79854 16.104 10.3027C16.0025 10.2609 15.9001 10.2203 15.797 10.1808C16.8609 8.88579 17.4999 7.22914 17.4999 5.42552C17.4999 3.52459 16.79 1.78693 15.6211 0.463913C18.0864 0.770763 19.9999 2.87949 19.9999 5.42552Z" />
                                    </svg>
                                </div>
                            </div>
        
                            <div class="output-list-container">
                                <SmoothList>
                                    {colors.map((color, index) => <OutputItem color={color} index={index} />)}
                                </SmoothList>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Content;