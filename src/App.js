import React, { Component } from 'react'
import './App.css';
import {  Route } from 'react-router-dom'

import LoginPage from './container/LoginPage'
import Home from './container/Home'



export default class App extends Component {

  state ={
    user: {}
  }

  setUser = (user) =>{
    this.setState({
      user: user
    })
  }


  render() {
    return ( 
      <div className="App">
      <Route exact path="/login" render={() => <LoginPage setUser={this.setUser}/>}/>
      <Route exact path="/timeline" render={() => <Home user={this.state.user}/>}/>
      </div>
    )
  }
}
