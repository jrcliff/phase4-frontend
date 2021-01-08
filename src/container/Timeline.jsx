import React, { Component } from "react";
import PostCard from "../presentational/PostCard";
import CreatePostForm from '../presentational/CreatePostForm'


export default class Timeline extends Component {
  
  render() {
    const sortPosts = (arr) => {
      let sortedArr = arr.sort((a, b) => a.id > b.id)
      return sortedArr
      console.log(sortedArr)
  
    }
    return (
      <div className="timeline">
        {/* <CreatePostForm currentUser={this.props.currentUser}/> */}
        {this.props.posts.sort((a, b) => a.key < b.key ? 1:-1).map((post, index) => <PostCard handleDelete={this.props.handleDelete} updateTimeline={this.props.updateTimeline} user={post.user} post={post} key={index} currentUser={this.props.currentUser}/>)}
      </div>
    );
  }
}
