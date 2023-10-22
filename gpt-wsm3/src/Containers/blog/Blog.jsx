import React from 'react'
import './Blog.css'
import Article from '../../Components/article/Article'
import {blog01, blog02, blog03, blog04, blog05} from './imports'
const Blog = () => {
  return (
    <div>
      <div className='gpt3__blog' id='blog'>
        <div className='gpt3__blog-heading'>
          <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
        </div>
        <div className='gpt3__blog-container'>
          <div className='gpt3__blog-container_groupA'>
            <Article imgUrl={blog01} date='Sep 26, 2023' title = "GPT3 and OpenAI is the future. Let's explore how it is?"/>
          </div>

          <div className='gpt3__blog-container_groupB'>
            <Article imgUrl={blog02} date='Sep 26, 2023' title = "GPT3 and OpenAI is the future. Let's explore how it is?"/>
            <Article imgUrl={blog03} date='Sep 26, 2023' title = "GPT3 and OpenAI is the future. Let's explore how it is?"/>
            <Article imgUrl={blog04} date='Sep 26, 2023' title = "GPT3 and OpenAI is the future. Let's explore how it is?"/>
            <Article imgUrl={blog05} date='Sep 26, 2023' title = "GPT3 and OpenAI is the future. Let's explore how it is?"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog