import React, { Component } from 'react'
import LoginForm from '../presentational/LoginForm'

export default class LoginPage extends Component {

    loginForm = (username) => {
        console.log(username)
    }

    render() {
        
        return (
            <div>
                <LoginForm loginForm={this.loginForm}/>
            </div>
        )
    }
}
