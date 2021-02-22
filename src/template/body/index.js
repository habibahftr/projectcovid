import React, { Component } from 'react';
import { Route, Router, Switch, useHistory, useParams } from 'react-router-dom';
import Login from "../../page/login";
import Regis from "../../page/regis";
import Error from "../../page/error";
import Home from "../../page/home";
import FormGejala from "../../page/formg";
import Gejala from "../../page/gejala";
import Header from "../header";
import Footer from "../footer";
import Nav from "../navigation";
import FormProv from '../../page/formProv';
import Provinsi from "../../page/provinsi"
import Formkota from '../../page/formkota';
import Kota from '../../page/kota';
import Kecamatan from '../../page/kecamatan';
import FormKec from "../../page/formKec"
import Kelurahan from '../../page/kelurahan';
import FormKel from '../../page/formKel';
import Kasus from '../../page/kasus';
import FormKasus from "../../page/formKasus";
import Pengobatan from '../../page/pengobatan';
import FormObat from '../../page/formobat';
import Logout from '../../page/logout';
import DetailPage from "../../page/detailPage";

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <Switch>
                <Route exact path="/" component={
                    () => {
                        let history = useHistory()
                        return <Login history={history} />
                    }
                }></Route>
                <Route path="/regis" component={
                    ()=> {
                        let history = useHistory()
                        return <Regis history={history} />
                    }
                } />
                <Route path="/error" component={
                    () => {
                        let history = useHistory()
                        return <Error history={history} />
                    }
                } />
                <Route path="/home" component={
                    () => {
                        let history = useHistory()
                        return <Home history={history} />
                    }
                } />
                <Route path="/formgejala" component={
                    ()=>{
                        let history = useHistory()
                        return <FormGejala history={history} currentPage="formgejala" />
                    }
                }/>
                <Route path="/gejala" component={
                    ()=>{
                        let history = useHistory()
                        return <Gejala history={history}  />
                    }
                }/>
                <Route path="/editgejala/:indx" component={
                    ()=>{
                        let history = useHistory();
                        const {indx} = useParams();
                        return <FormGejala indx={indx} history={history}  />
                    }
                }/>
                <Route path="/provinsi" component={
                    ()=>{
                        let history = useHistory()
                        return <Provinsi history={history} />
                    }
                }/>
                <Route path="/formprov" component={
                    ()=>{
                        let history = useHistory()
                        return <FormProv history={history} />
                    }
                }/>
                <Route path="/editprovinsi/:indx" component={
                    ()=>{
                        let history = useHistory();
                        const {indx} = useParams();
                        return <FormProv indx={indx} history={history}  />
                    }
                }/>
                <Route path="/kota" component={
                    ()=>{
                        let history = useHistory()
                        return <Kota history={history}/>
                    }
                }/>
                <Route path="/formkota" component={
                    ()=>{
                        let history = useHistory()
                        return <Formkota history={history} />
                    }
                }/>
                <Route path="/editkota/:indx" component={
                    ()=>{
                        let history = useHistory();
                        const {indx} = useParams();
                        return <Formkota indx={indx} history={history}  />
                    }
                }/>
                 <Route path="/kecamatan" component={
                    ()=>{
                        let history = useHistory()
                        return <Kecamatan history={history}/>
                    }
                }/>
                <Route path="/formkec" component={
                    ()=>{
                        let history = useHistory()
                        return <FormKec history={history} />
                    }
                }/>
                <Route path="/editkecamatan/:indx" component={
                    ()=>{
                        let history = useHistory();
                        const {indx} = useParams();
                        return <FormKec indx={indx} history={history}  />
                    }
                }/>
                <Route path="/kelurahan" component={
                    ()=>{
                        let history = useHistory()
                        return <Kelurahan history={history}/>
                    }
                }/>
                <Route path="/formkel" component={
                    ()=>{
                        let history = useHistory()
                        return <FormKel history={history} />
                    }
                }/>
                <Route path="/editkelurahan/:indx" component={
                    ()=>{
                        let history = useHistory();
                        const {indx} = useParams();
                        return <FormKel indx={indx} history={history}  />
                    }
                }/>
                <Route path="/kasus" component={
                    ()=>{
                        let history = useHistory()
                        return <Kasus history={history}/>
                    }
                }/>
                <Route path="/formkasus" component={
                    ()=>{
                        let history = useHistory()
                        return <FormKasus history={history} />
                    }
                }/>
                <Route path="/editkasus/:indx" component={
                    ()=>{
                        let history = useHistory();
                        const {indx} = useParams();
                        return <FormKasus indx={indx} history={history}  />
                    }
                }/>
                <Route path="/pengobatan" component={
                    ()=>{
                        let history = useHistory()
                        return <Pengobatan history={history}/>
                    }
                }/>
                <Route path="/formobat" component={
                    ()=>{
                        let history = useHistory()
                        return <FormObat history={history} />
                    }
                }/>
                <Route path="/editpengobatan/:indx" component={
                    ()=>{
                        let history = useHistory();
                        const {indx} = useParams();
                        return <FormObat indx={indx} history={history}  />
                    }
                }/>
                <Route path="/detail" component={
                    ()=>{
                        let history = useHistory()
                        return <DetailPage history={history} />
                    }
                }/>

                <Route path="/logout" component={
                    ()=>{
                        let history = useHistory()
                        return <Logout history={history} />
                    }
                }/>
                    

            </Switch>
        );
    }
}

export default Body;