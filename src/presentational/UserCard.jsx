import React, { Component } from 'react'
import { Card, Icon, Image } from "semantic-ui-react";
import CreatePostForm from './CreatePostForm'

export default class UserCard extends Component {


    render() {
        return (
            <div className="userCard">
            <Card>
              <Image src={this.props.user.profile_pic} wrapped ui={false} />
              {/*  */}
              <Card.Content>
                <Card.Header>{this.props.user.username }</Card.Header>
                {/* */}
                <Card.Meta>
                  <span className="date">Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                  Games I'm Currently Playing: {this.props.user.current_games}
                  {/*  */}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  {this.props.user.frienders?.length }
                </a>
              </Card.Content>
            </Card>
            <CreatePostForm updateTimeline={this.props.updateTimeline} currentUser={this.props.user}/>
          </div>
        )
    }
}
