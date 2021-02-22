import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import "./style.css";

class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        if (!this.props.login)
            return this.props.history.push("/")
        return (
            <div className="logout">
                <div className="logout2">
                    <div className="fof">
                        <h1 style={{paddingLeft: "30vh"}}>Thankyou for your visit!</h1><br/>
                <Link to="/">
                    <button className="buttonlogout" style={{height:"60px"}}>Return to Login</button>
                </Link>
                    </div>
                </div>
            </div>
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
export default connect(mapStateToProps, mapDispatchToProps) (Logout);