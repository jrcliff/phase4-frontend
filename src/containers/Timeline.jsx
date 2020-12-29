import React, { Component } from "react";
import { Image as ImageComponent, Item } from 'semantic-ui-react'


export default class Timeline extends Component {
  render() {
    return (
      <div>
        <Item.Group link>
    <Item>
      {/* <Item.Image size='tiny' src='/images/avatar/large/stevie.jpg' /> */}

      <Item.Content>
        <Item.Header>Names{console.log(this.props)}</Item.Header>
        <Item.Description>{this.props.post.body}</Item.Description>
      </Item.Content>
    </Item>
  </Item.Group>
      </div>
    );
  }
}
