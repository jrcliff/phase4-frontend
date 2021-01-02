import React, { Component } from "react";
import PostCard from "../presentational/PostCard";


export default class Timeline extends Component {

    // renderUsers = () => {
    //     let users = this.props.users
    //     console.log(users);
    //     return this.props.users.map((user, index) => <PostCard user={user} key={index}/>)
    // }

  render() {
    return (
      <div>
        {/* {console.log(this.props.posts)} */}
        {this.props.posts.map((post, index) => <PostCard user={post.user} post={post} key={index}/>)}
      </div>
    );
  }
}
