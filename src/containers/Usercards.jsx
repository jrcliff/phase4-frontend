import React, { Component } from "react";

export default class Usercards extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="container">
            <h4>
              <b>{this.props.user.username}</b>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}
