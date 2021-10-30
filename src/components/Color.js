import React from 'react';

import '../stylesheets/Colors.css';

class Color extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'default'
        }
    }

    update(event) {
        if (event.target.value.length > 7) event.target.value = event.target.value.slice(0, 6);
        if (!event.target.value.startsWith('#')) event.target.value = '#' + event.target.value;

        this.props.update(this.props.index, event.target.value);
    }

    render() {
        if (this.state.status === 'success' && !this.state.timeout) this.setState({ timeout: setTimeout(() => this.setState({ status: 'default', timeout: null }), 1500) });

        return (
            <div className="color-item" key={this.props.index} style={{ border: this.state.status === 'success' ? '3px solid var(--success-color)' : '3px solid transparent' }}>
                <div className="box">
                    <div className="color-preview" style={{ backgroundColor: this.props.color }}></div>
                    <input className="color-input" maxLength="7" placeholder="#000000" value={this.props.color} onChange={(event) => this.update(event)} ></input>

                    <div className="color-counter-container">
                        <div className="color-counter" style={{ backgroundColor: this.state.status === 'success' ? 'var(--success-color)' : null }}>
                            <p className="color-counter-text">
                                {this.props.index + 1}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="box">
                    {/* <div className="color-button">
                        <svg viewBox="0 0 21 22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.0394 1.30996C18.5191 -0.380284 15.9041 -0.43783 14.3196 1.15472L11.532 3.94503L10.6005 3.01225L8.74432 4.86979L16.1811 12.3066L18.0373 10.4491L17.1045 9.51629L19.7329 6.88791C21.2452 5.37566 21.4727 2.89315 20.0407 1.30996H20.0394ZM2.30719 15.0273C2.00608 15.3271 1.76118 15.6697 1.57114 16.0498L0 19.1947L1.86021 21.0549L5.00516 19.4838C5.3839 19.2964 5.72784 19.0422 6.02895 18.7477L12.4634 12.3133L8.74833 8.59823L2.30719 15.026V15.0273Z" fill="white"/>
                        </svg>
                    </div> */}
                    <div className="color-button" onClick={() => {
                        navigator.clipboard.writeText(this.props.color);
                        this.setState({ status: 'success' });
                    }}>
                        <svg viewBox="0 0 24 27" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.1679 0.555557H2.77399C1.45455 0.555557 0.375 1.6351 0.375 2.95455V19.7475H2.77399V2.95455H17.1679V0.555557ZM20.7664 5.35354H7.57197C6.25253 5.35354 5.17298 6.43308 5.17298 7.75253V24.5455C5.17298 25.8649 6.25253 26.9444 7.57197 26.9444H20.7664C22.0859 26.9444 23.1654 25.8649 23.1654 24.5455V7.75253C23.1654 6.43308 22.0859 5.35354 20.7664 5.35354ZM20.7664 24.5455H7.57197V7.75253H20.7664V24.5455Z" />
                        </svg>
                    </div>
                    <div className="color-button" style={{ cursor: this.props.disabled.up ? 'not-allowed' : 'pointer' }} onClick={() => this.props.move(this.props.index, 'up')}>
                        <svg viewBox="0 0 22 15" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '1.5px' }}>
                            <path d="M0.194431 11.3889L2.83332 14.0279L10.7501 6.11112L18.6667 14.0279L21.3055 11.3889L10.7501 0.833336L0.194431 11.3889Z" fill="white"/>
                        </svg>
                    </div>
                    <div className="color-button" style={{ cursor: this.props.disabled.down ? 'not-allowed' : 'pointer' }} onClick={() => this.props.move(this.props.index, 'down')}>
                        <svg viewBox="0 0 22 14" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '1.5px' }}>
                            <path d="M0.694439 3.11109L3.33332 0.472229L11.2501 8.38882L19.1667 0.472229L21.8055 3.11109L11.2501 13.6666L0.694439 3.11109Z" fill="white"/>
                        </svg>
                    </div>
                    <div className="color-button" style={{ cursor: this.props.disabled.remove ? 'not-allowed' : 'pointer' }} onClick={() => this.props.remove(this.props.index)}>
                        <svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 2.115L18.885 0L10.5 8.385L2.115 0L0 2.115L8.385 10.5L0 18.885L2.115 21L10.5 12.615L18.885 21L21 18.885L12.615 10.5L21 2.115Z" />
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
}
export default Color;