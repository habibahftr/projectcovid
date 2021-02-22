import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./template/header";
import Footer from "./template/footer";
import Nav from "./template/navigation";
import Body from "./template/body";
import { connect } from "react-redux"
import Gejala from "./page/gejala";
import FormGejala from "./page/formg";
import Home from './page/home';
import Login from './page/login';
import Logout from './page/logout';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
     }
  }

  render() { 
    return ( 
      <>
      <Router>
        <Body></Body>
      </Router>
      
      </>
     );
  }
}

const mapStateToProps = state => ({
  checkLogin: state.AReducer.isLogin
})

const mapDispatchToProps = dispatch => {
  return {
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps) (App);