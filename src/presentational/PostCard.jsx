import React, { Component } from "react";
import CommentCard from "./CommentCard";
import CommentForm from './CommentForm';
import { Image as ImageComponent, Item } from 'semantic-ui-react'

export default function PostCard(props) {

    // let renderPosts = () => {
    //     let postsArr = props.user.posts
    //     return postsArr.map((post) => <Item.Description> {post.body}</Item.Description>)
    // }
    let handleAddComment = () => {
      
      console.log('hello') 
    }
  return (
    <div className="post">
      <Item.Group link>
        <Item>
          {/* <Item.Image size='tiny' src='/images/avatar/large/stevie.jpg' /> */}

          <Item.Content>
            <Item.Header>{props.post.user.username}</Item.Header>
            <Item.Description>{ props.post.body }</Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
      <h3 className="ui dividing header">Comments</h3>
      {props.post.comments.map(comment => <CommentCard comment={comment} key={comment.id} />)}
      <CommentForm addComment={handleAddComment} />
    </div>
  );
}
