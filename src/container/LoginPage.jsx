import React, { Component } from 'react'
import LoginForm from '../presentational/LoginForm'

export default class LoginPage extends Component {

    state = {
        users: [],
        logged: false
    }

    componentDidMount(){
        let url = "http://localhost:3000/userposts"
        fetch(url)
        .then(resp => resp.json())
        .then(usersAndPosts => this.setState({
            users: usersAndPosts
        }))
    }

    loginForm = (username) => {
        let userPostArray = this.state.users
        console.log(userPostArray)
        console.log(username);
        //userPostArray is an Array of objects 
        //Each object has an object of user and post
        //User object has attributes of personal info
        //Post object is an Array of objects which then have attributes about each post
        //iterate through each user and check if the username entired matches
        //if true render Timeline 
        //Timeline will be Posts
        //Else alert sign up
    }

    render() {
        
        return (
            <div>
                <LoginForm loginForm={this.loginForm}/>
            </div>
        )
    }
}
