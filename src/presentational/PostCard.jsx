import React, { Component } from "react";
import CommentCard from "./CommentCard";
import { Image as ImageComponent, Item } from 'semantic-ui-react'

export default function PostCard(props) {

    let renderPosts = () => {
        let postsArr = props.user.posts
        return postsArr.map((post) => <Item.Description> {post.body}</Item.Description>)
    }
  return (
    <div className="post">
      <Item.Group link>
        <Item>
          {/* <Item.Image size='tiny' src='/images/avatar/large/stevie.jpg' /> */}

          <Item.Content>
            <Item.Header>{props.user.user.username}</Item.Header>
            {renderPosts()}
          </Item.Content>
        </Item>
      </Item.Group>
      <CommentCard />
    </div>
  );
}
