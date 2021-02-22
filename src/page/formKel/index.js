import React, { Component } from 'react';
import { connect } from "react-redux"
import { Link } from 'react-router-dom';
import Label from "../../component/form/label";
import Input from "../../component/form/input";
import Header from '../../template/header';
import Nav from '../../template/navigation';
import Footer from '../../template/footer';

class FormKel extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            provinsi:"",
            kota:"",
            kecamatan:"",
            keluarah:"",
            edit: false,
         }
    }
    setValue= el=>{
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    saveKota=(data)=>{
        let obj =this.state
        // if(this.state.edit===false){
            this.props.submitKel(obj);
            data.preventDefault()
            this.clear()
            alert(`Sumbit success`)
            this.props.history.push("/kelurahan")
        // }else{
            // this.props.editgejala(obj)
        //     this.setState({
        //        edit: false 
        //     })
        //     data.preventDefault()
        //     this.clear()
        //     alert("Update Success!")
        //     this.props.history.push("/kota")
        // }
    }

    
    clear = () => {
        this.setState({ 
            provinsi:"",
            kota:"",
            kecamatan:"",
            kelurahan:"",
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
        const{provinsi, kota, kecamatan, kelurahan} = this.state
        return ( 
            <>
            <div>
                <Header className="fixed-header"></Header>
                <Nav></Nav>

                <div className="container1" style={{marginLeft:"30%", marginTop:"8%", marginBottom:"8%"}}>
                <div className="card-content">
                    <div className="card-title">
                        <h2>DAFTAR KELURAHAN</h2>
                    <div className="underline-title"></div>
                    </div>
                </div>
                <div>
                    <Label>Provinsi</Label>
                    <select name="provinsi" value={provinsi} onChange={this.setValue} >
                        <option defaultValue>select provinsi</option>
                    {
                        this.props.prov.map((el, idx)=>{
                            return(
                                <option name="provinsi" key={idx} value={el.provinsi}>{el.provinsi}</option>
                            )
                        })
                    }   
                    </select><br/>
                    <Label>Kota</Label>
                    <select name="kota" value={kota} onChange={this.setValue} >
                        <option defaultValue>select kota</option>
                    {
                        this.props.city.map((el, idx)=>{
                            return(
                                <option name="kota" key={idx} value={el.kota}>{el.kota}</option>
                            )
                        })
                    }   
                    </select><br/>
                    <Label>Kecamatan</Label>
                    <select name="kecamatan" value={kecamatan} onChange={this.setValue} >
                        <option defaultValue>select kecmatan</option>
                    {
                        this.props.kecamatan.map((el, idx)=>{
                            return(
                                <option name="kecamatan" key={idx} value={el.kecamatan}>{el.kecamatan}</option>
                            )
                        })
                    }   
                    </select><br/>

                    <Label>Kelurahan </Label> <Input type="text" name="kelurahan" value={kelurahan} onChange={this.setValue}  /><br/>     
                    <Link to="/">
                        <div>
                        <button type="submit" value="submit" onClick={this.saveKota} >Submit</button>
                        </div>
                    </Link>
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
    city: state.KReducer.city,
    prov :state.PReducer.provinsi,
    kecamatan: state.KecReducer.kecamatan,
    login: state.AReducer.isLogin,

    
  })
  
const mapDispatchToProps = dispatch => {
    return {
        submitKel: (data)=> dispatch({type:"KELURAHAN_PAGE", payload: data}),
        clearKel: (id)=> dispatch({type:"CLEAR_KELURAHAN", payload: id}),
        cariKel: (id)=> dispatch({type:"CARI_KELURAHAN", payload: id})
        
    }
  }

export default connect(mapStateToProps, mapDispatchToProps) (FormKel)