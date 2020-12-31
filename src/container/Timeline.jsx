import React, { Component } from "react";
import PostCard from "../presentational/PostCard";


export default class Timeline extends Component {
    renderUsers = () => {
        let users = this.props.users
        return users.map((user, index) => <PostCard user={user} key={index}/>)
    }

  render() {
    return (
      <div>
        {this.renderUsers()}
      </div>
    );
  }
}
