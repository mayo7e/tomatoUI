



import React from 'react'
import blogData from "./blogData.js"

import {useParams }from "react-router-dom"

const BlogPost = () => {
  const {postId} = useParams()
  const eachBlogPost =  blogData.blogs.find(each => each.post_id === postId)
      console.log(eachBlogPost)
  return (
    <div className='blogM'>
        <div className='blog_post_grp' >
            <h2>{eachBlogPost.post_title}</h2>
        </div>
    </div>
  )
}

export default BlogPost
