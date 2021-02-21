import React, { Component } from 'react';
import { connect } from "react-redux"
import { Link } from 'react-router-dom';
import Label from "../../component/form/label";
import Input from "../../component/form/input";
import Header from '../../template/header';
import Nav from '../../template/navigation';
import Footer from '../../template/footer';

class FormKasus extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id:"",
            provinsi:"",
            kota:"",
            kecamatan:"",
            keluarah:"",
            nik:"",
            nama:"",
            tglmasuk:"",
            gejala:[],
            status:"",
            edit: false,
         }
    }
    setValue= el=>{
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    saveKasus=(data)=>{
        this.setId()
        let obj =this.state
        // if(this.state.edit===false){
            this.props.submitKasus(obj);
            data.preventDefault()
            this.clear()
            alert(`Sumbit success`)
            this.props.history.push("/kasus")
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
            keluarah:"",
            nik:"",
            nama:"",
            tglmasuk:"",
            gejala:[],
            status:"",
        })
    }
    // reset = ()=> {
    //     this.setState({
    //         gejalaedit :{}
    //     })
    //   }

    gejalahandler = (event)=>{
        // console.log(this.state.hobby);
        let tempGejala = this.state.gejala
        let index = -1
        if(event.target.checked === true){
            index = tempGejala.findIndex(e => e === event.target.value);
            if(index < 0){
                tempGejala.push(event.target.value)
            }
        }else{
            index = tempGejala.findIndex(e => e ===event.target.value)
            if(index > -1){
                tempGejala.splice(event.target.value, 1)
            }
        }
        this.setState({
            gejala : tempGejala
        })
        // console.log(this.state.hobby);
    }

    setId=()=>{
        let idawal= 0
        let date = this.state.tglmasuk.toString
        let idNow = "CVD-"+date+(idawal++).toString
        this.setState({
            id : idNow
        })
    }

    render() { 
        const{provinsi, kota, kecamatan, kelurahan, nik, nama, tglmasuk, gejala, status} = this.state
        return ( 
            <>
            <div>
                <Header className="fixed-header"></Header>
                <Nav></Nav>

                <div className="container1" style={{marginLeft:"30%", marginTop:"8%", marginBottom:"8%"}}>
                <div className="card-content">
                    <div className="card-title">
                        <h2>DAFTAR KASUS</h2>
                    <div className="underline-title"></div>
                    </div>
                </div>
                <div>
                    <Label>Provinsi</Label>
                    <select name="provinsi" value={provinsi} onChange={this.setValue} >
                        <option defaultValue>select provinsi</option>
                    {
                        this.props.provList.map((el, idx)=>{
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
                        this.props.cityList.map((el, idx)=>{
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
                        this.props.kecamatanList.map((el, idx)=>{
                            return(
                                <option name="kecamatan" key={idx} value={el.kecamatan}>{el.kecamatan}</option>
                            )
                        })
                    }   
                    </select><br/>
                    <Label>Kelurahan</Label>
                    <select name="kelurahan" value={kelurahan} onChange={this.setValue} >
                        <option defaultValue>select kelurahan</option>
                    {
                        this.props.kelurahanList.map((el, idx)=>{
                            return(
                                <option name="kelurahan" key={idx} value={el.kelurahan}>{el.kelurahan}</option>
                            )
                        })
                    }   
                    </select><br/>

                    <Label>NIK </Label> <Input type="text" name="nik" value={nik} onChange={this.setValue}  /><br/>  
                    <Label>Nama </Label> <Input type="text" name="nama" value={nama} onChange={this.setValue}  /><br/>  
                    <Label>Tanggal Masuk </Label> <Input type="Date" name="tglmasuk" value={tglmasuk} onChange={this.setValue}  /><br/> 
                    <Label>Gejala </Label> <br/>
                    {
                        this.props.gejalaList.map((el, index)=>{
                            return(
                                <Input type="checkbox" key={index} name="gejala" checked={gejala.findIndex(e => e === el.indication) > -1 ?"checked":""} value={el.indication}  onChange={this.gejalahandler}>{el.indication}</Input>
                            )
                        })
                    }
                    <br/>
                    <Label>Status</Label>
                    <select name="status" value={status} onChange={this.setValue} >
                        <option defaultValue>select status</option> 
                        <option value="sembuh">Sembuh</option>
                        <option value="prosesPengobatan">Proses Pengobatan</option>
                    </select><br/>   
                    <Link to="/">
                        <div>
                        <button type="submit" value="submit" onClick={this.saveKasus} >Submit</button>
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
    gejalaList: state.InReducer.indications,
    cityList: state.KReducer.city,
    provList :state.PReducer.provinsi,
    kecamatanList: state.KecReducer.kecamatan,
    kelurahanList: state.KelReducer.kelurahan,
    kasusList:state.KasusReducer.kasus

    
  })
  
const mapDispatchToProps = dispatch => {
    return {
        submitKasus: (data)=> dispatch({type:"KASUS_PAGE", payload: data}),
        clearKasus: (id)=> dispatch({type:"CLEAR_KASUS", payload: id}),
        cariKasus: (id)=> dispatch({type:"CARI_KASUS", payload: id})
        
    }
  }

export default connect(mapStateToProps, mapDispatchToProps) (FormKasus)