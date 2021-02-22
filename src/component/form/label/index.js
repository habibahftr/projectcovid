import React, { Component } from 'react';

class Label extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <label style={{marginRight: "10px", width:"100px",display:"inline-block"}}>{this.props.children}</label>
            </>
         );
    }
}
 
export default Label;