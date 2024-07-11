import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate()

  // state to store the fetched blog
  const [blogs, setBlogs] =useState([])

  // function to fetch blog using Axios
  const fetchBlog = async () => {
    try{ 
      const response = await axios.get("http://localhost:8000/user")
      setBlogs(response.data);
      console.log(response.data)
    } catch (error) {
      console.log('Error fetching blog');
    }
  }

  // call fetchBlog on component mount or rendered
  useEffect(() => {
    fetchBlog();
    }, [])

    


    // function to delete a blog  using Axios
    const deletePost = async (_id) => {
      try {
        await axios.delete('http://localhost:8000/user/' + _id);

        const postList = blogs.filter(data => data._id !== id);
        setBlogs(postList);

      } catch(error){
        console.error("Error deleting post", error)
      }
        
    }
  return (
    <div className='home'>
    {blogs.map((data)  => (
    <div className='blog-preview' key={data._id} onClick ={()=>navigate('blog-details/'+ data._id)}>
    <h2>{data.title}</h2>
      <p>Written by {data.author}</p>
    </div>
  ))}

  </div>
  )
}

export default Home