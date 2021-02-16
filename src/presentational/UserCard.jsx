import React, { Component } from 'react'
import { Card, Icon, Image } from "semantic-ui-react";
import CreatePostForm from './CreatePostForm'

export default class UserCard extends Component {


    render() {
        return (
          <div className="userCard">
          {console.log(this.props.user)}
            <Card>
              <Image src={this.props.user.user.profile_pic} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{this.props.user.user.username }</Card.Header>
                <Card.Meta>
                  <span className="date">{this.props.user.user.date}</span>
                </Card.Meta>
                <Card.Description>
                  Games I'm Currently Playing: {this.props.user.user.current_games}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  { this.props.user.user.frienders?.length }
                </a>
              </Card.Content>
            </Card>
            <CreatePostForm updateTimeline={this.props.updateTimeline} posts={this.props.posts} currentUser={this.props.user.user}/>
          </div>
        )
    }
}
