import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Label, Input } from "../../component/form";
import { connect } from "react-redux";
import "./style.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:"",
            password:"",
         }
    }

    setValue= el=>{
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    doLogin=(dataLogin)=>{
        
        const {username, password}= dataLogin
        console.log("user", dataLogin);
        // console.log("datauser", this.props.dataUser)
        // const {dataUser}= this.props 
        // let find = dataUser.filter(user => {
        //     return user.username === username && user.password === password 
        // })
        // if(find.length>0){
        //     this.props.submitLogin(find[0])
        //     alert(`login succesfully`);
        //     this.props.history.push("/home")
        // }else{
        //     // alert(`username & password is undifined`)
        //     this.props.history.push("/error")
        // }
        if (username==="nana" && password==="123") {
                this.props.submitLogin(dataLogin)
                alert(`login succesfully`); 
                this.props.history.push("/home")
        }else{
            this.props.history.push("/error")
        }



    }
    render() { 
        console.log("LOGIN", this.props.dataUser);
        const {username, password} = this.state
        return ( 
            <div className="container2">
            <div className="card-content">
                <div className="card-title">
                    <h2>L O G I N</h2>
                    <div className="underline-title"></div>
                </div>
            </div>
            <div className="form">
                <Label>Username </Label>
                <Input type="text" name="username" onChange={this.setValue} placeholder="username.."></Input>
                <Label>Password </Label>
                <Input type="password" name="password" onChange={this.setValue}></Input>
                <button onClick={()=>this.doLogin({username, password})}>Login</button>
                <Link to="/regis">
                    <div className="buatAkun" href="#">Don't have account?</div>
                </Link>
            </div>

            </div>
         );
    }
}

const mapStateToProps = state => ({
    // dataUser: state.UReducer.users,
    checkLogin: state.AReducer.isLogin,
    
  })
  
const mapDispatchToProps = dispatch => {
    return {
        submitLogin: (data) => dispatch({ type: "LOGIN", payload:data }),
    }
  }
 
export default connect(mapStateToProps, mapDispatchToProps) (Login);