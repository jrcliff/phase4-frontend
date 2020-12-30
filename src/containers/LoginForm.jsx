import React, { Component } from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'


export default function LoginForm(props) {

    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='blue' textAlign='center'>
             Log-in to your account
          </Header>
          <Form size='large' onChange={(event) => props.login(event.target.value)}>
            <Segment stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' />
              {/* <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
              /> */}
    
              <Button color='blue' fluid size='large'>
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href='#'>Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    )
}
