import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Menu from "../../component/menu";
import "./style.css";

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }


    render() { 
        const{changePage}= this.props
        return ( 
            <div className="sidenav" /*style={{color:"white"}}*/>
                <Link to="/home">
                    <Menu >Home</Menu>
                </Link>
                <div className="dropdown">
                <button className="dropbtn">Master</button>
                <div className="dropdown-content">
                <Link to="/gejala">
                    <Menu>Gejala</Menu>
                </Link>
                <Link to="/provinsi">
                    <Menu>Provinsi</Menu>
                </Link>
                <Link to="/kota">
                    <Menu>Kota</Menu>
                </Link>
                <Link to="/kecamatan">
                    <Menu>Kecamatan</Menu>
                </Link>
                <Link to="/kelurahan">
                    <Menu>Kelurahan</Menu>
                </Link>
                </div>
                </div>

                <Link to="/kasus">
                    <Menu>Kasus</Menu>
                </Link>
                <Link to="/pengobatan">
                    <Menu>Pengobatan</Menu>
                </Link>
                <Link to="/logout">
                    <Menu>Logout</Menu>
                </Link>
                

            </div>
         );
    }
}
 
export default Nav;