import React, { Component } from 'react';
import {connect, createStore, combineReducers} from 'react-redux'
import {Provider} from 'react-redux'
import {addComment, upVote} from '../actions'
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
    post : {},
  }

  onClick=(s)=>{
    console.log(s);
    console.log("clicked");
  }

  componentDidMount(){
    console.log("componentDidMount");
    //const localhost = "http://localhost:3001/categories";
    //fetch(localhost, { headers: { 'Authorization': 'whatever-you-want' }}).then((response)=> { response.json().then(json=>console.log(json));});
    callAPI("posts").then(payload=>{
      console.log(payload);
      this.setState({post : payload[0]});
    });
  }

  render() {
    const {selectUpVote} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to {this.props.name} React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Post key={this.state.post.id} postData={this.state.post} upVote={(postData)=>selectUpVote(postData)}/>

      {/*List post components*/}
       {/*} {this.state.post.map(post => {
          //return(<p key={post.id}>{post.title}</p>);
          return (<Post key={post.id} postData={post} upVote={(post)=>{console.log(post); selectUpVote(post);}}/>)
        })} */}

      </div>
    );
  } 
}

function mapStateToProps({state, props}){
  return {post : {}};
}

function mapDispatchToProps(dispatch){
  return {
    addComment: (data) => dispatch(addComment(data)),
    selectUpVote:(data) =>{console.log(data); dispatch(upVote(data)); },
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App)