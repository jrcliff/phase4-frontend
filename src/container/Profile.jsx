import React, { Component } from 'react'
import UserCard from '../presentational/UserCard'
import Timeline from './Timeline'
export default class Profile extends Component {
    
        state = {
            user: {}
            
        }
     
    componentDidMount(){
        fetch('http://localhost:3000/users/1')
        .then(res => res.json())
        .then(user => this.setState({user: user}))
    }

    getPosts = () => {
        fetch('http://localhost:3000/posts')
        .then(res => res.json())
        .then(postsArr => this.setState({posts: postsArr}))
    }
    render() {

        return (
            <div>
                <UserCard user={this.state.user} />
                {/* <Timeline user={this.state.user}  /> */}
            </div>
        )
    }
}
