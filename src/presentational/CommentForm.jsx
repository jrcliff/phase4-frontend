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
    console.log(data)
    let reqObj = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        body: data,
        user_id: 10,
        post_id: this.props.post
      })
    }
    fetch('http://localhost:3000/comments', reqObj)
    .then(res => res.json())
    .then(comment => console.log(comment))
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
    const {comment} = this.state
    return (
      <div>
      
        {comment}
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

