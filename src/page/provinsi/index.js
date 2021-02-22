import React, { Component } from 'react';
import { connect } from "react-redux"
import { Link } from 'react-router-dom';
import Header from '../../template/header';
import Nav from '../../template/navigation';
import Footer from '../../template/footer';

class Provinsi extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    submitClicked=()=>{
        console.log("submit",this.props.history);
        this.props.history.push("/formprov")
    }

    delClicked=(idx)=>{
        alert(`Apakah Anda Ingin menghapus data ini?`)
        console.log("index", idx);
        this.props.clearProv(idx)
        this.props.history.push("/provinsi")
        this.setState({})
        // let dataBaru= this.props.indicat.splice(index, 1)
        // dataBaru= dataBaru.splice(index, 1)
        // console.log("data baru", dataBaru);
        alert(`Data berhasil terhapus`)

    }
    editClick=(index)=>{
        this.props.cariGejala(index)
        console.log("index edit", index);
        this.props.history.push("/formprov")

    }
    render() {
        if (!this.props.login)
            return this.props.history.push("/") 
        console.log(this.props.prov);
        return ( 
            <>
            <Header></Header>
            <Nav></Nav>
                <div className="container4" style={{marginLeft:"35%", width:"50%", marginTop:"8%", marginBottom:"8%"}}>
                    <h2 style={{textAlign:"center"}}>DAFTAR PROVINSI</h2>
                    <div>
                        <Link to="/formprov"> 
                        <button className="add">Add</button>
                        </Link>
                    </div>
                    <div className="table">
                        <table id="table" cellspasing="0" border="1" >
                            <thead >
                                <tr style={{ backgroundcolor: "aquamarine" }} >
                                    <th className="tNumber">No</th>
                                    <th className="tText" > Provinsi </th>
                                    <th className="tAction" > Action </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.prov.map((el, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{el.provinsi}</td>
                                                <td className="tdAction">
                                                    <button className="button" type="button" onClick={()=>this.delClicked(index)} > Delete </button>
                                                    <button className="button" type="button" onClick={()=>this.editClick(index)}> Update </button>
                                                </td>
                                             </tr>
                                         )
                                     })
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
                <Footer></Footer>
            </>
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
        cariProv: (id)=> dispatch({type:"CARI_PROVINSI", payload: id})
        
    }
  }

export default connect(mapStateToProps, mapDispatchToProps) (Provinsi);