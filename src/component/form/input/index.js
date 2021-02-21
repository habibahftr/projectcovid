import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <>
            <input name={this.props.name} checked={this.props.checked} type={this.props.type} onChange={this.props.onChange} value={this.props.value}  placeholder={this.props.placeholder}/>{this.props.children}
          </> 
         );
    }
}
 
export default Input;