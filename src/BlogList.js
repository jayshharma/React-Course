import { Link } from "react-router-dom"

const BlogList = ({ blogs, title, handleDelete }) => {  //access props by destructuring

    // const blogs = props.blogs; //store specific properties and store them, however you can also destructure
    // const title = props.title;
    return (
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog) => ( //using map method to cycle through an array/list and output it
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}> 
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    </Link>
                    {/* <button onClick={() => handleDelete(blog.id)}>Delete Blog</button> */}
                </div> //each root element must have a key property when outputting a list, so react can keep track of each item.
            ))} 
        </div>
    )
}

export default BlogList
