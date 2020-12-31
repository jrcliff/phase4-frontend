import React from "react";
import { Button, Comment, Form, Header } from "semantic-ui-react";

export default function CommentCard() {
    

  return (
    <div>
      <div class="ui comments">
        <h3 class="ui dividing header">Comments</h3>
        <div class="comment">
          {/* <div class="avatar">
            <img src="/images/avatar/small/matt.jpg" />
          </div> */}
          <div class="content">
            <a class="author">Matt</a>
            <div class="text">How artistic!</div>
            <div class="actions">
              <a class="">Reply</a>
            </div>
          </div>
        </div>
        <form class="ui reply form">
          <div class="field">
            <textarea rows="3"></textarea>
          </div>
          <button class="ui icon primary left labeled button">
            <i aria-hidden="true" class="edit icon"></i>Add Reply
          </button>
        </form>
      </div>
    </div>
  );
}
