import React from 'react';

import '../stylesheets/Points.css';

class Points extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'default'
        }
    }

    render() {
        if (this.state.status === 'success' && !this.state.timeout) this.setState({ timeout: setTimeout(() => this.setState({ status: 'default', timeout: null }), 1500) });

        return (
            <div className="points-container" style={{ border: this.state.status === 'success' ? `3px solid var(--${this.state.action}-color)` : '3px solid transparent' }}>
                <div className="points-button" style={{ cursor: this.props.points === 150 ? 'not-allowed' : 'pointer' }} onClick={() => {
                    this.props.add();

                    if (this.props.points !== 150) {
                        this.setState({
                            status: 'success',
                            action: 'add'
                        });
                    }
                }}>
                    <svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.1499 0.599976C16.028 0.599976 15.1187 1.50941 15.1187 2.63123V14.8187H2.93115C1.80933 14.8187 0.899902 15.7281 0.899902 16.85C0.899902 17.9718 1.80933 18.8812 2.93115 18.8812H15.1187V31.0687C15.1187 32.1906 16.028 33.1 17.1499 33.1C18.2718 33.1 19.1812 32.1906 19.1812 31.0687V18.8812H31.3687C32.4905 18.8812 33.3999 17.9718 33.3999 16.85C33.3999 15.7281 32.4905 14.8187 31.3687 14.8187H19.1812V2.63123C19.1812 1.50941 18.2718 0.599976 17.1499 0.599976Z" />
                    </svg>
                </div>

                <p className="points-text">
                    {this.props.points}
                </p>

                <div className="points-button" style={{ cursor: this.props.points === 2 ? 'not-allowed' : 'pointer' }} onClick={() => {
                    this.props.remove();

                    if (this.props.points !== 2) {
                        this.setState({
                            status: 'success',
                            action: 'remove'
                        });
                    }
                }}>
                    <svg viewBox="0 0 34 5" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.93115 0.900024H15.1187H19.1812H31.3687C32.4905 0.900024 33.3999 1.80942 33.3999 2.93127C33.3999 4.05313 32.4905 4.96252 31.3687 4.96252H19.1812H15.1187H2.93115C1.80933 4.96252 0.899902 4.05313 0.899902 2.93127C0.899902 1.80942 1.80933 0.900024 2.93115 0.900024Z" />
                    </svg>
                </div>
            </div>
        );
    }
}
export default Points;