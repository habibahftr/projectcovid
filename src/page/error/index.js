import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Router } from 'react-router-dom';
import "./style.css";


class Error extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    backToLogin =()=>{
        return <Link to="/" />
    }
    render() { 
        if (!this.props.login)
            return this.props.history.push("/")
 
        console.log("error");
        return ( 
            <div className="error">
                <div className="maincontainer">
                    <div className="bat">
                        <img className="wing leftwing" 
                            src="https://www.blissfullemon.com/wp-content/uploads/2018/09/bat-wing.png"/>
                        <img className="body"
                            src="https://www.blissfullemon.com/wp-content/uploads/2018/09/bat-body.png" alt="bat"/>
                        <img className="wing rightwing"
                            src="https://www.blissfullemon.com/wp-content/uploads/2018/09/bat-wing.png"/>
                    </div>
                    <div className="bat">
                        <img className="wing leftwing" 
                            src="https://www.blissfullemon.com/wp-content/uploads/2018/09/bat-wing.png"/>
                        <img className="body"
                            src="https://www.blissfullemon.com/wp-content/uploads/2018/09/bat-body.png" alt="bat"/>
                        <img className="wing rightwing"
                            src="https://www.blissfullemon.com/wp-content/uploads/2018/09/bat-wing.png"/>
                    </div>
                    <div className="bat">
                        <img className="wing leftwing" 
                            src="https://www.blissfullemon.com/wp-content/uploads/2018/09/bat-wing.png"/>
                        <img className="body"
                            src="https://www.blissfullemon.com/wp-content/uploads/2018/09/bat-body.png" alt="bat"/>
                        <img className="wing rightwing"
                            src="https://www.blissfullemon.com/wp-content/uploads/2018/09/bat-wing.png"/>
                    </div>
                        <img className="foregroundimg" src="https://www.blissfullemon.com/wp-content/uploads/2018/09/HauntedHouseForeground.png" alt="haunted house"/>
  
                    </div>
                        <h1 className="errorcode">ERROR 403</h1>
                        <Link to="/">
                            <div class="errortext">This area is forbidden. Turn back now!</div>
                        </Link>

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
export default connect(mapStateToProps, mapDispatchToProps) (Error);