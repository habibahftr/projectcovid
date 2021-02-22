import React, { Component } from 'react';
import provinsi from '../provinsi';
import { connect } from "react-redux";
import Label from "../../component/form/label";
import Input from "../../component/form/input";
import Option from "../../component/form/option";
import Header from "../../template/header";
import Footer from "../../template/footer";
import Nav from "../../template/navigation";
import { Link } from 'react-router-dom';

class FormKota extends Component {
    constructor(props) {
        super(props);
        this.state = {
            provinsi: "",
            kota: "",
        }
    }

    setValue = el => {
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    saveKota = (data) => {
        if (this.props.indx) {
            let objedit = {
                index: this.props.indx,
                provinsi: this.state.provinsi,
                kota: this.state.kota,
            }
            this.props.editkota(objedit)
            data.preventDefault()
            this.clear()
            alert(`Update success`)
            this.props.history.push("/kota")
        } else {
            let obj =this.state
            this.props.submitKota(obj);
            data.preventDefault()
            this.clear()
            alert(`Sumbit success`)
            this.props.history.push("/kota")
        }

    }

    componentDidMount(){ //akan dijalankan ketika pindah komponen,dan hanya dijalankan sekali
        if (this.props.indx) {
            let dataEdit = this.props.cariKota({index : this.props.indx})
            console.log("kotaedit",this.props.kotaEdit);
            this.setState({
                provinsi : this.props.kotaEdit.provinsi,
                kota : this.props.kotaEdit.kota
            })
        }
    }

    clear = () => {
        this.setState({
            provinsi: "",
            kota: "",
        })
    }
    // reset = ()=> {
    //     this.setState({
    //         gejalaedit :{}
    //     })
    //   }
    render() {
        if (!this.props.login)
             this.props.history.push("/")
        const { provinsi, kota } = this.state
        console.log("prov", this.props.prov);
        return (
            <>
                <div>
                    <Header className="fixed-header"></Header>
                    <Nav></Nav>

                    <div className="container1" style={{ marginLeft: "30%", marginTop: "8%" }}>
                        <div className="card-content">
                            <div className="card-title">
                                <h2>DAFTAR KOTA</h2>
                                <div className="underline-title"></div>
                            </div>
                        </div>
                        <div>
                            <Label>Provinsi</Label>
                            <select name="provinsi" value={provinsi} onChange={this.setValue} >
                                <option defaultValue>select provinsi</option>
                                {
                                    this.props.prov.map((el, idx) => {
                                        return (
                                            <option name="provinsi" key={idx} value={el.provinsi}>{el.provinsi}</option>
                                        )
                                    })
                                }
                            </select><br />
                            <Label>Kota </Label> <Input type="text" name="kota" value={kota} onChange={this.setValue} /><br />
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
    city: state.KReducer.city,
    kotaEdit :state.KReducer.kotaedit,
    prov: state.PReducer.provinsi,
    login: state.AReducer.isLogin,


})

const mapDispatchToProps = dispatch => {
    return {
        submitKota: (data) => dispatch({ type: "KOTA_PAGE", payload: data }),
        clearKota: (id) => dispatch({ type: "CLEAR_KOTA", payload: id }),
        cariKota: (id) => dispatch({ type: "CARI_KOTA", payload: id }),
        editkota:(data)=> dispatch({ type: "UPDATE_KOTA", payload: data }),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormKota)