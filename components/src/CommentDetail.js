import React from 'react'
import faker from 'faker';

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={props.avatar} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.firstName}
        </a>
        <div className="metadata">
          <span className="date">
            Today at 4:10PM
        </span>
        </div>
        <div className="text">{props.comment}</div>
      </div>
    </div>
  )
}

export default CommentDetail
