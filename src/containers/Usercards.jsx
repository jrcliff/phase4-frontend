import React, { Component } from "react";
import { Card, Icon, Image } from "semantic-ui-react";

export default class Usercards extends Component {
  render() {
    return (
      <div>
        <Card>
          <Image src="/images/avatar/large/matthew.png" wrapped ui={false} />
          <Card.Content>
            <Card.Header>{this.props.user.username}</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              22 Friends
            </a>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

