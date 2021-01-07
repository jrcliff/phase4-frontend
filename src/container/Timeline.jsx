import React, { Component } from "react";
import PostCard from "../presentational/PostCard";
import CreatePostForm from '../presentational/CreatePostForm'


export default class Timeline extends Component {


  render() {
    return (
      <div className="timeline">
        {/* <CreatePostForm currentUser={this.props.currentUser}/> */}
        {this.props.posts.reverse().map((post, index) => <PostCard updateTimeline={this.props.updateTimeline} user={post.user} post={post} key={index} currentUser={this.props.currentUser}/>)}
      </div>
    );
  }
}
