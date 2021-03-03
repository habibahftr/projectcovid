import React, { Component } from 'react';
import "./style.css"

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="fixed-footer">
            <h3>KUNJUNGI https://www.covid19.go.id/ UNTUK PENDAFATARAN VAKSINASI </h3>
            </div>
         );
    }
}
 
export default Footer;