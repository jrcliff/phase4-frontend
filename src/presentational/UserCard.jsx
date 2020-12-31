import React, { Component } from 'react'
import { Card, Icon, Image } from "semantic-ui-react";

export default class UserCard extends Component {
    render() {
        return (
            <div>
            <Card>
              <Image src={this.props.user.profile_pic} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{this.props.user.username}</Card.Header>
                <Card.Meta>
                  <span className="date">Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                  Games I'm Currently Playing: {this.props.user.current_games}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  {console.log(this.props.user.friendships)}
                </a>
              </Card.Content>
            </Card>
          </div>
        )
    }
}
