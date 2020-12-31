import React, { Component } from 'react'
<<<<<<< HEAD:src/container/Profile.jsx
import UserCard from '../presentational/UserCard'

=======
import UserCard from '../presentationalComponents/UserCard'
import Timeline from './Timeline'
>>>>>>> Justin:src/containerComponents/Profile.jsx
export default class Profile extends Component {
    
        state = {
            user: {}
            
        }
     
    componentDidMount(){
        fetch('http://localhost:3000/users/9')
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
                <Timeline user={this.state.user}  />
            </div>
        )
    }
}
