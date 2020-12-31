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
  };

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
          <Form
            size="large"
            // onSubmit={(event) => this.props.loginForm(event.target.value)}
          >
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Username"
                onChange={(event) => this.props.loginForm(event.target.value)}
                // onSubmit={(event) => this.props.loginForm(event.target.value)}
              />
              {/* <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                  /> */}

              <Button color="blue" fluid size="large">
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
