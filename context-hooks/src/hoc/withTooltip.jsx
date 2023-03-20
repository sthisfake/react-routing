import React, { Component } from 'react';

function withTooltip(Component){
    return class withTooltip extends React.Component {

        state = {showThings : false}

        mouseOver = () => this.setState({showThings : true})

        mouseOut  = () => this.setState({showThings : false})

        render(){
            return(<div 
            onMouseOver={this.mouseOver}
            onMouseOut={this.mouseOut}
            ><Component  something={this.state.showThings} /></div>)
        }
    }
}


export default withTooltip;