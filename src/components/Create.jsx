import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Create() {
   const navigate = useNavigate();

    const [blog, setBlogData] = useState({
      title:"",
      content:"",
      author:""
    })
// post handling 
    const handleChange = (e) =>  {
      const value = e.target.value;
       setBlogData(
          {...blog, [e.target.name]: value}
       )}
  
// handle submit event
      const handleSubmit = async(e) => {
        e.preventDefault();
        alert('message sent')

        const userData = {
          title: blog.title,
          content: blog.content,
          author: blog.author
        }

        try { 
          const res = await axios.post("http://localhost:8000/user", userData);
          const data = res.data;
          console.log(data);
          
        } catch(error) {
          console.log('error')
        }            
        
    }




  return (
    <div className='create'>
        <h2>Add a new Blog</h2>
        <form method='post' onSubmit={handleSubmit}>
            <label>Blog Title</label><br/>
            <input 
            type='text'
            name='title'
            required
            value={blog.title}
            onChange={handleChange} /><br/>

            <label>Blog Body</label><br/>

             <textarea  
            type='text'
            name='content'
            rows='10'
            cols='30'
            required
            value = {blog.content}
            onChange={handleChange}/>
        
            <br/>
            <label>Blog Author:</label><br/>
            <input
                  type='text' 
                  required
                  name='author'
                  value={blog.author}
                  onChange={handleChange}/> <br/>
            <button type='submit'>Add blog</button>
            <button onClick={() => navigate('/')}>Home</button>
        </form>

    </div>
  )
}

export default Create