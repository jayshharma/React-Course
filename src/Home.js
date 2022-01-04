import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
//     const handleDelete = (id) => {
//     const newBlogs = blogs.filter(blog => blog.id !== id); //does not change original data, instead returns a new updated array.
//     setBlogs(newBlogs)
// }
    const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home"> 
            {error && <div> {error} </div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"></BlogList>} 
        </div> 
    );
}

//prop created to pass data from a parent component to a child component (blogs data > bloglist component)
//filter method used to filter through array. If a piece of data does not satisfy the given condition, it is filtered out of the array and a new updated array is rendered to the DOM.

export default Home
