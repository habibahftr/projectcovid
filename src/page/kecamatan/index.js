import React, { Component } from 'react';
import Header from "../../template/header";
import Footer from "../../template/footer";
import Nav from "../../template/navigation";
import { connect } from "react-redux"
import { Link } from 'react-router-dom';

class Kecamatan extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    submitClicked=()=>{
        console.log("submit",this.props.history);
        this.props.history.push("/formkec")
    }

    delClicked=(idx)=>{
        alert(`Apakah Anda Ingin menghapus data ini?`)
        console.log("index", idx);
        this.props.clearKec(idx)
        this.props.history.push("/kecamatan")
        this.setState({})
        // let dataBaru= this.props.indicat.splice(index, 1)
        // dataBaru= dataBaru.splice(index, 1)
        // console.log("data baru", dataBaru);
        alert(`Data berhasil terhapus`)

    }
    editClick=(index)=>{
        this.props.cariKec(index)
        console.log("index edit", index);
        this.props.history.push("/formkec")

    }
    render() { 
        console.log("ini kec");
        return ( 
            <>
            <Header></Header>
            <Nav></Nav>
                <div className="container4" style={{marginLeft:"35%", width:"50%", marginTop:"8%", marginBottom:"8%"}}>
                    <h2 style={{textAlign:"center"}}>DAFTAR KECAMATAN</h2>
                    <div>
                        <Link to="/formkec">
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
                                    <th className="tAction" > Action </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.kecList.map((el, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{el.provinsi}</td>
                                                <td>{el.kota}</td>
                                                <td>{el.kecamatan}</td>
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
    kecList : state.KecReducer.kecamatan

    
  })
  
const mapDispatchToProps = dispatch => {
    return {
        submitKec: (data)=> dispatch({type:"KECAMATAN_PAGE", payload: data}),
        clearKec: (id)=> dispatch({type:"CLEAR_KECAMATAN", payload: id}),
        cariKec: (id)=> dispatch({type:"CARI_KECAMATAN", payload: id})
        
    }
  }

export default connect(mapStateToProps, mapDispatchToProps) (Kecamatan)