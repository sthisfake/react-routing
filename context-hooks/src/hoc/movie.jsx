import React, { Component } from 'react';
import withTooltip from './withTooltip';

class Movie extends Component {
    render() {
        return (
            <div>
              Movie 
              {this.props.something && (

                <div>
                    somethingggg
                    </div>

              )} 
            </div>
        );
    }
}

export default withTooltip(Movie);