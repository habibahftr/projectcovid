import React, { Component } from 'react';
import "./style.css"

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="fixed-header">
            <h1>WEB PANDATAAN PASIEN COVID-19 DI INDONESIA</h1>
            </div>
         );
    }
}
 
export default Header;