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
        // console.log(data)
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
        .then(post => this.props.updateTimeline(post))
       
        // .then(comment => this.setState({user: comment.user.username}))
        this.setState({post: ''})
      }
    
    
      handleInputChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

  render() {
    // const { post } = this.state

    return (
      <div className="postform">
      {/* {this.state.post} */}
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            
            <Form.Input
              placeholder='New Post'
              value={this.state.post}
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

