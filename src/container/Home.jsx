import React, { Component } from 'react'
import Timeline from './Timeline'
import Profile from './Profile'
import Nav from '../presentational/Nav'
import LoginPage from './LoginPage'

export default class Home extends Component {

    state = {
        users: [],
        posts: [],
        current_user: JSON.parse(sessionStorage.getItem('currentUser')) || null,
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
    handleDelete = (post) => {
        
        console.log('this is your delete button')
        let deletedPost = this.state.posts.filter(thePost => thePost !== post)
        
        fetch(`http://localhost:3000/posts/${post.id}`, {method: 'DELETE'})
        this.setState({posts: deletedPost})

      }


  


    render() {
        return (
            <div>
                <Nav logOut={this.props.logOut}/>
                <Profile updateTimeline={this.updateTimeline} user={this.state.current_user}/>
                <Timeline 
                handleDelete={this.handleDelete}
                currentUser={this.state.current_user}
                users={this.state.users} addCommentHandler={this.handleAddComment} posts={this.state.posts} />
            </div>
        )
    }
}
