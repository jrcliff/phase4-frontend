import React, { Component } from 'react'
import RenderHome from './RenderHome'
import RenderTimeline from './RenderTimeline'
import LoginForm from '../containers/LoginForm'


export default class Home extends Component {
    state = {
        users: [],
        posts: []
    }

    componentDidMount(){
        // let urll = "http://localhost:3000/users"
        // fetch(urll)
        // .then(response => response.json())
        // .then(usersArr => this.setState({
        //     users: usersArr
        // }))

        // let posturl = "http://localhost:3000/posts"
        // fetch(posturl)
        // .then(resp => resp.json())
        // .then(postArr => this.setState({
        //     posts: postArr
        // }))

        let url = "http://localhost:3000/userposts"
        fetch(url)
        .then(resp => resp.json())
        .then(usersArr => this.setState({
            users: usersArr
        }))
    }

    loginForm = (username) => {
        
    }


    render() {
        return (
            <div>
                <RenderHome />
                <RenderTimeline users={this.state.users}/>
                <LoginForm login={this.loginForm}/>
            </div>
        )
    }
}
