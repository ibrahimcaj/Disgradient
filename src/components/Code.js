import React from 'react';
import axios from 'axios';
import https from 'https';

import Tooltip from './Tooltip';

import '../index.css';
import '../stylesheets/Output.css';

class Output extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            previous: null,
            changed: false,
            copied: false
        }
    }

    componentDidMount = () => {
        this.setState({
            previous: {
                colors: this.props.colors,
                points: this.props.points,
            }
        });
    }
    componentDidUpdate = () => {
        var equal = (this.state.previous?.points === this.props.points) && (JSON.stringify(this.state.previous?.colors) === JSON.stringify(this.props.colors));

        if (equal && this.state.changed) this.setState({ changed: false });
        else if (!equal && !this.state.changed) this.setState({ changed: true });
    }
    
    updateCode = () => {
        return new Promise((resolve, reject) => {
            if (!this.state.changed) return;

            const agent = new https.Agent({ rejectUnauthorized: false });
            axios.post('https://disgradientserver.vanishedvan.repl.co/codes', {
                colors: this.props.colors,
                points: this.props.points,
                codes: this.props.output
            }, { httpsAgent: agent }).then((response) => {
                this.props.updateCode(response.data.id);
                this.setState({
                    code: response.data.id,
                    previous: {
                        colors: this.props.colors,
                        points: this.props.points,
                    },
                    changed: false
                });

                resolve();
            }).catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    render() {
        return (
            <div className="output-code">
                <div>
                    <Tooltip content={[ "This is the code you can use to create gradient", <br />, "roles in your server! Double-click on the", <br />, "code for more information." ]}>
                        <p className="output-code-content" style={{ color: (this.state.copied ? 'var(--success-color)' : null) }} onClick={() => {
                            navigator.clipboard?.writeText(this.props.code);
                            this.setState({ copied: true });

                            setTimeout(() => {
                                this.setState({ copied: false });
                            }, 1000);
                        }} onDoubleClick={() => {
                            this.props.setOverlay(
                                <div>
                                    <h3 style={{ margin: '0px 0px 5px 0px' }}>What is a gradient code?</h3>
                                    <h4 style={{ fontWeight: 'lighter', margin: '0' }}>
                                        Gradient codes are used to automatically create gradient roles in your Discord server.
                                        <br />
                                        To create gradient roles in your server, simply click on the refresh button, copy the code and use it with our <a href="https://discord.com/api/oauth2/authorize?client_id=725639183246557254&permissions=268435456&scope=bot%20applications.commands">Discord bot</a>.

                                        <br /><br />
                                        If you need any help, you can always join our <a href="https://discord.gg/AHtZW9JXTA">Discord server</a> and ask for help!
                                    </h4>

                                    <h3 style={{ margin: '25px 0px 5px 0px' }}>How to generate the roles?</h3>
                                    <h4 style={{ fontWeight: 'lighter', margin: '0' }}>
                                        To invite the bot to your server, you can use the following link: <a href="https://discord.com/api/oauth2/authorize?client_id=725639183246557254&permissions=268435456&scope=bot%20applications.commands">https://discord.com/api/oauth2/authorize?client_id=725639183246557254&permissions=268435456&scope=bot%20applications.commands</a>

                                        <br /><br />
                                        Once the bot is in your server, make sure the bot has the needed permissions to create roles.
                                        <br />
                                        After that, you can use the <code>/create</code> slash command with your gradient code.
                                    </h4>
                                </div>
                            );
                        }}>{this.props.code}</p>
                    </Tooltip>

                    <svg className="output-code-icon" style={{ cursor: (!this.state.changed ? 'not-allowed' : null) }} onClick={(event) => {
                        this.updateCode().then(() => {
                            event.target.classList.add('output-code-icon-success');
                            this.setState({ copied: true });

                            setTimeout(() => {
                                event.target.classList.remove('output-code-icon-success');
                                this.setState({ copied: false });
                            }, 1500);
                        }).catch(() => {
                            event.target.style.opacity = '1 !important';
                            event.target.style.fill = 'var(--remove-color)';

                            setTimeout(() => {
                                event.target.style.fill = null;
                                event.target.style.opacity = null;
                            }, 1500);
                        });
                    }} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        {this.state.changed ? (
                            <>
                                <path d="M1.61108 4.97502C1.09131 4.90775 0.613525 4.70749 0.212402 4.40948C0.0739746 4.91599 0 5.44931 0 6C0 9.315 2.6792 12 5.99634 12C8.79541 12 11.1294 10.0875 11.7974 7.5H10.2363C9.62109 9.2475 7.95508 10.5 5.99634 10.5C3.51221 10.5 1.49341 8.4825 1.49341 6C1.49341 5.64748 1.53418 5.30434 1.61108 4.97502Z" />
                                <path d="M4.97559 1.61644C5.30347 1.54028 5.64526 1.5 5.99634 1.5C7.24194 1.5 8.35278 2.0175 9.16333 2.83501L6.74683 5.25H12V0L10.2363 1.7625C9.14819 0.675003 7.65479 0 5.99634 0C5.44653 0 4.91431 0.0737457 4.40894 0.211868C4.70825 0.614365 4.90894 1.09445 4.97559 1.61644Z" />
                                <path d="M4 2C4 3.10457 3.10457 4 2 4C0.89543 4 0 3.10457 0 2C0 0.89543 0.89543 0 2 0C3.10457 0 4 0.89543 4 2Z" fill="#FAA81A"/>
                            </>
                        ) : (
                            <>
                                <path d="M10.2364 1.7625C9.14822 0.675 7.65478 0 5.99625 0C2.67917 0 0 2.685 0 6C0 9.315 2.67917 12 5.99625 12C8.7955 12 11.1295 10.0875 11.7974 7.5H10.2364C9.62101 9.2475 7.95497 10.5 5.99625 10.5C3.5122 10.5 1.49343 8.4825 1.49343 6C1.49343 3.5175 3.5122 1.5 5.99625 1.5C7.24203 1.5 8.35272 2.0175 9.16323 2.835L6.74672 5.25H12V0L10.2364 1.7625Z" />
                            </>
                        )}
                    </svg>
                </div>
            </div>
        );
    }
}
export default Output;