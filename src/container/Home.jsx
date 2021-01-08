import React, { Component } from 'react'
import Timeline from './Timeline'
import Profile from './Profile'
import Nav from '../presentational/Nav'

export default class Home extends Component {

    state = {
        users: [],
        posts: [],
        current_user: [],
        username: ""
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

    updateTimeline = (post) => {
        let newPostsList = [...this.state.posts, post]
        let sortedList = newPostsList.sort((a, b) => a.id > b.id ? 1:-1)
        this.setState({posts: sortedList})
    }
    

    updateComments = (comment) => {
        
    }
    handleDelete = (event) => {
        console.log('this is your delete button')
        console.log(event)
        console.log(event.target.value)
      }


  


    render() {
        return (
            <div>
                <Nav logOut={this.props.logOut}/>
                <Profile updateTimeline={this.updateTimeline} user={this.props.user}/>
                <Timeline 
                deletePost={this.handleDelete}
                currentUser={this.props.user}
                users={this.state.users} addCommentHandler={this.handleAddComment} posts={this.state.posts} />
            </div>
        )
    }
}
