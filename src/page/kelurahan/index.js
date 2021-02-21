import React, { Component } from 'react';
import Header from "../../template/header";
import Footer from "../../template/footer";
import Nav from "../../template/navigation";
import { connect } from "react-redux"
import { Link } from 'react-router-dom';


class Kelurahan extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    submitClicked=()=>{
        console.log("submit",this.props.history);
        this.props.history.push("/formkel")
    }

    delClicked=(idx)=>{
        alert(`Apakah Anda Ingin menghapus data ini?`)
        console.log("index", idx);
        this.props.clearKel(idx)
        this.props.history.push("/kelurahan")
        this.setState({})
        // let dataBaru= this.props.indicat.splice(index, 1)
        // dataBaru= dataBaru.splice(index, 1)
        // console.log("data baru", dataBaru);
        alert(`Data berhasil terhapus`)

    }
    editClick=(index)=>{
        this.props.cariKec(index)
        console.log("index edit", index);
        this.props.history.push("/formkel")
    }
    render() { 
        console.log("kel", this.props.kelList);
        return ( 
            <>
            <Header></Header>
            <Nav></Nav>
                <div className="container4" style={{marginLeft:"25%", width:"60%", marginTop:"8%", marginBottom:"8%"}}>
                    <h2 style={{textAlign:"center"}}>DAFTAR KELURAHAN</h2>
                    <div>
                        <Link to="/formkel">
                        <button className="add">Add</button>
                        </Link>
                    </div>
                    <div className="table">
                        <table id="table" cellspasing="0" border="1" >
                            <thead >
                                <tr style={{ backgroundcolor: "aquamarine" }} >
                                    <th className="tNumber">No</th>
                                    <th className="tText" > Provinsi </th>
                                    <th className="tText">Kota</th>
                                    <th className="tText" > Kecamatan </th>
                                    <th className="tText" > Kelurahann </th>
                                    <th className="tAction" > Action </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.kelList.map((el, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{el.provinsi}</td>
                                                <td>{el.kota}</td>
                                                <td>{el.kecamatan}</td>
                                                <td>{el.kelurahan}</td>
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
    kecList : state.KecReducer.kecamatan,
    kelList : state.KelReducer.kelurahan,


    
  })
  
const mapDispatchToProps = dispatch => {
    return {
        submitKel: (data)=> dispatch({type:"KELURAHAN_PAGE", payload: data}),
        clearKel: (id)=> dispatch({type:"CLEAR_KELURAHAN", payload: id}),
        cariKel: (id)=> dispatch({type:"CARI_KELURAHAN", payload: id})
        
    }
  }

export default connect(mapStateToProps, mapDispatchToProps) (Kelurahan)