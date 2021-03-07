import React from 'react';
import ReactTooltip from 'react-tooltip';
import { CopyToClipboard } from 'react-copy-to-clipboard';

var parentObject = null,
    codeString = null;

class Code extends React.Component {
    updateCode(code) {
        if (parentObject) {
            codeString = (code || null);

            parentObject.forceUpdate();
        }

        return codeString;
    }

    render() {
        parentObject = this.props.parentObject;
        
        return (
            <CopyToClipboard text={codeString || null} key="0">
                <div className="button-content-double-item" tag="clickable-item" data-tip="hello world">
                    <div className="button-content-item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" >
                            <path d="M9.95263 16.9123L8.59323 18.3608L2.03082 12.2016L8.18994 5.63922L9.64826 7.00791L4.85783 12.112L9.95212 16.8932L9.95263 16.9123Z" />
                            <path d="M14.0474 16.9123L15.4068 18.3608L21.9692 12.2016L15.8101 5.63922L14.3517 7.00791L19.1422 12.112L14.0479 16.8932L14.0474 16.9123Z" />
                        </svg>
                    </div>
                    <p className="button-content-item-text">
                        {codeString || ''}
                    </p>
                    <ReactTooltip place="top" effect="solid" wrapper="div" className="main-tooltip" backgroundColor="#4f5660">
                        <p>
                            Use d!roles [code] to export your generated gradient as roles in your Discord server!
                            <br />
                            Click <a href="https://google.com">here</a> to add the Discord bot to your server.
                        </p>
                    </ReactTooltip>
                </div>
            </CopyToClipboard>
        );
    }
}
export default Code;