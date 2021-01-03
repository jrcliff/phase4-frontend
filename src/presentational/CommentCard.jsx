import React from "react";
import { Button, Comment, Form, Header } from "semantic-ui-react";

export default function CommentCard(props) {
    

  return (
    <div>
      <div class="ui comments">
        
        <div class="comment">
          {/* <div class="avatar">
            <img src="/images/avatar/small/matt.jpg" />
          </div> */}
          <div class="content">
            <a class="author">{props.comment.user.username}</a>
            <div class="text">{props.comment.body}</div>
            <div class="actions">
              <a class="">Reply</a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
