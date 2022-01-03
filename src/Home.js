import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null); //useState hook is used for creating reactive values. ie. data that is being changed
    const [isPending, setIsPending] = useState(true);

//     const handleDelete = (id) => {
//     const newBlogs = blogs.filter(blog => blog.id !== id); //does not change original data, instead returns a new updated array.
//     setBlogs(newBlogs)
// }

    useEffect(() => { //useEffect used to fire a function every render
        fetch('http://localhost:8000/blogs') //fetch request for data
            .then(res => {
                return res.json()
            })
            .then((data) => {
                console.log(data)
                setBlogs(data)
                setIsPending(false)
            });
    }, []); //useEffect dependencies used to render a function when a specific dependency changes

    return (
        <div className="home"> 
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"></BlogList>} 
        </div> 
    );
}

//prop created to pass data from a parent component to a child component (blogs data > bloglist component)
//filter method used to filter through array. If a piece of data does not satisfy the given condition, it is filtered out of the array and a new updated array is rendered to the DOM.

export default Home
