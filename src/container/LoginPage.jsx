import React, { Component } from 'react'
import LoginForm from '../presentational/LoginForm'

export default class LoginPage extends Component {

    state = {
        current_user: [],
        logged: false,
        username: ""
    }

    

    render() {
        
        return (
            <div>
                <LoginForm setUser={this.props.setUser}/>
            </div>
        )
    }
}
