import React from 'react'

const PostItem = ({ text, starPost, starStatus, showDetail, deletePost }) => (
  <li>
    {text}
    <button onClick={starPost}> {starStatus}</button>
    <button onClick={showDetail}>More</button>
    <button onClick={deletePost}>Delete</button>
  </li>
)

export default PostItem