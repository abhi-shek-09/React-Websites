import React from 'react'
import './Blog.css'
import Article from '../../Components/article/Article'
const Blog = () => {
  return (
    <div>
      <div className='gpt3__blog' id='blog'>
        <div className='gpt3__blog-heading'>
          <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
        </div>
        <div className='gpt3__blog-container'>
          <div className='gpt3__blog-container_groupA'>
            <Article/>
          </div>

          <div className='gpt3__blog-container_groupB'>
            <Article/>
            <Article/>
            <Article/>
            <Article/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog