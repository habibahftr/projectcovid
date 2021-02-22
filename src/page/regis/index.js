import React, { Component } from 'react';
import { Label, Input, Option } from "../../component/form";
import { connect } from "react-redux"
import { Link } from 'react-router-dom';

class Regis extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:"",
            password:"",
            name:"",
            nik:"",
         }
    }

    setValue= el=>{
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    setRegister = el =>{
        let obj = this.state
        this.props.register(obj);
        el.preventDefault()
        this.clear()
        this.props.history.push("/")
    }

    

    clear = () => {
        this.setState({ 
            username:"",
            password:"",
            name:"",
            nik:"",
        })
    }

    render() {
        if (!this.props.login)
            this.props.history.push("/")

        console.log("REGIS", this.props.dataUser); 
        return ( 
            <div className="container">
                <div className="card-content">
                    <div className="card-title">
                        <h2>C R E A T E   A C C O U N T</h2>
                    <div className="underline-title"></div>
                </div>
            </div>
            <div>
                    <Label>Name </Label> <Input type="text" name="phone" value={this.state.phone} onChange={this.setValue} placeholder="your name.." />
                    <Label>NIK </Label> <Input type="text" name="email" value={this.state.email} onChange={this.setValue} placeholder="your NIK.." />                    
                    <Label>Username </Label> <Input type="text" name="username" value={this.state.username} onChange={this.setValue} placeholder="your username.." />
                    <Label>Password </Label> <Input type="text" name="password" value={this.state.password} onChange={this.setValue} placeholder="your password.." />
                    <Link to="/">
                        <button type="submit" value="submit" onClick={this.setRegister} >Sign Up</button>
                    </Link>
            </div>

            </div>
         );
    }
}


const mapStateToProps = state => ({
    dataUser: state.UReducer.users,
    login: state.AReducer.isLogin,
    
  })
  
const mapDispatchToProps = dispatch => {
    return {
        register: (data)=> dispatch({type:"REGISTER", payload: data}),
    }
  }
 
export default connect(mapStateToProps, mapDispatchToProps) (Regis);