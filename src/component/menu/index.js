import React, { Component } from 'react';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        // const { redirect, children } = this.props
        return ( 
            <>
                <div className="menu" onClick={this.props.onClick} > {this.props.children}</div >
            </>
         );
    }
}
 
export default Menu;