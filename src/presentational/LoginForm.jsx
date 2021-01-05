import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";

export default class loginForm extends Component {
  state = {
    username: "",
    current_user: [],
  };

  submitForm = (event) => {
    const username = { username: this.state.username };
    console.log(username);
  };

  submitCallback() {
    let username = this.state.username;
    let reqObj = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ username }),
    };
    fetch("http://localhost:3000/login", reqObj)
      .then((res) => res.json())
      .then((user) =>
        {this.setState({
          current_user: user,
        }); this.props.setUser(user)}
      );
  }

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="blue" textAlign="center">
            Welcome to Gamerbook!
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Username"
                onChange={(event) =>
                  this.setState({ username: event.target.value })
                }
              />
              {/* <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                  /> */}

              <Button
                onClick={() => this.submitCallback()}
                color="blue"
                fluid
                size="large"
              >
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href="#">Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}
