import React from 'react';

const CommentForm = (props) => {
    return (
        <div>
            <form onSubmit={() => props.addComment} class="ui reply form">
        <div class="field">
            <textarea rows="3"></textarea>
          </div>
          <button type='submit' class="ui icon primary left labeled button">
            <i aria-hidden="true" class="edit icon"></i>Add Reply
          </button>
        </form>
        </div>
    );
}

export default CommentForm;
