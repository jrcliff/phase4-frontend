import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

export default class CreatePostForm extends Component {
    constructor(props){
        super(props)
        this.state = {
          post: null,
          user: null
        }
      }
    //   state = {post: ''}
      
      handleSubmit = (event) => {
        event.preventDefault()   
        const data = this.state.post
        console.log(data)
        let reqObj = {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            body: data,
            user_id: this.props.currentUser.id
          })
        }
        fetch('http://localhost:3000/posts', reqObj)
        .then(res => res.json())
        .then(post => console.log(post))
        // .then(comment => this.setState({user: comment.user.username}))
    
      }
    
    
      handleInputChange = (event) => {
        console.log(event)
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({
          [event.target.name]: event.target.value
        })
      }

  render() {
    const { post } = this.state

    return (
      <div className="postform">
      {post}
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            
            <Form.Input
              placeholder='New Post'
              value={post}
              onChange={this.handleInputChange}
              name='post'
            />
            <Form.Button type='submit' content='Add Post' />
          </Form.Group>
        </Form>
        
      </div>
    )
  }
}

