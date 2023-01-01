import React from 'react'
import PostImg from "../assets/stack_trace.png"
import{Link} from "react-router-dom"



const blogMain = (props) => {
  return (
        <div className='blogM'>
        <div className='blog_post_grp' >

            <Link to={`${props.blogPost.post_id}`}> <div className='blog_post_info'>
                <h1 className='blog_header' >{props.blogPost.post_title}</h1>

                <div className='blog_creator_info' >
                    <h3 className='blog_info_post-date'>{props.blogPost.post_created_date}</h3>
                    <div className='blog_authors'>
                        <span>by <h2 className="authors_name" >mayowaA</h2></span>
                    </div>
                </div>

                <p>
                    {props.blogPost.post}
                </p>

            </div></Link>

            <div  className='blog_post_img'>
                        <img alt=" describing the posts topic" src={PostImg} />
            </div>
        </div>
            
        </div>
  )
}

export default blogMain
