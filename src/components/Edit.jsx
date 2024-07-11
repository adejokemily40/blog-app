import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {
  const navigate = useNavigate()
  const [blog, setBlog] = useState('');
  const [inputs, setInputs] = useState({})
  const id = useParams().id;
  console.log(id)

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value,
    }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try { 
      const res = await axios.patch(`http://localhost:8000/user/${id}`, {
        title: inputs.title,
        content: inputs.content,
        author: inputs.author,
      });
      const data = res.data; 
      console.log(data);
      
    } catch(error) {
      console.log('error')
    }
}

  useEffect(() => {
   const fetchPost = async() => {
    let response = await axios.get(`http://localhost:8000/user/${id}`) 
    const data = response.data
    setBlog(response.data);
    setInputs({
      title: data.title,
      content: data.content,
      author: data.author,
    })
    };
    fetchPost()
  }, [id]);
  console.log(blog)

  return (
    <div className='edit'>
        <h2>Update a Blog</h2>
        <form onSubmit={handleSubmit}>
            <label>Blog Title</label><br/>
            <input 
            type='text'
            name='title'
            value={inputs.title}
            onChange={handleChange}
            required
             /><br/>

            <label>Update Post</label><br/>

             <textarea  
            type='text'
            name='content'
            rows='10'
            cols='30'
            required
            value = {inputs.content}
            onChange={handleChange}/>
        
            <br/>
            <label>Blog Author:</label><br/>
            <input
                  type='text' 
                  required
                  name='author'
                  value={inputs.author}
                  onChange={handleChange}
                
                  /> <br/>
            <button type='submit'>Update</button>
            <button onClick={() => navigate('/')}>Home</button>
        </form>

    </div>
  )
}

export default Edit