import React, { Component } from 'react';

class EditGejala extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            indication: "",
            description: "",
         }
    }
    setValue = el => {
        this.setState({
            [el.target.name]: el.target.value
        })
    }
    edit = (data) => {
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
    render() { 
        return ( 
            <>
            <Header className="fixed-header"></Header>
                <Nav></Nav>

                <div className="container1" style={{marginLeft:"30%", marginTop:"8%", marginBottom:"8%"}}>
                <div className="card-content">
                    <div className="card-title">
                        <h2>EDIT GEJALA</h2>
                    <div className="underline-title"></div>
                    </div>
                </div>
                <div>
                    <Label>Indication </Label> <Input type="text" name="indication" disabled value={this.props.gejalaEdit.indication} onChange={this.setValue} placeholder="seperti demam, batuk kering, sesak napas, dll.." /><br/>
                    <Label>Description </Label> <textarea rows="4" cols="50" type="text" name="description" value={this.props.gejalaEdit.description} onChange={this.setValue} placeholder="" />                    
                    <Link to="/">
                        <div>
                        <button type="submit" value="submit" onClick={this.edit} >Submit</button>
                        </div>
                    </Link>
                </div>
                </div>

                <Footer className="fixed-footer"></Footer>

            </>
         );
    }
}
 
const mapStateToProps = state => ({
    // dataUser: state.UReducer.users,
    indicat: state.InReducer.indications,
    gejalaEdit: state.InReducer.gejala
    
  })
  
const mapDispatchToProps = dispatch => {
    return {
        gejala: (data)=> dispatch({type:"INDICATION_PAGE", payload: data}),
        editgejala:(data)=>dispatch({type:"UPDATE_GEJALA", payloas: data}),
        cariGejala: (id)=> dispatch({type:"CARI_GEJALA", payload: id})
        
    }
  }
 
export default connect(mapStateToProps, mapDispatchToProps) (EditGejala);