import React, { Component } from 'react';
import Header from "../../template/header";
import Footer from "../../template/footer";
import Nav from "../../template/navigation";
import { connect } from "react-redux"
import { Link } from 'react-router-dom';

class Kota extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    submitClicked=()=>{
        console.log("submit",this.props.history);
        this.props.history.push("/formkota")
    }

    delClicked=(idx)=>{
        alert(`Apakah Anda Ingin menghapus data ini?`)
        console.log("index", idx);
        this.props.clearKota(idx)
        this.props.history.push("/kota")
        this.setState({})
        // let dataBaru= this.props.indicat.splice(index, 1)
        // dataBaru= dataBaru.splice(index, 1)
        // console.log("data baru", dataBaru);
        alert(`Data berhasil terhapus`)

    }
    editClick=(index)=>{
        this.props.cariKota(index)
        console.log("index edit", index);
        this.props.history.push("/formkota")

    }
    render() { 
        console.log("kota", this.props.indicat);
        return ( 
            <>
            <Header></Header>
            <Nav></Nav>
                <div className="container3" >
                    <h2 style={{textAlign:"center"}}>DAFTAR KOTA</h2>
                    <div>
                        <Link to="/formkota">
                        <button className="add">Add</button>
                        </Link>
                    </div>
                    <div className="table">
                        <table id="table" cellspasing="0" border="1" >
                            <thead >
                                <tr style={{ backgroundcolor: "aquamarine" }} >
                                    <th className="tNumber">No</th>
                                    <th className="tText" > Provinsi </th>
                                    <th className="tText" > Kota </th>
                                    <th className="tAction" > Action </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.city.map((el, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{el.provinsi}</td>
                                                <td>{el.kota}</td>
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
    city: state.KReducer.city

    
  })
  
const mapDispatchToProps = dispatch => {
    return {
        submitKota: (data)=> dispatch({type:"KOTA_PAGE", payload: data}),
        clearKota: (id)=> dispatch({type:"CLEAR_KOTA", payload: id}),
        cariKota: (id)=> dispatch({type:"CARI_KOTA", payload: id})
        
    }
  }

export default connect(mapStateToProps, mapDispatchToProps) (Kota)
            