import React, { Component } from 'react';
import {connect} from 'redux'

import logo from './logo.svg';
import './App.css';

function callAPI(endpoint, data){
  const local = "http://localhost:3001/";
  const headers = {headers: {'Authorization': 'whatever-you-want'}};
  const path = local + endpoint;
  return fetch(path, headers).then((response)=> response.json());
}

class App extends Component {

  // callApi =(endpoint) => {
  //   const local = "http://localhost:3001/";
  //   const headers = {headers: {'Authorization': 'whatever-you-want'}};
  //   const path = local + endpoint;
  //   var payload = {};
  //   fetch(path, headers).then((response)=> response.json());
  // }

  componentDidMount(){
    console.log("componentDidMount");
    //const localhost = "http://localhost:3001/categories";
    //fetch(localhost, { headers: { 'Authorization': 'whatever-you-want' }}).then((response)=> { response.json().then(json=>console.log(json));});
    
    callAPI("categories").then(payload=>console.log(payload));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
