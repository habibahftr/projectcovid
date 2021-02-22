import React, { Component } from 'react';
import Header from "../../template/header";
import Footer from "../../template/footer";
import Nav from "../../template/navigation";
import { connect } from "react-redux"
import { Link } from 'react-router-dom';

class Pengobatan extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    submitClicked=()=>{
        console.log("submit",this.props.history);
        this.props.history.push("/formkasus")
    }

    delClicked=(idx)=>{
        console.log("index", idx);
        this.props.clearPengobatan(idx)
        this.props.history.push("/pengobatan")
        this.setState({})
        // let dataBaru= this.props.indicat.splice(index, 1)
        // dataBaru= dataBaru.splice(index, 1)
        // console.log("data baru", dataBaru);
        alert(`Data berhasil terhapus`)

    }
    editClick=(index)=>{
        this.props.cari(index)
        console.log("index edit", index);
        this.props.history.push("/formobat")
    }
    render() { 
        if (!this.props.login)
            return this.props.history.push("/")
        return ( 
            <>
            <Header></Header>
            <Nav></Nav>
                <div className="container4" style={{marginLeft:"25%", width:"60%", marginTop:"8%", marginBottom:"8%"}}>
                    <h2 style={{textAlign:"center"}}>DAFTAR PENGOBATAN</h2>
                    <div>
                        <Link to="/formobat">
                        <button className="add">Add</button>
                        </Link>
                    </div>
                    <div className="table">
                        <table id="table" cellspasing="0" border="1" >
                            <thead >
                                <tr style={{ backgroundcolor: "aquamarine" }} >
                                    <th className="tNumber">No</th>
                                    <th className="tText" > ID Pasien </th>
                                    <th className="tText">NIK</th>
                                    <th className="tText" > Nama </th>
                                    <th className="tText" > Terapi Terakhir </th>
                                    <th className="tAction" > Action </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.pengobatanList.map((el, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{el.id}</td>
                                                <td>{el.nik}</td>
                                                <td>{el.nama}</td>
                                                <td>{el.terapi}</td>
                                                <td className="tdAction">
                                                    <button className="button" type="button" onClick={()=>this.delClicked(index)} > Delete </button>
                                                    <button className="button" type="button" onClick={()=>this.editClick(index)}> Update </button>
                                                    <button className="button" type="button" > Detail </button>
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
    pengobatanList : state.ObatReducer.pengobatan,
    login: state.AReducer.isLogin,
    
  })
  
const mapDispatchToProps = dispatch => {
    return {
        submitpengobatan: (data)=> dispatch({type:"PENGOBATAN_PAGE", payload: data}),
        clearPengobatan: (id)=> dispatch({type:"CLEAR_PENGOBATAN", payload: id}),
        cariPengobatan: (id)=> dispatch({type:"CARI_PENGOBATAN", payload: id})
        
    }
  }

export default connect(mapStateToProps, mapDispatchToProps) (Pengobatan)