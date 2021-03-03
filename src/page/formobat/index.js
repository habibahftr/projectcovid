import React, { Component } from 'react';
import { connect } from "react-redux"
import { Link } from 'react-router-dom';
import Label from "../../component/form/label";
import Input from "../../component/form/input";
import Header from '../../template/header';
import Nav from '../../template/navigation';
import Footer from '../../template/footer';

class FormObat extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id:"",
            nik:"",
            nama:"",
            terapi:"",
            tglterapi:"",
            edit: false,
         }
    }
    setValue= el=>{
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    datehandler = (event)=> {
        this.setState({
            tglterapi: event.target.value.toString()
        })
    }

    saveObat=(data)=>{
            let obj =this.state
            this.props.submitPengobatan(obj);
            data.preventDefault()
            this.clear()
            alert(`Sumbit success`)
            this.setState({})
            this.props.history.push("/pengobatan")
    }

    
    clear = () => {
        this.setState({ 
            id:"",
            nik:"",
            nama:"",
            terapi:"",
            tglterapi:"",
        })
    }
 
    render() {
        if (!this.props.login)
            return this.props.history.push("/")
        const{id, nik, nama, terapi, tglterapi} = this.state 
        return ( 
            <>
            <div>
                <Header className="fixed-header"></Header>
                <Nav></Nav>

                <div className="container1" style={{marginLeft:"30%", marginTop:"8%", marginBottom:"8%"}}>
                <div className="card-content">
                    <div className="card-title">
                        <h2>DAFTAR PENGOBATAN</h2>
                    <div className="underline-title"></div>
                    </div>
                </div>
                <div>
                    <Label>ID Pasien</Label>
                    <select name="id" value={id} onChange={this.setValue} >
                        <option defaultValue>select ID Pasien</option>
                    {
                        this.props.kasusList.map((el, idx)=>{
                            return(
                                <option name="id" key={idx} value={el.id}>{el.id}</option>
                            )
                        })
                    }   
                    </select><br/>
                    <Label>NIK</Label>
                    <select name="nik" value={nik} onChange={this.setValue} >
                        <option defaultValue>select NIK</option>
                    {
                        this.props.kasusList.map((el, idx)=>{
                            return(
                                <option name="nik" key={idx} value={el.nik}>{el.nik}</option>
                            )
                        })
                    }   
                    </select><br/>
                    <Label>Nama</Label>
                    <select name="name" value={nama} onChange={this.setValue} >
                        <option defaultValue>select nama</option>
                    {
                        this.props.kasusList.map((el, idx)=>{
                            return(
                                <option name="nama" key={idx} value={el.nama}>{el.nama}</option>
                            )
                        })
                    }   
                    </select><br/>

                    <Label>Terapi </Label> <Input type="text" name="terapi" value={terapi} onChange={this.setValue}  /><br/> 
                    <Label>Tanggal Terapi </Label> <Input type="datetime-local" name="tglterapi" value={tglterapi} onChange={this.datehandler}  /><br/>                           
                    <div>
                    <button type="submit" value="submit" onClick={this.saveObat} >Submit</button>
                    </div>
                </div>
                </div>

                <Footer className="fixed-footer"></Footer>

            </div>

            </>
         );
    }
}
 

const mapStateToProps = state => ({
    // dataUser: state.UReducer.users,
    kasusList:state.KasusReducer.kasus,
    login: state.AReducer.isLogin,

    
  })
  
const mapDispatchToProps = dispatch => {
    return {
        submitPengobatan: (data)=> dispatch({type:"PENGOBATAN_PAGE", payload: data}),
        clearPengobatan: (id)=> dispatch({type:"CLEAR_PENGOBATAN", payload: id}),
        cariPengobatan: (id)=> dispatch({type:"CARI_PENGOBATAN", payload: id})
        
    }
  }

export default connect(mapStateToProps, mapDispatchToProps) (FormObat)