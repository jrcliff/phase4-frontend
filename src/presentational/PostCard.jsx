import React, { Component, useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import CommentForm from './CommentForm';
import { Image as ImageComponent, Item } from 'semantic-ui-react'
import { Button, Icon } from 'semantic-ui-react'
export default function PostCard(props) {

  const [comments, setComments] = useState([]);
  useEffect(() => {
    console.log(props.post.comments);
    setComments(props.post.comments)
    
  }, []);
 
  return (
    
    <div className="post" >
      <Item.Group link >
        <Item>
          <Item.Image size='tiny' position='relative' src={props.user.profile_pic} />

          <Item.Content>
            <Item.Header>{props.post.user.username}</Item.Header>
            <Item.Description>{ props.post.body }</Item.Description>
          </Item.Content>
          <Button onClick={() => props.handleDelete(props.post)} animated>
            <Button.Content visible>Delete</Button.Content>
            <Button.Content hidden>
                <Icon name='trash' />
            </Button.Content>
            </Button>
        </Item>
      </Item.Group>
      <h3 className="ui dividing header">Comments</h3>
      {comments ? comments.map(comment => <CommentCard comment={comment} key={comment.id} />) : null}
      <CommentForm comments={comments} setComments={setComments} updateTimeline={props.updateTimeline} post={props.post.id} currentUser={props.currentUser} />
    </div>
  );
}
