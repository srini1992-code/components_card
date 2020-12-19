import React from "react";

const CommentDetail = (props) => {
  console.log(props);
  return (
    <div className="ui comments">
      <div className="comment">
        <a href="/" class="avatar">
          <img src={props.src} alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.author}
          </a>
          <div className="metadata">
            <span className="date">Today at {props.timeAgo}</span>
          </div>
          <div className="text">{props.text}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
