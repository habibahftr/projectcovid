import React, { Component } from 'react';
import { connect } from 'react-redux';
import Label from "../../component/form/label";
import Input from "../../component/form/input";
import Header from '../../template/header';
import Nav from '../../template/navigation';
import Footer from '../../template/footer';

class DetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id:"",
            nik:"",
            nama:"",
            tglterapi:"",
            terapi:"",
         }
    }
    render() { 
        if (!this.props.login)
            return this.props.history.push("/")
        return ( 
            <>
            <div>
                <Header></Header>
                <Nav></Nav>
                <Label>ID Pasien </Label> <Input type="text" name="id" value=""   /><br/>
                <Label>NIK </Label> <Input type="text" name="nik" value=""   /><br/>  
                <Label>Nama </Label> <Input type="text" name="nama" value=""   /><br/>  
                <div className="table">
                        <table id="table" cellspasing="0" border="1" >
                            <thead >
                                <tr style={{ backgroundcolor: "aquamarine" }} >
                                    <th className="tNumber">No</th>
                                    <th className="tText" > Tanggal Terapi </th>
                                    <th className="tText">Jenis terapi</th>
                                </tr>
                            </thead>
                            {/* <tbody>
                                {
                                    this.props.pengobatanList.map((el, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{el.tglterapi}</td>
                                                <td>{el.terapi}</td>
                                             </tr>
                                         )
                                     })
                                }
                            </tbody> */}
                        </table>
                </div>
                <Footer></Footer>
 
            </div>
            
            </>
         );
    }
}
const mapStateToProps = state => ({
    login: state.AReducer.isLogin,

    
  })
  
const mapDispatchToProps = dispatch => {
    return {   
    }
  }

 
export default connect(mapStateToProps, mapDispatchToProps) (DetailPage);