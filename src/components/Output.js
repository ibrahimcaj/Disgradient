import React from 'react';
import SmoothList from 'react-smooth-list';

import Item from './Item';
import Folder from './Folder';
import Message from './Message';

import '../index.css';
import '../stylesheets/Output.css';
import '../stylesheets/List.css';
import '../stylesheets/Folders.css';

class Output extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'list'
        }
    }

    render() {
        var outputList = null;
        switch (this.state.type) {
            case 'list':
                outputList = (
                    <div className="output-list-container">
                        <SmoothList>
                            {this.props.colors.map((color, index) => <Item color={color} index={index} />)}
                        </SmoothList>
                    </div>
                );
                break;
            case 'folder':
                outputList = (
                    <div className="output-folders-container">
                        <div class="output-folders-item">
                            <SmoothList>
                                {this.props.colors.map((color, index) => <Folder color={color} index={index} theme={'#2f3136'} />)}
                            </SmoothList>
                        </div>
                        <div class="output-folders-item">
                            <SmoothList>
                                {this.props.colors.map((color, index) => <Folder color={color} index={index} theme={'#f2f3f5'} />)}
                            </SmoothList>
                        </div>
                    </div>
                );
                break;
            case 'message':
                outputList = (
                    <div className="output-folders-container">
                        <div class="output-folders-item">
                            <SmoothList>
                                {this.props.colors.map((color, index) => <Message color={color} index={index} theme={'#2f3136'} />)}
                            </SmoothList>
                        </div>
                        <div class="output-folders-item">
                            <SmoothList>
                                {this.props.colors.map((color, index) => <Message color={color} index={index} theme={'#f2f3f5'} />)}
                            </SmoothList>
                        </div>
                    </div>
                );
                break;
            default:
                outputList = (
                    <div className="output-list-container">
                        <SmoothList>
                            {this.props.colors.map((color, index) => <Item color={color} index={index} />)}
                        </SmoothList>
                    </div>
                );
                break;
        }

        return (
            <div className="item">
                <p className="item-title">Output</p>
                <p className="item-description">The output of your provided colors and amount of gradient points</p>

                <div className="output-container">
                    <div className={this.state.type === 'list' ? "output-button output-button-selected" : "output-button"} onClick={() => this.setState({ type: 'list' })}>
                        <svg viewBox="0 0 26 19" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.175537 2.63653C0.175537 1.48593 1.10836 0.553192 2.25887 0.553192H23.0922C24.2427 0.553192 25.1755 1.48593 25.1755 2.63653C25.1755 3.78712 24.2427 4.71986 23.0922 4.71986H2.25887C1.10836 4.71986 0.175537 3.78712 0.175537 2.63653Z" />
                            <path d="M0.175537 9.58097C0.175537 8.43037 1.10836 7.49764 2.25887 7.49764H13.9255C15.0761 7.49764 16.0089 8.43037 16.0089 9.58097C16.0089 10.7316 15.0761 11.6643 13.9255 11.6643H2.25887C1.10836 11.6643 0.175537 10.7316 0.175537 9.58097Z" />
                            <path d="M2.25887 14.4421C1.10836 14.4421 0.175537 15.3748 0.175537 16.5254C0.175537 17.676 1.10836 18.6087 2.25887 18.6087H17.9533C19.1038 18.6087 20.0366 17.676 20.0366 16.5254C20.0366 15.3748 19.1038 14.4421 17.9533 14.4421H2.25887Z" />
                        </svg>
                    </div>
                    <div className="output-button" style={{ cursor: 'not-allowed', backgroundColor: 'var(--button-background-hover)', border: '3.5px solid var(--button-background-hover)' }}>
                        <svg viewBox="0 0 26 30" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.9745 6.96069L13.7245 0.710692C13.3457 0.500692 12.8882 0.500692 12.5094 0.710692L1.25944 6.96069C0.863194 7.18069 0.616943 7.59819 0.616943 8.05194C0.616943 8.91944 0.759445 29.3019 13.117 29.3019C25.4745 29.3019 25.617 8.91944 25.617 8.05194C25.617 7.59819 25.3707 7.18069 24.9745 6.96069ZM13.117 8.05194C14.8432 8.05194 16.242 9.45069 16.242 11.1769C16.242 12.9032 14.8432 14.3019 13.117 14.3019C11.3907 14.3019 9.99195 12.9032 9.99195 11.1769C9.99195 9.45069 11.3907 8.05194 13.117 8.05194ZM8.42945 20.5532C8.42945 17.6769 10.2407 15.8657 13.117 15.8657C15.9932 15.8657 17.8045 17.6769 17.8045 20.5532H8.42945Z" />
                        </svg>
                    </div>
                    <div className={this.state.type === 'folder' ? "output-button output-button-selected" : "output-button"} onClick={() => this.setState({ type: 'folder' })}>
                        <svg viewBox="0 0 26 22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.3083 4.30319H13.3083L11.4996 1.93569C11.0759 1.08819 10.2096 0.553192 9.26335 0.553192H2.05835C1.3671 0.553192 0.80835 1.11194 0.80835 1.80319V19.3032C0.80835 20.6832 1.9271 21.8032 3.30835 21.8032H23.3083C24.6883 21.8032 25.8083 20.6832 25.8083 19.3032V6.80319C25.8083 5.42319 24.6883 4.30319 23.3083 4.30319Z" />
                        </svg>
                    </div>
                    <div className={this.state.type === 'message' ? "output-button output-button-selected" : "output-button"} onClick={() => this.setState({ type: 'message' })}>
                        <svg viewBox="0 0 25 21" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 10.4255C12.7575 10.4255 15 8.18179 15 5.42551C15 2.66926 12.7575 0.425507 10 0.425507C7.2425 0.425507 5 2.66926 5 5.42551C5 8.18179 7.24375 10.4255 10 10.4255Z" />
                            <path d="M10 11.6755C4.1125 11.6755 0 14.7593 0 19.1755V20.4255H20V19.1755C20 14.7593 15.8888 11.6755 10 11.6755Z" />
                            <path d="M22.5 20.4255H25V19.1755C25 15.9722 22.837 13.4699 19.4015 12.337C21.3275 14.0589 22.5 16.4254 22.5 19.1755V20.4255Z" />
                            <path d="M19.9999 5.42552C19.9999 7.80267 18.3319 9.79854 16.104 10.3027C16.0025 10.2609 15.9001 10.2203 15.797 10.1808C16.8609 8.88579 17.4999 7.22914 17.4999 5.42552C17.4999 3.52459 16.79 1.78693 15.6211 0.463913C18.0864 0.770763 19.9999 2.87949 19.9999 5.42552Z" />
                        </svg>
                    </div>
                </div>

                {outputList}
            </div>
        );
    }
}
export default Output;