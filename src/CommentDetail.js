import React from 'react'

const CommentDetail = props => {
  const { authorAvatar, authorName, date, text } = props

  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={authorAvatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {authorName}
        </a>
        <div className="metadata">
          <span className="date">{date}</span>
        </div>
        <div className="text">{text}</div>
      </div>
    </div>
  )
}

export default CommentDetail
