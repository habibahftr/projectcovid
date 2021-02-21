import React, { Component } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import FormGejala from "../../page/formg";
import Gejala from "../../page/gejala";
import Header from "../../template/header";
import Footer from "../../template/footer";
import Body from "../../template/body";
import Nav from "../../template/navigation";
import { BrowserRouter as Router } from 'react-router-dom';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    isPage=()=>{
        // if (this.props.currentPage === "gejala") {
        //     return <Gejala></Gejala>
        // } else {
        //     return <FormGejala></FormGejala>
            
        // }
        switch (this.props.currentPage) {
            case "gejala":
                return <Gejala ></Gejala>
            case "formgejala":
                return <FormGejala/>
        
            default:
                break;
        }
    }
    render() {
        console.log("ini home");
        return (
            <>
                    <div >
                        <div >
                            <Header></Header>
                        </div>
                        <div className="row">
                            <div className="col-3 col-m-5">
                                <div >
                                    <Nav ></Nav>
                                </div>
                            </div>
                            <div className="content">
                                <div className="col-12 col-m-12">
                                        {this.isPage()}
                                </div>
                            </div>
                        </div>
                        <div style={{ clear: "both" }}></div>
                            <div className="row">
                                <div className="footer">
                                    <Footer></Footer>
                                </div>
                            </div>
                        </div>
            </>
        );
    }
}

export default Home;