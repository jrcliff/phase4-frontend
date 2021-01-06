import React, { Component } from "react";
import PostCard from "../presentational/PostCard";
import CreatePostForm from '../presentational/CreatePostForm'


export default class Timeline extends Component {


    // renderUsers = () => {
    //     let users = this.props.users
    //     console.log(users);
    //     return this.props.users.map((user, index) => <PostCard user={user} key={index}/>)
    // }

  render() {
    return (
      <div className="timeline">
        {/* <CreatePostForm currentUser={this.props.currentUser}/> */}
        {this.props.posts.map((post, index) => <PostCard user={post.user} post={post} key={index} currentUser={this.props.currentUser}/>)}
      </div>
    );
  }
}
