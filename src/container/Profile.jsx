import React, { Component } from 'react'
import UserCard from '../presentational/UserCard'
import Timeline from './Timeline'
export default class Profile extends Component {
    
        state = {
            users: []
            
        }
     
    componentDidMount(){
        fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(userArr => this.setState({users: userArr}))
    }

    // getPosts = () => {
    //     fetch('http://localhost:3000/posts')
    //     .then(res => res.json())
    //     .then(postsArr => this.setState({posts: postsArr}))
    // }
    render() {

        return (
            <div>
                {this.state.users.map(user => <UserCard user={user} />)}
                {/* <Timeline user={this.state.user}  /> */}
            </div>
        )
    }
}
