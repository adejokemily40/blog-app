import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios";



function BlogDetails() {
  const navigate = useNavigate()
  const id = useParams().id;
  console.log(id)

  const [post, setPost]=useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() =>{
  const fetchBlogById = async () => {

    const res = await axios.get(`http://localhost:8000/user/${id}`)
    setPost(res.data)
    setLoading(false);
  };
  fetchBlogById();
  }, [id]);

const deleteRequest = async() => {
  const res =await axios.delete(`http://localhost:8000/user/${id}`)
  .catch((err) => console.log((err)))
  const data = await res.data
  return data
}
 const handleDelete = () =>{
  deleteRequest()
  .then(() => navigate('/'))
 }

 const handleEdit = (e) => {
 navigate(`/posts/${id}`)
 }

  return (

    <div className="blog-details">
        {
        loading ? 'Loading...' : 
        <>
        <h2>{post.title}</h2>
        <p>Written by {post.author}</p>
        <div>{post.content}</div> 
        <button onClick={handleDelete}>Delete</button> 
        <button onClick={handleEdit}>Edit</button>
        </>
        
      }


        
      </div> 
 )
    
  }

      
      


export default BlogDetails





//{data && (
   // <article>
     //   <h2>{ data.title}</h2>
      //  <p>Written by {data.author}</p>
       // <div>{data.content}</div>
    //</article>
//)}