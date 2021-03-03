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
                            <h2 style={{marginLeft: "45vh", marginTop:"30vh"}}>
                                Selamat datang di web pendataan kasus pasien covid di Indonesia.
                                silahkan isi data diri Anda dimulai dari bagian Master, lalu dilanjutkan ke
                                bagian kasus dan terakhir ke pengobatan.
                            </h2>
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