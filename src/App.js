import React, { Component } from 'react'
import './App.css';
import {  Route } from 'react-router-dom'

import LoginPage from './container/LoginPage'
import Home from './container/Home'
import RegistrationForm from './presentational/RegistrationForm'
import Nav from './presentational/Nav'



export default class App extends Component {

  constructor(){
    super()
  }
  state ={
    user: {},
    loggedIn: false,
    username: ""
  }

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("user");
  //   if (loggedInUser) {
  //     const foundUser = JSON.parse(loggedInUser);
  //     setUser(foundUser);
  //   }
  // }, []);

  setUser = (user) =>{
    this.setState({
      user: user,
      loggedIn: true,
      username: user.username
    })
    localStorage.setItem("user", JSON.stringify(user))
    localStorage.setItem("loggedIn", true )
    localStorage.setItem("username", user.username)
  }

  logOut = () => {
    this.setState({
      user: null,
      loggedIn: false,
      username: ""
    })
    localStorage.clear()
    console.log(this.state)
  }

  deletePost = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    // fetch(`http://localhost:3000/posts/${event.target.value.id}`)
  }

  handleDelete = (event) => {
    console.log('this is your delete button')
    console.log(event)
    console.log(event.target.value)
  }



  render() {
    return ( 
      <div className="App">
      <Route exact path="/" render={() => <LoginPage setUser={this.setUser}/>}/>
      <Route exact path="/timeline" render={() => <Home user={this.state.user} logOut={this.logOut}/> } />
      <Route exact path='/registration' component={<RegistrationForm />} />
      </div>
    )
  }
}
