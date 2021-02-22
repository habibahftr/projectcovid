import React, { Component } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import FormGejala from "../../page/formg";
import Gejala from "../../page/gejala";
import Header from "../../template/header";
import Footer from "../../template/footer";
import Body from "../../template/body";
import Nav from "../../template/navigation";
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        if (!this.props.login)
            return this.props.history.push("/")
 
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
                                        {/* {this.isPage()} */}
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


const mapStateToProps = state => ({
    login: state.AReducer.isLogin,
})

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);