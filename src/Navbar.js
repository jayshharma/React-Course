import { Link } from "react-router-dom" //link component handles content changes in the browser instead of sending server requests

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>React-Blog</h1>
            <div className="links">
                <Link to="/">Home</Link> 
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    )
}

//links handle routing in the browser and intercepts server requests

export default Navbar
