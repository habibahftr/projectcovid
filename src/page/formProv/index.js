import React, { Component } from 'react';
import Provinsi from '../provinsi';
import { connect } from "react-redux"
import { Link } from 'react-router-dom';
import Label from "../../component/form/label";
import Input from "../../component/form/input";
import Header from '../../template/header';
import Nav from '../../template/navigation';
import Footer from '../../template/footer';

class FormProv extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            provinsi:"",
            edit: false,
         }
    }
    setValue= el=>{
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    saveprov=(data)=>{
        let obj =this.state
        // if(this.state.edit===false){
            this.props.submitProv(obj);
            data.preventDefault()
            this.clear()
            alert(`Sumbit success`)
            this.props.history.push("/provinsi")
        // }else{
        //     this.props.editgejala(obj)
        //     this.setState({
        //        edit: false 
        //     })
        //     data.preventDefault()
        //     this.clear()
        //     alert("Update Success!")
        //     // this.props.history.push("/gejala")
        // }
    }

    
    clear = () => {
        this.setState({ 
            provinsi:"",
        })
    }
    // reset = ()=> {
    //     this.setState({
    //         gejalaedit :{}
    //     })
    //   }
    render() { 
        if (!this.props.login)
            return this.props.history.push("/")
        const{provinsi} = this.state
        return ( 
            <div>
                <Header className="fixed-header"></Header>
                <Nav></Nav>

                <div className="container1" style={{marginLeft:"30%", marginTop:"8%"}}>
                <div className="card-content">
                    <div className="card-title">
                        <h2>DAFTAR PROVINSI</h2>
                    <div className="underline-title"></div>
                    </div>
                </div>
                <div>
                    <Label>Provinsi </Label> <Input type="text" name="provinsi" value={provinsi} onChange={this.setValue}  /><br/>     
                    <Link to="/">
                        <div>
                        <button type="submit" value="submit" onClick={this.saveprov} >Submit</button>
                        </div>
                    </Link>
                </div>
                </div>

                <Footer className="fixed-footer"></Footer>

            </div>

         );
    }
}
const mapStateToProps = state => ({
    // dataUser: state.UReducer.users,
    prov: state.PReducer.provinsi,
    login: state.AReducer.isLogin,

    
  })
  
const mapDispatchToProps = dispatch => {
    return {
        submitProv: (data)=> dispatch({type:"PROVINSI_PAGE", payload: data}),
        clearProv: (id)=> dispatch({type:"CLEAR_PROVINSI", payload: id}),
        cariProv: (id)=> dispatch({type:"CARI_PROVINSI", payload: id}),
        selectlist: (data)=>dispatch({type:"SELECT_PROVINSI", payload: data}),
        
    }
  }

export default connect(mapStateToProps, mapDispatchToProps) (FormProv);