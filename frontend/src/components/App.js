import React, { Component } from 'react';
import {connect, createStore, combineReducers} from 'react-redux'
import {Provider} from 'react-redux'
import {addComment} from '../actions'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from '../logo.svg';
import './App.css';
import Post from './Post.js'

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

  state = {
    posts : [],
  }

  componentDidMount(){
    console.log("componentDidMount");
    //const localhost = "http://localhost:3001/categories";
    //fetch(localhost, { headers: { 'Authorization': 'whatever-you-want' }}).then((response)=> { response.json().then(json=>console.log(json));});
    callAPI("posts").then(payload=>{
      console.log(payload);
      this.setState({posts : payload});
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to {this.props.name} React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

      {/*List post components*/}
        {this.state.posts.map(post => {
          //return(<p key={post.id}>{post.title}</p>);
          return (<Post key={post.id}  postData={post} />)
        })}

      </div>
    );
  } 
}

function mapStateToProps({}){
  return {};
}

function mapDispatchToProps(dispatch){
  return {
    addComment: (data) => dispatch(addComment(data)),
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App)