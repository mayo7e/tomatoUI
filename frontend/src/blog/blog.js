

import React from 'react'

import BlogMain from "./blogMain.js"
import BlogData from "./blogData.js"


const Blog = () => {
    
    const [blogPosts, setBlogPosts] = React.useState(BlogData.blogs)

   
    
   
        const eachPost = blogPosts.map(blogPost =>
            <BlogMain
            key={blogPost.user_id}
            blogPost = {blogPost}
            
            />
            )
       
    
  return (
    <div>
     
      {eachPost}
     
    </div>
  )
}

export default Blog