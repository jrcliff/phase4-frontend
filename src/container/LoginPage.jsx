import React, { Component } from 'react'
import LoginForm from '../presentational/LoginForm'

export default class LoginPage extends Component {

    state = {
        users: [],
        logged: false
    }

    componentDidMount(){
        let url = "http://localhost:3000/users"
        fetch(url)
        .then(resp => resp.json())
        .then(users => this.setState({
            users: users
        }))
    }

    

    render() {
        
        return (
            <div>
                <LoginForm loginForm={this.loginForm}/>
            </div>
        )
    }
}
