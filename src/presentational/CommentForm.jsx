import React from 'react';

const CommentForm = (props) => {
    return (
        <div>
            <form onSubmit={() => props.addComment} className="ui reply form">
        <div className="field">
            <textarea rows="3"></textarea>
          </div>
          <button type='submit' className="ui icon primary left labeled button">
            <i aria-hidden="true" className="edit icon"></i>Add Reply
          </button>
        </form>
        </div>
    );
}

export default CommentForm;
