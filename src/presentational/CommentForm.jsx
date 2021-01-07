import React, { Component } from 'react';

class CommentForm extends Component {

  constructor(props){
    super(props)
    this.state = {
      comment: null,
      user: null
    }
  }
  state = {comment: ''}
  
  handleSubmit = (event) => {
    event.preventDefault()   
    const data = this.state.comment

    let reqObj = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        body: data,
        user_id: this.props.currentUser.id,
        post_id: this.props.post
      })
    }
    fetch('http://localhost:3000/comments', reqObj)
    .then(res => res.json())
    .then(comment => this.props.setComments([...this.props.comments, comment]))
    // .then(comment => this.setState({user: comment.user.username}))
    
  }


  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
 
  render() {
   
    return (
      <div>
      
  
        <div>
            <form onSubmit={this.handleSubmit} className="ui reply form">
        <div className="field">
            <textarea type='text' onChange={this.handleInputChange}placeholder='Add Comment' name='comment' rows="3"></textarea>
          </div>
          <button type='submit' className="ui icon primary left labeled button">
            <i aria-hidden="true" className="edit icon"></i>Add Reply
          </button>
        </form>
        </div>
      </div>
    );
  }
}

export default CommentForm;

