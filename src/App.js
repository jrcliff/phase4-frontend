import React, { Component } from 'react'
import './App.css';
import {  Route } from 'react-router-dom'

import LoginPage from './container/LoginPage'
import Home from './container/Home'
import RegistrationForm from './presentational/RegistrationForm'
import Nav from './presentational/Nav'



export default class App extends Component {

  state ={
    user: {},
    loggedIn: false,
    username: ""
  }

  setUser = (user) =>{
    this.setState({
      user: user,
      loggedIn: true,
      username: user.username
    })
    localStorage.setItem("user", JSON.stringify(this.state.user))
    localStorage.setItem("loggedIn", this.state.loggedIn)
    localStorage.setItem("username", this.state.username)
  }

  logOut = () => {
    this.setState({
      user: null,
      loggedIn: false,
      username: ""
    })
  }



  render() {
    return ( 
      <div className="App">
      <Route exact path="/" render={() => <LoginPage setUser={this.setUser}/>}/>
      <Route exact path="/timeline" render={() => <Home user={this.state.user}/>}/>
      <Route exact path='/registration' component={<RegistrationForm />} />
      {/* <Route path="/" component={<Nav />}/> */}
      </div>
    )
  }
}
