import React, { Component } from "react";
import {Link} from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <div>
        <div class="topnav">
          <a class="active" >
            Gamerbook
          </a>
          {/* <a href="#news">News</a>
          <a href="#contact">Contact</a> */}
        <Link to="/">
          <a onClick={() => this.props.logOut()} href="#about">Log-Out</a>
          </Link>
        </div>
      </div>
    );
  }
}
