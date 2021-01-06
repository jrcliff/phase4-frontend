import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react'

class RegistrationForm extends Component {
    constructor(props){
        super(props)
        this.state = {
          username: null
        }
      }
      state = {comment: ''}
      
      handleSubmit = (event) => {
        event.preventDefault()   
        const data = this.state.userame
        console.log(data)
        let reqObj = {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            username: data,
          })
        }
        fetch('http://localhost:3000/users', reqObj)
        .then(res => res.json())
        .then(user => console.log(user))
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

        return (
            <Form>
                <Form.Field inline>
                <label>username</label>
                <Input placeholder='username' name={this.state.username} />
                </Form.Field>
            </Form>
        );
    }
}

export default RegistrationForm;
