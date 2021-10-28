import React from 'react';
import Helmet from 'react-helmet';

import Wumpus from '../icons/wumpus.png';

import '../index.css';
import '../stylesheets/Messages.css';

class Message extends React.Component {
    render() {
        return (
            <>
                <Helmet>
                    <link href="http://fonts.cdnfonts.com/css/whitney-2" rel="stylesheet" />
                </Helmet>

                <div className="message-item" key={this.props.index}>
                    <div className="message-avatar" style={{ backgroundImage: `url(${Wumpus})` }}></div>
                    <div>
                        <div>
                            <span className="message-author" style={{ color: this.props.color }}>Wumpus</span>
                            <span className="message-date">Today at 00:00</span>
                        </div>
                        <p className="message-content">
                            rocks are really old
                        </p>
                    </div>
                </div>
            </>
        );
    }
}
export default Message;