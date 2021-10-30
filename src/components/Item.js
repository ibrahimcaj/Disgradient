import React from 'react';

import '../index.css';
import '../stylesheets/Output.css';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'default'
        }
    }

    render() {
        if (this.state.status === 'success' && !this.state.timeout) this.setState({ timeout: setTimeout(() => this.setState({ status: 'default', timeout: null }), 1500) });

        return (
            <div className="output-list-item" style={{ border: this.state.status === 'success' ? '3px solid var(--success-color)' : '3px solid transparent' }} key={this.props.index}>
                <div className="box">
                    <div className="output-list-preview" style={{ backgroundColor: this.props.color }}></div>
                    <p className="output-list-text">
                        {this.props.color}
                    </p>

                    <div className="output-list-counter-container">
                        <div className="output-list-counter" style={{ backgroundColor: this.state.status === 'success' ? 'var(--success-color)' : null }}>
                            <p className="output-list-counter-text">
                                {this.props.index + 1}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="output-list-button" onClick={() => {
                        navigator.clipboard.writeText(this.props.color);
                        this.setState({ status: 'success' });
                    }}>
                        <svg viewBox="0 0 24 27" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.1679 0.555557H2.77399C1.45455 0.555557 0.375 1.6351 0.375 2.95455V19.7475H2.77399V2.95455H17.1679V0.555557ZM20.7664 5.35354H7.57197C6.25253 5.35354 5.17298 6.43308 5.17298 7.75253V24.5455C5.17298 25.8649 6.25253 26.9444 7.57197 26.9444H20.7664C22.0859 26.9444 23.1654 25.8649 23.1654 24.5455V7.75253C23.1654 6.43308 22.0859 5.35354 20.7664 5.35354ZM20.7664 24.5455H7.57197V7.75253H20.7664V24.5455Z" />
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
}
export default Item;