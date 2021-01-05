import React, { Component } from 'react'
import './App.css';
import { BrowserRouter} from 'react-router-dom'

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
      <BrowserRouter exact path="/" render={() => <LoginPage setUser={this.setUser}/>}/>
        <Home user={this.state.user}/>
      </div>
    )
  }
}
