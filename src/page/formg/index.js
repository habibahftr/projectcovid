import React, { Component } from 'react';
import { connect } from "react-redux"
import { Link } from 'react-router-dom';
import Label from "../../component/form/label";
import Input from "../../component/form/input";
import Header from '../../template/header';
import Nav from '../../template/navigation';
import Footer from '../../template/footer';

class FormGejala extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indication: "",
            description: "",
            // edit: false,
            // index:"",
            // gejalaedit:{},
        }
    }

    setValue = el => {
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    save = (data) => {
        let obj = this.state
        this.props.gejala(obj);
        data.preventDefault()
        this.clear()
        alert(`Sumbit success`)
        this.props.history.push("/gejala")

        // this.props.editgejala(obj)
        // this.setState({
        //    edit: false 
        // })
        // data.preventDefault()
        // this.clear()
        // alert("Update Success!")
        // this.props.history.push("/gejala")

    }


    clear = () => {
        this.setState({
            indication: "",
            description: "",
        })
    }
    reset = () => {
        this.setState({
            gejalaedit: {}
        })
    }

    render() {
        if (!this.props.login)
            return this.props.history.push("/")
 
        console.log("gejala", this.props.dataUser);
        const { indication, description } = this.state

        return (
            <div>
                <Header className="fixed-header"></Header>
                <Nav></Nav>

                <div className="container1" style={{ marginLeft: "30%", marginTop: "8%", marginBottom: "8%" }}>
                    <div className="card-content">
                        <div className="card-title">
                            <h2>INDICATION LIST</h2>
                            <div className="underline-title"></div>
                        </div>
                    </div>
                    <div>
                        <Label>Indication </Label> <Input type="text" name="indication" value={indication} onChange={this.setValue} placeholder="seperti demam, batuk kering, sesak napas, dll.." /><br />
                        <Label>Description </Label> <textarea rows="4" cols="50" type="text" name="description" value={description} onChange={this.setValue} placeholder="" />
                        <Link to="/">
                            <div>
                                <button type="submit" value="submit" onClick={this.save} >Submit</button>
                            </div>
                        </Link>
                    </div>
                </div>

                <Footer className="fixed-footer"></Footer>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    // dataUser: state.UReducer.users,
    indicat: state.InReducer.indications,
    gejalaEdit: state.InReducer.gejala,
    login: state.AReducer.isLogin,
    

})

const mapDispatchToProps = dispatch => {
    return {
        gejala: (data) => dispatch({ type: "INDICATION_PAGE", payload: data }),
        editgejala: (data) => dispatch({ type: "UPDATE_GEJALA", payloas: data }),
        cariGejala: (id) => dispatch({ type: "CARI_GEJALA", payload: id })

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormGejala);