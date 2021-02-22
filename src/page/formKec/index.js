import React, { Component } from 'react';
import { connect } from "react-redux";
import Label from "../../component/form/label";
import Input from "../../component/form/input";
import Option from "../../component/form/option";
import Header from "../../template/header";
import Footer from "../../template/footer";
import Nav from "../../template/navigation";
import { Link } from 'react-router-dom';

class FormKec extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            provinsi:"",
            kota:"",
            kecamatan:"",
            kecedit:{},
            edit: false
         }
    }
    setValue= el=>{
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    saveKec=(data)=>{
            if (this.props.indx) {
                let objedit = {
                    index:this.props.indx,
                    provinsi:this.state.provinsi,
                    kota:this.state.kota,
                    kecamatan : this.state.kecamatan,
                }
                this.props.editKec(objedit)
                data.preventDefault()
                this.clear()
                alert(`Update success`)
                this.props.history.push("/kecamatan")    
            }else{
                let obj =this.state
                // if(this.state.edit===false){
                    this.props.submitKec(obj);
                    data.preventDefault()
                    this.clear()
                    alert(`Sumbit success`)
                    this.props.history.push("/kecamatan")
            }
    }

    componentDidMount(){ //akan dijalankan ketika pindah komponen,dan hanya dijalankan sekali
        if (this.props.indx) {
            let dataEdit = this.props.cariKec({index : this.props.indx})
            console.log(this.props.dataEdit);
            this.setState({
                indication : this.props.dataEdit.indication,
                description : this.props.dataEdit.description
            })
        }
    }
    reset = () => {
        this.setState({
            kecedit: {}
        })
    }

    clear = () => {
        this.setState({ 
            provinsi:"",
            kota:"",
            kecamatan:""
        })
    }
    
    render() { 
        if (!this.props.login)
            this.props.history.push("/")
        const{provinsi, kota, kecamatan} = this.state
        console.log("ini form kec");
        return (  
            <>
            <div>
                <Header className="fixed-header"></Header>
                <Nav></Nav>

                <div className="container1" style={{marginLeft:"30%", marginTop:"8%"}}>
                <div className="card-content">
                    <div className="card-title">
                        <h2>DAFTAR KECAMATAN</h2>
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
                    <Label>Kecamatan </Label> <Input type="text" name="kecamatan" value={kecamatan} onChange={this.setValue}  /><br/>     
                    <Link to="/">
                        <div>
                        <button type="submit" value="submit" onClick={this.saveKec} >Submit</button>
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
    login: state.AReducer.isLogin,
    dataedit : state.KecReducer.kecedit

    
  })
  
const mapDispatchToProps = dispatch => {
    return {
        submitKec: (data)=> dispatch({type:"KECAMATAN_PAGE", payload: data}),
        clearKec: (id)=> dispatch({type:"CLEAR_KECAMATAN", payload: id}),
        cariKec: (id)=> dispatch({type:"CARI_KECAMATAN", payload: id}),
        editKec: (data)=> dispatch({type:"UPDATE_KECAMATAN", payload: data}),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps) (FormKec)