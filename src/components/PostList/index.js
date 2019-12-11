import React from 'react'
import PostPart from '../PostPart'

const PostList = ({posts}) => {
  return (
    <div className="card-card section">
      { posts && posts.map(post => {
        return (
          <PostPart post={post} key={post.id} />
        )
      })}  
    </div>
  )
}

export default PostList