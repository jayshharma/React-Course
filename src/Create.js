import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"; //redirect a user after they submit a form using the useHistory hook

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario')
    const [isPending, setIsPending] = useState(false) //state for loading
    const history = useHistory();

    const handleSubmit = (e) => { //function that runs when submitting the form
        e.preventDefault(); //a method that prevents the page from refreshing
        const blog = { title, body, author }; //creates an object containing the title, body and author of the blog
        setIsPending(true);

        fetch('http://localhost:8000/blogs/', { //post request to the json database to add new blog. JSON server adds id property automatically.
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false); 
            // history.go(-1);
            history.push('/') //pushes user to homepage upon submitting form
        })
    }

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                type="text" 
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                required
                value={body} 
                onChange={(e) => setBody(e.target.value)}
                ></textarea>   
                <label>Blog Author:</label>
                <select 
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                { isPending && <button>Adding Blog...</button>}
            </form>
        </div>
    )
}

export default Create
