import { useEffect, useState } from "react";
import blogsData from "../../blog";
import "./Blog.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setBlogs(blogsData);
    }, 2000); // Simulating API delay
  }, []);

  return (
    <div className="blog-section">
      <h2 className="blog-title">Explore the Latest Topics</h2>
      <div className="blog-container">
        {blogs.length === 0 ? (
          <div className="loading-container">
            <div className="loading-card"></div>
            <div className="loading-card"></div>
            <div className="loading-card"></div>
          </div>
        ) : (
          blogs.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <img src={blog.image} alt={blog.title} className="blog-image" loading="lazy" />
              <div className="blog-content">
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                <a href={blog.link} target="_blank" rel="noopener noreferrer" className="read-more">
                  Read More →
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Blog;
