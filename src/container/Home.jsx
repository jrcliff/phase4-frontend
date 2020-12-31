import React, { Component } from 'react'
import Timeline from './Timeline'
import Profile from './Profile'

export default class Home extends Component {

    state = {
        users: []
    }

    componentDidMount(){
        let url = "http://localhost:3000/userposts"
        fetch(url)
        .then(resp => resp.json())
        .then(usersAndPosts => this.setState({
            users: usersAndPosts
        }))

        let posturl = "http://localhost:3000/comments"
    }

    render() {
        return (
            <div>
                <Timeline users={this.state.users}/>
                <Profile />
            </div>
        )
    }
}
