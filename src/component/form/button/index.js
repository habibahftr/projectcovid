import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <button type={this.props.button} name={this.props.name} onClick={this.props.onClick} value={this.props.value}>{this.props.children}</button>
         );
    }
}
 
export default Button;