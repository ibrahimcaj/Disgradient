import React from 'react';
import SimpleTooltip from 'react-simple-tooltip';

import '../index.css';

class Tooltip extends React.Component {
    render() {
        return (
            <SimpleTooltip 
                background="var(--button-background-default)"
                border="var(--button-background-default)"
                color="var(--text-color)"
                fontSize={'13px'} 
                
                style={{ whiteSpace: "nowrap", textAlign: 'center', textOverflow: 'break-word' }}
                fadeDuration={100} fadeEasing="linear" 
                 
                placement="top" arrow={10} padding={10} radius={10} zIndex={1}

                content={this.props.content} fixed={this.props.fixed || false}>
                    
                {this.props.children}
            </SimpleTooltip>
        );
    }
}
export default Tooltip;