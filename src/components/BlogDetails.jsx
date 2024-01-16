import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null)
  const navigate = useNavigate();

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      navigate('/');
    }) 
  }

  useEffect(() =>{
    fetch('http://localhost:8000/blogs/' + id)
      .then(res => res.json())
      .then(data =>setBlog(data) )
  }, [id])

  return (
    <div className="blog-details">
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;