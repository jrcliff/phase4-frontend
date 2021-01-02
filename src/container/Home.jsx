import React, { Component } from 'react'
import Timeline from './Timeline'
import Profile from './Profile'

export default class Home extends Component {

    state = {
        users: [],
        posts: []
    }

    componentDidMount(){
        let url = "http://localhost:3000/users"
        fetch(url)
        .then(resp => resp.json())
        .then(users => this.setState({
            users: users
        }))

        let postsUrl = 'http://localhost:3000/posts'
        fetch(postsUrl)
        .then(res => res.json())
        .then(postArr => this.setState({posts: postArr}))
    }


    render() {
        return (
            <div>
                <Profile />
                <Timeline users={this.state.users} addCommentHandler={this.handleAddComment} posts={this.state.posts}/>
            </div>
        )
    }
}
