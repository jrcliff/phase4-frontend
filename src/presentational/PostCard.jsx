import React, { Component, useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import CommentForm from './CommentForm';
import { Image as ImageComponent, Item } from 'semantic-ui-react'

export default function PostCard(props) {

  const [comments, setComments] = useState([]);
  useEffect(() => {
    setComments(props.post.comments)
    
  }, []);
    // let renderPosts = () => {
    //     let postsArr = props.user.posts
    //     return postsArr.map((post) => <Item.Description> {post.body}</Item.Description>)
    // }
   
  return (
    <div className="post" >
      <Item.Group link >
        <Item>
          <Item.Image size='tiny' position='relative' src={props.user.profile_pic} />

          <Item.Content>
            <Item.Header>{props.post.user.username}</Item.Header>
            <Item.Description>{ props.post.body }</Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
      <h3 className="ui dividing header">Comments</h3>
      {comments ? comments.map(comment => <CommentCard comment={comment} key={comment.id} />) : null}
      <CommentForm comments={comments} setComments={setComments} updateTimeline={props.updateTimeline} post={props.post.id} currentUser={props.currentUser} />
    </div>
  );
}
