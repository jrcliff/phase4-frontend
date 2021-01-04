import React from "react";
import { Button, Comment, Form, Header } from "semantic-ui-react";

export default function CommentCard(props) {
    

  return (
    <div>
      <div className="ui comments">
        
        <div className="comment">
          {/* <div className="avatar">
            <img src="/images/avatar/small/matt.jpg" />
          </div> */}
          <div className="content">
            <a className="author">{props.comment.user.username}</a>
            <div className="text">{props.comment.body}</div>
            <div className="actions">
              <a className="">Reply</a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
