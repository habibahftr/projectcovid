import React, { Component } from 'react';
import { connect } from "react-redux"
import { Link } from 'react-router-dom';
import Header from '../../template/header';
import Footer from "../../template/footer";
import Nav from "../../template/navigation";
import "./style.css";

class Gejala extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    submitClicked=()=>{
        console.log("submit",this.props.history);
        this.props.history.push("/formgejala")
    }

    delClicked=(idx)=>{
        alert(`Apakah Anda Ingin menghapus data ini?`)
        console.log("index", idx);
        this.props.clearData(idx)
        this.setState({})
        this.props.history.push("/gejala")
        alert(`Data berhasil terhapus`)

    }
    editClick=(index)=>{
        this.props.cariGejala({index})
        // console.log("index edit", index);
        this.props.history.push("/editgejala/"+index)

    }


    render() {
        if (!this.props.login)
            this.props.history.push("/")
 
        console.log("gejala", this.props.indicat);
        console.log("provinsi", this.props.provinsi);
        // console.log(this.props.hay);
        return (
            <>
            <Header></Header>
            <Nav></Nav>
                <div className="container3" >
                    <h2 style={{textAlign:"center"}}>DAFTAR GEJALA</h2>
                    <div>
                        <Link to="/formgejala">
                        <button className="add">Add</button>
                        </Link>
                    </div>
                    <div className="table">
                        <table id="table" cellspasing="0" border="1" >
                            <thead >
                                <tr style={{ backgroundcolor: "aquamarine" }} >
                                    <th className="tNumber">No</th>
                                    <th className="tText" > Indication </th>
                                    <th className="tText" > Description </th>
                                    <th className="tAction" > Action </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                     this.props.indicat !== undefined &&
                                    this.props.indicat.map((el, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{el.indication}</td>
                                                <td>{el.description}</td>
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
    indicat: state.gejalaReducer.indications,
    login: state.AReducer.isLogin,

    
  })
  
const mapDispatchToProps = dispatch => {
    return {
        gejala: (data)=> dispatch({type:"INDICATION_PAGE", payload: data}),
        clearData: (id)=> dispatch({type:"CLEAR_GEJALA", payload: id}),
        cariGejala: (id)=> dispatch({type:"CARI_GEJALA", payload: id})
        
    }
  }

export default connect(mapStateToProps, mapDispatchToProps) (Gejala);