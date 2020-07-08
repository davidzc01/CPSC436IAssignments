import React from 'react'

const PostItem = ({ onSelect, text, onStar, starStatus, onView, onEdit, onDelete }) => (
  <li>
    <input type="checkbox" onClick={onSelect}/>
    {text}
    <div className="post-item-spacer" style={{flex: 1, display: 'inline'}}/>
    <button onClick={onStar}> {starStatus}</button>
    <button onClick={onView}>View</button>
    <button onClick={onEdit}>Edit</button>
    <button onClick={onDelete}>Delete</button>
  </li>
)

export default PostItem